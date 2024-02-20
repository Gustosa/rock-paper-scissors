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

function playRound(playerSelection, computerSelection) {
    let roundMessage;

    if (playerSelection === computerSelection) {
        result = `It's a tie! Both played ${playerSelection}`;
    }

    if (playerSelection !== computerSelection) {
        if (playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock") {
            roundMessage = `You lost! The computer's ${computerSelection} beated your ${playerSelection}.`;
        } else {
            roundMessage = `You won! Your ${playerSelection} beated the computer's ${computerSelection}.`;
        }
    }

    return roundMessage;
}

function getUserChoice() {
    let userChoice = prompt("This is a rock-paper-scissors game! Choose a move to play against the computer.");

    userChoice = userChoice.toLowerCase();
    console.log(userChoice)

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        alert("Please, enter a valid move (either rock, paper or scissors).");
        getUserChoice();
    }
}