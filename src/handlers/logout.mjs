import { remove } from "../storage/index.mjs";

export default function logout() {
  // Remove user data from local storage
  remove("profile");
  remove("token");
  // Redirect to login page
  location.href = "/";
}
