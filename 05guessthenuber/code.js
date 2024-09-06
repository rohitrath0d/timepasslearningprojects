//1st challenge: generate a random number b/w 1 to 100

// const randomNumber = Math.round((Math.random() * 100 + 1))  //--> 1st problem solved ---> can also do using Math.round() and parseInt()

let randomNumber = parseInt(Math.random() * 100 + 1);

//now, have to take many values into the document
const submit = document.querySelector('#submit');
//now also have to take user's input
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses'); //its a class, hence (.) is used
const remainingGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas'); //after all the guessing chance is exhausted, user has to start over.

const p = document.createElement('p');

//strategy: whichever functionalties we want, have to take as variable
let prevGuess = []; //it will be an array, containing values user has stores, and will display it to user, indicating not to guess the same value again.

//2nd: the many no. attempts user exhausted
let numGuess = 1;

//when designing a game, there is always a variable as pplayGame, that allows to playGame. incase, attempts is exhausted, or coins is over: without checking this condtions, the user is not allowed to play game
let playGame = true;

//check if u are available to play the game. if able to play the game then what have to do? check below.
if (playGame) {
  //not passing true or false here, because it will be evaluated by itself.
  submit.addEventListener('click', function (e) {
    e.preventDefault(); //because it is a form, to prevent values, from going to database, server, url, etc. use this method.
    const guess = parseInt(userInput.value); //we didnt, selected the value, using (.value) in querySelector()
    console.log(guess);
    validateGuess(guess); //passing the values to next step (i.e guess) as it is.
  });
}

//this function, states that, give me a guess and i will validate it. if its NaN (eg. a, b, -1(negative value), exceding the intialised value etc) it will not be validated
//validating a value is used many times while writing backend when getting the user data, and validating such as (@ in email, if already exist in database, valid email, unique email, etc)
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter the valid number');
  } else if (guess < 1) {
    alert('Please enter a value more than 1');
  } else if (guess > 100) {
    alert('Please enter the valid number less than 100');
  } else {
    prevGuess.push(guess); //when number is validated, push it into array
    if (numGuess === 11) {
      //if attempts are exhausted,display message and end the game.
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess); //here we dont need to display the message
      checkGuess(guess); //here have to display the message, that entered value is lower or higher
    }
  }
}

// why check is needed? after validation is done, here, a message will be printed, stating that the user's guess is low, high, close to guess
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooo high`);
  }
}

//it will clean values, to input next value, guess(arrays) will be updated, and guess remaining will also be updated here
function displayGuess(guess) {
  userInput.value = ''; //updating user input value with an empty string. after clicking "displayguess", this cleanups the textfeild.

  guessSlot.innerHTML += `${guess},   ` ; //it doesn't updates the guess value, it pushes the guess value into array.

  numGuess++; //increments the number of gues

  remainingGuess.innerHTML = `${11 - numGuess}  `; //11 mai se no.of guesses minus karenge

  //summary: userInput.value = ''   --> clean the value / guess.innerHTML += `${guess}` --> show the  value/  numGuess++ ---> updates the value
}

// querySelector(lowOrHi) mai message pass karege, and message as it is print karenge
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2> ${message} </h2>`; //html fil mai, <p> tag mai, isme kuch nahi tha so adding here, adding what? displaying a message.
}

//to end a game
function endGame() {
  //input the clear field
  userInput.value = '';    //empty --> clean

  //cant add more values in userInput
  userInput.setAttribute('disabled', '')

  //create a start button (on line 16 we have initialised a para (const p element in global scope)), here we added a class button, added a newGame id, and also appended it.
  p.classList.add('button') //in dom we manipulate a class using classList keyword, and not by class keyword. 
  p.innerHTML = `<h2 id = "newGame"> Start a new Game </h2>`;
  startOver.appendChild(p)
  playGame = false //game is stopped here
  newGame()

}

// to start a new game
function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];    //previous guess is reset here. it is empty again
    numGuess = 1;
    guessSlot.innerHTML = [];
    remainingGuess.innerHTML = `$(11 - numGuess)  `;    
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    
    playGame = true
  })

}
