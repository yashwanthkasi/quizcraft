import { Quiz, Question } from '@/types/quiz';

export const quizUtils = {
  // Shuffle an array using Fisher-Yates algorithm
  shuffle: <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  // Get questions for a specific category
  getQuestionsByCategory: (quiz: Quiz, category: string): Question[] => {
    return quiz.questions.filter(q => q.category === category);
  },

  // Get all categories from a quiz
  getCategories: (quiz: Quiz): string[] => {
    const categories = new Set(quiz.questions.map(q => q.category));
    return Array.from(categories);
  },

  // Create a new quiz with shuffled questions and options
  createShuffledQuiz: (quiz: Quiz, questionCount: number, category?: string): Quiz => {
    let questions = category 
      ? quizUtils.getQuestionsByCategory(quiz, category)
      : quiz.questions;

    // Shuffle and limit questions
    questions = quizUtils.shuffle(questions).slice(0, questionCount);

    // Shuffle options for each question
    questions = questions.map(q => ({
      ...q,
      options: quizUtils.shuffle(q.options)
    }));

    return {
      metadata: {
        ...quiz.metadata,
        totalQuestions: questions.length
      },
      questions
    };
  },

  // Validate quiz JSON structure
  validateQuizStructure: (data: any): boolean => {
    try {
      // Check metadata
      if (!data.metadata?.title || 
          !data.metadata?.version || 
          typeof data.metadata?.totalQuestions !== 'number' ||
          !data.metadata?.description) {
        return false;
      }

      // Check questions array
      if (!Array.isArray(data.questions) || data.questions.length === 0) {
        return false;
      }

      // Check each question
      return data.questions.every((q: any) => 
        typeof q.id === 'number' &&
        typeof q.question === 'string' &&
        Array.isArray(q.options) &&
        q.options.length >= 2 &&
        Array.isArray(q.correctAnswer) &&
        q.correctAnswer.length > 0 &&
        typeof q.category === 'string' &&
        typeof q.explanation === 'string'
      );
    } catch {
      return false;
    }
  }
};