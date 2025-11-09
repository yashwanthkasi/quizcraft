'use client';

import { Layout } from '@/components/layout/layout';
import { QuizResults } from '@/components/quiz-results';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function ResultsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const quizId = searchParams.get('id');
  const score = searchParams.get('score');

  useEffect(() => {
    if (!quizId || !score) {
      router.push('/');
    }
  }, [quizId, score, router]);

  if (!quizId || !score) {
    return null;
  }

  return (
    <Layout>
      <QuizResults quizId={quizId} score={parseInt(score, 10)} />
    </Layout>
  );
}