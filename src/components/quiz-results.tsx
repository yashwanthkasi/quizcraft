'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Confetti } from '@/components/ui/confetti';
import { Quiz, QuizState } from '@/types/quiz';
import { QuizHistory } from '@/types/storage';
import { storage } from '@/lib/storage';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export function QuizResults() {
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [state, setState] = useState<QuizState | null>(null);
  const [score, setScore] = useState({ 
    correct: 0, 
    total: 0, 
    percentage: 0,
    timeTaken: null as number | null,
    timeAllowed: null as number | null
  });

  useEffect(() => {
    const activeQuiz = storage.getActiveQuiz();
    const quizState = storage.getQuizState();

    if (!activeQuiz || !quizState) {
      router.push('/');
      return;
    }

    setQuiz(activeQuiz);
    setState(quizState);

    // Calculate score and time metrics
    const correct = activeQuiz.questions.reduce((acc, question) => {
      const userAnswer = quizState.answers[question.id] || [];
      const isCorrect = question.correctAnswer.length === userAnswer.length &&
        question.correctAnswer.every(ans => userAnswer.includes(ans));
      return acc + (isCorrect ? 1 : 0);
    }, 0);

    const percentage = Math.round((correct / activeQuiz.questions.length) * 100);
    
    // Calculate time taken
    const timeTaken = quizState.startTime 
      ? Math.floor((Date.now() - quizState.startTime) / 1000)
      : null;
    
    const timeAllowed = quizState.durationInMinutes ? quizState.durationInMinutes * 60 : null;
    
    setScore({
      correct,
      total: activeQuiz.questions.length,
      percentage,
      timeTaken,
      timeAllowed
    });

    // Save quiz history
    // Save quiz history
    const history: QuizHistory = {
      quizId: activeQuiz.id || activeQuiz.metadata.title.toLowerCase().replace(/\s+/g, '-'),
      date: new Date().toISOString(),
      score: percentage,
      totalQuestions: activeQuiz.questions.length,
      timeTaken: timeTaken || undefined,
      timeAllowed: quizState.durationInMinutes
    };
    storage.addQuizHistory(history);
  }, [router]);

  const handleRetake = useCallback(() => {
    if (!quiz) return;
    storage.clearQuizState();
    router.push('/configure');
  }, [quiz, router]);

  const handleNewQuiz = useCallback(() => {
    storage.clearQuizState();
    storage.clearActiveQuiz();
    router.push('/');
  }, [router]);

  if (!quiz || !state) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Confetti score={score.percentage} />
      
      {/* Score Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Quiz Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-primary-600">
                {score.percentage}%
              </h2>
              <p className="text-gray-500">
                {score.correct} correct out of {score.total} questions
              </p>
              {score.timeTaken !== null && (
                <div className="mt-2 text-sm text-gray-500">
                  Time taken: {Math.floor(score.timeTaken / 60)}m {score.timeTaken % 60}s
                  {score.timeAllowed && (
                    <span className="ml-1">
                      out of {Math.floor(score.timeAllowed / 60)}m
                    </span>
                  )}
                </div>
              )}
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div
                className="h-full bg-primary-500 rounded-full transition-all duration-1000"
                style={{ width: `${score.percentage}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Question Breakdown */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Detailed Breakdown</h3>
        {quiz.questions.map((question, index) => {
          const userAnswer = state.answers[question.id] || [];
          const isCorrect = question.correctAnswer.length === userAnswer.length &&
            question.correctAnswer.every(ans => userAnswer.includes(ans));

          return (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={isCorrect ? 'border-green-200' : 'border-red-200'}>
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    {isCorrect ? (
                      <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircleIcon className="h-6 w-6 text-red-500 flex-shrink-0" />
                    )}
                    <div>
                      <h4 className="font-medium">{question.question}</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Your Answer:</p>
                    <p className="text-sm text-gray-600">
                      {userAnswer.length ? userAnswer.join(', ') : 'No answer provided'}
                    </p>
                  </div>
                  {!isCorrect && (
                    <div>
                      <p className="text-sm font-medium">Correct Answer:</p>
                      <p className="text-sm text-gray-600">
                        {question.correctAnswer.join(', ')}
                      </p>
                    </div>
                  )}
                  <div className="pt-2">
                    <p className="text-sm font-medium">Explanation:</p>
                    <p className="text-sm text-gray-600">{question.explanation}</p>
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