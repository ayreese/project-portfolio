import "./style.scss";
import A11YSlider from "a11y-slider";

const primaryNav = document.querySelector(".prim-nav") as HTMLDivElement;
const navToggle = document.querySelector(".mobile-nav-toggle") as HTMLButtonElement;
const slider = document.querySelector(".slider") as HTMLDivElement;

/* mobile navigation toggle script */
navToggle.addEventListener("click", (): void => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", "true")
    : navToggle.setAttribute("aria-expanded", "false");
  primaryNav.toggleAttribute("data-visible");
  navToggle.toggleAttribute("data-visible");
});

/* slider script */
new A11YSlider(slider, {
  slidesToShow: 1,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  autoplayHoverPause: true,
  skipBtn: false,
  responsive: {
    900: {
      disable: true
    }
  }

});
/* end of slider script */

/* end of slider script */

