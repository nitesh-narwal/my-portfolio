'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Coffee, Leaf, Cloud, Container } from 'lucide-react';
import { heroData } from '@/data/content';
import { cn } from '@/lib/utils';
import { fadeUp, staggerContainer, staggerItem, iconFloat } from '@/lib/animations';

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Java: Coffee,
  'Spring Boot': Leaf,
  AWS: Cloud,
  Docker: Container,
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Subtle glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[96px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Pre-headline badge */}
          <motion.div variants={staggerItem} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm text-foreground-secondary bg-glass border border-glass-border rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Oracle Certified Developer – Professional
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-hero-mobile md:text-hero font-bold text-foreground mb-6 text-balance"
          >
            {heroData.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto mb-10 text-pretty"
          >
            {heroData.subheadline}
          </motion.p>

          {/* Tech Badges */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            {heroData.techBadges.map((badge, index) => {
              const Icon = techIcons[badge.name] || Coffee;
              return (
                <motion.div
                  key={badge.name}
                  variants={iconFloat}
                  animate="animate"
                  style={{ animationDelay: `${index * 0.5}s` }}
                  className={cn(
                    'tech-badge',
                    index === 0 && 'tech-badge-highlight'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{badge.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://drive.google.com/file/d/1Y8a-jTTzHYvQ8cPE_0gaf2I0EKj4Wr8Q/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <Download className="w-4 h-4" />
               Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-foreground-muted">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-5 h-8 border-2 border-foreground-muted/30 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-foreground-muted rounded-full mx-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
