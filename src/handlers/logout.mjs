export default function logout() {
  // Clear local storage
  localStorage.clear();

  // Redirect to login page
  location.href = "/";
}
