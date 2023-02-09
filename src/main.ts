import "./style.scss";
import A11YSlider from "a11y-slider";

/* mobile navigation toggle script */
const primaryNav: any = document.querySelector<HTMLButtonElement>(".prim-nav");
const navToggle: any = document.querySelector<HTMLButtonElement>(".mobile-nav-toggle");

navToggle.addEventListener("click", (): void => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", "true")
    : navToggle.setAttribute("aria-expanded", "false");
  primaryNav.toggleAttribute("data-visible");
  navToggle.toggleAttribute("data-visible");
});
/* end of mobile nav toggle script */


/* slider script */
new A11YSlider(document.querySelector(".slider"), {
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
new A11YSlider(document.querySelector(".gallery-wrapper"), {
    slidesToShow:1,
    arrows: true,
    skipBtn: false,
    dots: false,
    centerMode: true,
});