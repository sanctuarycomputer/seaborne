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

copyButton.addEventListener('click', function () {
  const copyText = document.getElementsByClassName('email-address')[0].textContent;
  copyToClipBoard(copyText);
});
