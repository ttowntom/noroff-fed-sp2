import InputField from "../components/InputField.mjs";
import Button from "../components/Button.mjs";

export default function editAvatar(userData) {
  const container = document.querySelector(`#badge-container`);

  const formContainer = document.createElement("div");
  formContainer.classList.add("flex", "gap-4", "items-center");
  const form = document.createElement("form");
  form.classList.add("flex", "flex-col", "flex-grow", "gap-2");
  form.appendChild(
    InputField(
      "Avatar URL",
      "url",
      "avatar-url",
      true,
      false,
      userData.avatar.url,
    ),
  );
  form.appendChild(
    InputField(
      "Avatar alt text",
      "text",
      "avatar-alt",
      false,
      false,
      userData.avatar.alt,
    ),
  );

  formContainer.appendChild(form);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("flex", "gap-2", "flex-col");
  buttonContainer.appendChild(Button("cloud", "submit", "Save", "golf", true));
  buttonContainer.appendChild(
    Button("ban", "button", "Cancel", "rust", true, () => {
      formContainer.replaceWith(container);
    }),
  );

  formContainer.appendChild(buttonContainer);
  container.replaceWith(formContainer);
}
