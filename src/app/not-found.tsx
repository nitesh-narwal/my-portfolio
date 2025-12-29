'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-lg mx-auto text-center"
        >
          {/* 404 Number */}
          <motion.div variants={staggerItem} className="mb-8">
            <span className="text-8xl md:text-9xl font-bold gradient-text opacity-50">
              404
            </span>
          </motion.div>

          {/* Message */}
          <motion.h1
            variants={staggerItem}
            className="text-2xl md:text-3xl font-bold text-foreground mb-4"
          >
            Page not found
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-foreground-secondary mb-8"
          >
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem} className="mt-12">
            <p className="text-sm text-foreground-muted mb-4">Quick links:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Projects', 'Skills', 'Experience', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`/#${link.toLowerCase()}`}
                  className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
