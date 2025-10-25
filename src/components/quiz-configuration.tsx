'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quiz } from '@/types/quiz';
import { quizUtils } from '@/lib/quiz-utils';
import { storage } from '@/lib/storage';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export function QuizConfiguration() {
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [categories, setCategories] = useState<string[]>([]);
  const [maxQuestions, setMaxQuestions] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [durationInMinutes, setDurationInMinutes] = useState<number>(30);

  useEffect(() => {
    const activeQuiz = storage.getActiveQuiz();
    if (!activeQuiz) {
      router.push('/');
      return;
    }

    setQuiz(activeQuiz);
    const quizCategories = quizUtils.getCategories(activeQuiz);
    setCategories(['all', ...quizCategories]);
    setMaxQuestions(activeQuiz.metadata.totalQuestions);
  }, [router]);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    const availableQuestions = category === 'all'
      ? quiz!.metadata.totalQuestions
      : quiz!.questions.filter(q => q.category === category).length;
    setMaxQuestions(availableQuestions);
    setQuestionCount(Math.min(questionCount, availableQuestions));
  }, [quiz, questionCount]);

  const handleQuestionCountChange = useCallback((count: number) => {
    setQuestionCount(Math.min(count, maxQuestions));
  }, [maxQuestions]);

  const handleStartQuiz = useCallback(() => {
    if (!quiz) return;

    const category = selectedCategory === 'all' ? undefined : selectedCategory;
    const shuffledQuiz = quizUtils.createShuffledQuiz(quiz, questionCount, category);
    storage.saveActiveQuiz(shuffledQuiz);
    
    // Save initial quiz state with timer configuration
    storage.saveQuizState({
      currentQuestionIndex: 0,
      answers: {},
      isComplete: false,
      startTime: Date.now(),
      durationInMinutes
    });
    
    router.push('/quiz');
  }, [quiz, selectedCategory, questionCount, durationInMinutes, router]);

  if (!quiz) {
    return null;
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">
          Configure Your Quiz
        </h1>
        <p className="text-gray-500">
          Customize your quiz experience for {quiz.metadata.title}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quiz Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Category Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Select Category
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => handleCategoryChange(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Question Count */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Number of Questions (max: {maxQuestions})
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min={1}
                max={maxQuestions}
                value={questionCount}
                onChange={(e) => handleQuestionCountChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm font-medium w-12">
                {questionCount}
              </span>
            </div>
          </div>

          {/* Timer Settings */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Time Limit (minutes)
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                min={1}
                max={180}
                value={durationInMinutes}
                onChange={(e) => setDurationInMinutes(Math.max(1, Math.min(180, Number(e.target.value))))}
                className="w-24 px-3 py-2 border rounded-md"
              />
              <span className="text-sm text-gray-500">
                minutes
              </span>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          {/* Start Button */}
          <Button
            onClick={handleStartQuiz}
            className="w-full"
            size="lg"
          >
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}