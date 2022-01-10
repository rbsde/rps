function computerPlay(){

    let csel = Math.floor(Math.random() * 3 + 1 );

    if (csel === 1) {
        return 'rock';
    }   else if (csel === 2) {
        return 'paper';
    }   else {
        return 'scissors';
    }
}

let computerSelection = computerPlay();
let playerSelection = 'rock';

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'draw';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'win';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'win';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'win';
    } else {
        return 'loss';
    }

}