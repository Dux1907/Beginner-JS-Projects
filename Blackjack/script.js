let cards = document.getElementById("cards");
let sum = document.getElementById("sum");
let start = document.getElementById("start");
let new1 = document.getElementById("new");
let reset = document.getElementById("reset");
let result = document.getElementById("result");
let arr = [];
isAlive = false;
let count = 0;
let k;
function getRandom() {
  return Math.floor(Math.random() * 12) + 2;
}
function text() {
  cards.textContent = "Cards: " + arr;
  sum.textContent = "Sum: " + k;
  if (k < 21) result.textContent = "Do you want to pick a new Card?";
  else if (k === 21) result.textContent = "Yay! It's a Blackjack.";
  else result.textContent = "You lost the game!";
}
function startGame() {
  if (isAlive == false && count === 0) {
    isAlive = true;
    count = 1;
    let a = getRandom();
    let b = getRandom();
    arr.push(a);
    arr.push(b);
    k = a + b;
    text();
  }
}

start.onclick = () => {
  startGame();
};
new1.onclick = () => {
  if (count > 0 && isAlive === true && k < 21) {
    c = getRandom();
    arr.push(c);
    k += c;
    text();
  }
  if (count === 0) result.textContent = "Start the Game first!";
};
reset.onclick = () => {
  cards.textContent = "Cards:";
  sum.textContent = "Sum:";
  result.textContent = "Do you want to start a new Game?";
  isAlive = false;
  count = 0;
  arr = [];
  k = 0;
};
