



function computerPlay(){

    let csel = Math.floor(Math.random() * 3 + 1 );

    if (csel === 1) {
        return 'Rock';
    }   else if (csel === 2) {
        return 'Paper';
    }   else {
        return 'Scissors';
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound() {

    let computerSelection = computerPlay();
    let psel = prompt("Choose your Weapon");
    let playerSelection = capitalize(psel);
    

    if (playerSelection == computerSelection) {
        console.log(`Draw! You both chose ${playerSelection}`);
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }

}


function game(){
    for(let i = 0; i < 5; i++){
        playRound();
        
    }

    if(playerScore > computerScore){
        console.log(`You win! Score: ${playerScore} : ${computerScore}`);
    } else {
        console.log(`You lose! Score: ${playerScore} : ${computerScore}`);
    }
   
    playerScore = 0;
    computerScore = 0;
}

function capitalize(rstr){
   
   let rsts = rstr.charAt(0).toUpperCase() + rstr.slice(1).toLowerCase();
    return rsts;
}