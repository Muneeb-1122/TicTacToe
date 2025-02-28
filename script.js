document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var header = document.querySelector("header");
  var main = document.querySelector("main");
  var nextButton = document.querySelector("#nextButton");
  var gameContainer = document.querySelector(".game-container");

  // Function to handle the button click
  function startGame() {
    body.style.background =
      "linear-gradient(192deg, #FFF -0.24%, #F5F5F5 100%), linear-gradient(168deg, #F5F5F5 0%, #FFF 100%)";
    main.style.display = "none";
    header.style.display = "none";
    gameContainer.style.display = "flex"; // Fix display property
  }

  // Adding event listener
  nextButton.addEventListener("click", startGame);
});