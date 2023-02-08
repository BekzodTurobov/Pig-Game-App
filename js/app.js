"use strict";

const backdropEl = document.querySelector(".backdrop");
const modalEl = document.querySelector(".modal");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const playerName0El = document.querySelector("#name--0");
const playerName1El = document.querySelector("#name--1");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const formEl = document.querySelector("form");
const inputEl = document.getElementById("playername");
const cancelBtnEl = document.querySelector("#cancel-btn");
const confirmBtnEl = document.querySelector("#confirm-btn");

//////////////////////////////////////////////
// OPEN PLAYER CONFIGURATION
playerName0El.addEventListener("click", openConfig);
playerName1El.addEventListener("click", openConfig);

//////////////////////////////////////////////
// CLOSE CONFIGURATION
cancelBtnEl.addEventListener("click", cancelEditing);
backdropEl.addEventListener("click", cancelEditing);
document.addEventListener("keydown", escPlayerConfig);

//////////////////////////////////////////////
// SET PLAYER NAME
formEl.addEventListener("submit", savePlayerName);
document.addEventListener("keydown", enterBtn);

//////////////////////////////////////////////

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//////////////////////////////////////////////
// ROLL DICE //
btnRoll.addEventListener("click", rollDice);
//////////////////////////////////////////////
// HOLDING CURRENT SCORE //
btnHold.addEventListener("click", scoreHold);
//////////////////////////////////////////////
// START NEW GAME //
btnNew.addEventListener("click", newGame);
