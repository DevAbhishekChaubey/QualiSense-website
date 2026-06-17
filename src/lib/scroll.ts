export function scrollToHashOrTop(): void {
  const hash = window.location.hash;

  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }

  window.scrollTo(0, 0);
}
