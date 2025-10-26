export interface QuizMetadata {
  title: string;
  version: string;
  totalQuestions: number;
  description: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string[];
  category: string;
  explanation: string;
}

export interface Quiz {
  id?: string;
  metadata: QuizMetadata;
  questions: Question[];
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<number, string[]>;
  isComplete: boolean;
  startTime?: number;
  durationInMinutes?: number;
  submittedQuestions: Record<number, boolean>;
}

export interface QuizResults {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  percentage: number;
  questionResults: Array<{
    question: Question;
    userAnswer: string[];
    isCorrect: boolean;
  }>;
}