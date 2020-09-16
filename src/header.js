export const header = () => {
  let wrapper = document.createElement('header');

  wrapper.innerHTML = `
  <header
  class="header site-padding-x inner-content-max-width mxauto flex justify-between items-center flex-row pt1"
  >
  <a aria-label="Visit Seaborne" href="/index.html" class="button--style-no-style">
    <img class="fit-contain w100" src="img/seaborne-logo.svg" alt="Seaborne logo" />
  </a>
  <a
    aria-label="Get in touch with Seaborne"
    href="/contact.html"
    class="button--style-blue-border text-body-sm"
  >
    Get in touch
  </a>
  </header>
  `;

  return wrapper;
};
