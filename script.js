function computerPlay() {
    let option = ['Rock', 'Paper', 'Scissor'];
    let words = option[Math.floor(Math.random() * option.length)];
    // console.log(words);
    return words;
}

function playRound(playerSelection, computerSelection) {
    // const you = playerSelection.toLowerCase();
    const you = playerSelection.toLowerCase();
    const comp = computerSelection;

    if(you === "Rock" && comp === "Paper" ||
    you === "Paper" && comp === "Scissor" ||
    you === "Scissor" && comp === "Rock"
    ) {
        return `You Lose! ${comp} beats ${you}!`;
    } else if(you === "Paper" && comp === "Rock" ||
    you === "Scissor" && comp === "Paper" ||
    you === "Rock" && comp === "Scissor") {
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

const playerSelection = 'Rock';
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
