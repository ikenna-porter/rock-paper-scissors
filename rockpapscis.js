
function computerPlay () {
    let randomNum = Math.floor(Math.random() * 3 + 1);
    //Generates a random number
    let computerPlay;

    //Establishes the computer's move through randomNum value
    if (randomNum === 1) {
        return computerPlay = 'rock';
    } else if (randomNum === 2) {
        return computerPlay = 'paper';
    } else {
        return computerPlay = 'scissors'
    }
}

function playerPlay () {
    let result = prompt('Choose "rock", "paper", or "scissors"!')
    return result;
}

function round (computerSelection, playerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    
    if (
        (computerSelection === 'rock' && playerSelection === 'rock') ||
        (computerSelection === 'paper' && playerSelection === 'paper') ||
        (computerSelection === 'scissors' && playerSelection === 'scissors')) {
            console.log("It's a tie.")
            return 0
    } else if (
    (computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')) {
        console.log(`Congratulations, ${playerSelection} beats ${computerSelection}!`);
        return 1
    } else {
        console.log(`You lose...${computerSelection} beats ${playerSelection}.`)
        return -1
    }
}

function game (numOfRounds) {

    let playerWins = 0;
    let computerWins = 0;
    let result;

    for (let i = 0; i < numOfRounds; i++) {
        result = round(computerPlay(),playerPlay())

        if (result === 1) {
            playerWins++
        } else if (result === -1) {
            computerWins++
        }
    }

    if (playerWins > computerWins) {
        console.log('Congrats! You win the game! 🥰')
    } else if (playerWins === computerWins) {
        console.log('It\'s a tie. No one wins! 🤌🏾')
    } else (
        console.log('Uh oh! You lost the game. 🤕')
    )
}

game(3);

// console.log(round(computerPlay(), 'paper'));
// console.log(round(computerPlay(), 'rock'));
// console.log(round(computerPlay(), 'scissors'));
// console.log(round(computerPlay(), 'Rock'));
// console.log(round(computerPlay(), 'paPer'));
// console.log(round(computerPlay(), 'SCISSORS'));
// console.log(round(computerPlay(), 'hi'));