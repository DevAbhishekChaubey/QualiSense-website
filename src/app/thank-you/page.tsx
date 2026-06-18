import type { Metadata } from 'next';
import ThankYouContent from './ThankYouContent';

export const metadata: Metadata = {
  title: 'Thank You — Qualisense',
  description: 'We have received your inquiry and will be in touch shortly.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
