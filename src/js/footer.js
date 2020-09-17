import seaborneIcon from '../img/seaborne-icon.svg';

export const footer = () => {
  //To-do: Update all links. Add logic to check if environment is not production, then use '.html'

  const wrapper = document.createElement('footer');
  wrapper.classList =
    'footer inner-content-max-width mxauto pt6 sm:py1_75 mt3_5 sm:mt5_75 md:pt3_5 md:pb2_5';

  wrapper.innerHTML = `
      <div class="flex flex-col-reverse sm:flex-row justify-between site-padding-x mxauto">
        <div class="flex flex-row justify-center sm:justify-start sm:col-6 pb1_75 sm:pb0 sm:pt1_75">
          <div class="flex items-start">
            <p class="footer-detail-text color-gray text-footer">
              Seaborne is a sister company to
              <a
                aria-label="Visit Sanctuary Computer"
                href="http://www.sanctuary.computer"
                class="button--style-no-style color-gray"
                >Sanctuary Computer</a
              >
            </p>
            <img class="seaborne-icon" src="img/seaborne-icon.svg" alt="Seaborne icon" />
          </div>
        </div>
        <div
          class="footer-links flex flex-col sm:flex-row items-center sm:justify-end color-gray text-footer sm:col-6 pb6 sm:py1_75 ssm:mt5_75"
        >
          <a
            aria-label="Visit Seaborne's Twitter"
            href="/"
            class="button--style-no-style color-gray pb1_75 sm:pb0 sm:pr2_5"
            >Twitter</a
          >
          <a
            aria-label="Visit Contact page"
            href="/contact.html"
            class="button--style-no-style color-gray"
            >Contact</a
          >
        </div>
      </div>`;

  window.addEventListener('load', function () {
    document.getElementsByClassName('seaborne-icon')[0].src = seaborneIcon;
  });

  return wrapper;
};
