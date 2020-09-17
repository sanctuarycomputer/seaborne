import seaborneLogoSrc from '../img/seaborne-logo.svg';

export const header = () => {
  //To-do: Update all links. Add logic to check if environment is not production, then use '.html'

  const seaborneLogo = document.createElement('img');
  seaborneLogo.src = seaborneLogoSrc;

  const wrapper = document.createElement('header');
  wrapper.classList =
    'header site-padding-x inner-content-max-width mxauto flex justify-between items-center flex-row pt1 opacity-0';

  wrapper.innerHTML = `
    <a aria-label="Visit Seaborne" href="/index.html" class="button--style-no-style seaborne-logo">
    </a>
    <a
      aria-label="Get in touch with Seaborne"
      href="/contact.html"
      class="button--style-blue-border text-body-sm"
    >
      Get in touch
    </a>
  `;

  window.addEventListener('load', function () {
    const seaborneLogoContainer = document.getElementsByClassName('seaborne-logo')[0];
    seaborneLogoContainer.appendChild(seaborneLogo);
    seaborneLogo.alt = 'Seaborne logo';
  });

  return wrapper;
};
