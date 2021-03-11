const mapLink = document.querySelector(".map-link");
const mapPopup = document.querySelector(".popup-map");
const closePopup = mapPopup.querySelector(".popup-close");


mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
});
