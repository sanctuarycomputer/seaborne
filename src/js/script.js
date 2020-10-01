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

const copyButton = document.querySelector('.copy-button');

if (copyButton) {
  copyButton.addEventListener('click', function () {
    const copyText = document.querySelector('.email-address').textContent;
    copyToClipBoard(copyText);

    copyButton.innerHTML = 'Copied!';
    copyButton.classList.add('button--style-primary', 'events-none');
    copyButton.classList.remove('button--style-blue-border');

    setTimeout(function () {
      copyButton.innerHTML = 'Copy to clipboard';
      copyButton.classList.add('button--style-blue-border');
      copyButton.classList.remove('button--style-primary', 'events-none');
    }, 9000);
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
