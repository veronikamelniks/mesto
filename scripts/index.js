const popupElement = document.querySelector("#popup");
const closePopupButton = popupElement.querySelector("#popup-close");
const openPopupButton = document.querySelector(".profile__edit-button");
const popupMain = document.querySelector(".popup__text");
const popupForm = popupElement.querySelector(".popup__form");

let profileTitle = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let popupInputTitle = popupMain.querySelector(".popup__input_input_title");
let popupInputDescription = popupMain.querySelector(".popup__input_input_description");

const popupAddPlace = document.querySelector("#add-popup");
const closeAddPopupButton = popupNewPlace.querySelector("#new-popup-close");
const openAddPopupButton = document.querySelector(".profile__add-button");
const addPopupMain = document.querySelector("#new-popup-text");
const addPopupForm = popupElement.querySelector("#new-popup-form");
const popupElementTitle = document.querySelector(".popup__element-title");
const popupImage = document.querySelector(".popup__element-image");
const popupImages = document.querySelector("#image-popup");
const elementButtonLike = cardElement.querySelector(".element__group");
let elementName = document.querySelector(".element__name");
let elementFile = document.querySelector(".element__mask");
let cardsName = document.querySelector(".popup__input_input_name");
let cardsImage = document.querySelector(".popup__input_input_link");



const openPopup = function () {
    popupElement.classList.add("popup_opened");
    popupInputTitle.value = profileTitle.textContent;
    popupInputDescription.value = profileDescription.textContent;
};

const openNewPopup = function () {
  popupAddPlace.classList.add("popup_opened");
};

const closePopup = function () {
    popupElement.classList.remove("popup_opened");
};

const closeNewPopup = function () {
    popupAddPlace.classList.remove("popup_opened");
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

openAddPopupButton.addEventListener("click", openNewPopup);
closeAddPopupButton.addEventListener("click", closeNewPopup);


function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputTitle.value;
    profileDescription.textContent = popupInputDescription.value;
    closePopup();
};

function likeElement(evt) {
  evt.target.classList.toggle("element__like_active");
}

function deleteElement(evt) {
  evt.target.closest(".element").remove();
}

function createElement(value){
  const elementTemplate = document.querySelector("#element-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const elementImage = cardElement.querySelector(".element__mask");
  const elementDeleteButton = cardElement.querySelector(".element__delete-button");
  const elementTitle = cardElement.querySelector(".element__name");
  const elementButtonLike = cardElement.querySelector(".element__group");

  elementTitle.textContent = value.name;
  elementImage.src = value.link;
  elementImage.alt = value.name;

  function popupImageOpen(){
    popupElementTitle.textContent = elementTitle.textContent;
    popupImage.src = elementImage.src;
    popupImage.alt = elementTitle.textContent;
    openPopup(popupImages);
  }

  elementButtonLike.addEventListener("click", likeElement);
  elementDeleteButton.addEventListener("click", deleteElement);
  elementImage.addEventListener("click", popupImageOpen);

  return cardElement;

}
popupForm.addEventListener("submit", handleFormSubmit);





