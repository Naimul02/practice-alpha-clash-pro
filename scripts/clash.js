// function play() {
//   const homeId = document.getElementById("home");
//   homeId.classList.add("hidden");

//   const playGroundId = document.getElementById("play-ground");
//   playGroundId.classList.remove("hidden");
// }

function handleKeyboardButtonPress(event) {
  const playerPressKey = event.key;

  const youShouldPressKey = document.getElementById("screen-value");
  const shouldKey = youShouldPressKey.innerText;
  const shouldValue = shouldKey.toLowerCase();

  console.log(playerPressKey, shouldValue);

  if (playerPressKey === shouldValue) {
    removeBackgroundColorById(shouldValue);
    continueAlphabet();
  } else {
    console.log("you lose the game");
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);
function continueAlphabet() {
  const randomAlphabet = getRandomAlphabet();

  const screenValue = document.getElementById("screen-value");
  screenValue.innerText = randomAlphabet;

  setBackgroundColorById(randomAlphabet);
}
function play() {
  homeScreen("home");
  playGroundScreen("play-ground");
  continueAlphabet();
}
