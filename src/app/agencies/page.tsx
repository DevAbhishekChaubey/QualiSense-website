'use client';

import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import TiltCard from '@/components/TiltCard';
import ShimmerButton from '@/components/ShimmerButton';
import Reveal from '@/components/Reveal';
import { motion } from 'framer-motion';
import { useRefresh } from '@/contexts/RefreshContext';
import { ctaInView } from '@/lib/motion';

export default function Agencies() {
  const { refresh } = useRefresh();
  return (
    <PageTransition refresh={refresh}>
      <header className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / For Research Agencies
          </div>
          <div className="eyebrow">Qualisense for agencies</div>
          <h1>A force multiplier for researchers.</h1>
          <p className="lede">
            Expand your team&rsquo;s capacity across interviewing, transcription, matrix creation, reporting and follow-up—while researchers stay focused on interpretation, storytelling and strategic thinking.
          </p>
          <div className="hero-actions">
            <ShimmerButton className="btn btn-primary" href="/pricing#demo">Start an agency pilot</ShimmerButton>
            <ShimmerButton className="btn btn-secondary" href="/product">See the platform</ShimmerButton>
          </div>
        </div>
      </header>

      <Reveal>
      <section className="section alt">
        <div className="container content-grid">
          <div>
            <div className="eyebrow">The agency challenge</div>
            <h2>The hidden cost of qualitative delivery is manual effort.</h2>
            <p className="lede">
              Research teams spend hours checking transcripts, coordinating translation, building analysis grids, reviewing long conversations and preparing first-cut reports.
            </p>
          </div>
          <TiltCard className="card sticky-card">
            <h3>Where Qualisense reduces load</h3>
            <div className="list-check">
              <div>Transcription and translation</div>
              <div>Analysis grid creation</div>
              <div>Cross-respondent synthesis</div>
              <div>First-cut reporting</div>
              <div>Client follow-up questions</div>
              <div>Scalable multilingual interviews</div>
            </div>
          </TiltCard>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Flexible delivery models</div>
              <h2>Use only the support your project needs.</h2>
            </div>
          </div>
          <div className="cards">
            <TiltCard className="card">
              <h3>Transcription only</h3>
              <p>Clean transcripts from audio or video interviews.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Live interviewing agent</h3>
              <p>Multilingual depth interviews with contextual probing and transcript output.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Transcription + matrix + report</h3>
              <p>From raw recordings to structured analysis and insight reporting.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Matrix + report from transcripts</h3>
              <p>Upload transcripts and accelerate structured analysis.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Project chat</h3>
              <p>Answer internal and client queries from the study workspace.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Cross-project chat</h3>
              <p>Query selected studies together to identify recurring patterns and learnings.</p>
            </TiltCard>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section alt" id="interviewing">
        <div className="container content-grid">
          <div>
            <div className="eyebrow">Live interviewing</div>
            <h2>A scalable way to conduct depth interviews.</h2>
            <p className="lede">
              Qualisense follows the discussion guide, listens to respondent answers and probes naturally where more depth is required.
            </p>
            <div className="list-check">
              <div>Supports multiple languages</div>
              <div>Maintains consistency across interviews</div>
              <div>Generates transcripts automatically</div>
              <div>Useful for exploratory, evaluative and follow-up work</div>
            </div>
          </div>
          <TiltCard className="card">
            <span className="badge">Adaptive, contextual probing</span>
            <h3 style={{ marginTop: 18 }}>Interviews that follow the respondent—not just the script.</h3>
            <p>
              The agent sustains a natural conversational flow, listens for incomplete or revealing answers and probes for the depth a skilled researcher would expect.
            </p>
          </TiltCard>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Business impact</div>
              <h2>Multiply research capacity without multiplying manual load.</h2>
            </div>
          </div>
          <div className="cards">
            <TiltCard className="card">
              <h3>Faster timelines</h3>
              <p>Reduce the time between fieldwork, analysis and first client outputs.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Better project margins</h3>
              <p>Lower repetitive delivery effort while preserving senior thinking.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Consistent quality</h3>
              <p>Bring a repeatable analysis structure across projects and researchers.</p>
            </TiltCard>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">How we are different</div>
              <h2>A delivery engine, not an isolated AI tool.</h2>
            </div>
          </div>
          <div className="compare">
            <div className="compare-col">
              <h3>Typical tools</h3>
              <div className="compare-row">Automate one research task</div>
              <div className="compare-row">Produce quick summaries</div>
              <div className="compare-row">Stop at project delivery</div>
              <div className="compare-row">Work study by study</div>
            </div>
            <div className="compare-col">
              <h3>Qualisense</h3>
              <div className="compare-row">Supports the full qual workflow</div>
              <div className="compare-row">Builds a matrix before synthesis</div>
              <div className="compare-row">Keeps projects queryable</div>
              <div className="compare-row">Enables cross-project intelligence</div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={ctaInView.initial}
            whileInView={ctaInView.whileInView}
            viewport={{ once: true }}
            transition={ctaInView.transition}
          >
            <div>
              <div className="eyebrow">Agency pilot</div>
              <h2>Test Qualisense on one completed or live project.</h2>
              <p>
                Upload 5–10 interviews, generate the matrix and report, then use project chat to compare output against your current workflow.
              </p>
            </div>
            <div className="cta-actions">
              <ShimmerButton className="btn btn-primary" href="/pricing#demo">Start a pilot</ShimmerButton>
            </div>
          </motion.div>
        </div>
      </section>
      </Reveal>
    </PageTransition>
  );
}
