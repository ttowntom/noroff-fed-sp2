export function listingSubmitLoader() {
  const saveBtn =
    document.querySelector(`#btn-save-listing`) ||
    document.querySelector(`#btn-save`);
  const cancelBtn = document.querySelector(`#btn-cancel`);

  // Handle the cancel button
  cancelBtn.disabled = true;
  cancelBtn.classList.add("cursor-not-allowed", "opacity-50");
  cancelBtn.classList.remove("hover:bg-opacity-90");

  // Handle the save button
  saveBtn.disabled = true;
  saveBtn.classList.remove("hover:bg-opacity-90");
  saveBtn.classList.add("h-10", "flex", "justify-center");
  saveBtn.innerHTML = "";

  const loader = document.createElement("span");
  loader.classList.add("loader", "-mt-[2em]", "text-lavender-light");
  saveBtn.appendChild(loader);
}

export function listingSubmitLoaderOff() {
  const saveBtn =
    document.querySelector(`#btn-save-listing`) ||
    document.querySelector(`#btn-save`);
  const cancelBtn = document.querySelector(`#btn-cancel`);

  // Handle the cancel button
  cancelBtn.disabled = false;
  cancelBtn.classList.remove("cursor-not-allowed", "opacity-50");
  cancelBtn.classList.add("hover:bg-opacity-90");

  // Handle the save button
  saveBtn.disabled = false;
  saveBtn.classList.add("hover:bg-opacity-90");
  saveBtn.classList.remove("h-10", "flex", "justify-center");
  saveBtn.textContent = "Save listing";

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-plus", "mr-2");
  saveBtn.prepend(icon);
}
