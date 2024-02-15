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
    // -----------------------------------------------------
    // const scoreElement = document.getElementById("score");
    // const scoreString = scoreElement.innerText;
    // const score = parseInt(scoreString);
    // ------------------------------------------------------

    const scoreValue = getTextElementValueById("score");

    const setValue = scoreValue + 1;
    setTextElementValueById("score", setValue);

    removeBackgroundColorById(shouldValue);
    continueAlphabet();
  } else {
    const lifeValue = getTextElementValueById("life");
    const setValue = lifeValue - 1;
    setTextElementValueById("life", setValue);

    // const lifeElement = document.getElementById("life");
    // const lifeString = lifeElement.innerText;
    // const life = parseInt(lifeString);
    // const updateLife = life - 1;
    lifeElement.innerText = updateLife;
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
