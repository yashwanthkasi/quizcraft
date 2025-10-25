import { QuizMeta } from '@/types/storage';

interface QuizMetaDisplayProps {
  meta?: QuizMeta;
}

export function QuizMetaDisplay({ meta }: QuizMetaDisplayProps) {
  if (!meta) return null;

  return (
    <div className="mt-2 space-y-1 text-xs text-gray-500">
      {meta.bestScore !== undefined && (
        <p>Best Score: {meta.bestScore}%</p>
      )}
      {meta.attempts > 0 && (
        <p>Attempts: {meta.attempts}</p>
      )}
      {meta.lastAttempted && (
        <p>Last Attempted: {new Date(meta.lastAttempted).toLocaleDateString()}</p>
      )}
    </div>
  );
}