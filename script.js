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
    return 'Draw';
  }

  if ((player === 'rock' && computer === 'scissors') || 
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')) {
        return 'Player';
  }
  if ((player === 'rock' && computer === 'paper') || 
  (player === 'paper' && computer === 'scissors') ||
  (player === 'scissors' && computer === 'rock')) {
    return 'Computer';
  }
}

function game() {
  let playerCount = 0;
  let computerCount = 0;

  for(i=0; i<5; i++) {
    let playerSelection = window.prompt('Type rock, paper or scissors').toLowerCase();
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);
    if(result === 'Draw') {
      console.log('It\'s a draw');
    }
    if(result === 'Player') {
      console.log('Player wins');
      playerCount++;
    }
    if (result === 'Computer') {
      console.log('Computer wins');
      computerCount++;
    }
  }

  if (playerCount === computerCount) {
    console.log('The match has no winner');
  } else if (playerCount > computerCount) {
    console.log('Player wins the match');
  } else {
    console.log('Computer wins the match');
  }
}

game();



