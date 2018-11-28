'use strict';

// Welcome

var doYouWantToPlay = prompt('Welcome to the Fun Zone! Do you want to play a game? (I\'m very sensitive, so please respond with Y or N, or I might not understand you.)');

if (doYouWantToPlay === null) {
  alert('YOU BROKE IT!');
} else if (doYouWantToPlay === 'n' || doYouWantToPlay === 'no') {
  alert('FINE! I DIDN\'T WANT TO PLAY WITH YOU EITHER!!!');
} else {
  while (doYouWantToPlay !== 'y' && doYouWantToPlay !== 'n' && doYouWantToPlay !== 'yes' && doYouWantToPlay !== 'no') {
    doYouWantToPlay = prompt('I\'m very sensitive, so please respond with Y or N, or I might not understand you. Do you want to play a game?');
  }
  doYouWantToPlay = doYouWantToPlay.toLowerCase();
}

console.log('Answer to Welcome Question: ', doYouWantToPlay);

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var userName = prompt('Great! Thanks for agreeing to play! What would you like me to call you?');
} else if (questionOne !== 'y' && questionOne !== 'n' && questionOne !== 'yes' && questionOne !== 'no') {
  alert('You did not provide a valid response.');
  console.log(userName + ' did not provide a valid response to Welcome Question');
}

// UserName

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  alert('Welcome ' + userName + '! It is a pleasure to meet you. Now, let\'s see if you know me.');
}

// Question 1

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionOne = prompt('Let\'s start with an easy one. Am I learning to code?');
}

if (questionOne === null) {
  alert('YOU BROKE IT!');
} else if (questionOne !== 'y' && questionOne !== 'n' && questionOne !== 'yes' && questionOne !== 'no') {
  alert('You did not provide a valid response.');
  console.log(userName + ' did not provide a valid response to Question 1');
} else if (questionOne === 'y' || questionOne === 'yes') {
  alert('You are correct!');
} else {
  alert('Sorry, you don\'t know me as well as you thought. Better luck on the next one.');
}

if (questionTwo !== undefined) {
  questionTwo = questionTwo.toLowerCase();
}

console.log('Answer to Question 2: ', questionTwo);


// Question 2

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionTwo = prompt('Was I born in the United States?');
}

if (questionTwo === null) {
  alert('YOU BROKE IT!');
} else if (questionTwo !== 'y' && questionTwo !== 'n' && questionTwo !== 'yes' && questionTwo !== 'no') {
  alert('You did not provide a valid response.');
  console.log(userName + ' did not provide a valid response to Question 2');
} else if (questionTwo === 'n' || questionTwo === 'no') {
  alert('You are correct!');
} else {
  alert('Sorry, you don\'t know me as well as you thought. Better luck on the next one.');
}

if (questionTwo !== undefined) {
  questionTwo = questionTwo.toLowerCase();
}

console.log('Answer to Question 2: ', questionTwo);

// Question 3

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionThree = prompt('Do I have any pets?');
}

if (questionThree === null) {
  alert('YOU BROKE IT!');
} else if (questionThree !== 'y' && questionThree !== 'n' && questionThree !== 'yes' && questionThree !== 'no') {
  alert('You did not provide a valid response.');
  console.log(userName + ' did not provide a valid response to Question 3');
} else if (questionThree === 'y' || questionThree === 'yes') {
  alert('You are correct!');
} else {
  alert('Sorry, you don\'t know me as well as you thought. Better luck on the next one.');
}

if (questionThree !== undefined) {
  questionThree = questionThree.toLowerCase();
}

console.log('Answer to Question 3: ', questionThree);

// Question 4

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionFour = prompt('Is my favorite animal a giraffe?');
}

if (questionFour === null) {
  alert('YOU BROKE IT!');
} else if (questionFour !== 'y' && questionFour !== 'n' && questionFour !== 'yes' && questionFour !== 'no') {
  alert('You did not provide a valid response.');
  console.log(userName + ' did not provide a valid response to Question 4');
} else if (questionFour === 'n' || questionFour === 'no') {
  alert('You are correct!');
} else {
  alert('Sorry, you don\'t know me as well as you thought. Better luck on the next one.');
}

if (questionFour !== undefined) {
  questionFour = questionFour.toLowerCase();
}

console.log('Answer to Question 4: ', questionFour);


// Question 5

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionFive = prompt('Can I play bohemian rhapsody on the ukulele?');
}

if (questionFive === null) {
  alert('YOU BROKE IT!');
} else if (questionFive !== 'y' && questionFive !== 'n' && questionFive !== 'yes' && questionFive !== 'no') {
  alert('You did not provide a valid response.');
  console.log(userName + ' did not provide a valid response to Question 5');
} else if (questionFive === 'n' || questionFive === 'no') {
  alert('You are correct!');
} else {
  alert('Sorry, you don\'t know me as well as you thought. Better luck on the next one.');
}

if (questionFive !== undefined) {
  questionFive = questionFive.toLowerCase();
}

console.log('Answer to Question 5: ', questionFive);


// Question 6

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  var questionSix = parseInt( prompt('How many different schools have I attended since high school? (Please enter an integer, rather than spelling the number)') );
}

while (questionSix !== 6) {
  if (questionSix < 6) {
    alert('Sorry...aim higher.');
    questionSix = parseInt( prompt('How many different schools have I attended since high school? (Please enter an integer, rather than spelling the number)') );
  } else if (questionSix > 6) {
    alert('Sorry...aim lower.');
    questionSix = parseInt( prompt('How many different schools have I attended since high school? (Please enter an integer, rather than spelling the number)') );
  }
}

if (questionSix === null) {
  alert('YOU BROKE IT!');
} else if (questionSix === 6) {
  alert('You are correct!');
}
