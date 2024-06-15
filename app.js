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
        <button id="left-button" class="desktop" alt="left arrow">
            <img src="./images/icon-previous.svg" alt="left arrow" />
          </button>
      <img
      src="./images/image-product-1.jpg"
      alt="white and beige sneakers"
    />
    <img src="./images/image-product-1.jpg" alt="" class="hidden" />
    <img src="./images/image-product-2.jpg" alt="" class="hidden" />
    <img src="./images/image-product-3.jpg" alt="" class="hidden" />
    <img src="./images/image-product-4.jpg" alt="" class="hidden" />
     <button id="right-button"  class="desktop">
            <img src="./images/icon-next.svg"/>
          </button>
    `;
    getLightboxCloseBtn();
  }
});

const lightboxBtn = document.getElementById("lightbox-button");
