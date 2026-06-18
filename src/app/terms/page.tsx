import type { Metadata } from 'next';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Qualisense',
  description: 'Terms and conditions for using the Qualisense platform.',
};

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: '2. Use of the Platform',
    body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    title: '3. Intellectual Property',
    body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
  },
  {
    title: '4. Data and Privacy',
    body: 'Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
  },
  {
    title: '5. Limitation of Liability',
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
  },
  {
    title: '6. Termination',
    body: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  },
  {
    title: '7. Governing Law',
    body: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
  },
  {
    title: '8. Changes to These Terms',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="eyebrow">Legal</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: 12 }}>
            Terms &amp; Conditions
          </h1>
          <p className="lede" style={{ maxWidth: 600 }}>
            Please read these terms carefully before using the Qualisense platform.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginTop: 12 }}>
            Last updated: June 2026
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="terms-body">
            {SECTIONS.map((section) => (
              <div key={section.title} className="terms-section">
                <h2 className="terms-heading">{section.title}</h2>
                <p className="terms-text">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
