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
  var userName = prompt('Great! Thanks for playing! What would you like me to call you?');
} else if (questionOne !== 'y' && questionOne !== 'n' && questionOne !== 'yes' && questionOne !== 'no') {
  alert('You did not provide a valid response.');
  console.log(userName + ' did not provide a valid response to Welcome Question');
}

// UserName

if (doYouWantToPlay === 'y' || doYouWantToPlay === 'yes') {
  alert('Welcome ' + userName + '! It is a pleasure to meet you. Now, let\'s see if you know me.');
}

// Number Questions Answered Correctly
var numberCorrect = 0;

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
  numberCorrect++;
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
  numberCorrect++;
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
  numberCorrect++;
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
  numberCorrect++;
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
  numberCorrect++;
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

var guessesRemaining = 4;

while (guessesRemaining > 0) {
  if (questionSix === 6) {
    alert('You are correct!');
    numberCorrect++;
    break;
  } else if (questionSix < 6) {
    guessesRemaining--;
    alert('Sorry...aim higher. You have ' + guessesRemaining + ' guesses left.');
    if(guessesRemaining > 0) {
      questionSix = parseInt( prompt('How many different schools have I attended since high school? (Please enter an integer, rather than spelling the number)') );
    } else {
      break;
    }
  } else if (questionSix > 6) {
    guessesRemaining--;
    alert('Sorry...aim lower. You have ' + guessesRemaining + ' guesses left.');
    if (guessesRemaining > 0) {
      questionSix = parseInt( prompt('How many different schools have I attended since high school? (Please enter an integer, rather than spelling the number)') );
    } else {
      break;
    }
  }
}


var myCountriesVisited = ['england', 'saudi arabia', 'kenya', 'mexico', 'canada', 'france', 'the netherlands'];

for (var i = 0; i < myCountriesVisited.length; i++) {
  console.log('I have visited ' + myCountriesVisited[i]);
}

var guessesRemainingTwo = 6;

while (guessesRemainingTwo > 0) {
  var countryGuess = prompt('Can you guess a country that I have visited?').toLowerCase();
  guessesRemainingTwo--;

  for (i = 0; i < myCountriesVisited.length; i++) {
    if (myCountriesVisited[i] === countryGuess) {
      alert('You are correct! Nicely done!');
      numberCorrect++;
      console.log(userName + ' has guessed a country I visited!');
      guessesRemainingTwo = -1;
      break;
    }
  }
  if (guessesRemainingTwo > 1) {
    alert('Sorry, not in the list. You have ' + guessesRemainingTwo + ' guesses left.');
    console.log(userName + ' guessed incorrectly.');
  }
  if (guessesRemainingTwo === 0) {
    alert('Sorry...you have exhausted your guesses. You must not know me as well as you thought.');
    console.log(userName + ' was not able to guess any of my countries.');
  }
}

if(numberCorrect === 0) {
  alert('Sorry ' + userName + ', you really don\'t know me at all!');
} else if (numberCorrect > 0 && numberCorrect < 4) {
  alert(userName + ', you got ' + numberCorrect + '/7 answers correct. Not terrible, but not good.');
} else if (numberCorrect > 3 && numberCorrect < 6) {
  alert(userName + ', you got ' + numberCorrect + '/7 answers correct. Not bad, but not great.');
} else if (numberCorrect > 5 && numberCorrect < 7) {
  alert('You got ' + numberCorrect + '/7 answers correct! That\'s pretty darn great!.');
} else {
  alert(userName + ' is a genius! PERFECT SCORE!!!');
}
