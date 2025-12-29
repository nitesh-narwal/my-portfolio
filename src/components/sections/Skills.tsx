'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Cloud,
  Database,
  Terminal,
  Network,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { cn } from '@/lib/utils';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  backend: Server,
  cloud: Cloud,
  databases: Database,
  devops: Terminal,
  'system-design': Network,
};

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('backend');
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setExpandedSkill(null);
  };

  const toggleSkill = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  return (
    <section id="skills" className="section-padding bg-background-secondary/30">
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
              Skills & Expertise
            </span>
            <h2 className="section-title mt-2">
              Technical proficiency with{' '}
              <span className="text-foreground-secondary">real context</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Every skill listed here comes with where it was used, why it was chosen,
              and what problem it solved.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={staggerItem} className="max-w-4xl mx-auto space-y-4">
            {skillCategories.map((category) => {
              const Icon = categoryIcons[category.id] || Server;
              const isExpanded = expandedCategory === category.id;

              return (
                <div
                  key={category.id}
                  className={cn(
                    'glass-card overflow-hidden transition-all duration-300',
                    isExpanded && 'border-primary/30'
                  )}
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-glass transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          'icon-container transition-colors',
                          isExpanded && 'bg-primary/10 text-primary border-primary/30'
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {category.title}
                        </h3>
                        <p className="text-sm text-foreground-muted mt-0.5">
                          {category.skills.length} skills
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-foreground-muted transition-transform duration-300',
                        isExpanded && 'rotate-180'
                      )}
                    />
                  </button>

                  {/* Skills List */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-glass-border"
                      >
                        <div className="p-4 md:p-6 space-y-2">
                          {category.skills.map((skill) => {
                            const isSkillExpanded = expandedSkill === skill.name;

                            return (
                              <div
                                key={skill.name}
                                className={cn(
                                  'rounded-lg border border-transparent transition-all duration-200',
                                  isSkillExpanded && 'border-glass-border bg-glass'
                                )}
                              >
                                <button
                                  onClick={() => toggleSkill(skill.name)}
                                  className="w-full flex items-center justify-between p-3 text-left hover:bg-glass rounded-lg transition-colors"
                                >
                                  <div className="flex items-center gap-3">
                                    <ChevronRight
                                      className={cn(
                                        'w-4 h-4 text-foreground-muted transition-transform duration-200',
                                        isSkillExpanded && 'rotate-90'
                                      )}
                                    />
                                    <span className="font-medium text-foreground">
                                      {skill.name}
                                    </span>
                                    <span
                                      className={cn(
                                        'text-2xs px-2 py-0.5 rounded-full font-medium uppercase tracking-wider',
                                        skill.level === 'expert' &&
                                          'bg-primary/10 text-primary',
                                        skill.level === 'advanced' &&
                                          'bg-accent/10 text-accent',
                                        skill.level === 'intermediate' &&
                                          'bg-accent-secondary/10 text-accent-secondary'
                                      )}
                                    >
                                      {skill.level}
                                    </span>
                                  </div>
                                </button>

                                <AnimatePresence>
                                  {isSkillExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-3 pb-3 pl-10 space-y-3">
                                        <div className="text-sm text-foreground-secondary">
                                          <span className="text-foreground-muted">
                                            Used for:{' '}
                                          </span>
                                          {skill.usageContext}
                                        </div>
                                        {skill.whyChosen && (
                                          <div className="text-sm text-foreground-secondary">
                                            <span className="text-foreground-muted">
                                              Why chosen:{' '}
                                            </span>
                                            {skill.whyChosen}
                                          </div>
                                        )}
                                        {skill.problemSolved && (
                                          <div className="text-sm text-foreground-secondary">
                                            <span className="text-foreground-muted">
                                              Result:{' '}
                                            </span>
                                            {skill.problemSolved}
                                          </div>
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
