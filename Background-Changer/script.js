const colors = ["red", "green", "rgba(235, 17, 89)", "#837432"];

const color = document.getElementById("color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  color.textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
