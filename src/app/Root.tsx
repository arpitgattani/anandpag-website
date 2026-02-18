import { Outlet, ScrollRestoration } from 'react-router';
import { Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrandLoader } from './components/BrandLoader';
import { useLenis } from './hooks/useLenis';
import { useScrollRestoration } from './hooks/useScrollRestoration';

export default function Root() {
  // Initialize Lenis smooth scroll
  useLenis();
  
  // Handle scroll restoration (top on new page, restore on back/forward)
  useScrollRestoration();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Suspense fallback={<BrandLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
      {/* ScrollRestoration component for browser history support */}
      <ScrollRestoration />
    </div>
  );
}