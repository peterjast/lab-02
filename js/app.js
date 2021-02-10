'use strict';

let userName = prompt('Hello! Welcome to my page. What\'s your name?');

//console.log('Nice to meet you ' + userName + '! My name is Peter Staker. Get to know me by guessing yes or no!');
alert('Nice to meet you ' + userName + '! My name is Peter Staker. Get to know me by guessing yes or no!');

// eslint-disable-next-line no-unused-vars
function greeting() {
  document.write('Hello ' + userName + '!');
}

let answer;
let scoreCounter = 0;
let myAge = 27;
let ageGuessCounter = 4;
let stateGuessCounter = 6;
let answers = ['yes','no', 'yes', 'yes', 'yes'];
let questions = ['Do I have a BA in Philosophy from the University of Washington?', 'Have I worked in the medical field?', 'Have I ever lived in another country?', 'Do I live in Seattle?','Do I know how to bartend?'];
let states = ['washington','california','hawaii','wa','ca','hi'];

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

/* To do: account for null values. */

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

alert('Now that you know a bit about me... guess my age!');

for(let i = 0; i < 4; i++){
  let ageGuess = prompt('You have ' + ageGuessCounter + ' guesses left. Please enter a number. Age:');
  if(ageGuess < myAge){
    alert('Too low!');
  } else if(ageGuess > myAge){
    alert('Too High!');
  } else {
    alert('Correct! I\'m 27 years old.');
    break;
  }
  ageGuessCounter--;
}

if(ageGuessCounter === 0){
  alert('You\'re out of guesses! I\'m 27 years old');
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
        stateGuessCounter = -1;
        break;
      }
    }
    stateGuessCounter--;
  } else{
    alert('I\'ve lived in Washington, California and Hawaii!');
    break;
  }
}

alert('Thanks for playing ' + userName + '! You got ' + scoreCounter + ' out of 7 questions correct!');
