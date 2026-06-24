import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import TiltCard from '@/components/TiltCard';
import ShimmerButton from '@/components/ShimmerButton';
import Reveal from '@/components/Reveal';
import CtaSection from '@/components/CtaSection';
import QuoteSection from '@/components/QuoteSection';

export default function Brands() {
  return (
    <PageTransition>
      <header className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / For Brand Teams
          </div>
          <div className="eyebrow">Qualisense for brand teams</div>
          <h1>Research intelligence for every marketer.</h1>
          <p className="lede">
            Turn completed and future qualitative studies into searchable, reusable intelligence—accessible to marketing, innovation, insights and strategy teams whenever a new question arises.
          </p>
          <div className="hero-actions">
            <ShimmerButton className="btn btn-primary" href="/pricing#demo">Pilot with a completed study</ShimmerButton>
            <ShimmerButton className="btn btn-secondary" href="/product#chat">Explore research chat</ShimmerButton>
          </div>
        </div>
      </header>

      <Reveal>
      <section className="section alt">
        <div className="container content-grid">
          <div>
            <div className="eyebrow">The client problem</div>
            <h2>Most research value stays locked in old decks and transcripts.</h2>
            <p className="lede">
              New questions keep emerging after the report is delivered. Qualisense lets teams ask them directly from the research material.
            </p>
          </div>
          <TiltCard className="card">
            <h3>Questions your team can ask</h3>
            <div className="list-check">
              <div>What were the strongest barriers to purchase?</div>
              <div>How did premium users differ from value users?</div>
              <div>What language did consumers naturally use?</div>
              <div>What changed compared with last year?</div>
              <div>Which tensions recur across studies?</div>
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
              <div className="eyebrow">Three ways to use Qualisense</div>
              <h2>From one study to a living insights system.</h2>
            </div>
          </div>
          <div className="cards">
            <TiltCard className="card">
              <h3>1. Query a completed study</h3>
              <p>Upload transcripts from a recent project, generate structured outputs and ask specific business questions.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>2. Build a cross-project hub</h3>
              <p>Bring related studies together to compare markets, segments, time periods and emerging themes.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>3. Run new qual projects</h3>
              <p>Use DG automation, live interviewing, transcription, matrix, report and chat in one workflow.</p>
            </TiltCard>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section alt" id="chat">
        <div className="container content-grid">
          <div>
            <div className="eyebrow">Project chat</div>
            <h2>Ask the study what you need to know.</h2>
            <p className="lede">
              Teams can query the project directly and explore the underlying consumer evidence—no deck-searching, no waiting for additional analysis.
            </p>
          </div>
          <TiltCard className="card">
            <span className="badge">Example query</span>
            <h3 style={{ marginTop: 18 }}>Which consumers rejected the concept, and why?</h3>
            <p>Qualisense synthesises the reasons, compares respondent groups and surfaces the themes driving rejection.</p>
          </TiltCard>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section">
        <div className="container content-grid">
          <TiltCard className="card">
            <span className="badge">Cross-project query</span>
            <h3 style={{ marginTop: 18 }}>How has the category changed over three studies?</h3>
            <p>Compare selected studies to identify shifts in motivations, language, trust, expectations and perceived barriers.</p>          </TiltCard>
          <div>
            <div className="eyebrow">Cross-project intelligence</div>
            <h2>See patterns that individual reports may miss.</h2>
            <div className="list-check">
              <div>Changes over time</div>
              <div>Market-wise differences</div>
              <div>Segment-wise differences</div>
              <div>Repeated consumer tensions</div>
              <div>Brand perception shifts</div>
              <div>Emerging opportunities</div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Use cases</div>
              <h2>Useful across the organisation.</h2>
            </div>
          </div>
          <div className="cards">
            <TiltCard className="card">
              <h3>Marketing</h3>
              <p>Campaign response, messaging, claims, brand language and perception.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Innovation</h3>
              <p>Concepts, products, packaging, benefits and unmet needs.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Insights</h3>
              <p>A central, queryable repository of qualitative learning.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Sales &amp; retail</h3>
              <p>Dealer, retailer, store manager and shopper conversations.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Leadership</h3>
              <p>Faster access to consumer evidence for strategic decisions.</p>
            </TiltCard>
            <TiltCard className="card">
              <h3>Internal research</h3>
              <p>Smaller, faster projects without a full agency cycle.</p>
            </TiltCard>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.1}>
        <QuoteSection className="section">
          <p>The research does not stop answering when the final presentation ends. Qualisense keeps the evidence accessible to every marketer who needs it.</p>
        </QuoteSection>
      </Reveal>

      <Reveal delay={0.1}>
        <CtaSection
          eyebrow="Recommended first pilot"
          title="Start with one recently completed study."
          description="Upload transcripts, generate the matrix and report, ask 20–30 business questions, then add older related studies for cross-project analysis."
          actions={<ShimmerButton className="btn btn-primary" href="/pricing#demo">Create a pilot workspace</ShimmerButton>}
        />
      </Reveal>
    </PageTransition>
  );
}
