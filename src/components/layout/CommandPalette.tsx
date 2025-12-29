'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  User,
  Briefcase,
  Code,
  Mail,
  FileText,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Layers,
} from 'lucide-react';
import { navItems, contactInfo } from '@/data/content';
import { projects } from '@/data/projects';
import { cn, scrollToElement, getModifierKey } from '@/lib/utils';
import { modalVariants, backdropVariants } from '@/lib/animations';
import { useFocusTrap } from '@/hooks';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const modifierKey = getModifierKey();

  // Focus trap for accessibility
  useFocusTrap(containerRef, isOpen);

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset search when closing
  useEffect(() => {
    if (!isOpen) {
      setSearch('');
    }
  }, [isOpen]);

  const handleSelect = useCallback(
    (callback: () => void) => {
      callback();
      onClose();
    },
    [onClose]
  );

  const navigateTo = (sectionId: string) => {
    handleSelect(() => scrollToElement(sectionId));
  };

  const openLink = (url: string) => {
    handleSelect(() => window.open(url, '_blank'));
  };

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    about: User,
    skills: Code,
    projects: Briefcase,
    'system-design': Layers,
    experience: Briefcase,
    contact: Mail,
    certifications: Award,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
          />

          {/* Command Dialog */}
          <motion.div
            ref={containerRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            className="fixed left-1/2 top-[20%] z-[101] w-full max-w-lg -translate-x-1/2"
          >
            <Command
              className="glass-card border-glass-highlight overflow-hidden shadow-glass-lg"
              loop
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 border-b border-glass-border">
                <Search className="w-5 h-5 text-foreground-muted" />
                <Command.Input
                  value={search}
                  onValueChange={setSearch}
                  placeholder="Search for anything..."
                  className="flex-1 py-4 bg-transparent text-foreground placeholder:text-foreground-muted outline-none"
                />
                <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs text-foreground-muted bg-glass rounded border border-glass-border">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <Command.List className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
                <Command.Empty className="py-8 text-center text-foreground-secondary">
                  No results found.
                </Command.Empty>

                {/* Navigation */}
                <Command.Group heading="Navigation" className="px-2 py-1.5">
                  <span className="text-xs font-medium text-foreground-muted uppercase tracking-wider">
                    Navigation
                  </span>
                  {navItems.map((item) => {
                    const Icon = iconMap[item.id] || Code;
                    return (
                      <Command.Item
                        key={item.id}
                        value={item.label}
                        onSelect={() => navigateTo(item.id)}
                        className={cn(
                          'flex items-center gap-3 px-3 py-2.5 mt-1 rounded-lg cursor-pointer',
                          'text-foreground-secondary hover:text-foreground',
                          'data-[selected=true]:bg-glass data-[selected=true]:text-foreground',
                          'transition-colors'
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Command.Item>
                    );
                  })}
                </Command.Group>

                {/* Projects */}
                <Command.Group heading="Projects" className="px-2 py-1.5 mt-4">
                  <span className="text-xs font-medium text-foreground-muted uppercase tracking-wider">
                    Projects
                  </span>
                  {projects.slice(0, 4).map((project) => (
                    <Command.Item
                      key={project.id}
                      value={`${project.title} ${project.tagline}`}
                      onSelect={() => navigateTo('projects')}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2.5 mt-1 rounded-lg cursor-pointer',
                        'text-foreground-secondary hover:text-foreground',
                        'data-[selected=true]:bg-glass data-[selected=true]:text-foreground',
                        'transition-colors'
                      )}
                    >
                      <Briefcase className="w-4 h-4" />
                      <div className="flex-1 min-w-0">
                        <p className="truncate">{project.title}</p>
                        <p className="text-xs text-foreground-muted truncate">
                          {project.tagline}
                        </p>
                      </div>
                    </Command.Item>
                  ))}
                </Command.Group>

                {/* External Links */}
                <Command.Group heading="External" className="px-2 py-1.5 mt-4">
                  <span className="text-xs font-medium text-foreground-muted uppercase tracking-wider">
                    External Links
                  </span>
                  <Command.Item
                    value="GitHub Profile"
                    onSelect={() => openLink(contactInfo.github)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 mt-1 rounded-lg cursor-pointer',
                      'text-foreground-secondary hover:text-foreground',
                      'data-[selected=true]:bg-glass data-[selected=true]:text-foreground',
                      'transition-colors'
                    )}
                  >
                    <Github className="w-4 h-4" />
                    <span className="flex-1">GitHub Profile</span>
                    <ExternalLink className="w-3 h-3 text-foreground-muted" />
                  </Command.Item>
                  <Command.Item
                    value="LinkedIn Profile"
                    onSelect={() => openLink(contactInfo.linkedin)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 mt-1 rounded-lg cursor-pointer',
                      'text-foreground-secondary hover:text-foreground',
                      'data-[selected=true]:bg-glass data-[selected=true]:text-foreground',
                      'transition-colors'
                    )}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="flex-1">LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-foreground-muted" />
                  </Command.Item>
                  <Command.Item
                    value="Download Resume"
                    onSelect={() => openLink(contactInfo.resume)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 mt-1 rounded-lg cursor-pointer',
                      'text-foreground-secondary hover:text-foreground',
                      'data-[selected=true]:bg-glass data-[selected=true]:text-foreground',
                      'transition-colors'
                    )}
                  >
                    <FileText className="w-4 h-4" />
                    <span className="flex-1">Download Resume</span>
                    <ExternalLink className="w-3 h-3 text-foreground-muted" />
                  </Command.Item>
                </Command.Group>
              </Command.List>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-glass-border text-xs text-foreground-muted">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-glass rounded border border-glass-border">
                      ↑↓
                    </kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-glass rounded border border-glass-border">
                      ↵
                    </kbd>
                    Select
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-glass rounded border border-glass-border">
                    {modifierKey}K
                  </kbd>
                  Toggle
                </span>
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
