'use strict';

let userName = prompt('Hello! Welcome to my page. What\'s your name?');

//console.log('Nice to meet you ' + userName + '! My name is Peter Staker. Get to know me by guessing yes or no!');
alert('Nice to meet you ' + userName + '! My name is Peter Staker. Get to know me by guessing yes or no!');

// eslint-disable-next-line no-unused-vars
function greeting() {
  document.write('Hello ' + userName + '!');
}

let answer = '';
let firstAnswer = 'yes';
let secondAnswer = 'no';
let thirdAnswer = 'yes';
let fourthAnswer = 'yes';
let fifthAnswer = 'yes';

function isValid(userResponse){
  if (userResponse === 'yes' || userResponse === 'y'){
    answer = 'yes';
  } else if (userResponse === 'no' || userResponse === 'n'){
    answer = 'no';
  } else {
    //console.log('Invalid response!');
    alert('Invalid response!');
  }
  return answer;
}

function correctAnswer(){
  alert('Correct!');
}

function wrongAnswer(){
  alert('Incorrect!');
}

/* To do: REFACTOR! create a function to check answers in order to eliminate repeated code. Object prototype/Array?
Also account for null values. Cannot read toLowerCase of null */

let firstResponse = prompt('Do I have a BA in Philosophy from the University of Washington?').toLowerCase();

isValid(firstResponse);

if (answer === firstAnswer){
  //console.log('Correct!');
  correctAnswer();
} else {
  //console.log('Incorrect!');
  wrongAnswer();
}

let secondResponse = prompt('Have I worked in the medical field?').toLowerCase();

isValid(secondResponse);

if (answer === secondAnswer){
  //console.log('Correct!');
  correctAnswer();
} else {
  //console.log('Incorrect!');
  wrongAnswer();
}

let thirdResponse = prompt('Have I ever lived in another country?').toLowerCase();

isValid(thirdResponse);

if (answer === thirdAnswer){
  //console.log('Correct!');
  correctAnswer();
} else {
  //console.log('Incorrect!');
  wrongAnswer();
}

let fourthResponse = prompt('Do I live in Seattle?').toLowerCase();

isValid(fourthResponse);

if (answer === fourthAnswer){
  //console.log('Correct!');
  correctAnswer();
} else {
  //console.log('Incorrect!');
  wrongAnswer();
}

let fifthResponse = prompt('Do I know how to bartend?').toLowerCase();

isValid(fifthResponse);

if (answer === fifthAnswer){
  //console.log('Correct!');
  correctAnswer();
} else {
  //console.log('Incorrect!');
  wrongAnswer();
}

alert('Thanks for playing ' + userName + '!');
