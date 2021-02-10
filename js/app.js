'use strict';

let userName = prompt('Hello! Welcome to my page. What\'s your name?');

//console.log('Nice to meet you ' + userName + '! My name is Peter Staker. Get to know me by guessing yes or no!');
alert('Nice to meet you ' + userName + '! My name is Peter Staker. Get to know me by guessing yes or no!');

// eslint-disable-next-line no-unused-vars
function greeting() {
  document.write('Hello ' + userName + '!');
}

let answer = '';
let answers = ['yes','no', 'yes', 'yes', 'yes'];
let questions = ['Do I have a BA in Philosophy from the University of Washington?', 'Have I worked in the medical field?', 'Have I ever lived in another country?', 'Do I live in Seattle?','Do I know how to bartend?']

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

/* To do: account for null values. */

for(let i = 0; i < 5; i++){
  let userResponse = prompt(questions[i]);
  let validResponse = userResponse.toLowerCase();
  isValid(validResponse);
  if (answer === answers[i]){
    //console.log('Correct')
    correctAnswer();
  } else {
    //console.log('Incorrect!');
    wrongAnswer();
  }
}

alert('Thanks for playing ' + userName + '!');
