'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Live Demo', href: '#demo' },
  { label: 'Features', href: '#features' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Licensing', href: '#licensing' },
];

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [stars, setStars] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Set initial state in case of page load with hash/anchor
    setScrolled(window.scrollY > 60);
    
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/repos/yemekyarismasi/smart-kitchen-assistant')
      .then(r => r.json())
      .then(d => { if (d.stargazers_count !== undefined) setStars(d.stargazers_count); })
      .catch(() => {});
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex flex-col shrink-0 justify-center">
          <span className="text-white font-black text-[15px] md:text-base tracking-tight whitespace-nowrap leading-tight mt-0.5">
            Smart Kitchen Assistant
          </span>
          <span className="block text-[10px] md:text-[11px] text-zinc-200 font-medium tracking-wide leading-tight mt-0.5">
            Edge AI Solutions for Appliances
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 shrink-0">
          {/* GitHub Stars Badge */}
          <a
            href="https://github.com/yemekyarismasi/smart-kitchen-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-900/60 hover:border-zinc-500 transition-all text-sm md:text-xs text-zinc-300 hover:text-white"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>⭐ {stars !== null ? stars : '—'}</span>
          </a>

          {/* CTA Button */}
          <a
            href="#licensing"
            className="px-3 md:px-4 py-1.5 rounded-lg bg-cyan-500 text-black font-bold text-sm md:text-xs md:text-sm hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          >
            B2B Licensing
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all"
            aria-label="Toggle menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-zinc-800 px-4 py-3 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/yemekyarismasi/smart-kitchen-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-lg transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub ⭐ {stars !== null ? stars : '—'}
          </a>
        </div>
      )}
    </nav>
  );
}
