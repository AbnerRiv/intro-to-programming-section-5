const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');
//my added message for checking input
const badInput = document.getElementById('incorrectInput');


let targetNumber;
let attempts = 0;
let maxNumberOfAttempts;
// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {

  // Get value from guess input element
  if(guessInput.value.length !== 0){
    const guess = parseInt(guessInput.value, 10);
    attempts = attempts + 1;

    hideAllMessages();

    if (guess === targetNumber) {
      numberOfGuessesMessage.style.display = '';
      numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

      correctMessage.style.display = '';

      submitButton.disabled = true;
      guessInput.disabled = true;
    }

    if (guess !== targetNumber) {
      if (guess < targetNumber) {
        tooLowMessage.style.display = '';
      } else {
        tooHighMessage.style.display = '';
      }

      const remainingAttempts = maxNumberOfAttempts - attempts;

      numberOfGuessesMessage.style.display = '';
      if(remainingAttempts !== 1){
        numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
      } else {
        numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guess remaining`;
      }
    }

    if (attempts === maxNumberOfAttempts && guess !== targetNumber) {
      submitButton.disabled = true;
      guessInput.disabled = true;
      numberOfGuessesMessage.style.display = '';
      maxGuessesMessage.style.display = '';
    }

    guessInput.value = '';
    resetButton.style.display = '';
  }else{
    alert("That is not a number")
  }


}//end CheckGuess

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
}

function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  maxNumberOfAttempts = 5;
  attempts = 0;
  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}

function checkInput(e){
  if(e.target.value < 1){
    badInput.style.display = ''
    badInput.innerHTML = "Must be greater than 0"
    badInput.style.color = 'red';
    submitButton.disabled = true;
  }

  if (e.target.value > 99) {
    badInput.style.display = ''
    badInput.innerHTML = "Must be less than 100"
    badInput.style.color = 'red';
    submitButton.disabled = true;

  }

  if(e.target.value > 0 && e.target.value < 100){
    badInput.style.display = 'none'
    submitButton.disabled = false;
  }

  if (e.target.value.length === 0) {
    badInput.style.display = ''
    badInput.innerHTML = "That's not a number"
    badInput.style.color = 'red';
    submitButton.disabled = true;
  }
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);
guessInput.addEventListener('input', checkInput);
setup();
