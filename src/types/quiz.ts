export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string[];
  category: string;
  explanation: string;
}

export interface QuizSettings {
  timeLimit: number;
  passingScore: number;
}

export interface QuizMetadata {
  title?: string;
  version?: string;
  description?: string;
  totalQuestions: number;
}

export interface Quiz {
  id?: string;
  name: string;
  description: string;
  questions: Question[];
  settings: QuizSettings;
  created_at?: string;
  updated_at?: string;
  metadata: QuizMetadata;
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