import { updateProfile } from "../api/profile/update.mjs";

export default function editProfile(username, e) {
  e.preventDefault();
  const form = e.target.closest("form");
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const { avatarurl, avataralt } = data;

  const update = {
    avatar: {
      url: avatarurl,
      alt: avataralt,
    },
  };

  // Send to API
  updateProfile(username, update);
}
