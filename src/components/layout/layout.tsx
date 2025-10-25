import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function Layout({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'container mx-auto px-4 py-8 min-h-screen max-w-5xl',
        className
      )}
      {...props}
    />
  );
}