'use client';

import { motion } from 'framer-motion';
import { Server, Cloud, Zap, Shield } from 'lucide-react';
import { aboutData } from '@/data/content';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { cn } from '@/lib/utils';

const highlightIcons = [Server, Cloud, Zap, Shield];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-section pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column - Main Content */}
          <div>
            <motion.div variants={staggerItem}>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                About Me
              </span>
              <h2 className="section-title mt-2">
                Engineering-first mindset,{' '}
                <span className="text-foreground-secondary">
                  production-ready solutions
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="mt-6 space-y-4 text-foreground-secondary leading-relaxed"
            >
              {aboutData.summary.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={staggerItem}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {aboutData.highlights.map((highlight, index) => {
                const Icon = highlightIcons[index] || Server;
                return (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">{highlight}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <motion.div variants={staggerItem} className="relative">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Journey
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-3 bottom-3 w-px bg-glass-border" />

                <div className="space-y-6">
                  {aboutData.timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative pl-8"
                    >
                      {/* Timeline dot */}
                      <div
                        className={cn(
                          'absolute left-0 top-1.5 w-4 h-4 rounded-full border-2',
                          index === aboutData.timeline.length - 1
                            ? 'bg-primary border-primary shadow-glow'
                            : 'bg-background border-glass-border'
                        )}
                      />

                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <span
                          className={cn(
                            'text-sm font-mono',
                            index === aboutData.timeline.length - 1
                              ? 'text-primary'
                              : 'text-foreground-muted'
                          )}
                        >
                          {item.year}
                        </span>
                        <span
                          className={cn(
                            'text-sm',
                            index === aboutData.timeline.length - 1
                              ? 'text-foreground'
                              : 'text-foreground-secondary'
                          )}
                        >
                          {item.event}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
