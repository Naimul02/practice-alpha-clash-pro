function homeScreen(getElementId) {
  const element = document.getElementById(getElementId);
  element.classList.add("hidden");
}

function playGroundScreen(getElementId) {
  const element = document.getElementById(getElementId);
  element.classList.remove("hidden");
}
