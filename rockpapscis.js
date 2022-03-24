//Associates buttons on webpage with corresponding labels
const buttons = document.querySelector(".button");

const playerHistory = document.querySelector(".player-round-history") //player wins/losses are stored here
const computerHistory = document.querySelector(".computer-round-history") //pc wins/losses are stored here

const score = document.querySelector(".score-results")
let playerScore = 0;
let computerScore = 0;

    //when button is clicked, players move is stored and a round of RPS is played
    buttons.addEventListener('click', (e) => {
        let result = round(computerPlay(),playerPlay(e.target.id));
        //checks output of round() => if positive, player wins / if negative, computer wins
        if (result > 0) {
            playerScore++;
        } else if (result < 0) {
            computerScore++;
        }
        
        //Updates scoreboard
        score.innerText = `${playerScore} - ${computerScore}`
    
        //Declares the winner
        if (playerScore >= 5) {
            prompt('You win!')
        } else if (computerScore >= 5) {
            prompt('You lose.')
        }
        
    });



//function used to randomly determine computer's move.
function computerPlay () {
    //Generates a random number
    let randomNum = Math.floor(Math.random() * 3 + 1);

    //Establishes the computer's move through randomNum value
    if (randomNum === 1) return 'rock';
    else if (randomNum === 2) return 'paper';
    else return 'scissors';
}

//takes an input and returns it as a string. Function represents player's move
function playerPlay (choice) {
    return `${choice}`
}

//function that creates text that will go in player's history
function playerOutput (result) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('playerResults')
    newDiv.innerText = result;
    playerHistory.appendChild(newDiv);
}

//creates text that will go in computer's playing history
function computerOutput (result) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('computerResults')
    newDiv.innerText = result;
    computerHistory.appendChild(newDiv);
}

function round (computerSelection, playerSelection) {
    let tie = "It's a tie.";
    let win = `Congratulations, ${playerSelection} beats ${computerSelection}!`; 
    let lose = `You lose...${computerSelection} beats ${playerSelection}.`;

    if (
        (computerSelection === 'rock' && playerSelection === 'rock') ||
        (computerSelection === 'paper' && playerSelection === 'paper') ||
        (computerSelection === 'scissors' && playerSelection === 'scissors')) {
            playerOutput(tie);
            computerOutput(tie);
            return 0;
    } else if (
    (computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')) {
        playerOutput(win);
        computerOutput(lose);
        return 1
    } else {
        playerOutput(lose);
        computerOutput(win);
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
