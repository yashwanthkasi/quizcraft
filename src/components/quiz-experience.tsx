'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Quiz, Question, QuizState } from '@/types/quiz';
import { storage } from '@/lib/storage';
import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Timer } from '@/components/ui/timer';

export function QuizExperience() {
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentState, setCurrentState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    isComplete: false,
    submittedQuestions: {},
  });

  useEffect(() => {
    const activeQuiz = storage.getActiveQuiz();
    const savedState = storage.getQuizState();

    if (!activeQuiz) {
      router.push('/');
      return;
    }

    setQuiz(activeQuiz);
    if (savedState) {
      setCurrentState(savedState);
    }
  }, [router]);

  const handleAnswer = useCallback((selectedOptions: string[]) => {
    if (!quiz) return;

    setCurrentState(prev => {
      const newState = {
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
      storage.saveQuizState(newState);
      return newState;
    });
  }, [quiz]);

  const navigate = useCallback((direction: 'next' | 'prev') => {
    if (!quiz) return;

    setCurrentState(prev => {
      const newIndex = direction === 'next'
        ? prev.currentQuestionIndex + 1
        : prev.currentQuestionIndex - 1;

      const newState = {
        ...prev,
        currentQuestionIndex: newIndex
      };
      storage.saveQuizState(newState);
      return newState;
    });
  }, [quiz]);

  const handleSubmit = useCallback(() => {
    if (!quiz) return;

    setCurrentState(prev => {
      const newState = { ...prev, isComplete: true };
      storage.saveQuizState(newState);
      return newState;
    });
    router.push('/results');
  }, [quiz, router]);

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return null;
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
                      const newAnswers = currentAnswer.includes(option)
                        ? currentAnswer.filter(ans => ans !== option)
                        : [...currentAnswer, option];
                      handleAnswer(newAnswers);
                    } else {
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
                          ? 'bg-primary-100 border-2 border-primary-500'
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
                          ? 'border-primary-500 bg-primary-500'
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
              
              {currentAnswer.length > 0 && (
                isLastQuestion ? (
                  currentState.submittedQuestions[currentQuestion.id] ? (
                    <Button onClick={handleSubmit}>
                      Finish Quiz
                    </Button>
                  ) : (
                    <Button onClick={() => handleAnswer(currentAnswer)}>
                      Submit Answer
                    </Button>
                  )
                ) : (
                  <Button 
                    onClick={() => {
                      if (!currentState.submittedQuestions[currentQuestion.id]) {
                        handleAnswer(currentAnswer);
                      } else {
                        navigate('next');
                      }
                    }}
                  >
                    {currentState.submittedQuestions[currentQuestion.id] ? 'Next Question' : 'Submit & Next'}
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Button>
                )
              )}
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}