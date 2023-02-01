let playerChoice = '';
let playerPoint = 0;
let computerPoint = 0;

const content = document.querySelector('#content');
const choices = document.querySelectorAll('button');

const result = document.createElement('p');
content.appendChild(result);
result.innerHTML = 'Press a button to start a round. <br>The first to reach 5 points win the match'

const scores = document.createElement('p');
content.appendChild(scores);
scores.innerHTML = 'Player score: ' + playerPoint + '<br>Computer score: ' + computerPoint;

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

choices.forEach(btn => {
  btn.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playRound(playerChoice, getComputerChoice())
  })
})


function playRound(player, computer) {
  if (player === computer) {
    result.innerHTML = 'Player: ' + player + ' ||| ' + ' Computer: ' + computer + '  ==> DRAW' 
    scores.innerHTML = 'Player score: ' + playerPoint + '<br>Computer score: ' + computerPoint;
  }

  if ((player === 'rock' && computer === 'scissors') || 
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')) {
        playerPoint++;
        result.innerHTML = 'Player: ' + player + ' ||| ' + ' Computer: ' + computer + '  ==> PLAYER WINS THE ROUND'
        scores.innerHTML = 'Player score: ' + playerPoint + '<br>Computer score: ' + computerPoint;
        if (playerPoint == 5) {
          scores.textContent = 'Player wins the match, choose another button to restart'
          playerPoint = 0;
          computerPoint = 0;
        }
        
  }
  if ((player === 'rock' && computer === 'paper') || 
      (player === 'paper' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'rock')) {
        computerPoint++;
        result.innerHTML = 'Player: ' + player + ' ||| ' + ' Computer: ' + computer + '  ==> COMPUTER WINS THE ROUND'
        scores.innerHTML = 'Player score: ' + playerPoint + '<br>Computer score: ' + computerPoint;
        if (computerPoint == 5) {
          scores.textContent = 'Computer wins the match, choose another button to restart'
          playerPoint = 0;
          computerPoint = 0;
        }   
  }
}











