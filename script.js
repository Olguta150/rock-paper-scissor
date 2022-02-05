const btnR = document.querySelector('#rock');
const btnP = document.querySelector('#paper');
const btnS = document.querySelector('#scissors');
const container = document.querySelector('.container');
const playerWin = document.querySelector('.playerwin');
const computerWin = document.querySelector('.computerwin');
const result = document.querySelector('.result');
const body = document.querySelector('body');
let playerChoice;

//COMPUTER TURN
function computerPlay() {
    let option = ['Rock', 'Paper', 'Scissors'];
    let words = option[Math.floor(Math.random() * option.length)];
    return words;
}

//PLAYER TURN
function playerPlay() {
    
    if(playerChoice = btnR) {
        playerChoice = "Rock";
    } else if(playerChoice = btnP) {
        playerChoice = "Paper";
    } else if(playerChoice = btnS) {
        playerChoice = "Scissors";
    }
    return playerChoice;

}

let computerScore = 0;
let playerScore = 0;

//ROUND
function playRound(playerSelection, computerSelection) {
    const firstLetter = playerSelection[0];
    const big = firstLetter.toUpperCase();
    const otherLetters = playerSelection.slice(1);
    const small = otherLetters.toLowerCase();
    const you = big + small;
    const comp = computerSelection;
    
    
    
    if(you === "Rock" && comp === "Paper" ||
    you === "Paper" && comp === "Scissors" ||
    you === "Scissors" && comp === "Rock"
    ) {
        computerScore++;
        result.textContent = `You Lose! ${comp} beats ${you}`;
    } else if(you === "Paper" && comp === "Rock" ||
    you === "Scissors" && comp === "Paper" ||
    you === "Rock" && comp === "Scissors") {
        playerScore++;
        result.textContent = `You Win! ${you} beats ${comp}!`
    } else if(you === "Rock" && comp === "Rock" ||
    you === "Paper" && comp === "Paper" ||
    you === "Scissors" && comp === "Scissors") {
        result.textContent = `It's a tie!`;
    }
    
}

        //GAME
        function game() {
            playRound(playerPlay(), computerPlay());
            playerWin.textContent = `Your Score: ${playerScore}`;
            computerWin.textContent = `Alien Score: ${computerScore}`;

            const reload = document.querySelector('.reload');
            
            if(playerScore === 5) {
                result.textContent = `You saved everybody!!!
                Now you are a hero!!!`;
                body.removeChild(playerWin);
                body.removeChild(computerWin);
                body.removeChild(btnR);
                body.removeChild(btnP);
                body.removeChild(btnS);
            } else if(computerScore === 5) {
                result.textContent = `You lost! The world is gonna be destroied in 10 seconds...`;
                body.removeChild(playerWin);
                body.removeChild(computerWin);
                body.removeChild(btnR);
                body.removeChild(btnP);
                body.removeChild(btnS);
            }
            
            reload.textContent = 'Restart';
            reload.addEventListener('click', () => {
                window.location.reload();
            });
        }
        
        const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game();
    });
})
