document.addEventListener("DOMContentLoaded", function() {
    const lamp = document.getElementById("lamp");
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function() {
        if (lamp.classList.contains("off")) {
            lamp.classList.remove("off");
            lamp.classList.add("on");
            toggleButton.textContent = "Turn Off";
        } else {
            lamp.classList.remove("on");
            lamp.classList.add("off");
            toggleButton.textContent = "Turn On";
        }
    }};
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
function myFunction() {
  let voteable;
  let age = Number(document.getElementById("age").value);
  if (isNaN(age)) {
    voteable = "Input is not a number";
  } else {
    voteable = (age < 18) ? "Too young" : "Old enough";
  }
  document.getElementById("demo").innerHTML = voteable + " to vote";
}
let hello = "";

hello = () => {
  document.getElementById("demo").innerHTML += this;
}
window.addEventListener("load", hello);
document.getElementById("btn").addEventListener("click", hello);}
