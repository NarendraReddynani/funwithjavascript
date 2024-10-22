const choices=["rock","paper","scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerscoreDisplay=document.getElementById("playerscoreDisplay");
const computerscoreDisplay=document.getElementById("computerscoreDisplay");
let playerscore=0;
let computerscore=0;
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }


    playerDisplay.textContent= `PLAYER: ${playerChoice}`;
    computerDisplay.textContent= `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent= result;
    resultDisplay.classList.remove("green","red");

    switch(result){
        case "YOU WIN!":
            playerscore++;
            resultDisplay.classList.add("green");
            playerscoreDisplay.textContent=playerscore;
            break;
        case "YOU LOSE!":
            computerscore++;
            resultDisplay.classList.add("red");
            computerscoreDisplay.textContent=computerscore;
            break;
    }
}
