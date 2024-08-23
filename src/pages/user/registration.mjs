import InputField from "../../components/InputField.mjs";
import Button from "../../components/Button.mjs";

export default function loadRegistrationPage() {
  // Grab the form element
  const form = document.querySelector(`form`);

  // Append the input fields and button to the form
  form.appendChild(InputField(`Name`, `text`));
  form.appendChild(InputField(`Email`, `email`));
  form.appendChild(InputField(`Password`, `password`));

  form.appendChild(Button(null, `submit`, `Sign Up`));
}
