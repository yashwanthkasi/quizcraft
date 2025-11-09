export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      collections: {
        Row: {
          id: string
          name: string
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      quizzes: {
        Row: {
          id: string
          name: string
          description: string | null
          questions: Json
          settings: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          questions: Json
          settings?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          questions?: Json
          settings?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      collection_quizzes: {
        Row: {
          id: string
          collection_id: string
          quiz_id: string
          added_at: string
        }
        Insert: {
          id?: string
          collection_id: string
          quiz_id: string
          added_at?: string
        }
        Update: {
          id?: string
          collection_id?: string
          quiz_id?: string
          added_at?: string
        }
      }
    }
  }
}