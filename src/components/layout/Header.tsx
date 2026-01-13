'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems } from '@/data/content';
import { useScroll, useActiveSection, useIsMobile } from '@/hooks';
import { fadeDown, mobileMenuVariants, backdropVariants } from '@/lib/animations';

interface HeaderProps {
  onCommandPaletteOpen: () => void;
}

export default function Header({ onCommandPaletteOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrolled, scrollDirection } = useScroll(50);
  const isMobile = useIsMobile();
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  // Close mobile menu on resize
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeDown}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-glass-border shadow-glass'
            : 'bg-transparent',
          scrollDirection === 'down' && scrolled && !mobileMenuOpen
            ? '-translate-y-full'
            : 'translate-y-0'
        )}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground font-semibold text-lg hover:text-primary transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold">
                N
              </span>
              <span className="hidden sm:inline">Nitesh</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground-secondary hover:text-foreground hover:bg-glass'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Command Palette Button */}
              <button
                onClick={onCommandPaletteOpen}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-foreground-secondary hover:text-foreground bg-glass border border-glass-border rounded-lg transition-all duration-200 hover:border-glass-highlight"
                title="Open command palette (⌘K)"
              >
                <Command className="w-4 h-4" />
                <span className="text-xs">⌘K</span>
              </button>

              {/* Resume Button */}
              <Link
                href="https://drive.google.com/file/d/1Y8a-jTTzHYvQ8cPE_0gaf2I0EKj4Wr8Q/view?usp=drivesdk"
                target="_blank"
                className="hidden sm:flex btn-primary text-sm py-2 px-4"
              >
                Resume
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-foreground-secondary hover:text-foreground hover:bg-glass rounded-lg transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariants}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="fixed top-16 left-4 right-4 z-50 md:hidden glass-card p-4"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200',
                      activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground-secondary hover:text-foreground hover:bg-glass'
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                <hr className="border-glass-border my-2" />
                <Link
                  href="/resume/Nitesh_Resume.pdf"
                  target="_blank"
                  className="w-full btn-primary text-sm justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resume
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
