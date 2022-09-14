const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-btn");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figurePart = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wizard"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

const correctLetters = ["w", "i", "z", "a", "r", "d"];
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
    finalMessage.innerText = "Congratulations! You Won!";
    popup.style.display = "flex";
  }
}

displayWord();