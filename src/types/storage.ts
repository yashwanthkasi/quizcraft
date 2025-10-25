import { Quiz, QuizState } from './quiz';

export interface QuizHistory {
  quizId: string;
  date: string;
  score: number;
  totalQuestions: number;
  timeTaken?: number; // in seconds
  timeAllowed?: number; // in minutes
}

export interface QuizMeta {
  id: string;
  title: string;
  lastAttempted?: string;
  bestScore?: number;
  attempts: number;
}

export interface StorageState {
  customQuizzes: Quiz[];
  quizHistory: QuizHistory[];
  quizMeta: Record<string, QuizMeta>;
  activeQuiz?: Quiz;
  activeQuizState?: QuizState;
}

export type StorageKey = 
  | 'quizcraft_custom_quizzes'
  | 'quizcraft_quiz_history'
  | 'quizcraft_quiz_meta'
  | 'quizcraft_active_quiz'
  | 'quizcraft_quiz_state';