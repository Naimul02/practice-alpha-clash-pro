function homeScreen(getElementId) {
  const element = document.getElementById(getElementId);
  element.classList.add("hidden");
}

function playGroundScreen(getElementId) {
  const element = document.getElementById(getElementId);
  element.classList.remove("hidden");
}

function setBackgroundColorById(getElementId) {
  const element = document.getElementById(getElementId);
  console.log(element);
  element.classList.add("bg-orange-600");
}
function getRandomAlphabet() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetsInsideArray = alphabets.split("");

  const randomAlphabetWithDecimal = Math.random() * 25;
  const index = Math.round(randomAlphabetWithDecimal);

  const randomAlphabet = alphabetsInsideArray[index];

  return randomAlphabet;
}

// function getRandomAlphabet() {
//   const alphabets = "abcdefghijklmnopqrstuvwxyz";
//   const alphabetsInsideArray = alphabets.split("");

//   const randomNumberWithDecimal = Math.random() * 25;
//   const index = Math.round(randomNumberWithDecimal);

//   const randomAlphabet = alphabetsInsideArray[index];
//   return randomAlphabet;
// }
