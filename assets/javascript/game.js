//Declare variables as global variables
var alphabetArray = genCharArray("A", "Z");
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerLetter = getComputerLetter();
var arrayGuessed = [];

//Function I found online to create an array between two letters in alphabetical order
function genCharArray(charA, charZ) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
};

//Function to randomize the letter the user is guessing
function getComputerLetter() {
  return alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
};

//funtction to reset game without refreshing the page
function resetGame() {
  computerLetter = getComputerLetter()
  guessesLeft = 10;
  arrayGuessed = [];
  $("#lettersGuessed").text("");
};
//when page is reloaded by CTRL+R javascript loads too quickly and accidentaly catches R on release
 setTimeout(function() {

//WAITING FOR USER TO RELEASE KEY TO GRAB THE VALUE THEY HAVE SELECTED
document.onkeyup = function(event) {
  var userLetter = event.key;

//usedr will be able to input a letter regardless of CAPS LOCK and SHIFT key
  if (alphabetArray.indexOf(userLetter) < 0) {
    userLetter = userLetter.toUpperCase();
  };

//checking to see if the input is a letter by checking against array
  if (alphabetArray.indexOf(userLetter) >= 0) {
    arrayGuessed.push(userLetter);
    $("#lettersGuessed").html(arrayGuessed.toString());

//if player guesses correctly before they run out of guesses they win and game resets
    if (userLetter == computerLetter) {
      alert("Congratulations \n\n You've Guessed the Correct Letter \n\n Hit Ok to Start Again\n\n")
      $("#wins").html(wins += 1);
      resetGame();
      }
  //if guess is incorrect counter decreases
    else if (arrayGuessed.length <= 9) {
      $("#guessesLeft").html(guessesLeft - arrayGuessed.length);
      }
  //when counter reaches 1 the next incorrect guess triggers a loss and reset
    else {
      $("#guessesLeft").html(guessesLeft - arrayGuessed.length);
      alert("You ran out of guesses. \n\n You've Lost. \n\n Hit OK to Try Again!!\n\n");
      $("#losses").html(losses += 1);
      resetGame();
      };
    };
  };
   }, 1000);
