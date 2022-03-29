//Associates buttons on webpage with corresponding labels
const buttons = document.querySelector(".buttons-container");
const indivButtons = document.querySelectorAll('.button');

const playerHistory = document.querySelector(".player-round-history") //player wins/losses are stored here

//Game over modal pop-up
const modalBackground = document.querySelector(".overlay");
const gameOverModal = document.querySelector(".modal");
const gameOverModalH2 = document.querySelector(".modal div h2");
const gameOverModalP = document.querySelector(".modal-score");

//Audio files
const audioDefeated = document.querySelector(".audio-defeated");
const audioVictory = document.querySelector(".audio-victory");


const score = document.querySelector(".score-results")
let playerScore = 0;
let computerScore = 0;

//when button is clicked, players move is stored and a round of RPS is played
buttons.addEventListener('click', (e) => {
    let result = round(computerPlay(), playerPlay(e.target.id));

    //checks output of round() => if positive, player wins / if negative, computer wins
    if (result > 0) {
        e.target.classList.add('button-animation-win');
        setTimeout(function () { //toggles off class for button animation for losing so animation can be played again in future
            e.target.classList.remove('button-animation-win');
        }, 1000)
        playerScore++; //increase player score by 1 for winning round

    } else if (result < 0) {

        e.target.classList.add('button-animation-lose'); //plays button animation for losing
        setTimeout(function () { //toggles off class for button animation for losing so animation can be played again in future
            e.target.classList.remove('button-animation-lose');
        }, 1000)

        computerScore++; //increase computer score by 1 for winning round
    }

    //Updates scoreboard
    score.innerText = `${playerScore} - ${computerScore}`

    //Declares the winner
    if (playerScore >= 5) {
        audioVictory.play();
        modal(playerScore, computerScore);
    } else if (computerScore >= 5) {
        audioDefeated.play();
        modal(playerScore, computerScore);
    }

});


function modal(player, computer) {
    gameOverModal.classList.replace('modal-off', 'modal-on');
    modalBackground.style.display = "flex";
    if (player > computer) {
        gameOverModalH2.innerText = 'VICTORY!'
        gameOverModalP.innerText = `${player} - ${computer}`;
    } else {
        gameOverModalH2.innerText = 'DEFEATED!'
        gameOverModalP.innerText = `${player} - ${computer}`;
        document.querySelector('.modal button').innerText = "Try again?"
    }
}

//function used to randomly determine computer's move.
function computerPlay() {
    //Generates a random number
    let randomNum = Math.floor(Math.random() * 3 + 1);

    //Establishes the computer's move through randomNum value
    if (randomNum === 1) return 'rock';
    else if (randomNum === 2) return 'paper';
    else return 'scissors';
}

//takes an input and returns it as a string. Function represents player's move
function playerPlay(choice) {
    return `${choice}`
}

//function that creates text that will go in player's history
function playerOutput(result) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('playerResults')
    newDiv.innerText = result;
    playerHistory.appendChild(newDiv);
}

function round(computerSelection, playerSelection) {
    let tie = "It's a tie.";
    let win = `Congratulations, ${playerSelection} beats ${computerSelection}!`;
    let lose = `You lose...${computerSelection} beats ${playerSelection}.`;

    if (
        (computerSelection === 'rock' && playerSelection === 'rock') ||
        (computerSelection === 'paper' && playerSelection === 'paper') ||
        (computerSelection === 'scissors' && playerSelection === 'scissors')) {
        playerOutput(tie);
        return 0;

    } else if (
        (computerSelection === 'rock' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'rock')) {
        playerOutput(win);
        return 1

    } else {
        playerOutput(lose);
        return -1
    }
}
