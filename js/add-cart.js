const addLink = document.querySelectorAll(".btn-cart");

const addCartPopup = document.querySelector(".add-cart-popup");
const addClosePopup = addCartPopup.querySelector(".popup-close");

addLink.forEach(link => link.addEventListener("click", function (evt) {
  evt.preventDefault();
  addCartPopup.classList.add("popup-show");
}));

addClosePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  addCartPopup.classList.remove("popup-show");
});
