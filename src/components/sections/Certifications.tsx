'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { certifications } from '@/data/content';
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { formatDate } from '@/lib/utils';

export default function Certifications() {
  const featuredCert = certifications.find((c) => c.featured);
  const otherCerts = certifications.filter((c) => !c.featured);

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
          </motion.div>

          {/* Featured Certification */}
          {featuredCert && (
            <motion.div variants={staggerItem} className="max-w-2xl mx-auto mb-8">
              <div className="glass-card p-6 md:p-8 border-primary/30">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Badge/Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                      <Award className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xs font-medium text-accent uppercase tracking-wider px-2 py-1 bg-accent/10 rounded">
                        Featured
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
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
                    >
                      Verify Credential
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* What this certification covers */}
                <div className="mt-6 pt-6 border-t border-glass-border">
                  <h4 className="text-sm font-medium text-foreground mb-3">
                    Skills Validated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'AWS Lambda',
                      'API Gateway',
                      'DynamoDB',
                      'S3',
                      'IAM',
                      'CloudFormation',
                      'CI/CD',
                      'Serverless',
                    ].map((skill) => (
                      <span key={skill} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Certifications (placeholder for future) */}
          {otherCerts.length > 0 && (
            <motion.div
              variants={staggerItem}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
            >
              {otherCerts.map((cert) => (
                <div key={cert.id} className="glass-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-glass border border-glass-border flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-foreground-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{cert.name}</h4>
                      <p className="text-sm text-foreground-muted">{cert.issuer}</p>
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-light mt-2 transition-colors"
                      >
                        Verify
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Future Certifications Placeholder */}
          <motion.div variants={staggerItem} className="mt-8 text-center">
            <p className="text-foreground-muted text-sm">
              More certifications in progress: AWS Solutions Architect Associate
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
