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
            <CardTitle className="text-center">Final Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-primary-600 mb-4">
                {score.percentage}%
              </h2>
              <p className="text-xl mb-2">
                {score.correct} correct out of {score.total} questions
              </p>
              {score.timeTaken !== null && (
                <div className="text-gray-600">
                  Time taken: {Math.floor(score.timeTaken / 60)}m {score.timeTaken % 60}s
                  {score.timeAllowed && (
                    <span className="ml-1">
                      out of {Math.floor(score.timeAllowed / 60)}m
                    </span>
                  )}
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full transition-all duration-1000"
                  style={{ width: `${score.percentage}%` }}
                />
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
            
            <div className="pt-4 text-center text-gray-600">
              {score.percentage >= 80 ? (
                <p className="text-lg">Excellent work! You've mastered this material.</p>
              ) : score.percentage >= 60 ? (
                <p className="text-lg">Good job! Keep practicing to improve further.</p>
              ) : (
                <p className="text-lg">Keep learning! Review the explanations and try again.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

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