import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface EyebrowPillProps {
  children: ReactNode;
  icon?: LucideIcon;
  showDot?: boolean;
  className?: string;
}

/**
 * Eyebrow Pill Component
 * 
 * Usage:
 * - With animated dot: <EyebrowPill>LABEL TEXT</EyebrowPill>
 * - With icon: <EyebrowPill icon={Icon}>LABEL TEXT</EyebrowPill>
 * - Without indicator: <EyebrowPill showDot={false}>LABEL TEXT</EyebrowPill>
 * 
 * Follows design guidelines from Guidelines.md:
 * - Glass morphism background with blur
 * - Animated blue dot or optional icon
 * - Uppercase mono font with letter spacing
 * - Slate-400 text color
 */
export function EyebrowPill({ children, icon: Icon, showDot = true, className = '' }: EyebrowPillProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full ${className}`}>
      {showDot && !Icon && (
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
      )}
      {Icon && <Icon className="w-4 h-4 text-blue-400" />}
      <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
        {children}
      </span>
    </div>
  );
}
