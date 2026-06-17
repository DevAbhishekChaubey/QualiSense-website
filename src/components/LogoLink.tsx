'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';
import { useHomeLogoClick } from '@/hooks/useHomeLogoClick';

type LogoLinkProps = {
  priority?: boolean;
  onBeforeNavigate?: () => void;
};

export default function LogoLink({ priority = false, onBeforeNavigate }: LogoLinkProps) {
  const handleClick = useHomeLogoClick(onBeforeNavigate);

  return (
    <Link className="brand" href="/" onClick={handleClick}>
      <span className="logo-mark">
        <Logo priority={priority} />
      </span>
    </Link>
  );
}
