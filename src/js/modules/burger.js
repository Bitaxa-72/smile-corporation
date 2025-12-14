export function initSidebar() {
  const burgers = Array.from(document.querySelectorAll('[data-sidebar="burger"]'));
  const sidebar = document.querySelector('[data-sidebar="sidebar"]');
  const overlay = document.querySelector('[data-sidebar="overlay"]');

  if (!burgers.length || !sidebar || !overlay) return;

  const openClass = 'open';

  const isOpen = () => sidebar.classList.contains(openClass);

  const lockScroll = () => {
    document.documentElement.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.documentElement.style.overflow = '';
  };

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

  burgers.forEach((burger) => {
    burger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggle();
    });
  });

  overlay.addEventListener('click', close);

  document.addEventListener('click', (e) => {
    if (!isOpen()) return;
    if (sidebar.contains(e.target)) return;
    if (burgers.some((b) => b.contains(e.target))) return;
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
