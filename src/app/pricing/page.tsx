import PageTransition from '@/components/PageTransition';
import TiltCard from '@/components/TiltCard';
import Reveal from '@/components/Reveal';
import DemoForm from '@/components/DemoForm';

export default function Pricing() {
  return (
    <PageTransition>
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
          <DemoForm />
        </div>
      </section>
      </Reveal>
    </PageTransition>
  );
}
