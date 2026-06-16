'use client';

import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import TextGenerate from '@/components/TextGenerate';
import TiltCard from '@/components/TiltCard';
import ShimmerButton from '@/components/ShimmerButton';
import { useCountUp } from '@/hooks/useCountUp';
import { motion } from 'framer-motion';

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

function StatCard({ value, label, desc, delay = 0, prefix = '', suffix = '' }: { value: number; label: string; desc: string; delay?: number; prefix?: string; suffix?: string }) {
  const { count, ref } = useCountUp(value, 1200);
  return (
    <motion.div
      ref={ref}
      className="stat"
      initial={{ opacity: 0, y: 20, filter: 'blur(3px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <strong>{prefix}{count}{suffix}</strong>
      <span>{desc}</span>
    </motion.div>
  );
}

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
              Qualisense brings live interviewing, transcription, matrix-led analysis, insight reports and cross-project chat into one workspace—helping research teams scale their craft and marketing teams keep learning from every study.
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
            initial={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
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
          <StatCard value={100} suffix="%" label="Natural depth" desc="adaptive probing that follows the respondent" delay={0} />
          <StatCard value={1} prefix="" label="1 → many" desc="query one project or multiple studies" delay={0.08} />
          <StatCard value={4} label=" " suffix="" desc="modular ways to use the platform" delay={0.16} />
          <StatCard value={100} suffix="%" label="Always on" desc="research intelligence beyond the final report" delay={0.24} />
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
                Agencies amplify delivery capacity without diluting research depth. Brand teams turn completed and future studies into a searchable source of consumer intelligence.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="audience-grid">
              <TiltCard className="audience">
                <h3>A force multiplier for researchers</h3>
                <p>
                  Expand delivery capacity across interviewing, transcription, matrix creation, reporting and client follow-up—while researchers retain control of interpretation.
                </p>
                <ul>
                  <li>Faster project delivery</li>
                  <li>Better use of senior researcher time</li>
                  <li>Scalable multilingual interviewing</li>
                  <li>More consistent analysis structures</li>
                </ul>
                <Link className="link-arrow" href="/agencies">See the agency solution &rarr;</Link>
              </TiltCard>
              <TiltCard className="audience">
                <h3>Research intelligence for every marketer</h3>
                <p>
                  Give marketing, insights and innovation teams direct access to searchable, reusable and comparable learning across projects.
                </p>
                <ul>
                  <li>Query completed studies</li>
                  <li>Compare multiple studies</li>
                  <li>Identify macro trends and shifts</li>
                  <li>Run faster internal qual projects</li>
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
                <h2><TextGenerate text="From discussion guide to decisions—and back to the evidence." /></h2>
              </div>
              <p>Use the full workflow or only the modules you need.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="cards">
              <TiltCard className="card">
                <div className="icon"><svg><use href="#mic" /></svg></div>
                <h3>Live interviewing agent</h3>
                <p>Conduct natural, multilingual depth interviews from a discussion guide, with contextual probing where required.</p>
              </TiltCard>
              <TiltCard className="card">
                <div className="icon"><svg><use href="#file" /></svg></div>
                <h3>Transcription and translation</h3>
                <p>Convert audio or video into clean, structured transcripts ready for research analysis.</p>
              </TiltCard>
              <TiltCard className="card">
                <div className="icon"><svg><use href="#grid" /></svg></div>
                <h3>Analysis matrix</h3>
                <p>Organise responses by question and respondent before synthesis, so analysis remains structured and traceable.</p>
              </TiltCard>
              <TiltCard className="card">
                <div className="icon"><svg><use href="#spark" /></svg></div>
                <h3>Insight reports</h3>
                <p>Generate question-wise analysis, cross-question themes, contradictions, cohort comparisons and respondent stories.</p>
              </TiltCard>
              <TiltCard className="card">
                <div className="icon"><svg><use href="#chat" /></svg></div>
                <h3>Project chat</h3>
                <p>Ask business questions directly from a specific study instead of searching through static reports and transcripts.</p>
              </TiltCard>
              <TiltCard className="card">
                <div className="icon"><svg><use href="#layers" /></svg></div>
                <h3>Cross-project intelligence</h3>
                <p>Query selected projects together to identify longitudinal changes, comparisons, repeated tensions and macro trends.</p>
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
                <h2><TextGenerate text="One platform. Multiple ways to work." /></h2>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="workflow">
              <TiltCard className="step">
                <div className="step-num">1</div>
                <h3>Upload or create</h3>
                <p>Start with a discussion guide, audio/video interviews or existing transcripts.</p>
              </TiltCard>
              <TiltCard className="step">
                <div className="step-num">2</div>
                <h3>Conduct or transcribe</h3>
                <p>Run live interviews or convert recordings into clean transcripts.</p>
              </TiltCard>
              <TiltCard className="step">
                <div className="step-num">3</div>
                <h3>Structure and analyse</h3>
                <p>Build the matrix, compare respondents and generate a detailed insight report.</p>
              </TiltCard>
              <TiltCard className="step">
                <div className="step-num">4</div>
                <h3>Keep asking</h3>
                <p>Query one study or selected projects together long after the first report is delivered.</p>
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
                <h2><TextGenerate text="Not another AI research shortcut." /></h2>
              </div>
              <p>
                Qualisense is designed as a complete qualitative delivery and intelligence layer—not an isolated interviewing, summarisation or reporting tool.
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
      <section className="section alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="quote">
              <p>&ldquo;A force multiplier for researchers. A living consumer intelligence layer for marketers.&rdquo;</p>
            </div>
          </motion.div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="cta" id="demo">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div>
              <div className="eyebrow">Start with one project</div>
              <h2><TextGenerate text="Turn a completed or live study into a reusable intelligence asset." /></h2>
              <p>
                Upload a recent project, run a set of business questions and see how Qualisense changes what your team can do with qualitative research.
              </p>
            </div>
            <div className="cta-actions">
              <ShimmerButton className="btn btn-primary" href="/pricing#demo">Request a pilot</ShimmerButton>
              <ShimmerButton className="btn btn-secondary" href="/product">Explore the product</ShimmerButton>
            </div>
          </motion.div>
        </div>
      </section>

      </Reveal>
    </PageTransition>
  );
}
