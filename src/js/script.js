'use strict';

// Add transition when section enters viewport
const sections = document.querySelectorAll('section.fade-in');

window.onscroll = function () {
  if (!document.querySelectorAll('section.fade-in:not(.visible)')) return;

  for (const section of sections) {
    if (
      section.getBoundingClientRect().top <= window.innerHeight * 0.75 &&
      section.getBoundingClientRect().top > 0
    ) {
      section.classList.add('visible');
    }
  }
};
