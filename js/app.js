'use strict';

// Question 1

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
} else if (questionTwo !== 'y' && questionTwo !== 'n' && questionTwo !== 'yes' && questionTwo !== 'no') {
  alert('You did not provide a valid response.');
  console.log(userName + ' did not provide a valid response to Question 2');
}

if (questionTwo !== undefined) {
  questionTwo = questionTwo.toLowerCase();
}

console.log('Answer to Question 2: ', questionTwo);

// Question 3

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionThree = prompt('Do I have any pets?');
}

if (questionThree === null || questionThree === '') {
  alert('YOU BROKE IT!');
} else if (questionThree !== 'y' && questionThree !== 'n' && questionThree !== 'yes' && questionThree !== 'no') {
  alert('You did not provide a valid response.');
  console.log(userName + ' did not provide a valid response to Question 3');
}

if (questionThree !== undefined) {
  questionThree = questionThree.toLowerCase();
}

console.log('Answer to Question 3: ', questionThree);

// Question 4

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionFour = prompt('Is my favorite animal a giraffe?');
}

if (questionFour === null || questionFour === '') {
  alert('YOU BROKE IT!');
} else if (questionFour !== 'y' && questionFour !== 'n' && questionFour !== 'yes' && questionFour !== 'no') {
  alert('You did not provide a valid response.');
  console.log(userName + ' did not provide a valid response to Question 4');
}

if (questionFour !== undefined) {
  questionFour = questionFour.toLowerCase();
}

console.log('Answer to Question 4: ', questionFour);


// Question 5

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionFive = prompt('Can I play bohemian rhapsody on the ukulele?');
}

if (questionFive === null || questionFive === '') {
  alert('YOU BROKE IT!');
} else if (questionFive !== 'y' && questionFive !== 'n' && questionFive !== 'yes' && questionFive !== 'no') {
  alert('You did not provide a valid response.');
  console.log(userName + ' did not provide a valid response to Question 5');
}

if (questionFive !== undefined) {
  questionFive = questionFive.toLowerCase();
}

console.log('Answer to Question 5: ', questionFive);

