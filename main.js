const menuBtn = document.getElementById("menu-button");
const closeMenuBtn = document.getElementById("close-button");
const plusBtn = document.getElementById("plus-button");
const minusBtn = document.getElementById("minus-button");
const addCartBtn = document.getElementById("add-to-cart-button");
const shoppingCartBtn = document.getElementById("shopping-cart-button");

function desktopNav() {
  const createNav = document.createElement("nav");
  createNav.className = "desktop-nav";
  createNav.innerHTML = `
    <img src="./images/logo.svg" alt="sneakers" />
    <ul>
      <a href="#">Collections</a>
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </ul>
    <button id="shopping-cart-button">
      <img src="./images/icon-cart.svg" alt="shopping cart" />
      <span id="shopping-cart-quantity"></span>
    </button>
    <img
      src="./images/image-avatar.png"
      alt="profile picture"
      class="profile-picture"
    />`;
  return createNav;
}

function mobileNav() {
  const createNav = document.createElement("nav");
  createNav.id = "mobile-nav";
  createNav.innerHTML = `
    <button id="menu-button">
      <img src="./images/icon-menu.svg" alt="Three horizontal lines" />
    </button>
    <img src="./images/logo.svg" alt="sneakers" />
    <dialog id="nav">
      <button id="close-button">
        <img src="./images/icon-close.svg" alt="x" />
      </button>
      <ul>
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </ul>
    </dialog>
    <button id="shopping-cart-button">
      <img src="./images/icon-cart.svg" alt="shopping cart" />
      <span id="shopping-cart-quantity"></span>
    </button>
    <img
      src="./images/image-avatar.png"
      alt="profile picture"
      class="profile-picture"
    />`;
  return createNav;
}

function mobileLightbox() {
  const createSection = document.createElement("section");
  createSection.className = "mobile";
  createSection.innerHTML = `<button id="left-button" class="mobile-button">
          <img src="./images/icon-previous.svg" alt="left arrow" />
        </button>
          <img
            id="main-img"
            class="main-img"
            src="./images/image-product-1.jpg"
            alt="white and beige sneakers"
          />
          <img src="./images/image-product-1.jpg" alt="" class="lightbox-img" />
          <img src="./images/image-product-2.jpg" alt="" class="lightbox-img" />
          <img src="./images/image-product-3.jpg" alt="" class="lightbox-img" />
          <img src="./images/image-product-4.jpg" alt="" class="lightbox-img" />
        <button id="right-button" class="mobile-button">
          <img src="./images/icon-next.svg" alt="right arrow" />
        </button>`;
  return createSection;
}

function desktopLightbox() {
  const createSection = document.createElement("section");
  createSection.className = "desktop";
  createSection.innerHTML = `<button>
  <img
    id="main-img"
    class="main-img"
    src="./images/image-product-1.jpg"
    alt="white and beige sneakers"
  />
  <img src="./images/image-product-1.jpg" alt="" class="lightbox-img" />
  <img src="./images/image-product-2.jpg" alt="" class="lightbox-img" />
  <img src="./images/image-product-3.jpg" alt="" class="lightbox-img" />
  <img src="./images/image-product-4.jpg" alt="" class="lightbox-img" />
</button>
<div>
  <button>
    <img
      src="./images/image-product-1-thumbnail.jpg"
      alt=""
      class="thumbnail"
    />
  </button>
  <button>
    <img
      src="./images/image-product-2-thumbnail.jpg"
      alt=""
      class="thumbnail"
    />
  </button>
  <button>
    <img
      src="./images/image-product-3-thumbnail.jpg"
      alt=""
      class="thumbnail"
    />
  </button>
  <button>
    <img
      src="./images/image-product-4-thumbnail.jpg"
      alt=""
      class="thumbnail"
    />
  </button>
</div>
`;
  return createSection;
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

function emptyBasket() {
  const empty = document.createElement("dialog");
  empty.innerHTML = `<span>Cart</span>
  <span>Your cart is empty.</span>`;
  empty.id = "basket";
  empty.className = "empty-basket";
  document.querySelector("main").appendChild(empty);
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

function mobileDesktop() {
  const windowSize = window.innerWidth;
  const main = document.querySelector("main");
  const existingDesktopNav = document.querySelector(".desktop-nav");
  const existingMobileNav = document.getElementById("mobile-nav");
  const existingDesktopLightbox = document.querySelector(".desktop");
  const existingMobileLightbox = document.querySelector(".mobile");

  if (windowSize >= 720) {
    if (existingMobileNav) {
      existingMobileNav.remove();
    }
    if (!existingDesktopNav) {
      const nav = desktopNav();
      main.insertBefore(nav, main.firstChild);
    }

    if (!existingDesktopLightbox) {
      if (existingMobileLightbox) {
        existingMobileLightbox.remove();
      }
      const addDesktop = desktopLightbox();
      main.insertBefore(addDesktop, main.children[1]);
    }
  } else {
    if (existingDesktopNav) {
      existingDesktopNav.remove();
    }
    if (!existingMobileNav) {
      const nav = mobileNav();
      main.insertBefore(nav, main.firstChild);
    }

    if (!existingMobileLightbox) {
      if (existingDesktopLightbox) {
        existingDesktopLightbox.remove();
      }
      const addMobile = mobileLightbox();
      main.insertBefore(addMobile, main.children[1]);
    }
  }
}

window.addEventListener("resize", mobileDesktop);
window.addEventListener("DOMContentLoaded", mobileDesktop);

function menuClick() {
  const mobileMenu = document.getElementById("nav");
  if (mobileMenu) {
    mobileMenu.classList.add("nav-active");
  }

  let overlay = document.getElementById("overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "overlay";
    document.body.appendChild(overlay);
  }
}

function closeMenuClick() {
  const mobileMenu = document.getElementById("nav");
  if (mobileMenu) {
    mobileMenu.classList.remove("nav-active");
  }

  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.remove();
  }
}

window.addEventListener("resize", () => {
  const mobileMenu = document.getElementById("nav");
  const removeOverlay = document.getElementById("overlay");
  const windowSize = window.innerWidth;
  if (windowSize >= 720) {
    if (mobileMenu) {
      mobileMenu.classList.remove("nav-active");
    }
    if (removeOverlay) {
      removeOverlay.remove();
    }
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

document.addEventListener("click", (e) => {
  const target = e.target;
  if (
    target.id === "shopping-cart-button" ||
    target.closest("#shopping-cart-button")
  ) {
    shoppingCartClick();
  }
  if (target.id === "menu-button" || target.closest("#menu-button")) {
    menuClick();
  }
  if (target.id === "close-button" || target.closest("#close-button")) {
    closeMenuClick();
  }
});

function shoppingCartClick() {
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
}
function leftButton() {
  const leftBtn = document.getElementById("left-button");
  if (leftBtn) {
    leftBtn.addEventListener("click", () => {
      console.log("clickL");
    });
  }
}

function rightButton() {
  const rightBtn = document.getElementById("right-button");
  if (rightBtn) {
    rightBtn.addEventListener("click", () => {
      console.log("clickR");
    });
  }
}

function getCheckoutBtn() {
  const checkoutBtn = document.getElementById("checkout-button");
  if (checkoutBtn)
    checkoutBtn.addEventListener("click", () => {
      const basket = document.getElementById("basket");
      basket.classList.remove("basket-active");
    });
}
