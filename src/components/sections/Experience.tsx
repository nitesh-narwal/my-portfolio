'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { experiences } from '@/data/content';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { formatDate, cn } from '@/lib/utils';

const typeColors: Record<string, string> = {
  'full-time': 'bg-primary/10 text-primary',
  internship: 'bg-accent/10 text-accent',
  contract: 'bg-accent-secondary/10 text-accent-secondary',
  freelance: 'bg-accent-tertiary/10 text-accent-tertiary',
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background-secondary/30">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Experience
            </span>
            <h2 className="section-title mt-2">
              Impact over duration,{' '}
              <span className="text-foreground-secondary">outcomes over tasks</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Each role focused on delivering measurable value through engineering excellence.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-glass-border transform md:-translate-x-1/2" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={staggerItem}
                  className={cn(
                    'relative mb-8 last:mb-0',
                    'md:w-1/2',
                    index % 2 === 0 ? 'md:pr-8 md:ml-0' : 'md:pl-8 md:ml-auto'
                  )}
                >
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      'absolute top-6 w-4 h-4 rounded-full border-2 bg-background',
                      'left-0 -translate-x-1/2',
                      'md:left-auto',
                      index % 2 === 0
                        ? 'md:right-0 md:translate-x-1/2'
                        : 'md:left-0 md:-translate-x-1/2',
                      index === 0 ? 'border-primary shadow-glow' : 'border-glass-border'
                    )}
                  />

                  {/* Card */}
                  <div className="ml-6 md:ml-0 glass-card p-5 md:p-6">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={cn(
                              'text-2xs font-medium uppercase tracking-wider px-2 py-0.5 rounded',
                              typeColors[exp.type]
                            )}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-foreground-secondary">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground-secondary mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-sm"
                        >
                          <ArrowUpRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground-secondary">
                            {achievement.metric && (
                              <span className="font-semibold text-foreground">
                                {achievement.metric}:{' '}
                              </span>
                            )}
                            {achievement.description}
                            {achievement.impact && (
                              <span className="text-foreground-muted">
                                {' '}
                                — {achievement.impact}
                              </span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
