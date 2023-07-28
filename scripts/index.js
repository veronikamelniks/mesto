const openPopupButton = document.querySelector(".profile__edit-button");//+ - прокинуто везде все ок 
const popupElement = document.querySelector(".popup__profile");//+ - прокинуто везде все ок 
const closeButtonProfile = popupElement.querySelector(".popup__button-close");//+ - прокинуто везде все ок 
const popupForm = document.querySelector(".popup__form");//+ - прокинуто везде все ок 
const popupInputTitle = popupForm.querySelector(".popup__input_input_title");//+ - прокинуто везде все ок 
const popupInputDescription = popupForm.querySelector(".popup__input_input_description");//+ - прокинуто везде все ок 
const profileTitle = document.querySelector(".profile__name");//+ - прокинуто везде все ок 
const profileDescription = document.querySelector(".profile__description");//+ - прокинуто везде все ок 
const openAddPopupButton = document.querySelector(".profile__add-button");//+ - прокинуто везде все ок 
const popupAddPlace = document.querySelector(".popup__type_elements");//+ - прокинуто везде все ок 
const buttonClosePopupAdd = document.querySelector(".popup__button-close_element");//+ - прокинуто везде все ок 
const container = document.querySelector('.element');//+ - прокинуто везде все ок (?)
const cards = document.querySelector('#element-template').content; //+ - прокинуто везде все ок 
const formElement = document.querySelector('.popup__form_element');//+ - прокинуто везде все ок 
const titleInput = formElement.querySelector('.popup__input_input_name');//+ - прокинуто везде все ок 
const linkInput = formElement.querySelector('.popup__input_input_link');//+ - прокинуто везде все ок 
const popupImages = document.querySelector(".popup__type_image");//+ - прокинуто везде все ок 
const buttonClosePopupImage = document.querySelector(".popup__image-close");//+ - прокинуто везде все ок
const bigImage = popupImages.querySelector(".popup__image");//+ - прокинуто везде все ок 
const titleBigImage = popupImages.querySelector(".popup__image-name");


//Функции открытия/закрытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

openPopupButton.addEventListener("click", function() {
  openPopup(popupElement);
  popupInputTitle.value = profileTitle.textContent;
  popupInputDescription.value = profileDescription.textContent;
})

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputTitle.value;
  profileDescription.textContent = popupInputDescription.value;
  closePopup(popupElement);
}

closeButtonProfile.addEventListener("click", function() {
  closePopup(popupElement);
})

popupForm.addEventListener('submit', handleFormSubmit);

openAddPopupButton.addEventListener("click", function() {
  openPopup(popupAddPlace);
})

buttonClosePopupAdd.addEventListener("click", function() {
  closePopup(popupAddPlace);
})

buttonClosePopupImage.addEventListener("click", function() {
  closePopup(popupImages);
})

//Создание карточки 

const createCard = (item) => {
  const card = cards.querySelector('.element').cloneNode(true);
  const image = card.querySelector('.element__image');
  image.src = item.link;
  const title = card.querySelector('.element__name');
  title.textContent = item.name;
  image.alt = item.name;

  card.querySelector('.element__delete-button').addEventListener('click', () => {
    card.remove();
  });

  card.querySelector('.element__like').addEventListener('click', function(evt) {
   evt.target.classList.toggle('.element__like_active');
  });

  function openImage(item) {
    bigImage.src = item.link;
    titleBigImage.textContent = item.name;
    bigImage.alt = item.name;
  }

  image.addEventListener("click", function() {
    openImage(item);
    openPopup(popupImages);
  })

  return(card);
}

///
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = createCard({link: linkInput.value, name: titleInput.value});
  container.prepend(newCard);
  closePopup(popupElement);
  formElement.reset();
}

formElement.addEventListener('submit', handleAddCardFormSubmit);

initialCards.forEach((item) => {
  const card = createCard(item);
  container.append(card);
})











