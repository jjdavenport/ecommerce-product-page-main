const menuBtn = document.getElementById("menu-button");
const closeMenuBtn = document.getElementById("close-button");
const plusBtn = document.getElementById("plus-button");
const minusBtn = document.getElementById("minus-button");
const addBtn = document.getElementById("add-to-cart-button");
const shoppingCartBtn = document.getElementById("shopping-cart-button");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
let qnt = 0;

menuBtn.addEventListener("click", () => {
  const mobileMenu = document.getElementById("nav");
  mobileMenu.classList.add("nav-active");
  const createOverlay = document.createElement("div");
  createOverlay.id = "overlay";
  document.body.appendChild(createOverlay);
});

closeMenuBtn.addEventListener("click", () => {
  const mobileMenu = document.getElementById("nav");
  mobileMenu.classList.remove("nav-active");
  const removeOverlay = document.getElementById("overlay");
  removeOverlay.remove();
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
  const shoppingCartQnt = document.getElementById("shopping-cart-quantity");
  const basket = document.querySelector(".basket");
  let addQnt = parseInt(shoppingCartQnt.innerText) || 0;
  if (addQnt === 0) {
    emptyBasket();
    basket.classList.toggle("basket-active");
  } else {
    itemBasket();
    basket.classList.toggle("basket-active");
  }
});

leftArrow.addEventListener("click", () => {
  console.log("clickL");
});

rightArrow.addEventListener("click", () => {
  console.log("clickR");
});

function emptyBasket() {
  const empty = document.createElement("dialog");
  empty.innerHTML = `<span>Cart</span>
  <span>Your cart is empty.</span>`;
  empty.id = "basket";
  empty.className = "basket";
  document.querySelector("main").appendChild(empty);
}

function itemBasket() {
  const shoppingCartQnt = document.getElementById("shopping-cart-quantity");
  const quantity = document.getElementById("quantity");
  let addQnt = parseInt(shoppingCartQnt.innerText) || 0;
  const price = 125.0;
  const totalPrice = price * addQnt;
  const item = document.createElement("dialog");
  item.innerHTML = `<span>Cart</span> 
  <div>
  <div>
  <img src="./images/image-product-1-thumbnail.jpg" alt="white and beige sneakers">
  <span>Fall Limited Edition Sneakers</span>
  <span>$125.00 X ${addQnt} ${totalPrice}</span> 
  </div>
  <button id="delete-button">
  <img src="./images/icon-delete.svg" alt="rubbish bin / trash can" />
  </button>
  </div>
  <button>Checkout</button>`;
  item.id = "basket";
  item.className = "basket";
  document.querySelector("main").appendChild(item);
  const deleteBtn = document.getElementById("delete-button");
  deleteBtn.addEventListener("click", () => {
    item.classList.remove("basket-active");
    shoppingCartQnt.innerText = "";
    quantity.innerText = 0;
    emptyBasket();
  });
}

function basketTotal() {
  const shoppingCartQnt = document.getElementById("shopping-cart-quantity");
  const totalQnt = parseInt(shoppingCartQnt.innerText) || 0;
  const price = 125.0;
  const totalPrice = price * qnt;
  qnt = totalQnt;
  if (qnt === 0) {
    const emptyBasket = document.createElement("element");
    emptyBasket.innerHTML = `<span>Cart</span>
      <span>Your cart is empty.</span>`;
  } else if (qnt >= 1) {
    const itemBasket = document.createElement("dialog");
    itemBasket.innerHTML = `<span>Cart</span> 
      <div>
      <div>
      <img src="./images/image-product-1-thumbnail.jpg" alt="white and beige sneakers">
      <span>Fall Limited Edition Sneakers</span>
      <span>$125.00 X ${totalQnt} ${totalPrice}</span> 
      </div>
      <button id="delete-button">
      <img src="./images/icon-delete.svg" alt="rubbish bin / trash can" />
      </button>
      </div>
      <button>Checkout</button>`;
  }
}
