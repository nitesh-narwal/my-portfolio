'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle, BookOpen, BadgeCheck, GraduationCap } from 'lucide-react';
import { certifications } from '@/data/content';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { formatDate } from '@/lib/utils';

export default function Certifications() {
  const verifiedCerts = certifications.filter((c) => c.certificationType === 'verified');
  const courseCerts = certifications.filter((c) => c.certificationType === 'course');
  const featuredCert = verifiedCerts.find((c) => c.featured);
  const otherVerifiedCerts = verifiedCerts.filter((c) => !c.featured);

  return (
    <section id="certifications" className="section-padding">
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
              Certifications
            </span>
            <h2 className="section-title mt-2">
              Validated expertise,{' '}
              <span className="text-foreground-secondary">industry recognized</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Professional certifications and continuous learning through industry-recognized courses.
            </p>
          </motion.div>

          {/* Verified Certifications Section */}
          <motion.div variants={staggerItem} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Professional Certifications</h3>
                <p className="text-sm text-foreground-muted">Verified by official certification bodies</p>
              </div>
            </div>

            {/* Featured Certification */}
            {featuredCert && (
              <div className="max-w-3xl mx-auto mb-8">
                <div className="glass-card p-6 md:p-8 border-primary/30 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Badge/Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
                        <Award className="w-12 h-12 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xs font-medium text-accent uppercase tracking-wider px-2 py-1 bg-accent/10 rounded">
                          Featured
                        </span>
                        <span className="text-2xs font-medium text-primary uppercase tracking-wider px-2 py-1 bg-primary/10 rounded">
                          Verified
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {featuredCert.name}
                      </h3>
                      <p className="text-foreground-secondary mb-4">
                        {featuredCert.issuer}
                      </p>

                      {/* Details */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>Issued: {formatDate(featuredCert.issueDate)}</span>
                        </div>
                        {featuredCert.expiryDate && (
                          <div className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            <span>Valid until: {formatDate(featuredCert.expiryDate)}</span>
                          </div>
                        )}
                        {!featuredCert.expiryDate && (
                          <div className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            <span></span>
                          </div>
                        )}
                      </div>

                      {/* Credential ID */}
                      <p className="text-sm text-foreground-muted mb-4">
                        Credential ID:{' '}
                        <span className="font-mono text-foreground-secondary">
                          {featuredCert.credentialId}
                        </span>
                      </p>

                      {/* Verify Button */}
                      <a
                        href={featuredCert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm font-medium"
                      >
                        Verify Credential
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Skills Validated */}
                  {featuredCert.skills && featuredCert.skills.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-glass-border relative">
                      <h4 className="text-sm font-medium text-foreground mb-3">
                        Skills Validated
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredCert.skills.map((skill) => (
                          <span key={skill} className="tech-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Other Verified Certifications */}
            {otherVerifiedCerts.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
                {otherVerifiedCerts.map((cert) => (
                  <div key={cert.id} className="glass-card p-5 border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <Award className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xs font-medium text-primary uppercase tracking-wider px-1.5 py-0.5 bg-primary/10 rounded">
                            Verified
                          </span>
                        </div>
                        <h4 className="font-semibold text-foreground text-sm leading-tight mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-foreground-muted">{cert.issuer}</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-foreground-muted">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(cert.issueDate)}</span>
                        </div>
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-light mt-3 transition-colors font-medium"
                        >
                          Verify
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Course Certificates Section */}
          <motion.div variants={staggerItem}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Course Certificates</h3>
                <p className="text-sm text-foreground-muted">Continuous learning through online platforms</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {courseCerts.map((cert) => (
                <div key={cert.id} className="glass-card p-5 hover:border-accent/30 transition-colors group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <BookOpen className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm leading-tight mb-1 line-clamp-2">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-foreground-muted flex items-center gap-1">
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-accent/10 text-accent rounded text-2xs font-medium">
                          {cert.issuer}
                        </span>
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-foreground-muted">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(cert.issueDate)}</span>
                      </div>
                      
                      {/* Skills learned */}
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {cert.skills.slice(0, 3).map((skill) => (
                            <span key={skill} className="text-2xs px-1.5 py-0.5 bg-glass border border-glass-border rounded text-foreground-muted">
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="text-2xs px-1.5 py-0.5 text-foreground-muted">
                              +{cert.skills.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                      
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-secondary mt-3 transition-colors font-medium"
                      >
                        View Certificate
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* In Progress Note */}
          {/* <motion.div variants={staggerItem} className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-glass border border-glass-border rounded-full">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <p className="text-foreground-muted text-sm">
                Currently preparing for: <span className="text-foreground font-medium">Oracle Certified Developer Professional</span>
              </p>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
