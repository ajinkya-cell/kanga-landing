'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-black/40 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[84px] max-w-[1500px] items-center justify-between px-8 md:px-14 lg:px-20">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🦘</span>

          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-lg font-bold text-transparent">
            Kanga
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a
            href="#features"
            className="transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#workflow"
            className="transition hover:text-white"
          >
            Workflow
          </a>

          <a
            href="#pricing"
            className="transition hover:text-white"
          >
            Pricing
          </a>

          <a
            href="#docs"
            className="transition hover:text-white"
          >
            Docs
          </a>

          <a
            href="#blog"
            className="transition hover:text-white"
          >
            Blog
          </a>
        </nav>

        <button className="rounded-full bg-[#FF9D5C] px-7 py-3 text-sm font-semibold text-black shadow-[0_8px_25px_rgba(255,157,92,0.3)] transition-all duration-300 hover:scale-105">
          Start Free
        </button>
      </div>
    </header>
  );
}