'use client';

import { useEffect, useState } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

interface TimerProps {
  durationInMinutes: number;
  onTimeExpired: () => void;
  isPaused?: boolean;
  startTime?: number;
}

export function Timer({ durationInMinutes, onTimeExpired, isPaused = false, startTime }: TimerProps) {
  const calculateInitialTime = () => {
    if (!startTime) return durationInMinutes * 60;
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const remaining = durationInMinutes * 60 - elapsed;
    return Math.max(0, remaining);
  };

  const [timeLeft, setTimeLeft] = useState(calculateInitialTime());

  useEffect(() => {
    if (isPaused || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          onTimeExpired();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeExpired, isPaused]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  const getColorClass = () => {
    const percentage = (timeLeft / (durationInMinutes * 60)) * 100;
    if (percentage <= 10) return 'text-red-500';
    if (percentage <= 25) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className={`flex items-center space-x-2 font-mono text-lg ${getColorClass()}`}>
      <ClockIcon className="h-5 w-5" />
      <span>{timeString}</span>
    </div>
  );
}