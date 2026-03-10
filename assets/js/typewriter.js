/* ============================================================
   TYPEWRITER.JS — Hero typing animation
   ============================================================ */

(function () {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const phrases = [
    'AI Autonomy Researcher & Engineer',
    'Motion Planning · eVTOL / UAM',
    'Visual Navigation · Certified ML',
    'Drone Systems · ROS · PyTorch',
  ];

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;
  let paused    = false;

  const TYPING_SPEED  = 60;
  const DELETE_SPEED  = 30;
  const PAUSE_END     = 2200;
  const PAUSE_START   = 400;

  function tick() {
    const current = phrases[phraseIdx];

    if (paused) {
      paused = false;
      if (deleting) {
        // start deleting
        setTimeout(tick, DELETE_SPEED);
      } else {
        // start next phrase
        phraseIdx = (phraseIdx + 1) % phrases.length;
        charIdx = 0;
        deleting = false;
        setTimeout(tick, TYPING_SPEED);
      }
      return;
    }

    if (!deleting) {
      // Type forward
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        // Pause, then delete
        deleting = true;
        paused = true;
        setTimeout(tick, PAUSE_END);
      } else {
        setTimeout(tick, TYPING_SPEED);
      }
    } else {
      // Delete backward
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        paused = true;
        setTimeout(tick, PAUSE_START);
      } else {
        setTimeout(tick, DELETE_SPEED);
      }
    }
  }

  // Start after hero animation delay
  setTimeout(tick, 900);
})();
