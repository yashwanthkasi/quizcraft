import { Quiz } from '@/types/quiz';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { QuizMetaDisplay } from './quiz-meta-display';
import { storage } from '@/lib/storage';
import { motion } from 'framer-motion';

interface QuizCardProps {
  quiz: Quiz;
  onStart: (quiz: Quiz) => void;
}

export function QuizCard({ quiz, onStart }: QuizCardProps) {
  const categories = Array.from(new Set(quiz.questions.map(q => q.category)));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card hover>
        <CardHeader>
          <CardTitle>{quiz.metadata.title}</CardTitle>
          <CardDescription>
            {quiz.metadata.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              {quiz.metadata.totalQuestions} questions
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700"
                >
                  {category}
                </span>
              ))}
              {categories.length > 5 && (
                <span
                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                >
                  +{categories.length - 5} more
                </span>
              )}
            </div>
            {quiz.id && <QuizMetaDisplay meta={storage.getQuizMeta(quiz.id)} />}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => onStart(quiz)}
            className="w-full"
          >
            Start Quiz
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}