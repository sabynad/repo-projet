console.log("sa marche");

// -------------------------------Menu Burger--------------------------------------------------

let burgerBtn = document.querySelector(".burger-icon");
let burgerMenu = document.querySelector(".burger-menu");
let burgerRectangle = document.querySelector(".burger-rectangle");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("open"), burgerRectangle.classList.toggle("open");
});

