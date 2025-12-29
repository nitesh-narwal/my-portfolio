'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  GamepadIcon,
} from 'lucide-react';
import { contactInfo } from '@/data/content';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { cn, isValidEmail } from '@/lib/utils';

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormState({
        status: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      setFormState({
        status: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setFormState({ status: 'loading', message: '' });

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In production, you would send this to your API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setFormState({
        status: 'success',
        message: 'Thanks for reaching out! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormState({
        status: 'error',
        message: 'Something went wrong. Please try again or email me directly.',
      });
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${contactInfo.email}`,
      value: contactInfo.email,
    },
    {
      icon: Github,
      label: 'GitHub',
      href: contactInfo.github,
      value: 'https://github.com/mr-narwal',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: contactInfo.linkedin,
      value: 'https://www.linkedin.com/in/nitesh-narwal-b896a218b/#main-content',
    },
  ];

  return (
    <section id="contact" className="section-padding">
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
              Get in Touch
            </span>
            <h2 className="section-title mt-2">
              Let's build something{' '}
              <span className="text-foreground-secondary">great together</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Open to backend engineering roles, architecture discussions, and
              interesting projects.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Info */}
              <motion.div variants={staggerItem} className="md:col-span-2 space-y-6">
                {/* Quick Links */}
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.label !== 'Email' ? '_blank' : undefined}
                      rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 glass-card hover:border-glass-highlight transition-all duration-200 group"
                    >
                      <div className="icon-container group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground-muted">{link.label}</p>
                        <p className="text-foreground group-hover:text-primary transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Resume Download */}
                <a
                  href={contactInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                >
                  <div className="icon-container bg-primary/10 text-primary border-primary/30">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">Download</p>
                    <p className="text-foreground font-medium">Resume (PDF)</p>
                  </div>
                </a>

                {/* Availability Status */}
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-accent">
                      Available for opportunities
                    </span>
                  </div>
                  <p className="text-sm text-foreground-secondary">
                    Currently looking for full-time backend engineering roles.
                    Open to remote and hybrid positions.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={staggerItem} className="md:col-span-3">
                <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
                  <div className="space-y-5">
                    {/* Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-glass border border-glass-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-glass border border-glass-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-glass border border-glass-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="Job opportunity / Project discussion / Other"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-glass border border-glass-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>

                    {/* Status Message */}
                    {formState.status !== 'idle' && formState.status !== 'loading' && (
                      <div
                        className={cn(
                          'flex items-center gap-2 p-3 rounded-lg text-sm',
                          formState.status === 'success' &&
                            'bg-accent/10 text-accent',
                          formState.status === 'error' &&
                            'bg-red-500/10 text-red-400'
                        )}
                      >
                        {formState.status === 'success' ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <AlertCircle className="w-4 h-4" />
                        )}
                        {formState.message}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formState.status === 'loading'}
                      className={cn(
                        'w-full btn-primary justify-center',
                        formState.status === 'loading' && 'opacity-70 cursor-not-allowed'
                      )}
                    >
                      {formState.status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
