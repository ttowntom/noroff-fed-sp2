import InputField from "../../components/InputField.mjs";
import Button from "../../components/Button.mjs";
import { setRegistrationFormListener } from "../../handlers/registration.mjs";

export default function loadLoginPage() {
  console.log("Login Page Loaded");

  // Grab the form element
  const form = document.querySelector(`form`);

  // Append the input fields and button to the form
  form.appendChild(InputField(`Email`, `email`, `email`, true));
  form.appendChild(InputField(`Password`, `password`, `password`, true));

  form.appendChild(Button(null, `submit`, `Sign Up`));

  // Add "sign up" event listener to the form
  setRegistrationFormListener();
}
