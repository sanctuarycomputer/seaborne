import heroIllustration from '../img/hero-illustration-md.png';

export const main = () => {
  const wrapper = document.createElement('main');

  //To-do: Update all links. Add logic to check if environment is not production, then use '.html'

  wrapper.innerHTML = `
    <section class="main-hero flex flex-col inner-content-max-width mxauto">
      <div class="flex flex-col site-padding-x">
        <p class="text-body color-gray pb2 sm:pb1_75 md:pb2_5">Hi, we're Seaborne.</p>
        <h1 class="text-header color-black pb2 sm:pb1_75 md:pb2_5">
          We're your guides to sustainable business practices.
        </h1>
        <a
          aria-label="Get in touch with Seaborne"
          class="button--style-primary text-button flex items-center justify-center"
          href="/contact.html"
        >
          Get in touch
        </a>
      </div>
      <div class="hero-image">
        <img
          class="hero-illustration w100"
          alt="Illustration of people doing outdoor activities in the mountains"
        />
      </div>
    </section>

    <section
      class="impact-section flex flex-col sm:flex-row justify-between items-center inner-content-max-width site-padding-x mxauto"
    >
      <div class="flex flex-col sm:col-4 pb3 sm:pb0">
        <h2 class="text-subheader color-gray pb2 sm:pb1_75 md:pb2_5">
          We'll help you understand your impact.
        </h2>
        <p class="text-body color-gray pb2 sm:pb1_75 md:pb2_5">
          We are a team of strategists, designers, and technologists who help founders run more
          sustainable businesses. We want your business to do good to the environment.
        </p>
        <div class="none md:flex flex-row">
          <div class="flex items-start">
            <img class="arrow pr2" src="img/arrow.svg" alt="Blue arrow on a light blue circle" />
          </div>
          <p class="text-body-sm color-gray mt1">
            We are using our product experience to help founders launch responsible products and
            businesses.
          </p>
        </div>
      </div>
      <div class="impact-image sm:col-6">
        <img
          class="w100"
          src="img/impact-illustration-md.png"
          srcset="
            img/impact-illustration-sm.png 240w,
            img/impact-illustration-md.png 400w,
            img/impact-illustration-lg.png 720w
          "
          sizes="(min-width: 1200px) 720w,
        (max-width: 768px) 400w,
        (max-width: 380px) 240w"
          alt="Illustration of person holding a flower at the beach"
        />
      </div>
    </section>

    <section
      class="offerings-section items-center justify-center flex flex-col relative bg-color-pink py6"
    >
      <div class="absolute t0 w100">
        <img class="w100" src="img/pink-background-shape-1.svg" alt="" role="presentation" />
      </div>

      <div class="pink-background-bottom-shape absolute w100">
        <img class="w100" src="img/pink-background-shape-2.svg" alt="" />
      </div>

      <div class="inner-content-max-width mxauto z-3 sm:py4 md:py6 sm:col-9">
        <div class="site-padding-x mxauto">
          <div class="flex flex-col items-center text-center">
            <p class="text-body color-gray">What we offer.</p>
            <p class="text-subheader color-gray pt2 sm:pt2_5 md:pt3_5 sm:px3">
              Our unique set of services that help companies of all sizes.
            </p>
          </div>

          <div class="offerings-columns-container flex flex-wrap flex-row">
            <div class="flex flex-col items-start text-body-sm">
              <img class="pb_75 sm:pb1_75 md:pb1" src="img/suitcase-icon.svg" alt="Suitcase" />
              <p class="bold color-black md:pb1_75">Corporate Assesment</p>
              <p class="color-gray">
                Calculate your business’s carbon footprint by understanding the ins and outs of
                your business and operations.
              </p>
            </div>

            <div class="flex flex-col items-start text-body-sm">
              <img
                class="pb_75 sm:pb1_75 md:pb1"
                src="img/supply-chain-icon.svg"
                alt="Arrows rotating in a circle and surrounding a box"
              />
              <p class="bold color-black md:pb1_75">Supply Chain Assesment</p>
              <p class="color-gray">
                Calculate your product’s carbon footprint. Know the impact of your supply chain
                and manufacturing processes.
              </p>
            </div>

            <div class="flex flex-col items-start text-body-sm">
              <img
                class="pb_75 sm:pb1_75 md:pb1"
                src="img/goal-setting-icon.svg"
                alt="Target with an arrow in the center"
              />
              <p class="bold color-black md:pb1_75">Goal Setting</p>
              <p class="color-gray">
                Set sustainability goals so that your organization builds sustainability into its
                DNA.
              </p>
            </div>

            <div class="flex flex-col items-start text-body-sm">
              <img
                class="pb_75 sm:pb1_75 md:pb1"
                src="img/web-icon.svg"
                alt="Browser with an arrow pointing towards it"
              />
              <p class="bold color-black md:pb1_75">Web Presence</p>
              <p class="color-gray">
                Share the story of how your business became more sustainable. We’ll help shape
                your narrative and build your case study site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // document.getElementsByClassName('hero-illustration')[0].src = require('/img/hero-illustration-lg.png');

  // heroIllustration.src = require('/img/hero-illustration-lg.png');

  // wrapper.appendChild(parcelImg)

  window.addEventListener('load', function () {
    document.getElementsByClassName('hero-illustration')[0].src = heroIllustration;
  });

  return wrapper;
};

// document.getElementsByClassName('hero-illustration')[0].srcset = `
//         img/hero-illustration-sm.png 240w,
//         img/hero-illustration-md.png 400w,
//         img/hero-illustration-lg.png 720w
//       `;

// srcset="
// img/hero-illustration-sm.png 240w,
// img/hero-illustration-md.png 400w,
// img/hero-illustration-lg.png 720w
// "
// sizes="(min-width: 1200px) 720w,
// (max-width: 768px) 400w,
// (max-width: 380px) 240w"
