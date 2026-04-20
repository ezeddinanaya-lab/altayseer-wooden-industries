/* ═══════════════════════════════════════════════════════
   AL TAYSEER WOODEN INDUSTRIES — Main JavaScript
═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Loader ── */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('done'), 1800);
  });
  // Fallback
  setTimeout(() => loader.classList.add('done'), 3000);


  /* ── Custom Cursor ── */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (cursor && window.innerWidth > 768) {
    let mx = 0, my = 0, fx = 0, fy = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    });
    (function animFollower() {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower.style.left = fx + 'px';
      follower.style.top  = fy + 'px';
      requestAnimationFrame(animFollower);
    })();
    document.querySelectorAll('a, button, .product-card, .g-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
        follower.style.transform = 'translate(-50%,-50%) scale(1.8)';
        follower.style.opacity = '0.2';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%,-50%) scale(1)';
        follower.style.transform = 'translate(-50%,-50%) scale(1)';
        follower.style.opacity = '0.6';
      });
    });
  }


  /* ── Navbar scroll behaviour ── */
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const s = window.scrollY;
    if (s > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = s;
  });


  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));


  /* ── Mobile Menu ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  document.querySelectorAll('.mob-link, .mob-cta').forEach(l => {
    l.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });


  /* ── Scroll reveal ── */
  const revealEls = document.querySelectorAll(
    '.section-tag, .section-title, .section-desc, .about-copy p, .about-features, .btn-primary, .btn-ghost, ' +
    '.product-card, .step, .g-item, .info-item, .contact-info, .contact-form-wrap, ' +
    '.about-stats, .testi-card, .about-img-wrap, .craft-copy, .craft-steps'
  );

  const revObs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80 * (entry.target.dataset.delay || 0));
        revObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el, i) => {
    el.classList.add('fade-up');
    el.dataset.delay = i % 6;
    revObs.observe(el);
  });

  // Hero reveals are immediate on load
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 2000 + i * 150);
  });


  /* ── Testimonials Slider ── */
  const track = document.getElementById('testiTrack');
  const dotBtns = document.querySelectorAll('.dot-btn');
  let current = 0;
  const goTo = (i) => {
    current = i;
    track.style.transform = `translateX(-${i * 100}%)`;
    track.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    dotBtns.forEach((d, idx) => d.classList.toggle('active', idx === i));
  };
  dotBtns.forEach(btn => btn.addEventListener('click', () => goTo(+btn.dataset.i)));

  // Auto-advance
  let testiTimer = setInterval(() => goTo((current + 1) % 3), 5000);
  track.addEventListener('mouseenter', () => clearInterval(testiTimer));
  track.addEventListener('mouseleave', () => { testiTimer = setInterval(() => goTo((current + 1) % 3), 5000); });

  // Touch swipe on testimonials
  let tsX = 0;
  track.addEventListener('touchstart', e => { tsX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = tsX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? Math.min(current + 1, 2) : Math.max(current - 1, 0));
  });


  /* ── Contact Form ── */
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      // Simulate send (replace with real backend / EmailJS / Formspree)
      setTimeout(() => {
        form.style.opacity = '0';
        form.style.transition = 'opacity 0.4s';
        setTimeout(() => {
          form.style.display = 'none';
          successMsg.classList.add('show');
        }, 400);
      }, 1200);
    });
  }


  /* ── Back to top ── */
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('show', window.scrollY > 500);
  });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


  /* ── Smooth scroll for all anchors ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* ── Parallax hero rings ── */
  window.addEventListener('scroll', () => {
    const rings = document.querySelector('.hero-rings');
    if (rings) {
      rings.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.15}px))`;
    }
  });

});
