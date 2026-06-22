export const NAV_LINKS = [
  { href: '/product', label: 'Product' },
  { href: '/agencies', label: 'For Agencies' },
  { href: '/brands', label: 'For Brand Teams' },
  { href: '/#difference', label: 'Why Qualisense' },
] as const;

export function getNavDemoLabel(_pathname: string): string {
  return 'Book a demo';
}
