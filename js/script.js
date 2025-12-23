// Jogo Pedra Papel e Tesoura

// Criar uma variavel para armazenar o vencedor
let humanScore = 0;
let computerScore = 0;

//Atualiza o placar dos jogadores
function updateScore() {
  const score = document.getElementById("score");
  score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

// Criar uma variavel para a resposta do PC
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Criar uma variavel para a resposta do usuario
const buttons = document.querySelectorAll("button[data-choice]");

   buttons.forEach(button => {
      button.addEventListener("click", () => {
      const humanChoice = button.dataset.choice;
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
   })
});

// Criar uma função para uma rodada
function playRound(humanChoice, computerChoice){
   const result = document.getElementById("result");
      if (humanChoice === computerChoice){
         result.textContent = "It's a tie!";
         return;
      }

   const humanWins = 
         (humanChoice === "rock" && computerChoice === "scissors") ||
         (humanChoice === "paper" && computerChoice === "rock") ||
         (humanChoice === "scissors" && computerChoice === "paper");
      
   if (humanWins){
         humanScore++
         result.textContent = `You win ${humanChoice} beats ${computerChoice}`;
   }
   else{
         computerScore++
         result.textContent = `You lose ${computerChoice} beats ${humanChoice}`;
   }

   updateScore();
   checkWinner();
}
//Anuncia o vencedor
function checkWinner() {
  if (humanScore === 5) {
    document.getElementById("result").textContent = "🎉 You won the game!";
    disableButtons();
  }

  if (computerScore === 5) {
    document.getElementById("result").textContent = "💻 Computer won the game!";
    disableButtons();
  }
}

 function disableButtons() {
  buttons.forEach(button => button.disabled = true);
}
