import PageTransition from '@/components/PageTransition';
import TiltCard from '@/components/TiltCard';
import ShimmerButton from '@/components/ShimmerButton';
import Reveal from '@/components/Reveal';
import CtaSection from '@/components/CtaSection';

export default function Agencies() {
  return (
    <PageTransition>
      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Qualisense for agencies</div>
          <h1>A force multiplier for researchers.</h1>
          <p className="lede">
            Move faster from fieldwork to structured analysis while researchers focus on interpretation and recommendations.
          </p>
          <div className="hero-actions">
            <ShimmerButton className="btn btn-primary" href="/pricing#demo">Start an agency pilot</ShimmerButton>
            <ShimmerButton className="btn btn-secondary" href="/product">See the platform</ShimmerButton>
          </div>
        </div>
      </header>

      <Reveal>
      <section className="section alt">
        <div className="container content-grid" style={{ alignItems: 'center' }}>
          <div>
            <div className="eyebrow">The agency challenge</div>
            <h2>Manual work slows qualitative delivery.</h2>
            <p className="lede">
              Transcripts, grids and first-cut synthesis consume researcher time and margins.
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
              <h2>Choose only what you need.</h2>
            </div>
          </div>
          <div className="cards">
            <TiltCard className="card">
              <h3>Transcription only</h3>
              <p>Clean transcripts from audio or video.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Live interviewing agent</h3>
              <p>Multilingual interviews with natural probing.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Transcription + matrix + report</h3>
              <p>From recordings to matrix and report.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Matrix + report from transcripts</h3>
              <p>Turn transcripts into matrix and report.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Project chat</h3>
              <p>Query the study workspace.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Cross-project chat</h3>
              <p>Compare studies and recurring themes.</p>
            </TiltCard>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section alt" id="interviewing">
        <div className="container content-grid" style={{ alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Live interviewing</div>
            <h2>Optional live interviewing, built in.</h2>
            <p className="lede">
              The agent follows the guide and probes where more depth is needed.
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
            <h3 style={{ marginTop: 18 }}>Natural interviews. Consistent coverage.</h3>
            <p>
              Adaptive probing keeps conversations natural and on brief.
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
              <h2>More capacity. Less manual effort.</h2>
            </div>
          </div>
          <div className="cards">
            <TiltCard className="card">
              <h3>Faster timelines</h3>
              <p>Shorten the path from fieldwork to first output.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Better project margins</h3>
              <p>Reduce repetitive effort and protect margins.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Consistent quality</h3>
              <p>Apply a consistent structure across projects.</p>
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
              <h2>One connected delivery engine.</h2>
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
        <CtaSection
          eyebrow="Agency pilot"
          title="Test it on one project."
          description="Upload interviews, generate outputs and compare them with your current workflow."
          actions={<ShimmerButton className="btn btn-primary" href="/pricing#demo">Start a pilot</ShimmerButton>}
        />
      </Reveal>
    </PageTransition>
  );
}
