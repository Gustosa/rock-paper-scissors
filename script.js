function getComputerChoice() {
    // Math.random() retorna um número >= 0 e < 1, e multiplicando por 3, pode-se chegar a números maiores que 2. Assim, é possível que o Math.floor() retorne até 2.
    const computerChoice = Math.floor((Math.random() * 3));
    let result;

    switch (computerChoice) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
        default:
            console.log(`Something is wrong. The returned number was ${computerChoice}.`);
    }

    return result;
}

function getPlayerChoice() {
    let userChoice = prompt("This is a rock-paper-scissors game! You will play a best of 5 against the computer. Choose a move to play against the computer.");

    userChoice = userChoice.toLowerCase();

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        alert("Please, enter a valid move (either rock, paper or scissors).");
        getPlayerChoice();
    }
}

function playRound(computerSelection, playerSelection) {
    let roundResult;

    if (playerSelection === computerSelection) {
        result = `It's a tie! Both played ${playerSelection}`;
    }

    if (playerSelection !== computerSelection) {
        if (playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock") {
            roundResult = "defeat";
            console.log(`You lost! The computer's ${computerSelection} beated your ${playerSelection}.`);
        } else {
            console.log(`You won! Your ${playerSelection} beated the computer's ${computerSelection}.`);
            roundResult = "win";
        }
    }

    return roundResult;
}

function playGame() {
    let result;

    let defeatCounter = 0;
    let winCounter = 0;

    let computerSelection;
    let playerSelection;

    while (winCounter < 3 && defeatCounter < 3) {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();

        roundResult = playRound(computerSelection, playerSelection);

        if (roundResult === "defeat") {
            defeatCounter++;
        }

        if (roundResult === "win") {
            winCounter++;
        }
    }

    if (defeatCounter === 3) {
        result = `You lost! Total wins: ${winCounter}`;
    }

    if (winCounter === 3) {
        result = `You won! Hurray! Total losses: ${defeatCounter}`;
    }

    return result;
}

console.log(playGame());