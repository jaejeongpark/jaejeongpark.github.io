/* ============================================================
   CURSOR.JS — Custom crosshair cursor
   ============================================================ */

(function () {
  const cursor = document.getElementById('cursor');
  const dot    = document.querySelector('.cursor-dot');

  if (!cursor || !dot) return;

  let mouseX = 0, mouseY = 0;
  let dotX = 0, dotY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smooth dot lag
  function animateDot() {
    dotX += (mouseX - dotX) * 0.18;
    dotY += (mouseY - dotY) * 0.18;
    dot.style.left = dotX + 'px';
    dot.style.top  = dotY + 'px';
    requestAnimationFrame(animateDot);
  }
  animateDot();

  // Hover state for interactive elements
  const hoverTargets = 'a, button, [role="button"], .btn-primary, .btn-secondary, .pub-link, .contact-link-btn, .lang-btn';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  // Hide on mouse leave
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    dot.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    dot.style.opacity = '1';
  });
})();
