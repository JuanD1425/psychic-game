var alphabetArray = genCharArray("a", "z");
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerLetter = getComputerLetter();

function genCharArray(charA, charZ) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}

function getComputerLetter() {
  return alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
};

function resetGame() {
  computerLetter = getComputerLetter()
  guessesLeft = 10
};
console.log(alphabetArray);

document.onkeyup = function(event) {
  var userLetter = event.key;

  console.log(userLetter);

  if (alphabetArray.indexOf(userLetter) >= 0) {
    var userInput = document.getElementById("lettersGuessed");
    var winsText = document.getElementById("wins");

    userInput.textContent += userLetter;


    if (userLetter == computerLetter) {
      wins += 1;
      winsText.textContent = wins;
      userInput.textContent = ""
      resetGame();
    } else {
      guessesLeft -= 1;
    }

    if (guessesLeft == 0) {
      losses += 1;
      userInput.textContent = ""
      resetGame();
    }

    var lossesText = document.getElementById("losses");
    var guessesLeftText = document.getElementById("guessesLeft");

    guessesLeftText.textContent = guessesLeft;
    lossesText.textContent = losses

  }
}
