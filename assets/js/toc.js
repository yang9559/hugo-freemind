let tocButton = document.getElementById("fm-toc-button");
let toc = document.getElementById("fm-toc");
let tocDiv = document.getElementById("TableOfContents");
let tocLiList = tocDiv.querySelectorAll("li");
tocLiList.forEach((tocLi) => {
  tocLi.className = "py-1";
});
tocButton.addEventListener("click", function () {
  toc.classList.toggle("hidden");
});
