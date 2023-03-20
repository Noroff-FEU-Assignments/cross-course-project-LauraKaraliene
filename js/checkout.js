const checkoutForm = document.querySelector("#checkoutForm");
const contactInfoFirstName = document.querySelector("#contactInfoFirstName");
const contactInfoFirstNameError = document.querySelector(
  "#contactInfoFirstNameError"
);
const checkoutEmail = document.querySelector("#checkoutEmail");
const checkoutEmailError = document.querySelector("#checkoutEmailError");
const shippingFirstName = document.querySelector("#shippingFirstName");
const shippingFirstNameError = document.querySelector(
  "#shippingFirstNameError"
);
const shippingLastName = document.querySelector("#shippingLastName");
const shippingLastNameError = document.querySelector("#shippingLastNameError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const postalCode = document.querySelector("#postalCode");
const postalCodeError = document.querySelector("#postalCodeError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");

const cardName = document.querySelector("#cardName");
const cardNameError = document.querySelector("#cardNameError");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");
const date = document.querySelector("#date");
const dateError = document.querySelector("#dateError");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");

const mainContent = document.querySelector(".checkout-main");
const paymentIcons = document.querySelector(".payment-icons");

const checkoutMessageSubmit = document.querySelector("#checkoutMessage");

function validateCheckoutForm(event) {
  event.preventDefault();

  if (checkLength(contactInfoFirstName.value, 0)) {
    contactInfoFirstNameError.style.display = "none";
  } else {
    contactInfoFirstNameError.style.display = "block";
  }
  if (validateEmail(checkoutEmail.value)) {
    checkoutEmailError.style.display = "none";
  } else {
    checkoutEmailError.style.display = "block";
  }
  if (checkLength(shippingFirstName.value, 0)) {
    shippingFirstNameError.style.display = "none";
  } else {
    shippingFirstNameError.style.display = "block";
  }
  if (checkLength(shippingLastName.value, 0)) {
    shippingLastNameError.style.display = "none";
  } else {
    shippingLastNameError.style.display = "block";
  }
  if (checkLength(address.value, 9)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
  if (validatePostalCode(postalCode.value)) {
    postalCodeError.style.display = "none";
  } else {
    postalCodeError.style.display = "block";
  }
  if (checkLength(city.value, 0)) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }
  if (checkLength(country.value, 0)) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "block";
  }
  if (validateCardName(cardName.value)) {
    cardNameError.style.display = "none";
  } else {
    cardNameError.style.display = "block";
  }
  if (checkLength(cardNumber.value, 11)) {
    cardNumberError.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
  }
  if (validateCvv(cvv.value)) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
  }

  if (
    contactInfoFirstName.value < 1 ||
    !validateEmail ||
    shippingFirstName.value < 1 ||
    shippingLastName.value < 1 ||
    address.value < 10 ||
    !validatePostalCode ||
    city.value < 1 ||
    country.value < 1 ||
    !validateCardName ||
    cardNumber.value < 12 ||
    !validateCvv
  ) {
    return;
    checkoutMessageSubmit.innerHTML = "";
  } else {
    event.target.reset();
    mainContent.style.display = "none";
    paymentIcons.style.display = "none";
    checkoutMessageSubmit.innerHTML =
      '<div class="checkout-message"><i class="fa-solid fa-check check"></i><h1>Thank you!<h1><h2>We have received your order and will start processing it right away!<h2><div><a href="../products/jackets.html"class="cart-button-continue-shopping">Continue shopping</a></div></div>';
    checkoutMessageSubmit.style.display = "block";
  }
}

checkoutForm.addEventListener("submit", validateCheckoutForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const emailRegEx = /\S+@\S+\.\S+/;
  const isValidEmail = emailRegEx.test(email);
  return isValidEmail;
}

function validatePostalCode(postalCode) {
  const norwayPostalCodeRegex = /^\d{4}$/;
  const isValidPostalCode = norwayPostalCodeRegex.test(postalCode);
  return isValidPostalCode;
}

function validateCardName(cardName) {
  const creditCardNameRegex = /^([a-zA-Z]+(?:\s|-)?)+$/;
  const isValidCardName = creditCardNameRegex.test(cardName);
  return isValidCardName;
}

function validateCvv(cvv) {
  const cvvRegex = /^[0-9]{3,4}$/;
  const isValidCvv = cvvRegex.test(cvv);
  return isValidCvv;
}
