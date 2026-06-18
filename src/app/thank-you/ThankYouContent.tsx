'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import ShimmerButton from '@/components/ShimmerButton';
import { stagger, fadeUp } from '@/lib/motion';

export default function ThankYouContent() {
  return (
    <PageTransition>
      <section
        aria-labelledby="thankyou-heading"
        style={{
          minHeight: 'calc(100vh - 90px)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{
              maxWidth: 560,
              margin: '0 auto',
              textAlign: 'center',
              padding: '80px 0',
            }}
          >
            {/* Check icon */}
            <motion.div variants={fadeUp} aria-hidden="true">
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(17,143,131,.12), rgba(57,120,212,.12))',
                border: '1.5px solid rgba(17,143,131,.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 28px',
              }}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="eyebrow" style={{ justifyContent: 'center' }}>
              Inquiry received
            </motion.div>

            {/* Heading */}
            <motion.h1
              id="thankyou-heading"
              variants={fadeUp}
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              Thank You!
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--text)',
                margin: '0 0 12px',
              }}
            >
              We have received your inquiry successfully.
            </motion.p>

            {/* Body */}
            <motion.p
              variants={fadeUp}
              className="lede"
              style={{ fontSize: '1rem', marginBottom: 36 }}
            >
              Our team will review your request and get back to you shortly.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <ShimmerButton className="btn btn-primary" href="/">
                Back to Home
              </ShimmerButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
