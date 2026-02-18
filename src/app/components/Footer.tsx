import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { PrefetchLink } from './PrefetchLink';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030213] text-slate-300 border-t border-white/10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1400px] mx-auto py-8">
          
          {/* Navigation Links Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-6 text-[14px] sm:text-[15px]">
            <PrefetchLink to="/" className="text-slate-300 hover:text-white transition-colors">
              Home
            </PrefetchLink>
            <span className="text-slate-600">|</span>
            <PrefetchLink to="/solutions/erc" className="text-slate-300 hover:text-white transition-colors">
              Solutions
            </PrefetchLink>
            <span className="text-slate-600">|</span>
            <PrefetchLink to="/company/about" className="text-slate-300 hover:text-white transition-colors">
              About
            </PrefetchLink>
            <span className="text-slate-600">|</span>
            <PrefetchLink to="/company/careers" className="text-slate-300 hover:text-white transition-colors">
              Careers
            </PrefetchLink>
            <span className="text-slate-600">|</span>
            <PrefetchLink to="/company/contact" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </PrefetchLink>
            <span className="text-slate-600">|</span>
            <PrefetchLink to="/legal/privacy" className="text-slate-300 hover:text-white transition-colors">
              Privacy
            </PrefetchLink>
            <span className="text-slate-600">|</span>
            <PrefetchLink to="/legal/terms" className="text-slate-300 hover:text-white transition-colors">
              Terms
            </PrefetchLink>
          </div>

          {/* Copyright & Social Icons Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] sm:text-[14px] text-slate-400">
            <p>
              © {currentYear} Anand PAG Inc. · Coppell, Texas · +1 (972) 499-8126
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-400 hover:border-blue-400 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}