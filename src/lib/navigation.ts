export const NAV_LINKS = [
  { href: '/product', label: 'Product' },
  { href: '/agencies', label: 'For Agencies' },
  { href: '/brands', label: 'For Brand Teams' },
  { href: '/#difference', label: 'Why Qualisense' },
  { href: '/security', label: 'Security' },
] as const;

export function getNavDemoLabel(pathname: string): string {
  return pathname === '/security' ? 'Discuss requirements' : 'Book a demo';
}
