'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Quiz, Question, QuizState } from '@/types/quiz';
import { getQuizById } from '@/lib/supabase';
import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Timer } from '@/components/ui/timer';

interface QuizExperienceProps {
  quizId: string;
}

export function QuizExperience({ quizId }: QuizExperienceProps) {
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentState, setCurrentState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    isComplete: false,
    submittedQuestions: {},
  });

  useEffect(() => {
    let mounted = true;

    async function loadQuiz() {
      try {
        setLoading(true);
        setError(null);
        const data = await getQuizById(quizId);
        if (mounted) {
          setQuiz(data);
          // Initialize timer state when quiz loads
          setCurrentState(prev => ({
            ...prev,
            startTime: Date.now(),
            durationInMinutes: data.settings.timeLimit
          }));
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to load quiz');
          console.error('Error loading quiz:', err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadQuiz();

    return () => {
      mounted = false;
    };
  }, [quizId]);

  const handleAnswer = useCallback((selectedOptions: string[]) => {
    if (!quiz) return;

    setCurrentState(prev => {
      return {
        ...prev,
        answers: {
          ...prev.answers,
          [quiz.questions[prev.currentQuestionIndex].id]: selectedOptions
        },
        submittedQuestions: {
          ...prev.submittedQuestions,
          [quiz.questions[prev.currentQuestionIndex].id]: true
        }
      };
    });
  }, [quiz]);

  const navigate = useCallback((direction: 'next' | 'prev') => {
    if (!quiz) return;

    setCurrentState(prev => {
      const newIndex = direction === 'next'
        ? prev.currentQuestionIndex + 1
        : prev.currentQuestionIndex - 1;

      return {
        ...prev,
        currentQuestionIndex: newIndex
      };
    });
  }, [quiz]);

  const calculateScore = useCallback(() => {
    if (!quiz) return 0;
    const totalQuestions = quiz.questions.length;
    const correctAnswers = quiz.questions.reduce((count, question) => {
      const userAnswer = (currentState.answers[question.id] || []).sort();
      const correctAnswer = [...question.correctAnswer].sort();
      const isCorrect = userAnswer.length === correctAnswer.length &&
        userAnswer.every((ans, index) => ans === correctAnswer[index]);
      return isCorrect ? count + 1 : count;
    }, 0);
    return Math.round((correctAnswers / totalQuestions) * 100);
  }, [quiz, currentState.answers]);

  const handleSubmit = useCallback(() => {
    if (!quiz) return;

    const score = calculateScore();
    // Convert answers to a URL-safe string
    const answersStr = encodeURIComponent(JSON.stringify(currentState.answers));
    router.push(`/results?id=${quiz.id}&score=${score}&answers=${answersStr}`);
  }, [quiz, router, calculateScore, currentState.answers]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-lg text-gray-500">Loading quiz...</p>
      </div>
    );
  }

  if (error || !quiz || !quiz.questions || quiz.questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <p className="text-lg text-red-500">{error || 'Failed to load quiz'}</p>
        <Button onClick={() => router.push('/')}>
          Return to Home
        </Button>
      </div>
    );
  }

  // Ensure currentQuestionIndex is within bounds
  if (currentState.currentQuestionIndex >= quiz.questions.length) {
    setCurrentState(prev => ({
      ...prev,
      currentQuestionIndex: quiz.questions.length - 1
    }));
    return null;
  }

  const currentQuestion = quiz.questions[currentState.currentQuestionIndex];
  // Safety check for currentQuestion
  if (!currentQuestion || !currentQuestion.id) {
    return null;
  }

  const currentAnswer = currentState.answers[currentQuestion.id] || [];
  const isLastQuestion = currentState.currentQuestionIndex === quiz.questions.length - 1;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Progress Bar and Timer */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <ProgressBar
            current={currentState.currentQuestionIndex + 1}
            total={quiz.questions.length}
          />
          {currentState.durationInMinutes && (
            <Timer
              durationInMinutes={currentState.durationInMinutes}
              onTimeExpired={handleSubmit}
              startTime={currentState.startTime}
            />
          )}
        </div>
        <p className="text-sm text-gray-500 text-center">
          Question {currentState.currentQuestionIndex + 1} of {quiz.questions.length}
        </p>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <h2 className="text-xl font-semibold">
                {currentQuestion.question}
              </h2>
              {currentQuestion.correctAnswer.length > 1 && !currentState.submittedQuestions[currentQuestion.id] && (
                <div className="mt-2 space-y-1">
                  <p className="text-sm font-medium text-primary-600">
                    Multiple Choice Question
                  </p>
                  <p className="text-sm text-gray-600">
                    Select your options and click the Submit button when you're ready
                  </p>
                </div>
              )}
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentQuestion.options.map((option) => {
                  const isMultipleChoice = currentQuestion.correctAnswer.length > 1;
                  const isSubmitted = currentState.submittedQuestions[currentQuestion.id];
                  const isCorrectOption = currentQuestion.correctAnswer.includes(option);
                  const handleClick = () => {
                    if (isSubmitted) return;
                    if (isMultipleChoice) {
                      // For multiple choice, just update the selected options without submitting
                      const newAnswers = currentAnswer.includes(option)
                        ? currentAnswer.filter(ans => ans !== option)
                        : [...currentAnswer, option];
                      setCurrentState(prev => ({
                        ...prev,
                        answers: {
                          ...prev.answers,
                          [currentQuestion.id]: newAnswers
                        }
                      }));
                    } else {
                      // For single choice, submit immediately
                      handleAnswer([option]);
                    }
                  };

                  return (
                    <button
                      key={option}
                      onClick={handleClick}
                      disabled={isSubmitted}
                      className={`w-full p-4 text-left rounded-lg transition-all flex items-center ${
                        isSubmitted
                          ? isCorrectOption
                            ? 'bg-green-100 border-2 border-green-500'
                            : currentAnswer.includes(option)
                            ? 'bg-red-100 border-2 border-red-500'
                            : 'bg-gray-50 border-2 border-transparent opacity-70'
                          : currentAnswer.includes(option)
                          ? isMultipleChoice
                            ? 'bg-gray-100 border-2 border-gray-300'  // Just show as selected for multiple choice
                            : 'bg-primary-100 border-2 border-primary-500'  // Show primary color for single choice
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <div className={`mr-3 w-5 h-5 flex items-center justify-center border-2 rounded ${
                        isMultipleChoice ? 'rounded' : 'rounded-full'
                      } ${
                        isSubmitted
                          ? isCorrectOption
                            ? 'border-green-500 bg-green-500'
                            : currentAnswer.includes(option)
                            ? 'border-red-500 bg-red-500'
                            : 'border-gray-300'
                          : currentAnswer.includes(option)
                          ? isMultipleChoice
                            ? 'border-gray-500 bg-gray-500'  // Just show as selected for multiple choice
                            : 'border-primary-500 bg-primary-500'  // Show primary color for single choice
                          : 'border-gray-300'
                      }`}>
                        {currentAnswer.includes(option) && !isSubmitted && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {isSubmitted && (isCorrectOption || currentAnswer.includes(option)) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            {isCorrectOption ? (
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            ) : (
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            )}
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <span>{option}</span>
                        {isSubmitted && (
                          <span className={`ml-2 text-sm ${
                            isCorrectOption ? 'text-green-600' : currentAnswer.includes(option) ? 'text-red-600' : ''
                          }`}>
                            {isCorrectOption && '(Correct Answer)'}
                            {!isCorrectOption && currentAnswer.includes(option) && '(Incorrect)'}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {/* Feedback Section */}
              {currentState.submittedQuestions[currentQuestion.id] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  {/* Only show feedback for single-choice or submitted multiple-choice questions */}
                  {(!(currentQuestion.correctAnswer.length > 1) || currentState.submittedQuestions[currentQuestion.id]) && (
                    <>
                      <div className="border-l-4 border-primary-500 pl-4 py-1 mb-4">
                        <div className="font-medium text-lg mb-1">
                          {currentAnswer.sort().join(',') === currentQuestion.correctAnswer.sort().join(',') ? (
                            <span className="text-green-600">✅ Correct!</span>
                          ) : (
                            <span className="text-red-600">❌ Incorrect</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Explanation</h3>
                        <p className="text-gray-600">
                          {currentQuestion.explanation}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                onClick={() => navigate('prev')}
                disabled={currentState.currentQuestionIndex === 0}
                variant="outline"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {/* For multiple choice questions, show submit button in the middle */}
              {currentQuestion.correctAnswer.length > 1 && currentAnswer.length > 0 && !currentState.submittedQuestions[currentQuestion.id] && (
                <Button
                  onClick={() => handleAnswer(currentAnswer)}
                  variant="default"
                >
                  Submit Answer
                </Button>
              )}

              {/* Navigation and single-choice submission */}
              {(() => {
                const isMultipleChoice = currentQuestion.correctAnswer.length > 1;
                const isSubmitted = currentState.submittedQuestions[currentQuestion.id];

                // For multiple choice questions that are already submitted
                if (isMultipleChoice && isSubmitted) {
                  return isLastQuestion ? (
                    <Button onClick={handleSubmit}>
                      Finish Quiz
                    </Button>
                  ) : (
                    <Button onClick={() => navigate('next')}>
                      Next Question
                      <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </Button>
                  );
                }

                // For single choice questions
                if (!isMultipleChoice && currentAnswer.length > 0) {
                  if (isSubmitted) {
                    return isLastQuestion ? (
                      <Button onClick={handleSubmit}>
                        Finish Quiz
                      </Button>
                    ) : (
                      <Button onClick={() => navigate('next')}>
                        Next Question
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                      </Button>
                    );
                  } else {
                    return (
                      <Button onClick={() => handleAnswer(currentAnswer)}>
                        {isLastQuestion ? 'Submit Answer' : 'Submit & Next'}
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                      </Button>
                    );
                  }
                }

                // Show next button if nothing else
                if (isSubmitted) {
                  return (
                    <Button
                      onClick={() => navigate('next')}
                      disabled={currentState.currentQuestionIndex === quiz.questions.length - 1}
                    >
                      Next Question
                      <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </Button>
                  );
                }

                return null;
              })()}
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}