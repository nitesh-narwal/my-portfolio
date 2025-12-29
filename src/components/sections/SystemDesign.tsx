'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  ArrowRight,
  Shield,
  TrendingUp,
  DollarSign,
  RefreshCw,
  CheckCircle,
} from 'lucide-react';
import { systemDesigns } from '@/data/system-design';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { cn } from '@/lib/utils';

const componentTypeColors: Record<string, string> = {
  service: 'bg-primary/10 text-primary border-primary/30',
  database: 'bg-accent/10 text-accent border-accent/30',
  cache: 'bg-accent-secondary/10 text-accent-secondary border-accent-secondary/30',
  queue: 'bg-accent-tertiary/10 text-accent-tertiary border-accent-tertiary/30',
  gateway: 'bg-primary/10 text-primary border-primary/30',
  storage: 'bg-accent/10 text-accent border-accent/30',
  cdn: 'bg-primary-light/10 text-primary-light border-primary-light/30',
};

export default function SystemDesign() {
  const [activeDesign, setActiveDesign] = useState(systemDesigns[0].id);
  const currentDesign = systemDesigns.find((sd) => sd.id === activeDesign)!;

  return (
    <section id="system-design" className="section-padding bg-background-secondary/30">
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
              System Design
            </span>
            <h2 className="section-title mt-2">
              How I think about{' '}
              <span className="text-foreground-secondary">architecture</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Scalability, reliability, security, and cost—the four pillars of every
              architecture decision.
            </p>
          </motion.div>

          {/* Design Selector */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {systemDesigns.map((design) => (
              <button
                key={design.id}
                onClick={() => setActiveDesign(design.id)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                  activeDesign === design.id
                    ? 'bg-primary text-white'
                    : 'bg-glass text-foreground-secondary hover:text-foreground border border-glass-border hover:border-glass-highlight'
                )}
              >
                {design.title}
              </button>
            ))}
          </motion.div>

          {/* Active Design Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDesign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Overview */}
              <div className="glass-card p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {currentDesign.title}
                </h3>
                <p className="text-foreground-secondary leading-relaxed">
                  {currentDesign.description}
                </p>
              </div>

              {/* Architecture Components */}
              <div className="glass-card p-6 md:p-8">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
                  <Layers className="w-5 h-5 text-primary" />
                  System Components
                </h4>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {currentDesign.components.map((component) => (
                    <div
                      key={component.name}
                      className={cn(
                        'p-4 rounded-lg border',
                        componentTypeColors[component.type]
                      )}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{component.name}</span>
                        <span className="text-2xs uppercase tracking-wider opacity-70">
                          {component.type}
                        </span>
                      </div>
                      <p className="text-sm opacity-80 mb-2">
                        {component.description}
                      </p>
                      {component.awsService && (
                        <p className="text-xs opacity-60">
                          AWS: {component.awsService}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid Layout for Approach Sections */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Scalability */}
                <div className="glass-card p-6">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Scalability Approach
                  </h4>
                  <div className="text-foreground-secondary text-sm leading-relaxed whitespace-pre-line">
                    {currentDesign.scalabilityApproach}
                  </div>
                </div>

                {/* Reliability */}
                <div className="glass-card p-6">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                    <RefreshCw className="w-5 h-5 text-primary" />
                    Reliability Features
                  </h4>
                  <ul className="space-y-2">
                    {currentDesign.reliabilityFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-foreground-secondary"
                      >
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Security */}
                <div className="glass-card p-6">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                    Security Measures
                  </h4>
                  <ul className="space-y-2">
                    {currentDesign.securityMeasures.map((measure, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-foreground-secondary"
                      >
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {measure}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cost Optimization */}
                <div className="glass-card p-6">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Cost Optimizations
                  </h4>
                  <ul className="space-y-2">
                    {currentDesign.costOptimizations.map((optimization, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-foreground-secondary"
                      >
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {optimization}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Architecture Evolution */}
              <div className="glass-card p-6 md:p-8">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  Architecture Evolution
                </h4>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-8 bottom-8 w-px bg-glass-border hidden md:block" />

                  <div className="grid gap-6 md:grid-cols-3">
                    {currentDesign.evolutionStages.map((stage, index) => (
                      <div key={stage.version} className="relative">
                        {/* Timeline dot */}
                        <div className="hidden md:flex absolute left-0 top-0 w-8 h-8 rounded-full bg-background border-2 border-primary items-center justify-center text-xs font-bold text-primary">
                          {stage.version}
                        </div>

                        <div className="md:ml-12 p-4 bg-glass rounded-lg border border-glass-border">
                          <div className="flex items-center gap-2 mb-3 md:hidden">
                            <span className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                              {stage.version}
                            </span>
                            <h5 className="font-semibold text-foreground">
                              {stage.title}
                            </h5>
                          </div>
                          <h5 className="font-semibold text-foreground mb-2 hidden md:block">
                            {stage.title}
                          </h5>
                          <ul className="space-y-1 mb-3">
                            {stage.changes.map((change, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-foreground-secondary"
                              >
                                <span className="w-1 h-1 bg-foreground-muted rounded-full mt-2 flex-shrink-0" />
                                {change}
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs text-foreground-muted italic">
                            Why: {stage.reason}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
