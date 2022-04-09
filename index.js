const prompt = require("prompt-sync")();

const suits = ["H", "C", "D", "S"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const deck = [];
function createDeck() {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let card = { Value: values[j], Suit: suits[i] };
      deck.push(card);
    }
  }
}
createDeck();

// shuffle Card
function shuffleCard() {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);

    let temp = deck[i];

    deck[i] = deck[j];
    deck[j] = temp;
  }
}
shuffleCard();

// display 2 results
let playerDraw = [];
let computerDraw = [];
let currentPlayerMoney = 100;
let ComputerMoney = 100;
function draw() {
  for (let i = 0; i < 4; i++) {
    if (i < 2) {
      playerDraw.push(deck[i]);
    }
    if (i >= 2) {
      computerDraw.push(deck[i]);
    }
  }
  console.log("The first two cards are:");
  console.log("playerDraw: ", playerDraw);
  console.log("computerDraw: ", computerDraw);

  for (let i = 0; i < playerDraw.length; i++) {
    if (playerDraw[i].Value === "A") {
      playerDraw[i].Value = 1;
    }
    if (
      playerDraw[i].Value === "10" ||
      playerDraw[i].Value === "J" ||
      playerDraw[i].Value === "Q" ||
      playerDraw[i].Value === "K"
    ) {
      playerDraw[i].Value = 0;
    }
  }

  let playerDrawScore =
    Number.parseInt(playerDraw[0].Value) + Number.parseInt(playerDraw[1].Value);
  playerDrawScore = playerDrawScore.toString();

  if (playerDrawScore.length > 1) {
    playerDraw = playerDrawScore.slice(1);
    // console.log(playerDraw);
    playerDrawScore = Number.parseInt(playerDraw);
  }

  //   computer Score

  for (let i = 0; i < computerDraw.length; i++) {
    if (computerDraw[i].Value === "A") {
      computerDraw[i].Value = 1;
    }
    if (
      computerDraw[i].Value === "10" ||
      computerDraw[i].Value === "J" ||
      computerDraw[i].Value === "Q" ||
      computerDraw[i].Value === "K"
    ) {
      computerDraw[i].Value = 0;
    }
  }
  let currentPlayerMoney = 100;
  let currentComputerMoney = 100;
  let computerDrawScore =
    Number.parseInt(computerDraw[0].Value) +
    Number.parseInt(computerDraw[1].Value);
  computerDrawScore = computerDrawScore.toString();

  if (computerDrawScore.length > 1) {
    computerDraw = computerDrawScore.slice(1);
    // console.log(computerDraw);
    computerDrawScore = Number.parseInt(computerDraw);
  }
  console.log("Your score: ", playerDrawScore);
  console.log("Computer score: ", computerDrawScore);
  if (playerDrawScore > computerDrawScore) {
    // currentPlayerMoney += input;
    // currentComputerMoney -= input;
    console.log("You win! ");
  }
  if (playerDrawScore < computerDrawScore) {
    // currentPlayerMoney -= input;
    // currentComputerMoney += input;
    console.log("You lose! ");
  }
  if (playerDrawScore === computerDrawScore) {
    console.log("Tie! ");
  }
}
draw();

// function game(playerBet) {
//   console.log("You have total: " + currentPlayerMoney);
//   const input = prompt("How much do want to bet with me boi?");
//   console.log("You bet " + input);
//   createDeck();
//   shuffleCard();
//   draw();
// }
// while (true) {
//     game(); 20
// }
