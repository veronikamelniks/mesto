const popUp = document.querySelector(".popup");
const closePopupButton = document.querySelector(".popup__close");
const openPopupButton = document.querySelector(".profile__edit-button");
const popupForm = document.querySelector(".popup__content");
const popupMain = document.querySelector(".popup__text");


let profileTitle = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let popupInputTitle = popupMain.querySelector(".popup__title");
let popupInputDescription = popupMain.querySelector(".popup__description");


const openPopup = function () {
    popUp.classList.add("popup_opened");
    popupInputTitle.value = profileTitle.textContent;
    popupInputDescription.value = profileDescription.textContent;
};

const closePopup = function () {
    popUp.classList.remove("popup_opened");
};

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputTitle.value;
    profileDescription.textContent = popupInputDescription.value;
    closePopup();
};

popUp.addEventListener("submit", handleFormSubmit);