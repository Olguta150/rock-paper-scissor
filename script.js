//COMPUTER TURN
function computerPlay() {
    let option = ['Rock', 'Paper', 'Scissor'];
    let words = option[Math.floor(Math.random() * option.length)];
    return words;
}

//PLAYER TURN
function playerPlay() {
    let playerChoice;

    const btnR = document.querySelector('#rock');
    const btnP = document.querySelector('#paper');
    const btnS = document.querySelector('#scissor');

    if(playerChoice = btnR) {
        playerChoice = "Rock";
    } else if(playerChoice = btnP) {
        playerChoice = "Paper";
    } else if(playerChoice = btnS) {
        playerChoice = "Scissor";
    }
    return playerChoice;

}

let computerScore = 0;
let playerScore = 0;
let moves = 0;

const playGame = () => {
    const playerOptions = [btnR, btnP, btnS];
    
    playerOptions.forEach(option => {
        option.addEventListener('click', function() {
            const movesLeft = document.querySelector('.movesleft');
            moves++;
            movesLeft.textContent= `Moves Left: ${5-moves}`;
        })
    })
}

//ROUND
function playRound(playerSelection, computerSelection) {
    const firstLetter = playerSelection[0];
    const big = firstLetter.toUpperCase();
    const otherLetters = playerSelection.slice(1);
    const small = otherLetters.toLowerCase();
    const you = big + small;
    const comp = computerSelection;
    
    const result = document.querySelector('.result');
    

    if(you === "Rock" && comp === "Paper" ||
    you === "Paper" && comp === "Scissor" ||
    you === "Scissor" && comp === "Rock"
    ) {
        computerScore++;
        result.textContent = `You Lose! ${comp} beats ${you}`;
    } else if(you === "Paper" && comp === "Rock" ||
    you === "Scissor" && comp === "Paper" ||
    you === "Rock" && comp === "Scissor") {
        playerScore++;
        result.textContent = `You Win! ${you} beats ${comp}!`
    } else if(you === "Rock" && comp === "Rock" ||
    you === "Paper" && comp === "Paper" ||
    you === "Scissor" && comp === "Scissor") {
        result.textContent = `It's a tie!`;
    }
    // return;
}

// function game() {
//     for( i=0; i<5; i++) {
//         console.log(playRound(playerPlay(), computerPlay()));
//         console.log("player score: " + playerScore);
//         console.log("computer score: " + computerScore);
//     }
//     if(playerScore > computerScore) {
//         return "You win :)";
//     } else if(computerScore > playerScore) {
//         return "You lose :(";
//     } else {
//         return "It's a tie";
//     }
// }


//GAME
function game() {
    console.log(playRound(playerPlay(), computerPlay()));
    playerWin.textContent = `Player Score: ${playerScore}`;
    computerWin.textContent = `ComputerScore: ${computerScore}`;
    // console.log('Player Score: ' + playerScore);
    // console.log('Computer Score: ' + computerScore);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game();
    });
})

const container = document.querySelector('.container');
const playerWin = document.createElement('div');
const computerWin = document.createElement('div');
container.appendChild(playerWin);
container.appendChild(computerWin);