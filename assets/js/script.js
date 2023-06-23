let attempts = 1
let randomNumber

const main = document.querySelector("main")

const guessButton = document.querySelector("#guess-button")
const resetButton = document.querySelector("#reset-button")

const firstBox = document.querySelector(".box-1")
const secondBox = document.querySelector(".box-2")

guessButton.addEventListener("click", guessANumber)
resetButton.addEventListener("click", playAgain)

function generateRandomNumber() {
  const randomNumber = Math.round(Math.random() * 10)
  return randomNumber
}

function guessANumber(event) {
  event.preventDefault()
  const inputNumber = document.querySelector("#inputNumber").value
  randomNumber = generateRandomNumber()

  if (Number(inputNumber) === randomNumber) {
    firstBox.classList.add("hidden")
    secondBox.classList.remove("hidden")
    document.querySelector(".attempts").innerText = attempts
  } else {
    main.classList.toggle("shake")
    secondBox.classList.add("hidden")
    document.querySelector("#inputNumber").value = ""
    attempts++

    setTimeout(() => {
      main.classList.remove("shake")
    }, 500)
  }
}

function playAgain(event) {
  event.preventDefault()
  firstBox.classList.remove("hidden")
  secondBox.classList.add("hidden")
  document.querySelector("#inputNumber").value = ""
  randomNumber = generateRandomNumber()
  attempts = 1
}
