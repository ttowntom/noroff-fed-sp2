import InputField from "../../components/InputField.mjs";
import Button from "../../components/Button.mjs";
import { setLoginFormListener } from "../../handlers/login.mjs";

export default function loadLoginPage() {
  // Grab the form element
  const form = document.querySelector(`form`);

  // Append the input fields and button to the form
  form.appendChild(InputField(`Email`, `email`, `email`, true));
  form.appendChild(InputField(`Password`, `password`, `password`, true));

  form.appendChild(Button(null, `submit`, `Log in`));

  // Add "sign up" event listener to the form
  setLoginFormListener();
}
