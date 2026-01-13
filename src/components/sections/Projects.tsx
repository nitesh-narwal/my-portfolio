'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ChevronDown,
  Shield,
  Zap,
  Target,
  Code,
  Server,
  Database,
  Cloud,
  Settings,
  Wrench,
  ImageIcon,
} from 'lucide-react';
import { featuredProjects } from '@/data/projects';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { Project, TechStackItem } from '@/types';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  backend: Server,
  frontend: Code,
  database: Database,
  cloud: Cloud,
  devops: Settings,
  tools: Wrench,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const groupedTechStack = project.techStack.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) acc[tech.category] = [];
      acc[tech.category].push(tech);
      return acc;
    },
    {} as Record<string, TechStackItem[]>
  );

  return (
    <motion.div
      variants={staggerItem}
      className="glass-card-hover group"
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative w-full h-40 md:h-128 overflow-hidden rounded-t-xl border-b border-glass-border">
          {!imageError ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="w-12 h-12 text-foreground-muted mx-auto mb-2" />
                <p className="text-sm text-foreground-muted">{project.title}</p>
              </div>
            </div>
          )}
          {/* Gradient overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" /> */}
        </div>
      )}

      {/* Main Card Content */}
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xs font-medium text-primary uppercase tracking-wider px-2 py-1 bg-primary/10 rounded">
                {project.category.replace('-', ' ')}
              </span>
              {project.featured && (
                <span className="text-2xs font-medium text-accent uppercase tracking-wider px-2 py-1 bg-accent/10 rounded">
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {project.title}
            </h3>
            <p className="text-foreground-secondary mt-1">{project.tagline}</p>
          </div>

          {/* External Links */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground-secondary hover:text-foreground hover:bg-glass rounded-lg transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground-secondary hover:text-foreground hover:bg-glass rounded-lg transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground-muted mb-2">
            Problem
          </h4>
          <p className="text-foreground-secondary text-sm leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        {/* Key Metrics */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {project.performanceMetrics.slice(0, 4).map((metric) => (
            <div
              key={metric.label}
              className="p-3 bg-glass rounded-lg border border-glass-border"
            >
              <p className="text-lg font-bold text-foreground">{metric.value}</p>
              <p className="text-2xs text-foreground-muted">{metric.label}</p>
            </div>
          ))}
        </div> */}

        {/* Quick Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech.name}
              className="tech-badge"
            >
              {tech.name}
            </span>
          ))}
          {project.techStack.length > 6 && (
            <span className="tech-badge">+{project.techStack.length - 6}</span>
          )}
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
        >
          {isExpanded ? 'Show less' : 'View architecture & decisions'}
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform duration-300',
              isExpanded && 'rotate-180'
            )}
          />
        </button>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-glass-border overflow-hidden"
          >
            <div className="p-6 md:p-8 space-y-8">
              {/* Architecture Description */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                  <Server className="w-5 h-5 text-primary" />
                  Architecture
                </h4>
                <p className="text-foreground-secondary leading-relaxed">
                  {project.architectureDescription}
                </p>
              </div>

              {/* Tech Stack with Reasoning */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <Code className="w-5 h-5 text-primary" />
                  Tech Stack & Reasoning
                </h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {Object.entries(groupedTechStack).map(([category, techs]) => {
                    const Icon = categoryIcons[category] || Code;
                    return (
                      <div key={category} className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground-muted capitalize">
                          <Icon className="w-4 h-4" />
                          {category}
                        </div>
                        {techs.map((tech) => (
                          <div
                            key={tech.name}
                            className="p-3 bg-glass rounded-lg border border-glass-border"
                          >
                            <p className="font-medium text-foreground text-sm">
                              {tech.name}
                            </p>
                            <p className="text-foreground-secondary text-xs mt-1">
                              {tech.reason}
                            </p>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Decisions */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  Key Decisions & Trade-offs
                </h4>
                <div className="space-y-4">
                  {project.keyDecisions.map((decision, index) => (
                    <div
                      key={decision.title}
                      className="p-4 bg-glass rounded-lg border border-glass-border"
                    >
                      <h5 className="font-medium text-foreground mb-2">
                        {decision.title}
                      </h5>
                      <p className="text-foreground-secondary text-sm mb-2">
                        {decision.description}
                      </p>
                      <p className="text-foreground-muted text-sm">
                        <span className="text-accent-secondary font-medium">
                          Trade-off:{' '}
                        </span>
                        {decision.tradeoffs}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Features */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  Security Considerations
                </h4>
                <ul className="grid gap-2 md:grid-cols-2">
                  {project.securityFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-foreground-secondary"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  Outcomes
                </h4>
                <ul className="grid gap-2 md:grid-cols-2">
                  {project.outcomes.map((outcome, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-foreground-secondary"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
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
              Featured Projects
            </span>
            <h2 className="section-title mt-2">
              Production-ready systems,{' '}
              <span className="text-foreground-secondary">
                documented decisions
              </span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Each project includes architecture, trade-offs, security considerations,
              and measurable outcomes.
            </p>
          </motion.div>

          {/* Projects List */}
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
