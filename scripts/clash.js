// function play() {
//   const homeId = document.getElementById("home");
//   homeId.classList.add("hidden");

//   const playGroundId = document.getElementById("play-ground");
//   playGroundId.classList.remove("hidden");
// }

function continueAlphabet() {
  const randomAlphabet = getRandomAlphabet();
  console.log(randomAlphabet);
}
function play() {
  homeScreen("home");
  playGroundScreen("play-ground");
  continueAlphabet();
}
