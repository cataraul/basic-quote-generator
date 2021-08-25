const header = document.getElementById("header");
const pers = document.getElementById("pers");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      header.textContent = `${data.content}`;
      pers.textContent = `${data.author}`;
    });
});
