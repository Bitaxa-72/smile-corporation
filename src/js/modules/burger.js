export function initSidebar() {
  const burger = document.querySelector('[data-sidebar="burger"]');
  const sidebar = document.querySelector('[data-sidebar="sidebar"]');
  const overlay = document.querySelector('[data-sidebar="overlay"]');

  if (!burger || !sidebar || !overlay) return;

  const openClass = 'open';

  const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches;
  const isOpen = () => sidebar.classList.contains(openClass);


  const open = () => {
    if (isOpen()) return;
    sidebar.classList.add(openClass);
    overlay.classList.add(openClass);
    lockScroll();
  };

  const close = () => {
    if (!isOpen()) return;
    sidebar.classList.remove(openClass);
    overlay.classList.remove(openClass);
    unlockScroll();
  };

  const toggle = () => {
    isOpen() ? close() : open();
  };

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle();
  });

  overlay.addEventListener('click', close);

  document.addEventListener('click', (e) => {
    if (!isOpen()) return;
    if (sidebar.contains(e.target)) return;
    if (burger.contains(e.target)) return;
    close();
  });

  sidebar.addEventListener('click', (e) => {
  const el = e.target.closest('[data-sidebar-close]');
  if (!el) return;
  close();
});


  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    close();
  });

  window.addEventListener('resize', () => {
    if (!isOpen()) return;
    overlay.classList.add(openClass);
  });
}
