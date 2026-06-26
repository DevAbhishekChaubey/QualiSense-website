'use client';

import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import TextGenerate from '@/components/TextGenerate';
import TiltCard from '@/components/TiltCard';
import ShimmerButton from '@/components/ShimmerButton';
import StatCard from '@/components/StatCard';
import CtaSection from '@/components/CtaSection';
import QuoteSection from '@/components/QuoteSection';
import { motion } from 'framer-motion';
import { stagger, fadeUp, slideInView } from '@/lib/motion';

export default function Home() {
  return (
    <PageTransition>
      <header className="hero">
        <div className="container hero-grid">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="eyebrow">Qualitative research, amplified</motion.div>
            <motion.h1 variants={fadeUp}>
              <TextGenerate text="A force multiplier for researchers." /><br />
              <span className="hero-highlight"><TextGenerate text="Research intelligence for every marketer." /></span>
            </motion.h1>
            <motion.p variants={fadeUp} className="lede">
              Conduct interviews, structure conversations and query learning across studies, all in one workspace.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-actions">
              <ShimmerButton className="btn btn-primary" href="/agencies">Explore for agencies</ShimmerButton>
              <ShimmerButton className="btn btn-secondary" href="/brands">Explore for brand teams</ShimmerButton>
            </motion.div>
            <motion.div variants={fadeUp} className="hero-proof">
              <span>Multi-language live interviewing</span>
              <span>Structured matrix-led analysis</span>
              <span>Cross-project research chat</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={slideInView.initial}
            animate={slideInView.whileInView}
            transition={{ ...slideInView.transition, delay: 0.15 }}
          >
            <div className="dashboard">
              <div className="window-bar">
                <i className="dot"></i>
                <i className="dot"></i>
                <i className="dot"></i>
                <span style={{ marginLeft: 12, fontSize: '.78rem', color: '#5f7183' }}>Qualisense — Category exploration</span>
              </div>
              <div className="dashboard-grid">
                <aside className="sidebar">
                  <div style={{ padding: 0, fontSize: '.72rem', color: '#5f7183', fontWeight: 600, marginBottom: 4 }}>PROJECTS</div>
                  <div className="side-item active">Breakfast study</div>
                  <div className="side-item">Beverage 2025</div>
                  <div className="side-item">Snack concept</div>
                  <div className="side-item">Loyalty prog.</div>
                  <div className="side-item">Premium range</div>
                </aside>
                <main className="canvas">
                  <div className="canvas-top">
                    <div>
                      <small style={{ color: '#8fa2b5' }}>Workspace / Project</small>
                      <strong style={{ display: 'block' }}>Breakfast study</strong>
                    </div>
                    <span className="badge">12 interviews</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                    <span style={{ padding: '5px 10px', borderRadius: 999, fontSize: '.72rem', background: 'rgba(17,143,131,.1)', color: 'var(--primary)', fontWeight: 600 }}>All questions</span>
                    <span style={{ padding: '5px 10px', borderRadius: 999, fontSize: '.72rem', background: 'transparent', color: '#5f7183' }}>Barriers</span>
                    <span style={{ padding: '5px 10px', borderRadius: 999, fontSize: '.72rem', background: 'transparent', color: '#5f7183' }}>Motivations</span>
                    <span style={{ padding: '5px 10px', borderRadius: 999, fontSize: '.72rem', background: 'transparent', color: '#5f7183' }}>Habits</span>
                  </div>
                  <div className="chat-thread">
                    <div className="msg msg-ai">
                      <strong style={{ fontSize: '.78rem' }}>Cross-question theme</strong>
                      <p>Convenience drives trial, but trust and perceived quality determine repeat use.</p>
                    </div>
                    <div className="msg msg-human">
                      <p><strong>Q:</strong> How do premium buyers differ?</p>
                    </div>
                    <div className="msg msg-ai">
                      <p>Premium buyers prioritise ingredient provenance over price. They are 2.3× more likely to mention &ldquo;natural&rdquo; and &ldquo;ethical sourcing.&rdquo;</p>
                      <div className="typing-dots"><span></span><span></span><span></span></div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div className="float-card">
              <small>Ask across 3 studies</small>
              <strong>What has changed over time?</strong>
              <span style={{ fontSize: '.86rem', color: '#5f7183' }}>Price concern has reduced; trust and product authenticity now dominate.</span>
            </div>
          </motion.div>
        </div>
      </header>

      <Reveal>
      <section>
        <div className="container stat-row">
          <StatCard label="Natural depth" desc="natural, adaptive probing" delay={0} />
          <StatCard label="1 → many" desc="single and cross-project chat" delay={0.05} />
          <StatCard value={4} desc="flexible product modules" delay={0.1} />
          <StatCard label="Always on" desc="insights beyond the final report" delay={0.15} />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="section-head">
              <div>
                <div className="eyebrow">One platform. Two kinds of leverage.</div>
                <h2><TextGenerate text="More capacity for researchers. More intelligence for marketers." /></h2>
              </div>
              <p>
                Agencies deliver faster. Brand teams keep every study searchable.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="audience-grid">
              <TiltCard className="audience">
                <h3>A force multiplier for researchers</h3>
                <p>
                  Reduce delivery effort while researchers retain control of interpretation.
                </p>
                <ul>
                  <li>Faster delivery</li>
                  <li>More time for senior thinking</li>
                  <li>Multilingual interviewing</li>
                  <li>Consistent analysis</li>
                </ul>
                <Link className="link-arrow" href="/agencies">See the agency solution &rarr;</Link>
              </TiltCard>
              <TiltCard className="audience">
                <h3>Research intelligence for every marketer</h3>
                <p>
                  Give teams direct access to searchable, reusable learning.
                </p>
                <ul>
                  <li>Query completed studies</li>
                  <li>Compare studies over time</li>
                  <li>Spot trends and shifts</li>
                  <li>Run faster qual projects</li>
                </ul>
                <Link className="link-arrow" href="/brands">See the brand solution &rarr;</Link>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section alt">
        <div className="container">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="section-head">
              <div>
                <div className="eyebrow">The complete intelligence loop</div>
                <h2><TextGenerate text="From discussion guide to insight." /></h2>
              </div>
              <p>Use the full workflow or only the modules you need.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="cards">
              <TiltCard className="card">
                <div className="icon"><svg><use href="#mic" /></svg></div>
                <h3>Live interviewing agent</h3>
                <p>Run multilingual depth interviews with contextual probing.</p>
              </TiltCard>
              <TiltCard className="card">
                <div className="icon"><svg><use href="#file" /></svg></div>
                <h3>Transcription and translation</h3>
                <p>Turn audio or video into analysis-ready transcripts.</p>
              </TiltCard>
              <TiltCard className="card">
                <div className="icon"><svg><use href="#grid" /></svg></div>
                <h3>Analysis matrix</h3>
                <p>Structure responses by question and respondent.</p>
              </TiltCard>
              <TiltCard className="card">
                <div className="icon"><svg><use href="#spark" /></svg></div>
                <h3>Insight reports</h3>
                <p>Generate themes, comparisons, contradictions and respondent stories.</p>
              </TiltCard>
              <TiltCard className="card">
                <div className="icon"><svg><use href="#chat" /></svg></div>
                <h3>Project chat</h3>
                <p>Ask questions directly from a study.</p>
              </TiltCard>
              <TiltCard className="card">
                <div className="icon"><svg><use href="#layers" /></svg></div>
                <h3>Cross-project intelligence</h3>
                <p>Compare selected studies to find shifts and recurring themes.</p>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section alt">
        <div className="container">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="section-head">
              <div>
                <div className="eyebrow">How it works</div>
                <h2><TextGenerate text="One platform. Four simple steps." /></h2>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="workflow">
              <TiltCard className="step">
                <div className="step-num">1</div>
                <h3>Upload or create</h3>
                <p>Start with a guide, recordings or transcripts.</p>
              </TiltCard>
              <TiltCard className="step">
                <div className="step-num">2</div>
                <h3>Conduct or transcribe</h3>
                <p>Run interviews or transcribe recordings.</p>
              </TiltCard>
              <TiltCard className="step">
                <div className="step-num">3</div>
                <h3>Structure and analyse</h3>
                <p>Build the matrix and generate insights.</p>
              </TiltCard>
              <TiltCard className="step">
                <div className="step-num">4</div>
                <h3>Keep asking</h3>
                <p>Query one or many studies at any time.</p>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section" id="difference">
        <div className="container">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="section-head">
              <div>
                <div className="eyebrow">Why Qualisense</div>
                <h2><TextGenerate text="More than an AI shortcut." /></h2>
              </div>
              <p>
                Qualisense connects the full qualitative workflow and keeps every study usable.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="compare">
              <motion.div
                className="compare-col"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h3 variants={fadeUp}>Typical AI research tools</motion.h3>
                {['Automate a single stage of research', 'Jump quickly from transcript to summary', 'Treat each project as a one-time output', 'Analyse one study at a time', 'Focus mainly on speed'].map((row, i) => (
                  <motion.div key={row} className="compare-row" variants={fadeUp}>{row}</motion.div>
                ))}
              </motion.div>
              <motion.div
                className="compare-col"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h3 variants={fadeUp}>Qualisense</motion.h3>
                {['Supports the full qualitative workflow', 'Uses a structured matrix before synthesis', 'Makes every project queryable after delivery', 'Enables cross-project research intelligence', 'Combines speed, depth and reuse'].map((row, i) => (
                  <motion.div key={row} className="compare-row" variants={fadeUp}>{row}</motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
        <QuoteSection className="section alt">
          <p>&ldquo;More capacity for researchers. More intelligence for marketers.&rdquo;</p>
        </QuoteSection>
      </Reveal>

      <Reveal delay={0.1}>
        <CtaSection
          id="demo"
          eyebrow="Start with one project"
          title={<TextGenerate text="Get more from every study." />}
          description="Start with one project and test it on real business questions."
          actions={
            <>
              <ShimmerButton className="btn btn-primary" href="/pricing#demo">Request a pilot</ShimmerButton>
              <ShimmerButton className="btn btn-secondary" href="/product">Explore the product</ShimmerButton>
            </>
          }
        />
      </Reveal>
    </PageTransition>
  );
}
