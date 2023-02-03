import "./style.scss";

const A11YSlider = require("a11y-slider");

/* mobile navigation toggle script */
const primaryNav = document.querySelector<HTMLButtonElement>(".prim-nav");
const navToggle =
  document.querySelector<HTMLButtonElement>(".mobile-nav-toggle");

navToggle?.addEventListener("click", () => {
  primaryNav?.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", "true")
    : navToggle.setAttribute("aria-expanded", "false");
  primaryNav?.toggleAttribute("data-visible");
  navToggle?.toggleAttribute("data-visible");
  console.log(navToggle.getAttribute("aria-expanded"));
  console.log(navToggle?.hasAttribute("data-visible"));
});

/* Slider script */
new A11YSlider(document.querySelector(".slider"), {
  slidesToShow: 1,
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2500,
  autoplayHoverPause: false,

});
