// generating a random number
let randomNumber = parseInt(Math.random() * 100 + 1);

// accessing all values
const submit =  document.querySelector('#subt'); // submit button
const userInput =  document.querySelector('#guessField'); //userInput
const guessSlot =  document.querySelector('.guesses'); // previous guess
const remaining =  document.querySelector('.lastResult'); // last result
const lowOrHi =  document.querySelector('.lowOrHi'); // value is high or not
const startOver =  document.querySelector('.resultParas'); //start from begining

//inserting a new paragraph
const p = document.createElement('p');

// printing previous guesses to ensure that user can't repeat
let prevGuess = [];

let numGuess = 1;// no of guesses form 1 to 10 after 10 the submit button will blocked

let playGame = true;// mandatory variable

// first we check if the user is available or not
if (playGame) {
    submit.addEventListener('click',function (e){
        e.preventDefault();
        const guess= parseInt(userInput.value);
        validateGuess(guess); // passing the value to the next function
    });
}

// spliting functions into multiple functions

//1. checks if the userInput values is valid or not, means it's an interger or not
function validateGuess(guess){
    if(isNaN(guess)) {
        alert("Please enter a valid number");
    }else if(guess <1) {
        alert("Please enter a number more than 1");
    }else if(guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevGuess.push(guess); // pushing value
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over, random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


//2. checks if the value is validated or not whether it's not more than 100 or not less than 1
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Your guess is too small than the number`);
    } else if (guess > randomNumber) {
        displayMessage(`Your guess is too large than the number`);
    }
}

//3. Display guesses,, clearing userInput for next guess,, displays previous array,, update,,,
function displayGuess(guess) {   // clean up method
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , ` ; // pushing the values of guess
    numGuess++;  // increasing the value by one after guess of the user
    remaining.innerHTML = `${11 - numGuess}` ; //it gives remaining guesses
}

//4. display message,, interact directly from DOM and  manipulation is in this function
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2> ${message}</h2>`;
}

//5.
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "new game"> Start the new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

//6.
function newGame() {
    const newGameButton = document.querySelector('#new Game')
    newGameButton.addEventListener('click',function (e) {
    randomNumber = parseInt(Math.random()*100 + 1);
    prevGuess = []; // array ko empty krdiya (reset)
    numGuess = 1; // no of guesses dobara se start krdiye
    guessSlot.innerHTML = ''; // reset ya empty krdiya
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled'); // disable remove
    startOver.removeChild(p);
    playGame = true ;
    });
}