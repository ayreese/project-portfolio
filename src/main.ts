import "./style.scss";
import typescriptLogo from "./typescript.svg";
const A11YSlider = require("a11y-slider");

const slider = new A11YSlider(document.querySelector(".slider"), {
  slidesToShow: 1,
  arrows: true,
  dots: false,
  responsive: {
    768: {
      slidesToShow: 2,
      arrows: false
    },
    960: {
      disable: true // slider disabled 960px to 1279px
    },
    1280: {
      disable: false,
      slidesToShow: 4,
      dots: true // dots enabled 1280px and up
    }
  }
});

slider()


navToggle?.addEventListener("click", () => {
  primaryNav?.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", "true")
    : navToggle.setAttribute("aria-expanded", "false");
  primaryNav?.toggleAttribute("data-visible");
  navToggle?.toggleAttribute("data-visible");
  console.log(navToggle.getAttribute("aria-expanded"));
  console.log(navToggle?.hasAttribute("data-visible"));
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
