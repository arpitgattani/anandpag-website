import { ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

/**
 * Primary CTA Button Component
 * 
 * Usage:
 * - Standalone: <PrimaryButton onClick={handler}>Click Me</PrimaryButton>
 * - With Link: <PrefetchLink to="/path"><PrimaryButton>Click Me</PrimaryButton></PrefetchLink>
 * 
 * Follows design guidelines from Guidelines.md:
 * - bg-blue-600 with hover:bg-blue-700
 * - rounded-xl corners
 * - hover:scale-[1.02] lift effect
 * - hover:shadow-lg hover:shadow-blue-500/50 glow effect
 */
export function PrimaryButton({ children, className = '', ...props }: PrimaryButtonProps) {
  return (
    <button
      className={`group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50 ${className}`}
      {...props}
    >
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}