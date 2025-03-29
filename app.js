let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
// generate random number 0 to 2..multiply with 3 so the range will be 0 to 2
// for removing decemal value use --> math.floor
const randIdx = Math.floor(Math.random() * 3);
return option[randIdx]; //generate computure choice
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
// then generate computers choice
const compChoice = genCompChoice();
console.log("computer choice = ", compChoice);
} 

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked!", userChoice);
        playGame(userChoice);
    }); 
});


// definig fun for all difffert work is known as moduler way of programming..mean hrr ek kaam ke liye ek function (reusable component.....jn jarurat ho call kr lo)