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

//////show notification ////
function showNotification() {
  notification.classList.add("show");

  setTimeout(() => notification.classList.remove("show"), 2000);
}

//////////update wrong letters////
function updateWrongLettersEl() {
  console.log("update wrong letter");
}

////////key down event///////
window.addEventListener("keydown", function (e) {
  console.log(e.keyCode); //// alphabets from 65 to 90
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