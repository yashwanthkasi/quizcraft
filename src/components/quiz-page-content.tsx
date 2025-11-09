'use client';

import { Layout } from '@/components/layout/layout';
import { QuizExperience } from '@/components/quiz-experience';
import { useSearchParams } from 'next/navigation';

export function QuizPageContent() {
  const searchParams = useSearchParams();
  const quizId = searchParams.get('id');

  if (!quizId) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <p className="text-lg text-red-500">No quiz ID provided</p>
          <a href="/" className="text-blue-500 hover:underline">Return to Home</a>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <QuizExperience quizId={quizId} />
    </Layout>
  );
}