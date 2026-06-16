'use client';

import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import TiltCard from '@/components/TiltCard';
import ShimmerButton from '@/components/ShimmerButton';
import Reveal from '@/components/Reveal';
import { motion } from 'framer-motion';

export default function Security() {
  return (
    <PageTransition>
      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Security and confidentiality</div>
          <h1>Built for sensitive research data.</h1>
          <p className="lede">
            Qualitative research can include confidential consumer, innovation, category and brand information. Qualisense is designed around controlled project access and secure workspace practices.
          </p>
        </div>
      </header>

      <Reveal>
      <section className="section alt">
        <div className="container">
          <div className="cards">
            <TiltCard className="card">
              <h3>Project-level access</h3>
              <p>Organise work by workspace and project so access can be managed around actual research needs.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Confidential handling</h3>
              <p>Support appropriate handling of recordings, transcripts, reports and project conversations.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Client-specific requirements</h3>
              <p>Security and data handling expectations can be reviewed during enterprise onboarding.</p>
            </TiltCard>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section">
        <div className="container content-grid">
          <div>
            <div className="eyebrow">Recommended security page wording</div>
            <h2>Make precise claims only after technical verification.</h2>
            <p className="lede">
              This website intentionally avoids claiming certifications, retention policies or hosting standards that have not yet been formally verified.
            </p>
          </div>
          <TiltCard className="card">
            <h3>Before public launch, confirm</h3>
            <div className="list-check">
              <div>Hosting region and infrastructure</div>
              <div>Encryption in transit and at rest</div>
              <div>Data retention and deletion process</div>
              <div>Access control model</div>
              <div>Sub-processors and model providers</div>
              <div>Security certifications or roadmap</div>
            </div>
          </TiltCard>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div>
              <h2>Have enterprise security requirements?</h2>
              <p>Use the demo form to share your procurement, data residency or confidentiality needs.</p>
            </div>
            <ShimmerButton className="btn btn-primary" href="/pricing#demo">Discuss security</ShimmerButton>
          </motion.div>
        </div>
      </section>
      </Reveal>
    </PageTransition>
  );
}
