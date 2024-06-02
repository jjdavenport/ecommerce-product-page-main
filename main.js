const menuBtn = document.getElementById("menu-button");
const closeMenuBtn = document.getElementById("close-button");
const plusBtn = document.getElementById("plus-button");
const minusBtn = document.getElementById("minus-button");
const addBtn = document.getElementById("add-to-cart-button");
const shoppingCartBtn = document.getElementById("shopping-cart-button");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

menuBtn.addEventListener("click", () => {
  const mobileMenu = document.getElementById("nav");
  mobileMenu.classList.add("nav-active");
});

closeMenuBtn.addEventListener("click", () => {
  const mobileMenu = document.getElementById("nav");
  mobileMenu.classList.remove("nav-active");
});

window.addEventListener("resize", () => {
  const mobileMenu = document.getElementById("nav");
  const windowSize = window.innerWidth;
  if (windowSize >= 720) {
    mobileMenu.classList.remove("nav-active");
  }
});

plusBtn.addEventListener("click", () => {
  const quantity = document.getElementById("quantity");
  let defaultQuantity = parseInt(quantity.textContent);
  quantity.innerText = defaultQuantity + 1;
});

minusBtn.addEventListener("click", () => {
  const quantity = document.getElementById("quantity");
  let defaultQuantity = parseInt(quantity.textContent);
  quantity.innerText = Math.max(0, defaultQuantity - 1);
});

addBtn.addEventListener("click", () => {
  const shoppingCartQnt = document.getElementById("shopping-cart-quantity");
  const quantity = document.getElementById("quantity");
  let updateQnt = parseInt(shoppingCartQnt.innerText) || 0;
  let addQnt = parseInt(quantity.innerText) || 0;
  if (addQnt >= 1) {
    updateQnt += addQnt;
    shoppingCartQnt.innerText = updateQnt;
  }
});

shoppingCartBtn.addEventListener("click", () => {
  const basket = document.getElementById("basket");
  basket.classList.toggle("basket-active");
});

leftArrow.addEventListener("click", () => {
  console.log("clickL");
});

rightArrow.addEventListener("click", () => {
  console.log("clickR");
});
