import { ButtonHTMLAttributes, ReactNode } from 'react';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

/**
 * Secondary (Outlined) Button Component
 * 
 * Usage:
 * - Standalone: <SecondaryButton onClick={handler}>Click Me</SecondaryButton>
 * - With Link: <PrefetchLink to="/path"><SecondaryButton>Click Me</SecondaryButton></PrefetchLink>
 * 
 * Follows design guidelines from Guidelines.md:
 * - Transparent background with border
 * - border-2 border-blue-500/50 (50% opacity)
 * - hover:border-blue-400 hover:bg-blue-500/10 for subtle interaction
 * - Same padding and text sizing as primary button
 */
export function SecondaryButton({ children, className = '', ...props }: SecondaryButtonProps) {
  return (
    <button
      className={`px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white text-[14px] sm:text-[15px] font-semibold rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
