// *---HTML ELEMENTS---
const spaceShip = document.querySelector(".spaceship");
const chickenContainer = document.querySelector("#chickenContainer");
// &---GLOBAL VARIABLES---

let leftPosition;
let topPosition;
// *---FUNCTIONS---
for (let i = 0; i <= 40; i++) {
  chickenContainer.innerHTML += `
   <img src="./imgs/logo.png" alt="chicken" class="chicken">
`;
}
// ~---EVENTS---
document.addEventListener("mousemove", function (e) {
  leftPosition = e.clientX;
  topPosition = e.clientY;
  spaceShip.style.cssText = `
   position :absolute;
   left:${leftPosition}px;
   top:${topPosition}px;
transform:translate(-50%, -50%);


`;
});
document.addEventListener("keydown", function (e) {
  spaceShip.style.transition = "All 300ms";
  switch (e.key) {
    case "ArrowRight":
      leftPosition += 50;
      spaceShip.style.left = ` ${leftPosition}px`;
      break;
    case "ArrowLeft":
      leftPosition -= 50;
      spaceShip.style.left = ` ${leftPosition}px`;
      break;

    case "ArrowUp":
      topPosition -= 50;
      spaceShip.style.top = ` ${topPosition}px`;
      break;
    case "ArrowDown":
      topPosition += 50;
      spaceShip.style.top = ` ${topPosition}px`;
      break;
  }
});
