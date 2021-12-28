let darkButton = document.getElementById("fm-dark-button");
let lightButton = document.getElementById("fm-light-button");
let darkMobileButton = document.getElementById("fm-mobile-dark-button");
let lightMobileButton = document.getElementById("fm-mobile-light-button");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // document.documentElement.classList.add('dark')
  lightButton.classList.remove("hidden");
  darkButton.classList.add("hidden");
  lightMobileButton.classList.remove("hidden");
  darkMobileButton.classList.add("hidden");
} else {
  // document.documentElement.classList.remove('dark')
  lightButton.classList.add("hidden");
  darkButton.classList.remove("hidden");
  lightMobileButton.classList.add("hidden");
  darkMobileButton.classList.remove("hidden");
}

darkButton.addEventListener("click", function () {
  darkButton.classList.add("hidden");
  lightButton.classList.remove("hidden");
  localStorage.theme = "dark";
  document.documentElement.className = "dark";
});

lightButton.addEventListener("click", function () {
  darkButton.classList.remove("hidden");
  lightButton.classList.add("hidden");
  localStorage.theme = "light";
  document.documentElement.className = "light";
});

darkMobileButton.addEventListener("click", function () {
  darkMobileButton.classList.add("hidden");
  lightMobileButton.classList.remove("hidden");
  localStorage.theme = "dark";
  document.documentElement.className = "dark";
});

lightMobileButton.addEventListener("click", function () {
  darkMobileButton.classList.remove("hidden");
  lightMobileButton.classList.add("hidden");
  localStorage.theme = "light";
  document.documentElement.className = "light";
});
