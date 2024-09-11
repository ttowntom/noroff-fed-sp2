// Get screen width
let screenWidth = window.innerWidth;

export default function Footer() {
  const footer = document.createElement("footer");
  footer.classList.add(
    "w-full",
    "sm:w-5/6",
    "sm:max-w-screen-xl",
    "mt-16",
    "mx-auto",
    "p-4",
    "flex",
    "flex-col",
    "items-center",
    "sm:items-start",
    "sm:flex-row",
    "sm:justify-around",
    "gap-4",
    "border",
    "border-battleship",
    "rounded-md",
  );

  const col1 = document.createElement("div");
  col1.classList.add("sm:w-1/4");
  col1.innerHTML = `
		<a href="/">
		<img src="/assets/quickBid-logo.svg" alt="QuickBid Logo" class="w-full max-h-8 mb-2" />
		</a>
	`;
  if (screenWidth >= 640) {
    col1.innerHTML += `<p class="text-center text-sm text-gray-500">&copy; 2024 QuickBid.</p>
		<p class="text-center text-sm text-gray-500">All rights reserved.</p>`;
  }

  const col2 = document.createElement("div");
  col2.classList.add("flex", "justify-around", "w-full");

  const navigation = document.createElement("div");
  navigation.classList.add("sm:w-1/4");
  navigation.innerHTML = `
		<h2 class="text-lg font-semibold">Navigation</h2>
		<ul class="flex flex-col gap-1 text-sm">
			<li><a href="/" class="hover:underline">Browse listings</a></li>
			<li><a href="/user/" class="hover:underline">My account</a></li>
			<li><a href="/listings/new-listing/" class="hover:underline">Create listing</a></li>
		</ul>
	`;

  col2.appendChild(navigation);

  const legal = document.createElement("div");
  legal.classList.add("sm:w-1/4");
  legal.innerHTML = `
		<h2 class="text-lg font-semibold">Legal</h2>
		<ul class="flex flex-col gap-1 text-sm">
			<li><a href="#" class="hover:underline">Terms of Service</a></li>
			<li><a href="#" class="hover:underline">Privacy Policy</a></li>
			<li><a href="#" class="hover:underline">Help center</a></li>
			<li><a href="#" class="hover:underline">Careers</a></li>
			</ul>
	`;

  col2.appendChild(legal);

  const col3 = document.createElement("div");
  col3.classList.add("sm:w-1/4");
  col3.innerHTML = `
		<h2 class="text-lg text-center sm:text-start font-semibold">Social channels</h2>
		<ul class="flex justify-center sm:justify-start gap-2 text-2xl text-lavender">
			<li class="hover:text-lavender-light"><a href="#" ><i class="fa-brands fa-square-x-twitter"></i><p class="sr-only">X</p></a></li>
			<li class="hover:text-lavender-light"><a href="#" ><i class="fa-brands fa-square-facebook"></i><p class="sr-only">Facebook</p></a></li>
			<li class="hover:text-lavender-light"><a href="#" ><i class="fa-brands fa-square-instagram"></i><p class="sr-only">Instagram</p></a></li>
			<li class="hover:text-lavender-light"><a href="#" ><i class="fa-brands fa-square-pinterest"></i><p class="sr-only">Pinterest</p></a></li>
			</ul>
	`;
  if (screenWidth < 640) {
    col3.innerHTML += `<p class="mt-4 text-center text-sm text-gray-500">&copy; 2024 QuickBid. All rights reserved.</p>`;
  }

  footer.appendChild(col1);
  footer.appendChild(col2);
  footer.appendChild(col3);

  return footer;
}
