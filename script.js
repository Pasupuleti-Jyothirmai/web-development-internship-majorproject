// Selecting form
const form = document.getElementById("registrationForm");

// Event Listener for submit
form.addEventListener("submit", function(event) {

  // Prevent form submission
  event.preventDefault();

  // Call validation function
  validateForm();

});

// Function for form validation
function validateForm() {

  // Getting input values
  let fullName = document.getElementById("fullName").value.trim();

  let email = document.getElementById("email").value.trim();

  let phone = document.getElementById("phone").value.trim();

  let password = document.getElementById("password").value;

  let confirmPassword = document.getElementById("confirmPassword").value;

  // Error elements
  let nameError = document.getElementById("nameError");

  let emailError = document.getElementById("emailError");

  let phoneError = document.getElementById("phoneError");

  let passwordError = document.getElementById("passwordError");

  let confirmPasswordError = document.getElementById("confirmPasswordError");

  // Clear old errors
  nameError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";
  passwordError.innerText = "";
  confirmPasswordError.innerText = "";

  let isValid = true;

  // Name Validation
  if (fullName.length < 5) {

    nameError.innerText = "Name must be at least 5 characters";

    isValid = false;
  }

  // Email Validation
  if (!email.includes("@")) {

    emailError.innerText = "Enter correct email";

    isValid = false;
  }

  // Phone Validation
  if (
    phone.length !== 10 ||
    isNaN(phone) ||
    phone === "1234567890"
  ) {

    phoneError.innerText = "Enter valid 10-digit phone number";

    isValid = false;
  }

  // Password Validation
  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password.toLowerCase() === fullName.toLowerCase()
  ) {

    passwordError.innerText =
      "Password is not strong";

    isValid = false;
  }

  // Confirm Password Validation
  if (password !== confirmPassword) {

    confirmPasswordError.innerText =
      "Passwords do not match";

    isValid = false;
  }

  // Success Message
  if (isValid) {

    alert("Form Submitted Successfully!");

    form.reset();
  }
}