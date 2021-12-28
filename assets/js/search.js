import Fuse from "fuse.js";

let searchButton = document.getElementById("fm-search-button");
let searchMobileButton = document.getElementById("fm-mobile-search-button");
let searchInput = document.getElementById("fm-search-input");
let searchBackdrop = document.getElementById("fm-search-backdrop");
let searchResults = document.getElementById("fm-search-results");

const clickSearchButton = () => {
  searchBackdrop.classList.toggle("hidden");
  searchInput.value = "";
  searchInput.focus();
  clearResults();
};

const clearResults = () => {
  searchResults.innerHTML = '<span class="m-6 block">No results.</span>';
};

const searchFunc = async (fuse) => {
  let baseUrl = searchBackdrop.dataset.baseUrl;
  if (baseUrl.endsWith("/")) {
      baseUrl = baseUrl.substring(0, baseUrl.length - 1);
  }
  let results = await fetch(`${baseUrl}/index.json`);
  results = await results.json();
  fuse.setCollection(results);

  searchInput.addEventListener("blur", function () {
    let results = fuse.search(searchInput.value);
    if (results.length === 0) {
      clearResults();
      return;
    }
    searchResults.innerHTML = "";
    results?.forEach((r) => {
      let element = document.createElement("a");
      element.href = `${r.item.link}`;
      element.innerHTML = `${r.item.title}`;
      element.className = `${searchResults.dataset.color} block my-2 py-2 px-4 rounded`;
      searchResults.appendChild(element);
    });
  });
};

searchButton.addEventListener("click", clickSearchButton);

searchMobileButton.addEventListener("click", clickSearchButton);

searchBackdrop.addEventListener("click", function (e) {
  if (e.target.id === "fm-search-backdrop") {
    clickSearchButton();
  }
});

document.body.addEventListener("keydown", function (event) {
  let key = event.key;
  let metaKey = event.metaKey;

  if (key.toLowerCase() === "k" && metaKey) {
    clickSearchButton();
  }

  if (key.toLowerCase() === "enter") {
    searchInput.blur();
  }
});

const options = {
  keys: ["title"],
};
const fuse = new Fuse([], options);
searchFunc(fuse);
