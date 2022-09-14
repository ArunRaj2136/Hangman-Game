const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-btn");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = [
    "application",
    "programming",
    "interface",
    "company",
    "javascript",
    "language",
    "developer",
    "coding",
    "interview",
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

////////show hidden word/////
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) =>
          `<span class="letter"> ${
            correctLetters.includes(letter) ? letter : " "
          } </span>`
      )
      .join("")}
    `;
  //   console.log(wordEl.innerText); //this gives letters in vertical to remove this using innerword//

  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You Won! 🥳";
    popup.style.display = "flex";
  }
}
displayWord();

//////show notification ////
function showNotification() {
  notification.classList.add("show");

  setTimeout(() => notification.classList.remove("show"), 1000);
}

//////////update wrong letters////
function updateWrongLettersEl() {
  ////display wrong letters
  wrongLettersEl.innerHTML = `
  ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
  ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;
  ////display man///
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  //////check if lost///
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "Unfortunately! You Lost! 😔";
    popup.style.display = "flex";
  }
}

////////key down event///////
window.addEventListener("keydown", function (e) {
  //   console.log(e.keyCode); //// alphabets from 65 to 90
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

///////restart the game////
playAgainBtn.addEventListener("click", function () {
  //////empty the arrays///
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();
  updateWrongLettersEl();

  popup.style.display = "none";
});