const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageSubmit = document.querySelector("#informationMessage");

function validateForm() {
  event.preventDefault();

  if (checkLength(firstName.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(message.value, 0)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  if (firstName.value < 1 || !validateEmail || message.value < 1) {
    return;
    messageSubmit.innerHTML = "";
  } else {
    form.reset();
    messageSubmit.innerHTML =
      '<div class="information-message"><i class="fa-solid fa-check check"></i>Your message has been sent!</div>';
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatche = regEx.test(email);
  return patternMatche;
}
