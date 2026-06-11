/* ============================================================
   VANTAGE X1 — Motion System + Smooth Scroll
   Inspired by Framer Motion API for scroll-triggered animations
   ============================================================ */

(function () {
  'use strict';

  // ------------------------------------------------------------------
  // 1. Smooth Scroll for anchor links
  // ------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ------------------------------------------------------------------
  // 2. Motion System (IntersectionObserver + CSS transitions)
  // ------------------------------------------------------------------

  // Easing string used in CSS — kept here for reference
  // spring-like: cubic-bezier(0.16, 1, 0.3, 1)

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var el = entry.target;

        // Handle stagger containers
        if (el.hasAttribute('data-stagger')) {
          el.classList.add('in-view');
          var children = el.querySelectorAll('[data-motion]');
          var staggerDelay = parseInt(el.getAttribute('data-stagger'), 10) || 80;
          children.forEach(function (child, i) {
            setTimeout(function () {
              child.classList.add('in-view');
            }, i * staggerDelay);
          });
        } else {
          el.classList.add('in-view');
        }

        observer.unobserve(el);
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  // Observe all elements with [data-motion]
  document.querySelectorAll('[data-motion]').forEach(function (el) {
    observer.observe(el);
  });
})();
