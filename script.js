var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("myinput");
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  h3.textContent = body.style.background + ";";
}


function myFunction() {
  navigator.clipboard.writeText(h3.textContent);
}

color1.addEventListener("input", function () {
  setGradient();
});

color2.addEventListener("input", function () {
  setGradient();
});
