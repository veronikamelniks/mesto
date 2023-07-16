const popupElement = document.querySelector("#popup");
const closePopupButton = popupElement.querySelector(".popup-close");
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
const elementsTemplate = document.querySelector(".elements");
const popupAddForm = document.querySelector(".popupAddForm");
let elementName = document.querySelector(".element__name");
let elementFile = document.querySelector(".element__mask");
let cardsName = document.querySelector(".popup__input_input_name");
let cardsImage = document.querySelector(".popup__input_input_link");

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

function openPopup(popup){
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEsc)
}

function closePopup(popup){
  popup.classList.remove("popup_opened");
  document.addEventListener('keydown', closeByEsc)
}

openPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupInputTitle.value = profileTitle.textContent;
  popupInputDescription.value = profileDescription.textContent;
  openPopup(popupElement);
});

openAddPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  openPopup(popupAddPlace);
});

closePopupButton.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

function closeByEsc(evt) {
  if (evt.key === "Escape") {
      const openPopup = document.querySelector('.popup_opened');
      closePopup(openPopup);
  }
}

function closePopupOverlay() {
  popups.forEach((el) => {
      el.addEventListener("mousedown", function (evt) {
          if (evt.target.classList.contains("popup_opened")) {
              closePopup(evt.target);
          }
      });
  });
}

closePopupOverlay();

function likeElement(evt) {
  evt.target.classList.toggle("element__like_active");
}

function deleteElement(evt) {
  evt.target.closest(".element").remove();
}

function createElement(value){
  const elementTemplate = document.querySelector("#element-template").content;
  const cardElement = elementTemplate.querySelector(".element").cloneNode(true);
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

const renderElement = (value) => elementsTemplate.prepend(createElement(value));
initialCards.forEach((value) => {
    renderElements(value);
});

function addElementForm(evt) {
  evt.preventDefault();
  renderElements({
      name: popupElementTitle.value,
      link: popupImage.value,
  });
  evt.target.reset();
  //evt.submitter.classList.add('form__button_invalid')
  evt.submitter.disabled = true;
  closePopup(addPopup);
}

popupAddForm.addEventListener("submit", addElementForm);

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputTitle.value;
  profileDescription.textContent = popupInputDescription.value;
  closePopup(popupElement);
};

popupForm.addEventListener("submit", handleFormSubmit);





