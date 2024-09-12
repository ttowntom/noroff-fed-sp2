export default function createObjFromForm() {
  // Select form elements
  const title = document.querySelector('[id^="input-title"]').value;
  const description = document.querySelector('[id^="input-description"]').value;
  const endDate = document.querySelector('[id^="input-end-date"]').value;

  // Select all image URL and description inputs
  const imageContainers = document.querySelectorAll(
    '#img-container > div[id^="img-"]'
  );
  const media = [];

  // Loop through each image container to get URL and description
  imageContainers.forEach((container) => {
    const imageUrl = container.querySelector('input[name="image-url"]').value;
    const imageDescription = container.querySelector(
      'input[name="image-description"]'
    ).value;

    // Push each image's details into the media array
    media.push({
      url: imageUrl,
      alt: imageDescription,
    });
  });

  // Construct the final object
  const listingObject = {
    title: title,
    endsAt: endDate,
  };

  if (media.length > 0) {
    listingObject.media = media;
  }
  if (description.length > 0) {
    listingObject.description = description;
  }

  return listingObject;
}
