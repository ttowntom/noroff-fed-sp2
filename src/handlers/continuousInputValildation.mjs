const emailRegex = "^[\\w.-]+@(stud.)?noroff.no$";

function validateInput(name, value) {
  switch (name) {
    case "name":
      if (value.length < 3) {
        return "Name must be at least 3 characters";
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
    default:
      break;
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
      // Disable submit button
      const submitButton = document.querySelector(`#btn-sign-up`);
      submitButton.disabled = true;
      submitButton.classList.add(`cursor-not-allowed`, `opacity-50`);
    } else {
      errorField.textContent = "";
      // Enable submit button
      const submitButton = document.querySelector(`#btn-sign-up`);
      submitButton.disabled = false;
      submitButton.classList.remove(`cursor-not-allowed`, `opacity-50`);
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
