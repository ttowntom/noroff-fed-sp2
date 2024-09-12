// Validation rules for name, email and password
const emailRegex = "^[\\w.-]+@(stud.)?noroff.no$";
function validateInput(name, value) {
  switch (name) {
    case "name":
    case "title":
      if (value.length < 3) {
        return "Must be at least 3 characters";
      }
      break;
    case "email":
      if (!value.match(emailRegex)) {
        return "Please enter a valid email address. Must be a Noroff email address.";
      }
      break;
    case "password":
      if (value.length < 8) {
        return "Password must be at least 8 characters";
      }
      break;
    case "image-url":
    case "avatarurl":
      try {
        new URL(value);
        return null;
      } catch (err) {
        console.error("Error:", err.message);
        return "Please enter a valid URL (including 'http' or 'https')";
      }
    default:
      break;
  }
}

// Disable submit button if there are validation errors
let validationErrors = {
  name: false,
  title: false,
  email: false,
  password: false,
};

function handleSubmitButton(validationErrors) {
  if (
    validationErrors.name ||
    validationErrors.title ||
    validationErrors.email ||
    validationErrors.password
  ) {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.classList.add("cursor-not-allowed", "opacity-50");
  } else {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = false;
    submitButton.classList.remove("cursor-not-allowed", "opacity-50");
  }
}

/**
 * This function will handle the validation of the input fields,
 * and will enable/disable the submit button based on the validation.
 * @param {HTMLInputElement} inputField - HTML input element
 */
export default function continuousInputValidation(inputField) {
  const handleValidation = (e) => {
    const { name, value } = e.target;
    const errorField = document.querySelector(`#error-${name}`);
    const error = validateInput(name, value);

    if (error) {
      errorField.textContent = error;
      inputField.classList.add("border-red-500");

      // Validate submit button
      validationErrors[inputField.name] = true;
      handleSubmitButton(validationErrors);
    } else {
      errorField.textContent = "";
      inputField.classList.remove("border-red-500");

      // Validate submit button
      validationErrors[inputField.name] = false;
      handleSubmitButton(validationErrors);
    }
  };

  inputField.addEventListener("blur", (e) => {
    const errorField = document.querySelector(`#error-${e.target.name}`);
    if (errorField.textContent === "") {
      handleValidation(e);
    }
  });

  inputField.addEventListener("input", (e) => {
    const errorField = document.querySelector(`#error-${e.target.name}`);
    if (errorField.textContent !== "") {
      handleValidation(e);
    }
  });
}
