let pick = ['Rock','Paper','Scissors'];

// Comp choice
function getComputerChoice() {
    let randomComp = pick[Math.floor(Math.random()*pick.length)]; 
    return randomComp;
}



function playRound(playerSelection, computerSelection) {
  switch (playerSelection + computerSelection) {
    case 'rockRock':
    case 'paperPaper':
    case 'scissorsScissors':
      return 'Tie';
    case 'rockScissors':
    case 'paperRock':
    case 'scissorsPaper':
      return 'Win';
    case 'rockPaper':
    case 'paperScissors':
    case 'scissorsRock':
      return 'Lose!';
    default:
      return 'Repeat your choice';
  }
}
  


let result = [];
function game(){
  for (let i = 0; i < 5; i++){
    const playerSelection = prompt('What do you choose? ');
    const computerSelection = getComputerChoice();
    console.log(`You : ${playerSelection} vs Comp : ${computerSelection}.`);
    result.push(playRound(playerSelection, computerSelection));
  }
}
result;
game();