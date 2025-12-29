'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';
import { contactInfo, navItems } from '@/data/content';
import { cn } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: contactInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: contactInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${contactInfo.email}`, label: 'Email' },
    ...(contactInfo.twitter
      ? [{ icon: Twitter, href: contactInfo.twitter, label: 'Twitter' }]
      : []),
  ];

  return (
    <footer className="relative border-t border-glass-border bg-background-secondary/50">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50 pointer-events-none" />

      <div className="section-container relative">
        <div className="py-12 md:py-16">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-foreground font-semibold text-lg hover:text-primary transition-colors w-fit"
              >
                <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold">
                  N
                </span>
                <span>Nitesh</span>
              </Link>
              <p className="text-foreground-secondary text-sm max-w-xs">
                Backend developer building scalable systems with Java, Spring Boot, and AWS.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-foreground font-medium">Quick Links</h3>
              <ul className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-foreground-secondary hover:text-foreground text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-foreground font-medium">Get in Touch</h3>
              <div className="space-y-2">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-foreground-secondary hover:text-foreground text-sm transition-colors block"
                >
                  {contactInfo.email}
                </a>
                {/* Social Links */}
                <div className="flex items-center gap-3 pt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-foreground-secondary hover:text-foreground hover:bg-glass rounded-lg transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-foreground-muted text-sm">
              © {currentYear} Nitesh. Built with Next.js & Tailwind CSS.
            </p>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className={cn(
                'flex items-center gap-2 text-sm text-foreground-secondary',
                'hover:text-foreground transition-colors group'
              )}
            >
              Back to top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
