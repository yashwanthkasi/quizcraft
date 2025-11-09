'use client';

import { QuizImport } from '@/components/quiz-import';

export default function Import() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Import Quiz</h1>
      <QuizImport />
    </div>
  );
}