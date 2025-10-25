import { Card, CardContent, CardHeader, CardTitle } from './card';

export function JsonFormatHelper() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>JSON Format Guide</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="overflow-x-auto rounded bg-gray-50 p-4 text-xs">
          {`{
  "metadata": {
    "title": "Quiz Title",
    "version": "1.0",
    "totalQuestions": 0,
    "description": "Quiz description"
  },
  "questions": [
    {
      "id": 1,
      "question": "Question text",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correctAnswer": ["Correct option text"],
      "category": "Category Name",
      "explanation": "Explanation text"
    }
  ]
}`}
        </pre>
      </CardContent>
    </Card>
  );
}