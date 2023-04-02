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
      return 'Lose';
    default:
      return 'Repeat your choice';
  }
}
  

let result = [];
let wins = 0;
let loses = 0;
let roundResult;
function game(){
  for (let i = 0; i < 5; i++){
    const playerSelection = prompt('What do you choose? ');
    const computerSelection = getComputerChoice();
    console.log(`You : ${playerSelection} | Comp : ${computerSelection}.`);
    roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === 'Win'){
      wins++;
    } else if (roundResult === 'Lose') {
      loses++;
    } else {
      wins + 0;
      loses + 0;
    }
  }
  if (wins > loses){
    console.log('You are the winner!');
  } else {
    console.log('You are lose.');
  }
}
result;
game();


