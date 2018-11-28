'use strict';

var doYouWantToPlay = prompt('Welcome to the Fun Zone! Do you want to play a game? (I\'m very sensitive, so please respond with Y or N, or I might not understand you.)');

if (doYouWantToPlay === null || doYouWantToPlay === '') {
  alert('YOU BROKE IT!');
} else {
  doYouWantToPlay = doYouWantToPlay.toLowerCase();
}

console.log('Answer to Question 1: ', doYouWantToPlay);

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var userName = prompt('Great! Thanks for agreeing to play! What would you like me to call you?');
} else {
  alert('FINE! I DIDN\'T WANT TO PLAY WITH YOU EITHER!!!');
}

// Question 2

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  alert('Welcome ' + userName + '! It is a pleasure to meet you. Now, let\'s see if you know me.');
}

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionTwo = prompt('Was I born in the United States?');
}

if (questionTwo === null || questionTwo === '') {
  alert('YOU BROKE IT!');
} else if (questionTwo !== undefined) {
  questionTwo = questionTwo.toLowerCase();
}

console.log('Answer to Question 2: ', questionTwo);

// Question 3

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionThree = prompt('Do I have any pets?');
}

if (questionThree === null || questionThree === '') {
  alert('YOU BROKE IT!');
} else if (questionThree !== undefined) {
  questionThree = questionThree.toLowerCase();
}

console.log('Answer to Question 3: ', questionThree);

// Question 4

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionFour = prompt('Is my favorite animal a giraffe?');
}

if (questionFour === null || questionFour === '') {
  alert('YOU BROKE IT!');
} else if (questionFour !== undefined) {
  questionFour = questionFour.toLowerCase();
}

console.log('Answer to Question 4: ', questionFour);


// Question 5

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionFive = prompt('Can I play bohemian rhapsody on the ukulele?');
}

if (questionFive === null || questionFive === '') {
  alert('YOU BROKE IT!');
} else if (questionFive !== undefined) {
  questionFive = questionFive.toLowerCase();
}

console.log('Answer to Question 5: ', questionFive);





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
