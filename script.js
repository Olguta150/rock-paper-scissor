function computerPlay() {
    let option = ['Rock', 'Paper', 'Scissor'];
    let words = option[Math.floor(Math.random() * option.length)];
    // console.log(words);
    return words;
}

function playerPlay() {
    let playerChoice = prompt("Do you choose Rock, Paper or Scissor?");

    if(playerChoice.toLowerCase() === "rock") {
        playerChoice = "Rock";
    } else if(playerChoice.toLowerCase() === "paper") {
        playerChoice = "Paper";
    } else if(playerChoice.toLowerCase() === "scissor") {
        playerChoice = "Scissor";
    } else if(playerChoice != "rock" || "paper" || "scissor") {
        alert("Please try to enter your value again.");
    } else {
        console.log("Not sure what's going on...");
    }
    return playerChoice;
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    const firstLetter = playerSelection[0];
    const big = firstLetter.toUpperCase();
    const otherLetters = playerSelection.slice(1);
    const small = otherLetters.toLowerCase();
    const you = big + small;
    const comp = computerSelection;

    
    if(you === "Rock" && comp === "Paper" ||
    you === "Paper" && comp === "Scissor" ||
    you === "Scissor" && comp === "Rock"
    ) {
        computerScore++;
        return `You Lose! ${comp} beats ${you}!`;
    } else if(you === "Paper" && comp === "Rock" ||
    you === "Scissor" && comp === "Paper" ||
    you === "Rock" && comp === "Scissor") {
        playerScore++;
        return `You Win! ${you} beats ${comp}!`;
    } else if(you === "Rock" && comp === "Rock" ||
    you === "Paper" && comp === "Paper" ||
    you === "Scissor" && comp === "Scissor") {
        return "It's a tie!";
    } else {
        return "Something went wrong";
    }
    return;
}

function game() {
    for( i=0; i<5; i++) {
        console.log(playRound(playerPlay(), computerPlay()));
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    }
    if(playerScore > computerScore) {
        return "You win :)";
    } else if(computerScore > playerScore) {
        return "You lose :(";
    } else {
        return "It's a tie";
    }
}

console.log(game());