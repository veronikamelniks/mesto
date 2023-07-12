const popupElement = document.querySelector(".popup");
const closePopupButton = popupElement.querySelector(".popup__close");
const openPopupButton = document.querySelector(".profile__edit-button");
const popupMain = document.querySelector(".popup__text");
const popupForm = popupElement.querySelector(".popup__form");

let profileTitle = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let popupInputTitle = popupMain.querySelector(".popup__input_input_title");
let popupInputDescription = popupMain.querySelector(".popup__input_input_description");

const openPopup = function () {
    popupElement.classList.add("popup_opened");
    popupInputTitle.value = profileTitle.textContent;
    popupInputDescription.value = profileDescription.textContent;
};

const closePopup = function () {
    popupElement.classList.remove("popup_opened");
};

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputTitle.value;
    profileDescription.textContent = popupInputDescription.value;
    closePopup();
};

popupForm.addEventListener("submit", handleFormSubmit);


