'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CommandPalette from '@/components/layout/CommandPalette';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import SystemDesign from '@/components/sections/SystemDesign';
import Certifications from '@/components/sections/Certifications';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Handle keyboard shortcut for command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openCommandPalette = useCallback(() => {
    setCommandPaletteOpen(true);
  }, []);

  const closeCommandPalette = useCallback(() => {
    setCommandPaletteOpen(false);
  }, []);

  return (
    <>
      <Header onCommandPaletteOpen={openCommandPalette} />
      <CommandPalette isOpen={commandPaletteOpen} onClose={closeCommandPalette} />
      
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <SystemDesign />
        <Certifications />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
