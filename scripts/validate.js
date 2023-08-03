const config = {
    formSelector: ".popup__form",
    inputSelector:".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_disable",
    inputErrorClass: "popup__input_error",
    errorClass: 'popup__error_visible',
};


const showInputError = (inputElement, errorElement, config) => {
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}


const hideEInputError = (inputElement, errorElement, config) => {
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage; 
}

function disableButton(buttonElement, config) {
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);   
};

const disableButton = (buttonElement, config) => {
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);   
};


const enableButton = (buttonElement, config) => {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
};


const toggleButton = (buttonElement, isActive, config) => {
    if(!isActive) {
        disableButton(buttonElement, config);
    } else {
        enableButton(buttonElement, config);
    };
}


const isValidity = (inputElement, formElement, config) => {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if(!isInputValid) {
        showInputError(inputElement, errorElement, config);
    }   else {
        hideEInputError(inputElement, errorElement, config);
    }
};



const setEventListener = (formElement, config) => {
    const inputList = formElement.querySelectorAll(config.inputSelector);
    const submitButtonElement = formElement.querySelector(config.submitButtonSelector);

    toggleButton (submitButtonElement, formElement.isValidity(), config);
    [...inputList].forEach(function (inputElement) {
        inputElement.addEventListener('input', function() {
            toggleButton (submitButtonElement, formElement.isValidity(), config);
            isValidity(inputElement, formElement, config);
        })
    })
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
};


const enableValidation = (config) => {
    const formsList = document.querySelectorAll(config.formSelector); 
    [...formsList].forEach(function (formElement) {
        setEventListener(formElement, config);
    });
};

enableValidation(config);


