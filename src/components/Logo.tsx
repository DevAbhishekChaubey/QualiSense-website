import Image from 'next/image';

type LogoProps = {
  priority?: boolean;
};

export default function Logo({ priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.webp"
      alt="Qualisense"
      width={192}
      height={104}
      sizes="(max-width: 680px) 70px, 96px"
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
}
