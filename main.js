let targetNumber;
let remainingAttempts;
let guessedNumbers;

function startGame() {
  targetNumber = Math.floor(Math.random() * 50) + 1;
  remainingAttempts = 3;
  guessedNumbers = [];
  showMessage('');
  enableButtons();
  updateAttemptsDisplay();
}

function checkGuess() {
  const userInput = parseInt(document.getElementById('userInput').value);

  if (userInput < 1 || userInput > 50) {
    alert('1~50까지 번호만 입력해');
    return;
  }

  if (guessedNumbers.includes(userInput)) {
    alert('이미 입력한 번호야 다른숫자를 입력해.');
    return;
  }

  guessedNumbers.push(userInput);

  if (userInput < targetNumber) {
    showMessage('더 큰 번호야');

  } else if (userInput > targetNumber) {
    showMessage('더 작은 번호야');

  } else {
    showMessage('넌 살아남았어!');
    disableButtons();
  }

  remainingAttempts--;
  updateAttemptsDisplay();

  if (remainingAttempts === 0) {
    showMessage('넌 무인도에 나가지 못해!');
    disableButtons();
  }
}
function focusInput() {
  userInput.value = "";
}

function resetGame() {
  startGame();
  userInput.value = "";
}

function showMessage(message) {
  document.getElementById('message').textContent = message;
}

function updateAttemptsDisplay() {
  document.getElementById('attempts').textContent = remainingAttempts;
}

function disableButtons() {
  document.querySelectorAll('button').forEach(button => {
    button.disabled = true;
  });
}

function enableButtons() {
  document.querySelectorAll('button').forEach(button => {
    button.disabled = false;
  });
}

// Start the game when the page loads
startGame();