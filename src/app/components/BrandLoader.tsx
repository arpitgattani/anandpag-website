import { motion } from 'motion/react';

export function BrandLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030213]">
      <div className="relative flex flex-col items-center gap-6">
        {/* Halo Ring */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Spinning halo */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-xl" />
        </div>

        {/* Brand Name */}
        <h1 className="text-[32px] sm:text-[40px] font-bold text-white tracking-tight">
          Anand PAG
        </h1>
      </div>
    </div>
  );
}