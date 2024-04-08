let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guess');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();

        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (guess > 100) {
        alert('Please enter a number less than 100');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1');
    } else {
        prevGuesses.push(guess);
        if (numGuesses === 11) {
            displayGuess(guess);
            displayMessage(`Game over!. Random Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congrats! You guessed the number ${randomNumber}`);
        endGame();
    } else if (guess > randomNumber) {
        displayMessage(`Your guess is too high`);
    } else if (guess < randomNumber) {
        displayMessage(`Your guess is too low`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
    lowOrHi.innerHTML = '';
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    prevGuesses = [];
    numGuesses = 1;
    userInput.removeAttribute('disabled');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`;
        startOver.removeChild(p);
        playGame = true;
    });
}
