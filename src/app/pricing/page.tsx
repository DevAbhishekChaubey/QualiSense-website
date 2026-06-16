'use client';

import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import TiltCard from '@/components/TiltCard';
import ShimmerButton from '@/components/ShimmerButton';
import Reveal from '@/components/Reveal';
import { motion } from 'framer-motion';
import { useRefresh } from '@/contexts/RefreshContext';

export default function Pricing() {
  const { refresh } = useRefresh();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const notice = form.querySelector('.notice') as HTMLElement;
    if (notice) {
      notice.style.display = 'block';
      notice.textContent = 'Thanks — this demo form is ready to connect to your CRM or email workflow.';
    }
  };

  return (
    <PageTransition refresh={refresh}>
      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Pricing</div>
          <h1>Flexible plans for agencies and brand teams.</h1>
          <p className="lede">Choose a project-based module, a full workflow or a multi-project enterprise workspace.</p>
        </div>
      </header>

      <Reveal>
      <section className="section alt">
        <div className="container">
          <div className="cards">
            <TiltCard className="card">
              <h3>Transcription</h3>
              <p>Audio/video to clean transcript output.</p>
              <a className="link-arrow" href="#demo">Request pricing &rarr;</a>
            </TiltCard>
            <TiltCard className="card">
              <h3>Interviewing agent</h3>
              <p>Live multilingual depth interviews with transcript output.</p>
              <a className="link-arrow" href="#demo">Request pricing &rarr;</a>
            </TiltCard>
            <TiltCard className="card">
              <h3>Analysis pack</h3>
              <p>Transcript-to-matrix and report generation.</p>
              <a className="link-arrow" href="#demo">Request pricing &rarr;</a>
            </TiltCard>
            <TiltCard className="card">
              <h3>Full qual workflow</h3>
              <p>Interviewing, transcription, matrix, report and project chat.</p>
              <a className="link-arrow" href="#demo">Request pricing &rarr;</a>
            </TiltCard>
            <TiltCard className="card">
              <h3>Enterprise workspace</h3>
              <p>Multiple projects, cross-project chat and controlled access.</p>
              <a className="link-arrow" href="#demo">Request pricing &rarr;</a>
            </TiltCard>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section" id="demo">
        <div className="container content-grid">
          <div>
            <div className="eyebrow">Book a demo or pilot</div>
            <h2>Bring one real research use case.</h2>
            <p className="lede">Tell us whether you are an agency or an end client, what material you have and what you want to evaluate.</p>
            <div className="list-check">
              <div>Completed transcripts</div>
              <div>Audio/video interviews</div>
              <div>Live interview requirement</div>
              <div>Multiple studies for comparison</div>
            </div>
          </div>
          <motion.form
            className="form-card"
            data-demo
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="form-grid">
              <div className="field">
                <label>Name</label>
                <input required placeholder="Your name" />
              </div>
              <div className="field">
                <label>Work email</label>
                <input required type="email" placeholder="name@company.com" />
              </div>
              <div className="field">
                <label>Organisation</label>
                <input placeholder="Company or agency" />
              </div>
              <div className="field">
                <label>You are</label>
                <select>
                  <option>Research agency</option>
                  <option>Brand / end client</option>
                  <option>Independent researcher</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field full">
                <label>What would you like to test?</label>
                <textarea rows={5} placeholder="Tell us about the project, languages, number of interviews or studies..."></textarea>
              </div>
              <div className="field full">
                <button className="btn btn-primary" type="submit">Request a demo</button>
                <div className="notice"></div>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
      </Reveal>
    </PageTransition>
  );
}
