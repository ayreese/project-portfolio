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

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
