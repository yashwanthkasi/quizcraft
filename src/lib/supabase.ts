import { createClient } from '@supabase/supabase-js'
import { Database, Json } from '../types/supabase'
import { Quiz, Question, QuizSettings } from '../types/quiz'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export const createQuiz = async (name: string, description: string | null, questions: Question[], settings: QuizSettings): Promise<Quiz> => {
  const quizInsert = {
    name,
    description,
    questions: questions as unknown as Json,
    settings: settings as unknown as Json
  };
  
  const supabaseClient = supabase as unknown as {
    from: (table: string) => {
      insert: (data: typeof quizInsert) => {
        select: () => Promise<{
          data: Database['public']['Tables']['quizzes']['Row'][] | null;
          error: Error | null;
        }>;
      };
    };
  };

  const { data, error } = await supabaseClient
    .from('quizzes')
    .insert(quizInsert)
    .select();

  if (error) throw error
  if (!data || data.length === 0) throw new Error('Failed to create quiz');

  const quizData = data[0];
  return {
    id: quizData.id,
    name: quizData.name,
    description: quizData.description || '',
    questions,
    settings,
    metadata: {
      totalQuestions: questions.length
    },
    created_at: quizData.created_at,
    updated_at: quizData.updated_at
  }
}

export const getQuizzes = async (): Promise<Quiz[]> => {
  const supabaseClient = supabase as unknown as {
    from: (table: string) => {
      select: (columns: string) => {
        order: (column: string, { ascending }: { ascending: boolean }) => Promise<{
          data: Database['public']['Tables']['quizzes']['Row'][] | null;
          error: Error | null;
        }>;
      };
    };
  };

  const { data: quizzesData, error } = await supabaseClient
    .from('quizzes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error
  if (!quizzesData) throw new Error('Failed to fetch quizzes');

  return quizzesData.map(quizData => {
    const rawQuestions = quizData.questions as unknown as any[];
    const questions: Question[] = rawQuestions.map(q => ({
      id: q.id,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      category: q.category,
      explanation: q.explanation
    }));

    const rawSettings = quizData.settings as unknown as any;
    const settings: QuizSettings = {
      timeLimit: rawSettings?.timeLimit ?? 60,
      passingScore: rawSettings?.passingScore ?? 70
    };

    return {
      id: quizData.id,
      name: quizData.name,
      description: quizData.description || '',
      questions,
      settings,
      metadata: {
        totalQuestions: questions.length
      },
      created_at: quizData.created_at,
      updated_at: quizData.updated_at
    };
  });
}

export const getQuizById = async (id: string): Promise<Quiz> => {
  const supabaseClient = supabase as unknown as {
    from: (table: string) => {
      select: (columns: string) => {
        eq: (column: string, value: string) => {
          single: () => Promise<{
            data: Database['public']['Tables']['quizzes']['Row'] | null;
            error: Error | null;
          }>;
        };
      };
    };
  };

  const { data: quizData, error } = await supabaseClient
    .from('quizzes')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error
  if (!quizData) throw new Error('Quiz not found')

  const rawQuestions = quizData.questions as unknown as any[];
  const questions: Question[] = rawQuestions.map(q => ({
    id: q.id,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    category: q.category,
    explanation: q.explanation
  }));

  const rawSettings = quizData.settings as unknown as any;
  const settings: QuizSettings = {
    timeLimit: rawSettings?.timeLimit ?? 60,
    passingScore: rawSettings?.passingScore ?? 70
  };

  return {
    id: quizData.id,
    name: quizData.name,
    description: quizData.description || '',
    questions,
    settings,
    metadata: {
      totalQuestions: questions.length
    },
    created_at: quizData.created_at,
    updated_at: quizData.updated_at
  }
}

export const createCollection = async (name: string, description: string | null) => {
  const result = await (supabase
    .from('collections') as unknown as any)
    .insert([{
      name,
      description
    }])
    .select()

  if (result.error) throw result.error
  return result.data[0]
}

export const addQuizToCollection = async (collectionId: string, quizId: string) => {
  const result = await (supabase
    .from('collection_quizzes') as unknown as any)
    .insert([{
      collection_id: collectionId,
      quiz_id: quizId
    }])
    .select()

  if (result.error) throw result.error
  return result.data[0]
}

export const getCollectionQuizzes = async (collectionId: string) => {
  const { data, error } = await supabase
    .from('collection_quizzes')
    .select(`
      quiz_id,
      quizzes (*)
    `)
    .eq('collection_id', collectionId)

  if (error) throw error
  return data
}