import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileUpload } from '@/components/ui/file-upload';
import { createQuiz } from '@/lib/supabase';

export function QuizImport() {
  const [jsonContent, setJsonContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileUpload = (content: string) => {
    setJsonContent(content);
  };

  const validateQuizJson = (data: any) => {
    // Validate questions array
    if (!Array.isArray(data.questions)) {
      throw new Error('Quiz must have an array of questions');
    }
    if (data.questions.length === 0) {
      throw new Error('Quiz must have at least one question');
    }

    // Create default settings if not provided
    const settings = {
      timeLimit: 60,
      passingScore: 70,
      ...data.settings
    };

    // Transform the data to match our Quiz interface
    const transformedData = {
      name: data.metadata?.title || data.name || 'Untitled Quiz',
      description: data.metadata?.description || data.description || '',
      questions: data.questions,
      settings: settings,
      metadata: {
        title: data.metadata?.title || data.name || 'Untitled Quiz',
        version: data.metadata?.version || '1.0',
        description: data.metadata?.description || data.description || '',
        totalQuestions: data.questions.length
      }
    };

    return transformedData;
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      // Parse JSON content
      const rawData = JSON.parse(jsonContent);
      
      // Transform and validate the data
      const transformedQuiz = validateQuizJson(rawData);

      // Create quiz in database
      await createQuiz(
        transformedQuiz.name,
        transformedQuiz.description,
        transformedQuiz.questions,
        transformedQuiz.settings
      );

      // Clear form
      setJsonContent('');
      setError('Quiz imported successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to import quiz');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Import Quiz</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* File Upload */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Upload Quiz JSON File
          </label>
          <FileUpload
            onFileContent={handleFileUpload}
            accept=".json"
          />
        </div>

        {/* JSON Paste */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Or Paste Quiz JSON
          </label>
          <textarea
            value={jsonContent}
            onChange={(e) => setJsonContent(e.target.value)}
            placeholder="Paste your quiz JSON here..."
            className="w-full h-48 p-3 border rounded-md font-mono text-sm"
          />
        </div>

        {error && (
          <p className={`text-sm ${error.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
            {error}
          </p>
        )}

        <Button
          onClick={handleSubmit}
          className="w-full"
          disabled={!jsonContent.trim() || isLoading}
        >
          {isLoading ? 'Importing...' : 'Import Quiz'}
        </Button>
      </CardContent>
    </Card>
  );
}