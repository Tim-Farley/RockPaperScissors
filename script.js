    
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

let choice = "";
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const rock = document.getElementById ("rockBtn");
rock.addEventListener("click", function(e) { 
  if (!gameOver) {
  choice ="rock";
  playRoundAndCheckGame();
  }
})  

const paper = document.getElementById ("paperBtn");

paper.addEventListener("click", function(e) { 
   if (!gameOver) {
  choice = "paper"; 
  playRoundAndCheckGame();
  }
});


const scissors = document.getElementById ("scissorsBtn");

scissors.addEventListener("click", function(e) { 
  if (!gameOver) {
  choice = "scissors";
  playRoundAndCheckGame();
  }
})  


function getHumanChoice(){

if (choice === "rock" || choice === "paper" || choice === "scissors") {
  return choice;
  }
  return null;
}

const message = document.getElementById("gameMessage");
const hScore = document.querySelector("#playerScore");
const cScore = document.querySelector("#computerScore");
    

function playRound(humanChoice, computerChoice) {
  if ( humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
      humanScore++; 
      hScore.textContent = humanScore;
      message.textContent= `You win! ${humanChoice} beats ${computerChoice}.`;

    
  }
  else if (humanChoice === computerChoice) {
    message.textContent =`It's a tie! You both chose ${humanChoice}.`;
    
  } else {
    computerScore++;
    cScore.textContent = computerScore;
    message.textContent= `You lose! ${computerChoice} beats ${humanChoice}.`;
    
  }
}

function playRoundAndCheckGame() {
  if (humanScore < 5 && computerScore < 5) {
    let humanChoice = getHumanChoice();
    if (humanChoice) { 
      let computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
      checkGame(); 
    }
  }
}
const endMessage=document.getElementById("endGame");

function checkGame() {
  if (humanScore === 5) {
    endMessage.style.display = "block";
    endMessage.textContent = "You Win the Game!";
    gameOver = true; // End the game
  } else if (computerScore === 5) {
    endMessage.style.display = "block";
    endMessage.textContent = "You Lose the Game!";
    gameOver = true; // End the game
  }
}



