const menuBtn = document.getElementById("menu-button");
const closeMenuBtn = document.getElementById("close-button");
const plusBtn = document.getElementById("plus-button");
const minusBtn = document.getElementById("minus-button");
const addCartBtn = document.getElementById("add-to-cart-button");
const shoppingCartBtn = document.getElementById("shopping-cart-button");
let currentIndex = 0;

function desktopThumbnail() {
  const desktopThumbnails = document.querySelectorAll(".desktop-thumbnail");
  const desktopMainImg = document.getElementById("main-img");
  desktopThumbnails.forEach((t, i) => {
    t.addEventListener("click", () => {
      desktopMainImg.src = images[i];
      desktopThumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove("thumbnail-active");
        const thumbnailImg = thumbnail.querySelector(".thumbnail-img");
        if (thumbnailImg) {
          thumbnailImg.classList.remove("thumbnail-img-active");
        }
      });
      t.classList.add("thumbnail-active");
      const thumbnailImg = t.querySelector(".thumbnail-img");
      if (thumbnailImg) {
        thumbnailImg.classList.add("thumbnail-img-active");
      }
    });
  });
  desktopThumbnails[0].click();
}

function lightboxThumbnail() {
  const lightboxThumbnails = document.querySelectorAll(".lightbox-thumbnail");
  const lightboxMainImg = document.getElementById("lightbox-main-img");
  lightboxThumbnails.forEach((t, i) => {
    t.addEventListener("click", () => {
      lightboxMainImg.src = images[i];
      currentIndex = i;
      thumbnailButton();
      lightboxThumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove("thumbnail-active");
        const thumbnailImg = thumbnail.querySelector(".lightbox-thumbnail-img");
        if (thumbnailImg) {
          thumbnailImg.classList.remove("thumbnail-img-active");
        }
      });
      t.classList.add("thumbnail-active");
      const thumbnailImg = t.querySelector(".lightbox-thumbnail-img");
      if (thumbnailImg) {
        thumbnailImg.classList.add("thumbnail-img-active");
      }
    });
  });
  lightboxThumbnails[0].click();
}

function thumbnailButton() {
  const lightboxThumbnails = document.querySelectorAll(".lightbox-thumbnail");
  lightboxThumbnails.forEach((t, i) => {
    t.classList.toggle("thumbnail-active", i === currentIndex);
    const thumbnailImg = t.querySelector(".lightbox-thumbnail-img");
    if (thumbnailImg) {
      thumbnailImg.classList.toggle("thumbnail-img-active", i === currentIndex);
    }
  });
}

function lightboxCloseBtn() {
  const lightboxCloseButton = document.getElementById("lightbox-close-button");
  lightboxCloseButton.addEventListener("click", () => {
    const lightbox = document.getElementById("lightbox");
    const removeOverlay = document.getElementById("lightbox-overlay");
    lightbox.remove();
    removeOverlay.remove();
    document.body.classList.remove("no-scroll");
  });
}

function lightboxBtn() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox && window.innerWidth >= 720) {
    const createOverlay = document.createElement("div");
    createOverlay.id = "lightbox-overlay";
    document.body.appendChild(createOverlay);
    const createDialog = document.createElement("dialog");
    document.body.appendChild(createDialog);
    createDialog.className = "lightbox-active";
    createDialog.id = "lightbox";
    createDialog.innerHTML = `<button id="lightbox-close-button">
        <svg class="close-svg" width="14" height="15" xmlns="http://www.w3.org/2000/svg">
        <path class="close-path" d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 
        9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 
        4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
        </button>
        <div class="relative">
          <button id="left-button" class="arrow-button">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                class="path"
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <img src="./images/image-product-1.jpg" alt="" id="lightbox-main-img"/>
          <button id="right-button"  class="arrow-button">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                class="path"
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="lightbox-thumbnail-row">
          <button class="lightbox-thumbnail">
            <img
              class="lightbox-thumbnail-img"
              src="./images/image-product-1-thumbnail.jpg"
              alt=""
            />
          </button>
          <button class="lightbox-thumbnail">
            <img
              class="lightbox-thumbnail-img"
              src="./images/image-product-2-thumbnail.jpg"
              alt=""
            />
          </button>
          <button class="lightbox-thumbnail">
            <img
              class="lightbox-thumbnail-img"
              src="./images/image-product-3-thumbnail.jpg"
              alt=""
            />
          </button>
          <button class="lightbox-thumbnail">
            <img
              class="lightbox-thumbnail-img"
              src="./images/image-product-4-thumbnail.jpg"
              alt=""
            />
          </button>
        </div>`;
    lightboxCloseBtn();
    lightboxThumbnail();
    document.body.classList.add("no-scroll");
  }
}

const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

function leftButton() {
  const lightbox = document.getElementById("lightbox");
  let mainImg;
  if (lightbox) {
    mainImg = document.getElementById("lightbox-main-img");
  } else {
    mainImg = document.getElementById("main-img");
  }
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  mainImg.src = images[currentIndex];
  thumbnailButton();
}

function rightButton() {
  const lightbox = document.getElementById("lightbox");
  let mainImg;
  if (lightbox) {
    mainImg = document.getElementById("lightbox-main-img");
  } else {
    mainImg = document.getElementById("main-img");
  }
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  mainImg.src = images[currentIndex];
  thumbnailButton();
}

function desktopNav() {
  const createNav = document.createElement("nav");
  createNav.className = "desktop-nav";
  createNav.innerHTML = `
  <div class="left-nav">
    <img src="./images/logo.svg" alt="sneakers" />
    <ul>
      <a href="#">Collections</a>
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </ul>
    </div>
    <div class="right-nav">
    <button id="shopping-cart-button">
      <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 
      1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 
      20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 
      2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 
      0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 
      0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 
      0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 
      5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
      <span id="shopping-cart-quantity"></span>
    </button>
    <img
      src="./images/image-avatar.png"
      alt="profile picture"
      class="profile-picture"
    />
    </div>`;
  return createNav;
}

function mobileNav() {
  const createNav = document.createElement("nav");
  createNav.id = "mobile-nav";
  createNav.innerHTML = `   <section class="left-nav">
          <button id="menu-button">
            <img src="./images/icon-menu.svg" alt="three horizontal lines" />
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
        </section>
        <section class="right-nav">
          <button id="shopping-cart-button">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 
            0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 
            20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 
            3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 
            0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 
            0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 
            0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 
            5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
            <span id="shopping-cart-quantity"></span>
          </button>
          <img
            src="./images/image-avatar.png"
            alt="profile picture"
            class="profile-picture"
          />
        </section>`;
  return createNav;
}

function mobileLightbox() {
  const createSection = document.createElement("section");
  createSection.className = "mobile";
  createSection.innerHTML = `    <button id="left-button" class="arrow-button">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              class="path"
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <img
          id="main-img"
          class="main-img"
          src="./images/image-product-1.jpg"
          alt="white and beige sneakers"
        />
        <button id="right-button" class="arrow-button">
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              class="path"
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>`;
  return createSection;
}

function desktopLightbox() {
  const createSection = document.createElement("section");
  createSection.className = "desktop";
  createSection.innerHTML = `
    <button id="lightbox-button">
      <img
        id="main-img"
        class="main-img"
        src="./images/image-product-1.jpg"
        alt="white and beige sneakers"
      />
    </button>
    <div class="thumbnail-row">
      <button class="desktop-thumbnail">
        <img
          class="thumbnail-img"
          src="./images/image-product-1-thumbnail.jpg"
          alt="Thumbnail 1"
        />
      </button>
      <button class="desktop-thumbnail">
        <img
          class="thumbnail-img"
          src="./images/image-product-2-thumbnail.jpg"
          alt="Thumbnail 2"
        />
      </button>
      <button class="desktop-thumbnail">
        <img
          class="thumbnail-img"
          src="./images/image-product-3-thumbnail.jpg"
          alt="Thumbnail 3"
        />
      </button>
      <button class="desktop-thumbnail">
        <img
          class="thumbnail-img"
          src="./images/image-product-4-thumbnail.jpg"
          alt="Thumbnail 4"
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
    document.querySelector(".right-nav").appendChild(basket);
  }
  basket.innerHTML = `<span class="cart">Cart</span> 
  <div class="order-item">
    <div class="item">
      <div class="item-details">
        <img class="item-img" src="./images/image-product-1-thumbnail.jpg" alt="white and beige sneakers">
        <div class="order-details">
          <span>Fall Limited Edition Sneakers</span>
          <span>$125.00 x ${addQnt}<span id="total-price"> $${totalPrice}</span></span>
        </div>
      </div>
      <button id="delete-button">
        <img src="./images/icon-delete.svg" alt="rubbish bin / trash can" />
      </button>
    </div>
    <button id="checkout-button">Checkout</button>
  </div>`;
  deleteItemBasket();
}

function updateItemBasket(addQnt) {
  itemBasket(addQnt);
}

function emptyBasket() {
  const empty = document.createElement("dialog");
  empty.innerHTML = `<div class="empty">
    <span>Cart</span>
    <span>Your cart is empty.</span>
  </div>`;
  empty.id = "basket";
  empty.className = "empty-basket";
  document.querySelector(".right-nav").appendChild(empty);
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
  const lightbox = document.getElementById("lightbox");
  if (windowSize >= 845) {
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
      desktopThumbnail();
    }
  } else {
    if (lightbox) {
      lightbox.remove();
    }
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
window.addEventListener("DOMContentLoaded", () => {
  mobileDesktop();
  leftButton();
  rightButton();
  desktopThumbnail();
});

function menuClick() {
  const mobileMenu = document.getElementById("nav");
  if (mobileMenu) {
    mobileMenu.classList.add("nav-active");
    document.body.classList.add("no-scroll");
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
    document.body.classList.remove("no-scroll");
  }

  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.remove();
  }
}

window.addEventListener("resize", () => {
  const mobileMenu = document.getElementById("nav");
  const removeOverlay = document.getElementById("overlay");
  const lightboxOverlay = document.getElementById("lightbox-overlay");
  const windowSize = window.innerWidth;
  if (windowSize >= 845) {
    if (mobileMenu) {
      mobileMenu.classList.remove("nav-active");
    }
    if (removeOverlay) {
      removeOverlay.remove();
    }
  } else {
    lightboxOverlay.remove();
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
    const emptyBasket = document.querySelector(".empty-basket.basket-active");
    if (emptyBasket) {
      addQnt += qnt;
      shoppingCartQnt.innerText = addQnt;
      emptyBasket.classList.remove("basket-active");
      deleteEmptyBasket();
    } else {
      addQnt += qnt;
      shoppingCartQnt.innerText = addQnt;
    }
    let itemBasket = document.getElementById("basket");
    if (!itemBasket) {
      itemBasket = document.createElement("dialog");
      itemBasket.id = "basket";
      itemBasket.className = "item-basket";
      document.querySelector(".right-nav").appendChild(itemBasket);
    }
    updateItemBasket(addQnt);
    if (emptyBasket) {
      itemBasket.classList.add("basket-active");
    }
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
  if (target.id === "left-button" || target.closest("#left-button")) {
    leftButton();
  }
  if (target.id === "right-button" || target.closest("#right-button")) {
    rightButton();
  }
  if (target.id === "lightbox-button" || target.closest("#lightbox-button")) {
    lightboxBtn();
  }
  getCheckoutBtn();
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
