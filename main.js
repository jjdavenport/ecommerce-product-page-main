const menuBtn = document.getElementById("menu-button");
const closeMenuBtn = document.getElementById("close-button");
const plusBtn = document.getElementById("plus-button");
const minusBtn = document.getElementById("minus-button");
const addCartBtn = document.getElementById("add-to-cart-button");
const shoppingCartBtn = document.getElementById("shopping-cart-button");
const leftArrow = document.getElementById("left-button");
const rightArrow = document.getElementById("right-button");
const lightboxBtn = document.getElementById("lightbox-button");

lightboxBtn.addEventListener("click", () => {
  if (window.innerWidth >= 720) {
    const createOverlay = document.createElement("div");
    createOverlay.id = "overlay";
    document.body.appendChild(createOverlay);
    const createDialog = document.createElement("dialog");
    document.body.appendChild(createDialog);
    createDialog.className = "lightbox-active";
    createDialog.id = "lightbox";
    createDialog.innerHTML = `<button id="lightbox-close-button">
    <img src="./images/icon-close.svg" alt="Black cross" /></button>
    <img
    src="./images/image-product-1.jpg"
    alt="white and beige sneakers"
  />
  <img src="./images/image-product-1.jpg" alt="" class="hidden" />
  <img src="./images/image-product-2.jpg" alt="" class="hidden" />
  <img src="./images/image-product-3.jpg" alt="" class="hidden" />
  <img src="./images/image-product-4.jpg" alt="" class="hidden" />
  `;
    getLightboxCloseBtn();
  }
});

function getLightboxCloseBtn() {
  const lightboxCloseBtn = document.getElementById("lightbox-close-button");
  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener("click", () => {
      const overlay = document.getElementById("overlay");
      const lightbox = document.getElementById("lightbox");
      lightbox.remove();
      overlay.remove();
    });
  }
}

function getCheckoutBtn() {
  const checkoutBtn = document.getElementById("checkout-button");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const basket = document.getElementById("basket");
      basket.classList.remove("basket-active");
    });
  }
}

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
  const removeOverlay = document.getElementById("overlay");
  const removeLightbox = document.getElementById("lightbox");
  const windowSize = window.innerWidth;
  if (windowSize >= 720) {
    mobileMenu.classList.remove("nav-active");
    removeOverlay.remove();
    lightbox.remove();
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

addCartBtn.addEventListener("click", () => {
  const shoppingCartQnt = document.getElementById("shopping-cart-quantity");
  const quantity = document.getElementById("quantity");
  let addQnt = parseInt(shoppingCartQnt.innerText) || 0;
  let qnt = parseInt(quantity.innerText) || 0;
  if (qnt >= 1) {
    addQnt += qnt;
    shoppingCartQnt.innerText = addQnt;
    deleteEmptyBasket();
    updateItemBasket(addQnt);
  }
});

shoppingCartBtn.addEventListener("click", () => {
  const shoppingCartQnt = document.getElementById("shopping-cart-quantity");
  let addQnt = parseInt(shoppingCartQnt.innerText) || 0;
  const basket = document.getElementById("basket");
  if (!basket) {
    if (addQnt === 0) {
      emptyBasket();
    } else {
      itemBasket(addQnt);
      deleteItemBasket();
    }
  }
  const newBasket = document.getElementById("basket");
  if (newBasket) {
    newBasket.classList.toggle("basket-active");
    getCheckoutBtn();
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
  empty.className = "empty-basket";
  document.querySelector("main").appendChild(empty);
}

function itemBasket(addQnt) {
  const price = 125.0;
  const totalPrice = price * addQnt;
  let basket = document.getElementById("basket");
  if (!basket) {
    basket = document.createElement("dialog");
    basket.id = "basket";
    basket.className = "item-basket";
    document.querySelector("main").appendChild(basket);
  }
  basket.innerHTML = `<span>Cart</span> 
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
  <button id="checkout-button">Checkout</button>`;
  deleteItemBasket();
}

function updateItemBasket(addQnt) {
  itemBasket(addQnt);
}

function deleteItemBasket() {
  const deleteBtn = document.getElementById("delete-button");
  deleteBtn.addEventListener("click", () => {
    const itemBasket = document.getElementById("basket");
    const shoppingCartQnt = document.getElementById("shopping-cart-quantity");
    const quantity = document.getElementById("quantity");
    if (itemBasket) {
      itemBasket.remove();
      shoppingCartQnt.innerText = "";
      quantity.innerText = 0;
      emptyBasket();
      const newBasket = document.getElementById("basket");
      if (newBasket) {
        newBasket.classList.add("basket-active");
      }
    }
  });
}

function deleteEmptyBasket() {
  const emptyBasket = document.querySelector(".empty-basket");
  if (emptyBasket) {
    emptyBasket.remove();
  }
}
