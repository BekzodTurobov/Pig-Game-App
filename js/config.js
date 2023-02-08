//////////////////////////////////////////////
// OPEN CONFIGURATION //

function openConfig(e) {
  editPlayerName = +e.target.dataset.playerid;
  backdropEl.style.display = "block";
  modalEl.style.display = "block";
}

//////////////////////////////////////////////
// CLOSE CONFIGURATION //

function cancelEditing() {
  backdropEl.style.display = "none";
  modalEl.style.display = "none";
  inputEl.placeholder = "Enter player name";
  inputEl.classList.remove("error-class");
}

function escPlayerConfig(e) {
  if (e.key === "Escape") {
    cancelEditing();
  }
}

//////////////////////////////////////////////
// FORM ELEMENT //

function savePlayerName(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayerName = formData.get("playername").trim();
  inputEl.value = "";

  if (!enteredPlayerName) {
    inputEl.placeholder = "Please enter a valid name!";
    inputEl.classList.add("error-class");
    return;
  }

  const updatedPlayerName = document.getElementById(`name--${editPlayerName}`);
  updatedPlayerName.textContent = enteredPlayerName;

  cancelEditing();
}

function enterBtn(e) {
  if (e.key === "Enter") {
    savePlayerName();
  }
}

//////////////////////////////////////////////
// SWITCH PLAYER //
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

//////////////////////////////////////////////
// ROLLING THE DICE //

function rollDice() {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    // Generating random dice roll
    diceEl.src = `/img/dice-${diceNumber}.png`;
    diceEl.classList.remove("hidden");

    if (diceNumber !== 1) {
      // Add dice to current score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
}

//////////////////////////////////////////////
// HOLDING CURRENT SCORE //
function scoreHold() {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      playing = false;
    } else {
      switchPlayer();
    }
  }
}

//////////////////////////////////////////////
// START NEW GAME //

const newGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
};
