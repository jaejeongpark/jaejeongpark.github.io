/* ============================================================
   MAIN.JS — Scroll spy, Intersection Observer, Skills, Lang
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Language Toggle ─────────────────────────────────────── */
  const langBtns = document.querySelectorAll('.lang-btn');
  let currentLang = 'en';

  function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-en]').forEach(el => {
      const val = el.getAttribute('data-' + lang) || el.getAttribute('data-en');
      // Use innerHTML if the value contains HTML tags
      if (/<[a-z]/i.test(val)) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    // Elements with explicit innerHTML attributes
    document.querySelectorAll('[data-en-html]').forEach(el => {
      el.innerHTML = el.getAttribute('data-' + lang + '-html') || el.getAttribute('data-en-html');
    });
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Initialize English by default
  setLang('en');


  /* ── Nav Scroll Spy ──────────────────────────────────────── */
  const nav    = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-links a[data-section]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Scrolled class
    nav.classList.toggle('scrolled', window.scrollY > 40);

    // Active link
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }, { passive: true });


  /* ── Mobile Nav ──────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinksEl.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      const isOpen = navLinksEl.classList.contains('open');
      spans[0].style.transform = isOpen ? 'rotate(45deg) translate(4px, 5px)' : '';
      spans[1].style.opacity   = isOpen ? '0' : '1';
      spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(4px, -5px)' : '';
    });

    // Close on nav link click
    navLinksEl.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinksEl.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity   = '1';
        });
      });
    });
  }


  /* ── Intersection Observer: Fade-in ─────────────────────── */
  const fadeEls = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => fadeObserver.observe(el));


  /* ── Skills Progress Bars ────────────────────────────────── */
  const skillSection = document.getElementById('skills');
  let skillsAnimated = false;

  function animateSkills() {
    if (skillsAnimated) return;
    skillsAnimated = true;
    document.querySelectorAll('.skill-fill').forEach(bar => {
      const target = bar.dataset.pct || '0';
      bar.style.width = target + '%';
      setTimeout(() => bar.classList.add('loaded'), 1300);
    });
  }

  if (skillSection) {
    const skillObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateSkills();
        skillObs.disconnect();
      }
    }, { threshold: 0.2 });
    skillObs.observe(skillSection);
  }


  /* ── Smooth scroll for anchor links ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.offsetTop - 60;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });


  /* ── Stagger fade-in for work rows ──────────────────────── */
  const workRows = document.querySelectorAll('.work-row');
  workRows.forEach((item, i) => {
    item.style.transitionDelay = (i * 0.08) + 's';
  });

  /* ── Project Card Video Hover ────────────────────────────── */
  document.querySelectorAll('.proj-card').forEach(card => {
    const video = card.querySelector('.proj-video');
    if (!video) return;

    card.addEventListener('mouseenter', () => {
      video.play().catch(() => {});
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });


  /* ── Keyboard shortcut: press L to toggle language ────── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'l' || e.key === 'L') {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
      setLang(currentLang === 'en' ? 'ko' : 'en');
    }
  });

});
