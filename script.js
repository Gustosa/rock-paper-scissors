function getComputerChoice() {
    // Math.random() retorna um número >= 0 e < 1, e multiplicando por 3, pode-se chegar a números maiores que 2. Assim, é possível que o Math.floor() retorne até 2.
    let computerChoice = Math.floor((Math.random() * 3));
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


