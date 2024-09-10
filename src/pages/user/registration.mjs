import InputField from "../../components/InputField.mjs";
import Button from "../../components/Button.mjs";
import { setRegistrationFormListener } from "../../handlers/registration.mjs";

export default function loadRegistrationPage() {
  // Grab main
  const main = document.querySelector("main");
  const title = document.createElement("h1");
  title.classList.add("sr-only");
  title.textContent = "Sign up";
  main.appendChild(title);

  // Grab the form element
  const form = document.querySelector("form");

  // Append the input fields and button to the form
  form.appendChild(InputField("Name", "text", "name", true));
  form.appendChild(InputField("Email", "email", "email", true));
  form.appendChild(InputField("Password", "password", "password", true));

  form.appendChild(Button(null, "submit", "Sign Up", "lavender", true));

  // Add "sign up" event listener to the form
  setRegistrationFormListener();
}
