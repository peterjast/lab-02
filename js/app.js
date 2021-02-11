'use strict';

let answer = '';

let scoreCounter = 0;
let numGuessCounter = 4;
let stateGuessCounter = 6;

let myNum = Math.floor(Math.random() * 101);
let answers = ['yes','no', 'yes', 'yes', 'yes'];
let questions = ['Do I have a BA in Philosophy from the University of Washington?', 'Have I worked in the medical field?', 'Have I ever lived in another country?', 'Do I live in Seattle?','Do I know how to bartend?'];
let states = ['washington','california','hawaii','wa','ca','hi'];

let userName = prompt('Hello! Welcome to my page. What\'s your name?');

//console.log('Nice to meet you ' + userName + '! My name is Peter. Get to know me by guessing yes or no!');
alert('Nice to meet you ' + userName + '! I\'m Peter. Get to know me by guessing yes or no!');

// eslint-disable-next-line no-unused-vars
function greeting() {
  document.write('Hello ' + userName + '!');
}

function isValid(userResponse){
  if (userResponse === 'yes' || userResponse === 'y'){
    answer = 'yes';
  } else if (userResponse === 'no' || userResponse === 'n'){
    answer = 'no';
  } else {
    //console.log('Invalid response!');
    answer = '';
    alert('Invalid response!');
  }
  return answer;
}

function correctAnswer(){
  alert('Correct!');
  scoreCounter++;
}

function wrongAnswer(){
  alert('Incorrect!');
}

for(let i = 0; i < 5; i++){
  let response = prompt(questions[i]);
  let userResponse = response.toLowerCase();
  isValid(userResponse);
  if (answer === answers[i]){
    //console.log('Correct!')
    correctAnswer();
  } else {
    //console.log('Incorrect!');
    wrongAnswer();
  }
}

/* To do: validate user input - datatypes*/

alert('I picked a random number from 0 to 100. Try to guess it!');

for(let i = 0; i < 4; i++){
  let numGuess = prompt('You have ' + numGuessCounter + ' guesses left. Please enter a number:');
  if(numGuess < myNum){
    alert('Too low!');
  } else if(numGuess > myNum){
    alert('Too High!');
  } else {
    alert('Correct! The number is ' + myNum + '!');
    break;
  }
  numGuessCounter--;
}

if(numGuessCounter === 0){
  alert('You\'re out of guesses! It was ' + myNum + '!');
}

alert('I\'ve lived in three states. Name one of them!');

for(let i = 0; i < 6; i++){
  if(stateGuessCounter > 0){
    let guess = prompt('You have ' + stateGuessCounter + ' guesses left. Please enter a state:');
    let stateGuess = guess.toLowerCase();
    for(let j = 0; j < 6; j++){
      if(stateGuess === states[j]){
        correctAnswer();
        scoreCounter++;
        stateGuessCounter = 0;
        break;
      }
    }
  } else{
    break;
  }
  stateGuessCounter--;
}

alert('I\'ve lived in Washington, California and Hawaii!');

alert('Thanks for playing ' + userName + '! You got ' + scoreCounter + ' out of 7 questions correct!');
