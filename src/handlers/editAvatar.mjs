import editProfile from "./editProfile.mjs";
import InputField from "../components/InputField.mjs";
import Button from "../components/Button.mjs";

export default function editAvatar(userData) {
  // Keep badge in memory in case of cancel
  const container = document.querySelector(`#badge-container`);

  // Create form
  const form = document.createElement("form");
  form.classList.add(
    "flex",
    "flex-col",
    "flex-grow",
    "gap-2",
    "p-4",
    "shadow-lg",
  );
  form.appendChild(
    InputField(
      "Avatar URL",
      "url",
      "avatarurl",
      true,
      false,
      userData.avatar.url,
    ),
  );
  form.appendChild(
    InputField(
      "Avatar alt text",
      "text",
      "avataralt",
      false,
      false,
      userData.avatar.alt,
    ),
  );

  // Add buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("flex", "gap-2");
  buttonContainer.appendChild(
    Button("ban", "button", "Cancel", "rust", true, () => {
      form.replaceWith(container);
    }),
  );
  buttonContainer.appendChild(
    Button("cloud", "submit", "Save", "golf", true, (e) =>
      editProfile(userData.name, e),
    ),
  );

  form.appendChild(buttonContainer);
  container.replaceWith(form);

  // Create an error message container
  const errorContainer = document.createElement("div");
  errorContainer.id = "error-container";
  errorContainer.classList.add("hidden", "text-red-600", "font-semibold");
  form.appendChild(errorContainer);
}
