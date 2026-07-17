(() => {
  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const themeToggle = document.querySelector('.theme-toggle');
  const progressBar = document.querySelector('.scroll-progress span');
  const year = document.querySelector('#current-year');
  const navLinks = [...document.querySelectorAll('.site-nav a')];
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const storedTheme = localStorage.getItem('cv-theme');
  const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  root.dataset.theme = storedTheme || preferredTheme;

  const closeMenu = () => {
    nav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    body.classList.remove('menu-open');
  };

  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('open', !open);
    body.classList.toggle('menu-open', !open);
  });

  navLinks.forEach(link => link.addEventListener('click', closeMenu));

  themeToggle?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    localStorage.setItem('cv-theme', nextTheme);
  });

  const updateScrollUi = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(100, (y / max) * 100) : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;
    header?.classList.toggle('scrolled', y > 12);

    let activeId = '';
    sections.forEach(section => {
      if (y >= section.offsetTop - 180) activeId = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
  };

  window.addEventListener('scroll', updateScrollUi, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });
  updateScrollUi();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  document.querySelectorAll('.reveal').forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    observer.observe(el);
  });

  if (year) year.textContent = String(new Date().getFullYear());
})();
