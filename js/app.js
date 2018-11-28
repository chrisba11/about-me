'use strict';

var doYouWantToPlay = prompt('Welcome to the Fun Zone! Do you want to play a game? (I\'m very sensitive, so please respond with Y or N, or I might not understand you.)');

if (doYouWantToPlay === null || '') {
  alert('YOU BROKE IT!');
} else {
  doYouWantToPlay = doYouWantToPlay.toLowerCase();
}

console.log('var doYouWantToPlay: ', doYouWantToPlay);

if (doYouWantToPlay === 'y' || 'yes') {
  var areYouSure = confirm('Are you sure you\'re ready, though?');
  if (areYouSure === null || '') {
    alert('YOU BROKE IT!');
  } else {
    areYouSure = areYouSure.toLowerCase();
  }
} else if (doYouWantToPlay !== 'n' || 'no' || 'y' || 'yes') {
  var didntCatchThat = prompt('I\'m sorry, I didn\'t quite get that. Please respond with Y for yes or N for no.');
} else {
  alert('FINE! SEE IF I CARE!!! UGH!');
}

console.log(didntCatchThat);

if (didntCatchThat === 'n' ) {
  alert('FINE! SEE IF I CARE!!!');
} else if (didntCatchThat === undefined) {
  console.log('didntCatchThat = UNDEFINED');
} else {
  alert('You\'re hopeless. Try again later.');
}

if (areYouSure === 'y' || 'yes') {
  var userName = prompt('What would you like me to call you?');
  console.log('The player would like to be called ' + userName);
} else {
  alert('FINE! SEE IF I CARE!!! UGH!');
}

alert('Welcome ' + userName + '! It is a pleasure to meet you. Now, let\'s see if you know me.');

// -------------------------

//  EXTRA QUESTION (NOT Y/N)
// var questionOne = prompt('What color are my shoes, ' + userName + '?');

// if (questionOne !== null || '') {
//   questionOne = questionOne.toLowerCase();
//   alert('Way to submit an answer! If you thought you were going to receive immediate feedback, I have some bad news. You will have to wait until the end of this questionaire to see how you did.');
// } else {
//   questionOne = prompt('Now now, ' + userName + ', you have to make a guess. What color are my shoes?');
//   questionOne = questionOne.toLowerCase();
// }

// if (questionOne === null || '') {
//   questionOne = prompt('Seriously, ' + userName + ', you have to make a guess! Just write down a color.');
//   questionOne = questionOne.toLowerCase();
// }

// if (questionOne === null || '') {
//   alert('Alright...you\'re done. Thanks for nothing.');
// }

// if (questionOne === 'blue') {
//   var answerOne = 'correct';
// }

// console.log(userName + '\'s answer to Question 1: ' + questionOne);
// console.log(userName + '\'s answer to Question 1 is ' + answerOne + '.');

// ---------------------------

// QUESTION 1
