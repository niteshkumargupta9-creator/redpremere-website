document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const burger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  const fadeEls = document.querySelectorAll('[data-fade]');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      const delay = el.dataset.delay || 0;
      el.style.transition = `opacity 0.6s ease ${delay * 0.12}s, transform 0.6s ease ${delay * 0.12}s`;
      io.observe(el);
    });
  }

  window.openDialog = function() {
    const o = document.getElementById('successDialog');
    if (o) { o.classList.add('open'); document.body.style.overflow = 'hidden'; }
  };
  window.closeDialog = function() {
    const o = document.getElementById('successDialog');
    if (o) { o.classList.remove('open'); document.body.style.overflow = ''; }
  };
  document.querySelectorAll('.dialog-overlay').forEach(o => {
    o.addEventListener('click', e => { if (e.target === o) closeDialog(); });
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDialog(); });
});
