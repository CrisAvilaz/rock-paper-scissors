// Jogo Pedra Papel e Tesoura

// Criar uma variavel para a resposta do PC
function getComputerChoice(){
   const computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1
   if (computerChoice === 1) {
    return "rock"
   }
   else if (computerChoice === 2){
    return "paper"
   }
   else{
    return "scissors"
   }
}
// Criar uma variavel para a resposta do usuario
const getHumanChoice = () => {
   let choice = window.prompt("Choose Rock, Paper or Scissors");

   if (!choice) return null;

   choice = choice.toLowerCase();

   const validChoice = ["rock", "paper", "scissors"];

   if (!validChoice.includes(choice)){
    alert("Invalid choice, please choose Rock, Paper or Scissors");
    return getHumanChoice();
   }
   return choice;
 } 
// Criar uma variavel para armazenar o vencedor
let humanScore = 0;
let computerScore = 0;
// Criar uma função para uma rodada
function playRound(humanChoice, computerChoice){
   if (humanChoice === computerChoice){
      alert("Its a tie");
   }
   else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ){
      humanScore++
      alert(`Player Wins! Player score: ${humanScore} Computer Score: ${computerScore}`);
   }
   else{
      computerScore++
      alert(`Computer Wins! Player score: ${humanScore} Computer Score: ${computerScore}`);
   }
}
// Criar uma função para melhor de 5
function playGame(){
  for (let i = 0; i < 5; i++) {
   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
   playRound(humanSelection, computerSelection);
}
   alert(`Final Score:
   Player Score:${humanScore}
   Computer Score:${computerScore}`)
}
playGame();