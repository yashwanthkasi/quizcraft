import os
import json
from supabase import create_client, Client


# Initialize Supabase client
url: str = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
key: str = os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")
supabase: Client = create_client(url, key)

def read_quiz_data(file_path: str) -> dict:
    """Read the TypeScript quiz data file and convert it to a Python dictionary."""
    with open(file_path, 'r') as file:
        content = file.read()
        # Remove TypeScript specific syntax and convert to valid JSON
        # This is a simple approach and might need to be adjusted based on the actual file format
        content = content.replace('export const quizData = ', '')
        content = content.replace(';', '')
        return json.loads(content)

def migrate_quiz_data():
    """Migrate quiz data to Supabase database."""
    try:
        # Read the quiz data
        quiz_data = read_quiz_data('../src/data/aws-ai-practitioner.ts')
        
        # Create a new quiz in the database
        data = supabase.table('quizzes').insert({
            'name': 'AWS Certified Cloud Practitioner',
            'description': 'Practice questions for AWS Certified Cloud Practitioner certification',
            'questions': quiz_data,
            'settings': {
                'timeLimit': 90,  # 90 minutes
                'passingScore': 70  # 70%
            }
        }).execute()
        
        print("Quiz data migrated successfully!")
        print(f"Created quiz with ID: {data.data[0]['id']}")
        
    except Exception as e:
        print(f"Error migrating quiz data: {str(e)}")

if __name__ == "__main__":
    migrate_quiz_data()