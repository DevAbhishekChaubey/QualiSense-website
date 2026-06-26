'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import AnimatedTabs from '@/components/AnimatedTabs';
import TiltCard from '@/components/TiltCard';
import ShimmerButton from '@/components/ShimmerButton';
import Reveal from '@/components/Reveal';
import CtaSection from '@/components/CtaSection';
import { tabPanel } from '@/lib/motion';

const tabs = [
  { id: 'tab1', label: 'Live interviewing' },
  { id: 'tab2', label: 'Transcription' },
  { id: 'tab3', label: 'Matrix & report' },
  { id: 'tab4', label: 'Project chat' },
  { id: 'tab5', label: 'Cross-project chat' },
];

export default function Product() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [prevTab, setPrevTab] = useState('tab1');

  const getTabIndex = (id: string) => tabs.findIndex((t) => t.id === id);
  const direction = getTabIndex(activeTab) >= getTabIndex(prevTab) ? 1 : -1;

  return (
    <PageTransition>
      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">The Qualisense platform</div>
          <h1>Conduct, analyse and reuse qualitative research.</h1>
          <p className="lede">Use the full workflow or one module.</p>
        </div>
      </header>

      <section className="section alt">
        <div className="container">
          <AnimatedTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={(newTab) => {
              setPrevTab(activeTab);
              setActiveTab(newTab);
            }}
          />

          <div style={{ position: 'relative', minHeight: 320, overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={tabPanel.initial(direction)}
                animate={tabPanel.animate}
                exit={tabPanel.exit(direction)}
                transition={tabPanel.transition}
                className="content-grid"
              >
                {activeTab === 'tab1' && (
                  <>
                    <div>
                      <div className="eyebrow">Live interviewing agent</div>
                      <h2>Live interviews that probe naturally.</h2>
                      <p className="lede">The agent follows the guide and probes for depth.</p>
                      <div className="list-check">
                        <div>Multiple languages</div>
                        <div>Contextual probing</div>
                        <div>Consistent interview flow</div>
                        <div>Transcript output</div>
                        <div>Natural, respondent-led conversational flow</div>
                      </div>
                    </div>
                    <TiltCard className="card">
                      <h3>Best for</h3>
                      <p>Exploration, concepts, feedback and stakeholder interviews.</p>
                    </TiltCard>
                  </>
                )}
                {activeTab === 'tab2' && (
                  <>
                    <div>
                      <div className="eyebrow">Transcription</div>
                      <h2>Analysis-ready transcripts.</h2>
                      <p className="lede">Turn audio or video into structured transcripts.</p>
                    </div>
                    <TiltCard className="card">
                      <div className="list-check">
                        <div>Audio and video inputs</div>
                        <div>Multi-language workflows</div>
                        <div>Translation support</div>
                        <div>Project-ready output</div>
                      </div>
                    </TiltCard>
                  </>
                )}
                {activeTab === 'tab3' && (
                  <>
                    <div>
                      <div className="eyebrow">Matrix and report</div>
                      <h2>Structure before synthesis.</h2>
                      <p className="lede">Questions form rows. Respondents form columns. Analysis stays structured and traceable.</p>
                    </div>
                    <TiltCard className="card">
                      <div className="list-check">
                        <div>Question-wise analysis</div>
                        <div>Cross-question themes</div>
                        <div>Contradictions and paradoxes</div>
                        <div>Cohort comparisons</div>
                        <div>Respondent stories</div>
                        <div>Segmentation patterns</div>
                      </div>
                    </TiltCard>
                  </>
                )}
                {activeTab === 'tab4' && (
                  <>
                    <div>
                      <div className="eyebrow">Project chat</div>
                      <h2>Query one study.</h2>
                      <p className="lede">Explore barriers, motivations, segments and evidence.</p>
                    </div>
                    <TiltCard className="card">
                      <h3>Example</h3>
                      <p>&ldquo;Who found the proposition confusing, and why?&rdquo;</p>
                    </TiltCard>
                  </>
                )}
                {activeTab === 'tab5' && (
                  <>
                    <div>
                      <div className="eyebrow">Cross-project chat</div>
                      <h2>Query multiple studies.</h2>
                      <p className="lede">Compare markets, years and audiences to find shifts.</p>
                    </div>
                    <TiltCard className="card">
                      <h3>Example</h3>
                      <p>&ldquo;How has trust changed across recent studies?&rdquo;</p>
                    </TiltCard>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Reveal delay={0.1}>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Product modules</div>
              <h2>Four product options.</h2>
            </div>
          </div>
          <div className="cards product-modules">
            <TiltCard className="card">
              <h3>Transcription only</h3>
              <p>Clean transcript output from audio or video.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Interviewing agent only</h3>
              <p>Live AI-led depth interviews with transcript output.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Transcription + matrix + report</h3>
              <p>Recordings to matrix, report and chat.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Matrix + report from transcripts</h3>
              <p>For teams that already have transcripts.</p>
            </TiltCard>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
        <CtaSection
          title="Test it on your own research."
          description="A real project is the most direct way to assess quality across interviewing, structure and analysis."
          actions={<ShimmerButton className="btn btn-primary" href="/pricing#demo">Request a pilot</ShimmerButton>}
        />
      </Reveal>
    </PageTransition>
  );
}
