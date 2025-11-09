import { Suspense } from 'react';
import { QuizPageContent } from '@/components/quiz-page-content';
import { Layout } from '@/components/layout/layout';

export default function QuizPage() {
  return (
    <Suspense fallback={
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-lg text-gray-600">Loading quiz...</div>
        </div>
      </Layout>
    }>
      <QuizPageContent />
    </Suspense>
  );
}