console.log("Rock, Paper, Scissors Game")




    
function getComputerChoice () {
  const randomNumber = Math.floor(Math.random() * 3); 
  if (randomNumber === 0) {
      return "rock";
  } else if (randomNumber === 1) {
      return "paper";
  } else {
      return "scissors";
  }
}

console.log(getComputerChoice())

function getHumanChoice(){
  const choice = prompt ("Choose rock, paper or scissors").toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
  return choice;
}
else { console.log("Invalid choice. Please choose rock, paper, or scissors.");
  return getHumanChoice();
}
}


let humanScore = 0;
let computerScore = 0;


    

function playRound(humanChoice, computerChoice) {
  if ( humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);

    
  }
  else if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}.`);
    
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    
  }
  console.log(`Current Scores - You: ${humanScore}, Computer: ${computerScore}`);

}


function playGame () {
  while (humanScore < 5 && computerScore < 5){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    }
  
  if (humanScore === 5) {
    alert ("You Win the Game!");
    } else { 
      alert ("You Lose the Game!");
    }
  }
playGame(); 
