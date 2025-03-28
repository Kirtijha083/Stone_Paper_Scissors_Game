let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  // generate random number 0 to 2..multiply with 3 so the range will be 0 to 2
  // for removing decemal value use --> math.floor
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx]; //generate computure choice
};

// function draw game
const drawGame = () => {
  //   console.log("game was draw.");
  msg.innerText = "Game was draw. Play again!";
  msg.style.backgroundColor = "#081b31";
};

// show-winnig function
const showWiner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("You win!");
    msg.innerText = `You win!! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("You lose!");
    msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //   console.log("user choice = ", userChoice);
  // then generate computers choice
  const compChoice = genCompChoice();
  //   console.log("computer choice = ", compChoice);

  // logic for draw game
  if (userChoice === compChoice) {
    // draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWiner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked!", userChoice);
    playGame(userChoice);
  });
});

// definig fun for all difffert work is known as moduler way of programming..mean hrr ek kaam ke liye ek function (reusable component.....jn jarurat ho call kr lo)
