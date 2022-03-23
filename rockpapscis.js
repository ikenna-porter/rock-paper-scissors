
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

function playerPlay (choice) {
    return `${choice}`;
}

function round (computerSelection, playerSelection) {

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

//DOM-Event Manipulation 

//Associates buttons on webpage with corresponding labels
const rock = document.querySelector(".rock-button");
const paper = document.querySelector(".paper-button");
const scissors = document.querySelector(".scissors-button");

//when buttons are clicked, players move is stored
rock.addEventListener('click', (e) => {
    console.log(playerPlay(e.target));
    
});
paper.addEventListener('click', (e) => {
    console.log(playerPlay(e.target));

});
scissors.addEventListener('click', (e) => {
    console.log(playerPlay(e.target));

});

game(3)