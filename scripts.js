// breakpoints in pixels

const breakpoints = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200
};

// navbar

{
	const currentBreakpoint = breakpoints.lg;

	const navElement = document.querySelector(".js-nav");
	const landingLinkElement = document.querySelector(".js-nav-landing");
	const sectionLinkElements = document.querySelectorAll(".js-nav-section");
	const togglerElement = document.querySelector(".js-nav-toggler");

	let isMenuOpen = false;

	function renameToggler() {
		togglerElement.innerHTML = isMenuOpen ? "&#10005; Close" : "&#9776; Menu";
	}

	renameToggler();

	function isScreenSmall() {
		return window.innerWidth < currentBreakpoint;
	}

	const hiddenClassName = "is-hidden-below-md";

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		renameToggler();
		for (const sectionLinkElement of sectionLinkElements) {
			sectionLinkElement.classList.toggle(hiddenClassName);
		}
	}

	togglerElement.addEventListener("click", function () {
		if (isScreenSmall()) {
			toggleMenu();
		}
	});

	function closeMenu() {
		isMenuOpen = false;
		renameToggler();
		for (const sectionLinkElement of sectionLinkElements) {
			sectionLinkElement.classList.add(hiddenClassName);
		}
	}

	landingLinkElement.addEventListener("click", function () {
		if (isScreenSmall() && isMenuOpen) {
			closeMenu();
		}
	});

	for (const sectionLinkElement of sectionLinkElements) {
		sectionLinkElement.addEventListener("click", function () {
			if (isScreenSmall() && isMenuOpen) {
				closeMenu();
			}
		});
	}

	document.addEventListener("click", function (event) {
		if (isScreenSmall() && isMenuOpen && !navElement.contains(event.target)) {
			closeMenu();
		}
	});

	// function openMenu() {
	// 	isMenuOpen = true;
	// 	renameToggler();
	// 	for (const sectionLinkElement of sectionLinkElements) {
	// 		sectionLinkElement.classList.remove(hiddenClassName);
	// 	}
	// }
}

// email protection

{
	const buttonElement = document.querySelector(".js-email-button");

	const localPart = "mategombhu";
	const domain = "gmail.com";

	buttonElement.addEventListener("click", function () {
		buttonElement.setAttribute("href", `mailto:${localPart}@${domain}`);
	});
}

// copyright year

document.querySelector(".js-footer-year").textContent = new Date().getFullYear();