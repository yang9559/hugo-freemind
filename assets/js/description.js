let fmDesc = document.getElementById("fm-description");
let content = fmDesc.dataset.description.split("");
let contentArr = content;

let i = 0;
(function print() {
  setTimeout(
    function () {
      fmDesc.innerHTML += contentArr[i];
      i++;
      if (i < contentArr.length) {
        print();
      }
    },
    i == 0 ? 1000 : 100
  );
})();
