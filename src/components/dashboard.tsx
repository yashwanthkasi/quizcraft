'use client';

import { FileUpload } from '@/components/ui/file-upload';
import { JsonFormatHelper } from '@/components/ui/json-format-helper';
import { QuizCard } from '@/components/ui/quiz-card';
import { awsAiPractitionerQuiz, AWSAISERVICESQUIZ } from '@/data/aws-ai-practitioner';
import { Quiz } from '@/types/quiz';
import { storage } from '@/lib/storage';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function Dashboard() {
  const [customQuizzes, setCustomQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const saved = storage.getCustomQuizzes();
    setCustomQuizzes(saved);
  }, []);

  const handleQuizUpload = useCallback((quiz: Quiz) => {
    storage.saveCustomQuiz(quiz);
    setCustomQuizzes(prev => [...prev, quiz]);
  }, []);

  const router = useRouter();
  
  const handleStartQuiz = useCallback((quiz: Quiz) => {
    storage.saveActiveQuiz(quiz);
    router.push('/configure');
  }, [router]);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter">
          Welcome to QuizCraft
        </h1>
        <p className="text-xl text-gray-500">
          Choose a quiz topic or upload your own quiz JSON.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Built-in Quizzes */}
        <QuizCard
          quiz={awsAiPractitionerQuiz}
          onStart={handleStartQuiz}
        />
        <QuizCard
          quiz={AWSAISERVICESQUIZ}
          onStart={handleStartQuiz}
        />
        
        {/* Custom Quizzes */}
        {customQuizzes.map((quiz, index) => (
          <QuizCard
            key={`${quiz.metadata.title}-${index}`}
            quiz={quiz}
            onStart={handleStartQuiz}
          />
        ))}
        
        {/* Upload Card */}
        <FileUpload onQuizUpload={handleQuizUpload} />
      </div>

      {/* JSON Format Helper */}
      <div className="mt-8">
        <JsonFormatHelper />
      </div>
    </div>
  );
}