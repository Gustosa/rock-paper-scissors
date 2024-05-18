function getComputerChoice() {
    // Math.random() retorna um número >= 0 e < 1, e multiplicando por 3, pode-se chegar a números maiores que 2. Assim, é possível que o Math.floor() retorne até 2.
    const computerChoice = Math.floor((Math.random() * 3))
    let result

    switch (computerChoice) {
        case 0:
            result = "rock"
            break
        case 1:
            result = "paper"
            break;
        case 2:
            result = "scissors"
            break
        default:
            console.log(`Something is wrong. The returned number was ${computerChoice}.`)
    }

    return result;
}

function updateScore(roundResult) {
    const userScore = document.querySelector("#userScore")
    const userPoints = parseInt(userScore.innerText) + 1
    const computerScore = document.querySelector("#computerScore")
    const computerPoints = parseInt(computerScore.innerText) + 1
    const finalResult = document.querySelector("#finalResult")

    if (roundResult == "won") {
        userScore.innerText = userPoints
    } else if (roundResult == "lost") {
        computerScore.innerText = computerPoints
    }

    if (userPoints == 5 || computerPoints == 5) {
        finalResult.innerText = `You won ${userPoints} rounds and lost ${computerPoints}.`

        if (userPoints == 5) {
            finalResult.innerText += " Congratulations! You won the set!"
        }

        if (computerPoints == 5) {
            finalResult.innerText += " That sucks! The computer won this set."
        }

        userScore.innerText = "0"
        computerScore.innerText = "0"
    }
}

function playRound(event) {
    const playerSelection = event.target.id
    const computerSelection = getComputerChoice()
    const result = document.querySelector("#roundResult")
    let roundResult;

    if (playerSelection === computerSelection) {
        result.innerText = `It's a tie! Both played ${playerSelection}.`
    } else if (playerSelection !== computerSelection) {
        if (playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock") {
            roundResult = "lost"
            result.innerText = `You lost! The computer's ${computerSelection} beated your ${playerSelection}.`
        } else {
            roundResult = "won"
            result.innerText = `You won! Your ${playerSelection} beated the computer's ${computerSelection}.`
        }
    }

    updateScore(roundResult)
}



const options = document.querySelector("#options")
options.addEventListener("click", playRound)