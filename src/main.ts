import "./style.scss";
import typescriptLogo from "./typescript.svg";

const primaryNav = document.querySelector<HTMLButtonElement>(
  ".primary-navigation",
);
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
