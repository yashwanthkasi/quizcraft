import { ChangeEvent, useCallback, useState } from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Button } from './button';
import { Card } from './card';
import { quizUtils } from '@/lib/quiz-utils';
import { Quiz } from '@/types/quiz';

interface FileUploadProps {
  onQuizUpload: (quiz: Quiz) => void;
}

export function FileUpload({ onQuizUpload }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string>();

  const handleFile = useCallback(async (file: File) => {
    try {
      const text = await file.text();
      const json = JSON.parse(text);
      
      if (!quizUtils.validateQuizStructure(json)) {
        throw new Error('Invalid quiz format');
      }
      
      setError(undefined);
      onQuizUpload(json as Quiz);
    } catch (err) {
      setError('Invalid quiz file. Please check the format and try again.');
    }
  }, [onQuizUpload]);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/json') {
      handleFile(file);
    } else {
      setError('Please upload a JSON file');
    }
  }, [handleFile]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  }, [handleFile]);

  return (
    <Card
      className={`relative ${isDragging ? 'border-primary-500 bg-primary-50' : ''}`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={onDrop}
    >
      <motion.div
        className="flex flex-col items-center justify-center py-12 text-center"
        animate={{ scale: isDragging ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <CloudArrowUpIcon className="h-12 w-12 text-gray-400" />
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-900">
            Upload your quiz JSON file
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Drag and drop or click to upload
          </p>
          {error && (
            <p className="mt-2 text-sm text-red-500">{error}</p>
          )}
        </div>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          Select File
        </Button>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept="application/json"
          onChange={onChange}
        />
      </motion.div>
    </Card>
  );
}