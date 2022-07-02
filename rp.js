

const wep = document.querySelectorAll(".weapon");

[...wep].forEach(item => {
  item.addEventListener("click", () => {
    playRound(item.value);
  });
});




const result = document.getElementById('results');


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

function playRound(playerSelection) {

    let computerSelection = computerPlay();

    
    

    if (playerSelection == computerSelection) {
        result.textContent = `Draw! You both chose ${playerSelection}`;
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playerScore++;
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScore++;
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScore++;
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        computerScore++;
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;





        
    }

    document.getElementById('playerscore').textContent=`Playerscore: ${playerScore}`;
    document.getElementById('computerscore').textContent=`Computerscore: ${computerScore}`;

    if(playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore){
            result.textContent = `You win! Score: ${playerScore} - ${computerScore}`;
        } else {
            result.textContent = `You lose! Score: ${playerScore} - ${computerScore}`;
        }
        playerScore = 0;
        computerScore = 0;
    }

}
