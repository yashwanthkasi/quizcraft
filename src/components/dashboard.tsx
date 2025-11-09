'use client';

import { QuizCard } from '@/components/ui/quiz-card';
import { Quiz } from '@/types/quiz';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getQuizzes } from '@/lib/supabase';

export function Dashboard() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadQuizzes() {
      try {
        const data = await getQuizzes();
        setQuizzes(data);
      } catch (error) {
        console.error('Failed to load quizzes:', error);
      } finally {
        setLoading(false);
      }
    }
    loadQuizzes();
  }, []);

  const handleStartQuiz = useCallback((quiz: Quiz) => {
    if (!quiz.id) {
      console.error('No quiz ID available');
      return;
    }
    console.log('Starting quiz with ID:', quiz.id);
    router.push(`/quiz?id=${encodeURIComponent(quiz.id)}`);
  }, [router]);

  const handleImport = useCallback(() => {
    router.push('/import');
  }, [router]);

  if (loading) {
    return <div className="flex items-center justify-center h-64">
      <p className="text-lg text-gray-500">Loading quizzes...</p>
    </div>;
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter">
          Welcome to QuizCraft
        </h1>
        <p className="text-xl text-gray-500">
          Choose a quiz topic or create your own quiz.
        </p>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleImport}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium text-white bg-blue-600 h-10 px-4 py-2 hover:bg-blue-700"
        >
          Import Quiz
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
            onStart={handleStartQuiz}
          />
        ))}
      </div>
    </div>
  );
}
