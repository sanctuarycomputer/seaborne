'use strict';

//Copy to Clipboard functionality
const copyToClipBoard = (string) => {
  const copyElement = document.createElement('textarea');
  copyElement.value = string;
  document.body.appendChild(copyElement);
  copyElement.select();
  document.execCommand('copy');
  document.body.removeChild(copyElement);
};

const copyButton = document.getElementsByClassName('copy-button')[0];

if (copyButton) {
  copyButton.addEventListener('click', function () {
    const copyText = document.getElementsByClassName('email-address')[0].textContent;
    copyToClipBoard(copyText);
  });
}

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
