import { ReactNode, HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

/**
 * Glass Card Component (Dark Sections)
 * 
 * Usage:
 * - Default: <GlassCard>Content</GlassCard>
 * - No hover: <GlassCard hover={false}>Content</GlassCard>
 * - Custom padding: <GlassCard padding="lg">Content</GlassCard>
 * - No padding: <GlassCard padding="none">Content</GlassCard>
 * 
 * Follows design guidelines from Guidelines.md:
 * - Glass morphism effect with backdrop blur
 * - bg-white/[0.03] with border-white/10
 * - Hover state brightens background and border
 * - Smooth transitions
 */
export function GlassCard({ 
  children, 
  className = '', 
  padding = 'md',
  hover = true,
  ...props 
}: GlassCardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const hoverClasses = hover 
    ? 'hover:bg-white/[0.05] hover:border-white/20 transition-all'
    : '';

  return (
    <div
      className={`bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg ${paddingClasses[padding]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
