// Fitz Framed - rebuilt 2026-07
(function () {
  'use strict';

  // Header on scroll (rAF-gated)
  var header = document.getElementById('site-header');
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
      ticking = false;
    });
  }, { passive: true });

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      header.classList.toggle('menu-open', open);
      header.classList.toggle('scrolled', open || window.scrollY > 40);
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        header.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Reveals
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // Video facades: click-to-play, nothing loads until then.
  // data-video="yt:VIDEOID" or "vimeo:ID"
  document.querySelectorAll('.video-facade').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var ref = btn.getAttribute('data-video') || '';
      var kind = ref.split(':')[0];
      var id = ref.split(':')[1];
      var src = kind === 'vimeo'
        ? 'https://player.vimeo.com/video/' + id + '?autoplay=1'
        : 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      var wrap = document.createElement('div');
      wrap.className = 'video-wrap';
      var f = document.createElement('iframe');
      f.src = src;
      f.allow = 'autoplay; fullscreen; picture-in-picture';
      f.allowFullscreen = true;
      f.title = btn.getAttribute('data-title') || 'Video player';
      wrap.appendChild(f);
      btn.replaceWith(wrap);
    });
  });

  // Live timecode in the hero REC chip
  var tc = document.querySelector('[data-timecode]');
  if (tc && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var frames = 0;
    setInterval(function () {
      frames = (frames + 1) % (24 * 60 * 60);
      var f = frames % 24, s = Math.floor(frames / 24) % 60, m = Math.floor(frames / 1440) % 60;
      var pad = function (n) { return String(n).padStart(2, '0'); };
      tc.textContent = 'REC // 00:' + pad(m) + ':' + pad(s) + ':' + pad(f);
    }, 1000 / 24);
  }

  // Contact form -> Formspree, inline states (no alert)
  var form = document.querySelector('.contact-form');
  if (form) {
    var note = form.parentElement.querySelector('.form-note');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.className = 'form-note';
      note.textContent = 'Transmitting...';
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (r) {
        if (r.ok) {
          note.className = 'form-note ok';
          note.textContent = 'Received. I\'ll get back to you within one business day.';
          form.reset();
        } else { throw new Error(); }
      }).catch(function () {
        note.className = 'form-note err';
        note.textContent = 'Something went wrong sending that. Reach out on Instagram @fitzframed and I\'ll get right back to you.';
      });
    });
  }

  // Client handoff gate: static site, so this simply directs clients to their delivery email.
  var gate = document.querySelector('.gate form');
  if (gate) {
    gate.addEventListener('submit', function (e) {
      e.preventDefault();
      var n = gate.parentElement.querySelector('.form-note');
      n.className = 'form-note err';
      n.textContent = 'Deliveries have moved. Use the download link in your delivery email, or contact @fitzframed for a fresh link.';
    });
  }
})();
