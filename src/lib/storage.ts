import { Quiz, QuizState } from '@/types/quiz';
import { QuizHistory, QuizMeta, StorageKey, StorageState } from '@/types/storage';

class StorageManager {
  private readonly STORAGE_KEYS: Record<string, StorageKey> = {
    CUSTOM_QUIZZES: 'quizcraft_custom_quizzes',
    QUIZ_HISTORY: 'quizcraft_quiz_history',
    QUIZ_META: 'quizcraft_quiz_meta',
    ACTIVE_QUIZ: 'quizcraft_active_quiz',
    QUIZ_STATE: 'quizcraft_quiz_state',
  };

  private state: StorageState = {
    customQuizzes: [],
    quizHistory: [],
    quizMeta: {},
  };

  constructor() {
    if (typeof window !== 'undefined') {
      this.loadState();
    }
  }

  private loadState(): void {
    // Load all storage items
    Object.entries(this.STORAGE_KEYS).forEach(([key, storageKey]) => {
      const data = localStorage.getItem(storageKey);
      if (data) {
        try {
          const parsed = JSON.parse(data);
          switch (key) {
            case 'CUSTOM_QUIZZES':
              this.state.customQuizzes = parsed;
              break;
            case 'QUIZ_HISTORY':
              this.state.quizHistory = parsed;
              break;
            case 'QUIZ_META':
              this.state.quizMeta = parsed;
              break;
            case 'ACTIVE_QUIZ':
              this.state.activeQuiz = parsed;
              break;
            case 'QUIZ_STATE':
              this.state.activeQuizState = parsed;
              break;
          }
        } catch (error) {
          console.error(`Error parsing ${key}:`, error);
        }
      }
    });
  }

  private saveState(): void {
    if (typeof window === 'undefined') return;

    Object.entries(this.STORAGE_KEYS).forEach(([key, storageKey]) => {
      const data = this.state[key.toLowerCase() as keyof StorageState];
      if (data) {
        localStorage.setItem(storageKey, JSON.stringify(data));
      } else {
        localStorage.removeItem(storageKey);
      }
    });
  }

  private generateQuizId(quiz: Quiz): string {
    return `${quiz.metadata.title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
  }

  // Custom Quizzes
  saveCustomQuiz(quiz: Quiz): void {
    const quizWithId = {
      ...quiz,
      id: this.generateQuizId(quiz),
    };
    this.state.customQuizzes = [...this.state.customQuizzes, quizWithId];
    this.saveState();
  }

  getCustomQuizzes(): Quiz[] {
    return this.state.customQuizzes;
  }

  // Quiz History
  addQuizHistory(historyData: QuizHistory): void {
    const history = {
      ...historyData,
      quizId: historyData.quizId || this.generateQuizId({ metadata: { title: 'Unknown Quiz' } } as Quiz)
    };

    this.state.quizHistory = [history, ...this.state.quizHistory].slice(0, 50); // Keep last 50 attempts
    
    // Update quiz meta
    const meta = this.state.quizMeta[history.quizId] || {
      id: history.quizId,
      title: history.quizId, // Use ID as title if not available
      attempts: 0,
      bestScore: 0,
    };

    this.state.quizMeta[history.quizId] = {
      ...meta,
      lastAttempted: history.date,
      bestScore: Math.max(meta.bestScore || 0, history.score),
      attempts: (meta.attempts || 0) + 1,
    };

    this.saveState();
  }

  getQuizHistory(): QuizHistory[] {
    return this.state.quizHistory;
  }

  getQuizMeta(quizId: string): QuizMeta | undefined {
    return this.state.quizMeta[quizId];
  }

  // Active Quiz
  saveActiveQuiz(quiz: Quiz): void {
    this.state.activeQuiz = quiz;
    this.saveState();
  }

  getActiveQuiz(): Quiz | null {
    return this.state.activeQuiz || null;
  }

  clearActiveQuiz(): void {
    delete this.state.activeQuiz;
    this.saveState();
  }

  // Quiz State
  saveQuizState(state: QuizState): void {
    this.state.activeQuizState = state;
    this.saveState();
  }

  getQuizState(): QuizState | null {
    return this.state.activeQuizState || null;
  }

  clearQuizState(): void {
    delete this.state.activeQuizState;
    this.saveState();
  }

  // Utility
  clearAll(): void {
    this.state = {
      customQuizzes: [],
      quizHistory: [],
      quizMeta: {},
    };
    Object.values(this.STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
}

export const storage = new StorageManager();