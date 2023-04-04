import "./style.scss";

//const carousel = document.querySelector(".test-project-carousel") as HTMLDivElement;
const leftArrow = document.querySelector(".left-arrow") as HTMLButtonElement;
const rightArrow = document.querySelector(".right-arrow") as HTMLButtonElement;

//const projects = document.querySelectorAll(".image-container");
const projectContainer = document.querySelector(".image-container");
let current = 1;

const plusOne = () => {
  if (current === 0) {
    current += 1;
    projectContainer!.setAttribute("data-right", current.toString());
  } else {
    current = 0;
    projectContainer!.setAttribute("data-right", current.toString());
  }
};

const minusOne = () => {
  if (current != 0) {
    current -= 1;
    projectContainer!.setAttribute("data-right", current.toString());
  }
};


rightArrow.addEventListener("click", plusOne);
leftArrow.addEventListener("click", minusOne);