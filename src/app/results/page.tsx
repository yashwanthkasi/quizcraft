import { Suspense } from 'react';
import { ResultsPageContent } from '@/components/results-page-content';

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Loading results...</div>
      </div>
    }>
      <ResultsPageContent />
    </Suspense>
  );
}