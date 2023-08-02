const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const button = document.querySelector("button");
const buttonScreen2 = document.querySelector("#buttonScreen2");
const textScreen = document.querySelector("#textScreen2");
const fortuneCookies = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiveres paciência.",
  "Não compense na ira o que lhe falta na razão.",
];

button.addEventListener("click", toggle,random());
buttonScreen2.addEventListener("click", toggle,random());

function toggle() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function random() {
  const randomFortune = getRandomFortune();
  textScreen.querySelector("p").innerHTML = `${randomFortune}`;
}
function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[randomIndex];
}
