// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('hamburger');
  var links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Active nav link on scroll
  var sections = document.querySelectorAll('main .section[id]');
  var navAs = document.querySelectorAll('.nav-links a');
  function onScroll() {
    var pos = window.scrollY + 140;
    var current = null;
    sections.forEach(function (s) {
      if (s.offsetTop <= pos) current = s.id;
    });
    navAs.forEach(function (a) {
      a.style.color = (a.getAttribute('href') === '#' + current) ? 'var(--accent)' : '';
      a.style.fontWeight = (a.getAttribute('href') === '#' + current) ? '700' : '';
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
