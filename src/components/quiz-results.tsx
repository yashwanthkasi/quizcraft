'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Confetti } from '@/components/ui/confetti';
import { Quiz } from '@/types/quiz';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { getQuizById } from '@/lib/supabase';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface QuizResultsProps {
  quizId: string;
  score: number;
}

export function QuizResults({ quizId, score }: QuizResultsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState<Record<number, string[]>>({});

  useEffect(() => {
    async function loadQuiz() {
      try {
        const data = await getQuizById(quizId);
        setQuiz(data);
        
        // Parse user answers from URL
        const answersParam = searchParams.get('answers');
        if (answersParam) {
          const answers = JSON.parse(decodeURIComponent(answersParam));
          setUserAnswers(answers);
        }
      } catch (error) {
        console.error('Failed to load quiz:', error);
        router.push('/');
      } finally {
        setLoading(false);
      }
    }
    loadQuiz();
  }, [quizId, router, searchParams]);

  const handleRetake = useCallback(() => {
    router.push(`/quiz?id=${quizId}`);
  }, [quizId, router]);

  const handleNewQuiz = useCallback(() => {
    router.push('/');
  }, [router]);

  if (loading || !quiz) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-lg text-gray-500">Loading results...</p>
      </div>
    );
  }

  const passingThreshold = quiz.settings.passingScore || 70;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Confetti score={score} />
      
      {/* Score Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Final Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-primary-600 mb-4">
                {score}%
              </h2>
              <p className="text-xl mb-2">
                {Math.round((score / 100) * quiz.questions.length)} correct out of {quiz.questions.length} questions
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full transition-all duration-1000"
                  style={{ width: `${score}%` }}
                />
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>0%</span>
                <span>{passingThreshold}%</span>
                <span>100%</span>
              </div>
            </div>
            
            <div className="pt-4 text-center text-gray-600">
              {score >= passingThreshold ? (
                <p className="text-lg text-green-600">Congratulations! You've passed the quiz.</p>
              ) : (
                <p className="text-lg text-yellow-600">Keep practicing! You need {passingThreshold}% to pass.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Question Review */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Question Review</h2>
        {quiz.questions.map((question, index) => {
          const userAnswer = userAnswers[question.id] || [];
          const isCorrect = userAnswer.sort().join(',') === question.correctAnswer.sort().join(',');

          return (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className={`border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Question {index + 1}</p>
                      <h3 className="text-lg font-medium">{question.question}</h3>
                    </div>
                    {isCorrect ? (
                      <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    ) : (
                      <XCircleIcon className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        {question.options.map((option) => {
                          const isUserAnswer = userAnswer.includes(option);
                          const isCorrectAnswer = question.correctAnswer.includes(option);
                          
                          return (
                            <div 
                              key={option} 
                              className={`p-3 rounded-lg border-2 flex items-center justify-between ${
                                isUserAnswer ? (isCorrectAnswer ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')
                                : isCorrectAnswer ? 'border-green-500 bg-green-50/50' 
                                : 'border-gray-200 bg-gray-50'
                              }`}
                            >
                              <div className="flex items-center flex-1">
                                <div className="mr-3">
                                  {isUserAnswer ? (
                                    isCorrectAnswer ? (
                                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                    ) : (
                                      <XCircleIcon className="h-5 w-5 text-red-500" />
                                    )
                                  ) : isCorrectAnswer ? (
                                    <CheckCircleIcon className="h-5 w-5 text-green-500/50" />
                                  ) : (
                                    <div className="h-5 w-5" />
                                  )}
                                </div>
                                <span className={`${isCorrectAnswer ? 'font-medium' : ''}`}>
                                  {option}
                                </span>
                              </div>
                              <div className="ml-2 text-sm">
                                {isUserAnswer && (
                                  <span className={`px-2 py-1 rounded ${
                                    isCorrectAnswer ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                  }`}>
                                    Your answer
                                  </span>
                                )}
                                {!isUserAnswer && isCorrectAnswer && (
                                  <span className="px-2 py-1 rounded bg-green-100 text-green-700">
                                    Correct answer
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-6 space-y-3">
                        <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                          <h4 className={`font-medium mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                          </h4>
                          {!isCorrect && (
                            <div className="text-sm space-y-1">
                              <p className="text-red-700">
                                Your answer: {userAnswer.join(', ') || 'No answer provided'}
                              </p>
                              <p className="text-green-700">
                                Correct answer: {question.correctAnswer.join(', ')}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <h4 className="font-medium text-gray-900 mb-2">Explanation</h4>
                          <p className="text-gray-600">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Actions */}
      <Card>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleNewQuiz}
          >
            Try Different Quiz
          </Button>
          <Button
            onClick={handleRetake}
          >
            Retake This Quiz
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}