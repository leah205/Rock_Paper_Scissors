
function computerPlay(){
let randomNumber = Math.floor(Math.random()*3+1);
  if(randomNumber==1){
    return 'scissors';
}
  else if(randomNumber==2){
    return 'rock';
}
  else {
    return 'paper';
}
  }
let computerScore = 0; 
let playerScore = 0;
const computerCount = document.querySelector('#computerCount');
const playerCount = document.querySelector('#playerCount');
        
  function playRound(){
    let computerSelection = computerPlay();
    let playerWin = (playerSelection =='scissors' && computerSelection =='paper' || playerSelection == 'rock'
    && computerSelection == 'scissors' || playerSelection =='paper' &&
    computerSelection == 'rock');
   if(computerScore>=5|| playerScore>=5){
      return;
     
   }
    
 
  
      else if (playerSelection == computerSelection){
        
           return ('It\'s a tie! no one gets a point.')}
      else if (playerWin){
        playerCount.textContent = ++playerScore
          if(playerScore == 5){
            
            return (++playerScore,`Good job! You win! You picked ${playerSelection} and the computer picked ${computerSelection}`)
              }
          else{
            return (` You picked ${playerSelection} and
        the computer picked ${computerSelection}`)
               
       }
    }
     else {
      computerCount.textContent = ++computerScore
          if(computerScore == 5){
            const retry = document.createElement('p');
            retry.textContent = 'retry';
            retry.setAttribute('style', 'background: white');
            return (++computerScore,
              `Oh no! You lost!  The computer picked ${computerSelection} and you picked ${playerSelection}`, retry)
              
              }
          else{
            return (playerCount.textContent = playerScore, `The computer picked ${computerSelection} and you picked ${playerSelection}`)
     
             
  
  }
}
}

const btnContainer = document.querySelector('#again')
const div = document.querySelector('div');
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button)=> {
    button.addEventListener('click',()=>{
        playerSelection = button.id;
    div.textContent = playRound();
    });});