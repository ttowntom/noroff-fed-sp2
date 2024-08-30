import { updateProfile } from "../api/profile/update.mjs";

export default function editProfile(username, e) {
  e.preventDefault();
  const form = e.target.closest("form");
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  const { avatarurl, avataralt } = data;

  const update = {
    avatar: {
      urle: avatarurl,
      alt: avataralt,
    },
  };

  console.log(username, update);

  // Send to API
  updateProfile(username, update);
}
