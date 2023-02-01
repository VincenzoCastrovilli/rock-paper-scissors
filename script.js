const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');




let playerChoice = '';
let computerChoice = getComputerChoice();

const choices = document.querySelectorAll('button'); 

choices.forEach(btn => {
  btn.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playRound(playerChoice, computerChoice)
  })
})





function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'rock';
      break;
    
    case 1:
      return 'paper';
      break;
    
    case 2:
      return 'scissors';
      break;

    default:
      return 'Error';
  } 
}

function playRound(player, computer) {
  if (player === computer) {
    console.log(`Player: ${player}\nComputer: ${computer}\nResult: Draw`);
  }

  if ((player === 'rock' && computer === 'scissors') || 
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')) {
        console.log(`Player: ${player}\nComputer: ${computer}\nResult: Player wins`);
  }
  if ((player === 'rock' && computer === 'paper') || 
  (player === 'paper' && computer === 'scissors') ||
  (player === 'scissors' && computer === 'rock')) {
    console.log(`Player: ${player}\nComputer: ${computer}\nResult: Computer wins`);
  }
}

