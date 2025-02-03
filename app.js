let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let userScoreCard = document.querySelector("#user-score");
let compScoreCard = document.querySelector("#comp-score");
let msg = document.querySelector("#msg")
let resetBtn = document.querySelector("#reset-button")

let userScore = 0;
let compScore = 0;

let events = ["rock", "paper", "scissors"];

const evaluate = (userChoice) => {
    let i = Math.floor(Math.random() * events.length);
    let compChoice = events[i];

    if ((userChoice == "rock" && compChoice == "scissors") ||
        (userChoice == "paper" && compChoice == "rock") ||
        (userChoice == "scissors" && compChoice == "paper")) {
        userScore++;
        msg.innerHTML = `You won!. Computer had chosen ${compChoice}`
    }

    else if (userChoice !== compChoice) { // Avoid incrementing score in case of a tie
        compScore++;
        msg.innerHTML = `You lost!. Computer had chosen ${compChoice}`
    }

    userScoreCard.innerHTML = userScore;
    compScoreCard.innerHTML = compScore;
};

const resetGame = () => {
    userScoreCard.innerHTML = 0;
    compScoreCard.innerHTML = 0;
    userScore = 0;
    compScore = 0;
}

// Pass a function reference to the event listener
rock.addEventListener("click", () => evaluate("rock"));
paper.addEventListener("click", () => evaluate("paper"));
scissors.addEventListener("click", () => evaluate("scissors"));
resetBtn.addEventListener("click", () => resetGame());
