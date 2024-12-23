let userScore = 0;
let comScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =  document.querySelector("#user-score");
const compScorePara =  document.querySelector("#comp-score");

const genCompChoice = () => {
const options = ["rock", "paper", "scissors"]; 
const randIdx = Math.floor(Math.random() *3);
return options[randIdx];
};

const drawGame = () => {
  
    msg.innerText = "Game Was Draw! Play Again";
   
};

const showWinner = (userWin, userChoice, compChoice) => {
if (userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win!  Your ${userChoice} beats ${compChoice}`;
   
}else {
    comScore++;
    compScorePara.innerText = comScore;
    msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
   
}
};

const playGame = (userChoice) => {
const compChoice = genCompChoice();

if(compChoice === userChoice){
    //draw game
    drawGame();
} else {
    let userWin = true;
    if (userChoice === "rock"){
        // scissors , paper
        userWin = compChoice === "paper" ? false: true ;
    } else if ( userChoice === "paper") {
       userWin = compChoice ==="scissors" ?  false : true;
    }else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice );
}
};

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
     const userChoice = choice.getAttribute("id");    
    playGame (userChoice);
    });
});