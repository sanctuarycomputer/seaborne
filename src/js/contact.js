import { header } from './header';
import { footer } from './footer';

const contact = document.getElementById('contact');
contact.prepend(header());
contact.appendChild(footer());
document.body.appendChild(contact);

//Adds Copy to Clipboard functionality
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
