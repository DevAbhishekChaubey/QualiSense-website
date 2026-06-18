import Link from 'next/link';
import LogoLink from '@/components/LogoLink';

export function FooterFull() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <LogoLink />
            <p style={{ color: '#8fa0b1', maxWidth: 360 }}>
              A force multiplier for researchers. Research intelligence for every marketer.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <Link href="/product">Platform</Link>
            <Link href="/product#interviewing">Interviewing agent</Link>
            <Link href="/product#chat">Project chat</Link>
          </div>
          <div>
            <h4>Solutions</h4>
            <Link href="/agencies">Research agencies</Link>
            <Link href="/brands">Brands &amp; insights teams</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div>
            <h4>Company</h4>
            {/* <Link href="/security">Security</Link> */}
            <Link href="/pricing#demo">Book a demo</Link>
          </div>
        </div>
        <div className="footer-copy">
          <span>&copy; 2026 Qualisense. All rights reserved.</span>
          <span>Built for qualitative depth, speed and reuse.</span>
        </div>
      </div>
    </footer>
  );
}
