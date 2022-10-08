
let score = {
    user: 0,
    pc: 0,
    scoreBoard: () => {
        console.log("-----Scoreboard-----")
        console.log(`You: ${score.user}`)
        console.log(`Computer: ${score.pc}`)
    }
}

let choice = {
    user: "",
    pc: ""
}

let result = {
    tie: () => {
        console.log("It's a tie!")
    },
    playerWon: () => {
        console.log(`${choice.user === "R" ? "Rock" : choice.user === "P" ? "Paper" : "Scissors"} beats ${choice.pc === "R" ? "Rock" : choice.pc === "P" ? "Paper" : "Scissors"}`);
        console.log("You won this round!")
        score.user++
    },
    playerLost: () => {
        console.log(`${choice.pc === "R" ? "Rock" : choice.pc === "P" ? "Paper" : "Scissors"} beats ${choice.user === "R" ? "Rock" : choice.user === "P" ? "Paper" : "Scissors"}`);
        console.log("You lost this round!")
        score.pc++
    }
}

const askPlayerChoice = () => {
    return prompt("What is your choice? (R)ock / (P)aper / (S)cissors").
    trim().
    toUpperCase()}

function userChoice(){
    choice.user = askPlayerChoice()
    while(choice.user !== "R" && choice.user !== "P" && choice.user !== "S"){
        cont++
        if (cont === 5){
            break
        }
        alert("Please enter a valid value")
        choice.user = askPlayerChoice()
    }
    console.log(`Your choice: ${choice.user}`)
}

function computerChoice(){
    const calc = Math.floor(Math.random() * 3)
    choice.pc = (calc === 0 ? "R" : calc === 1 ? "P" : "S")
    console.log(`Computer choice: ${choice.pc}`)
}

function comparation({user, pc}){
    if( user === pc ){
        result.tie()
    }
    else if(
        user === "R" && pc === "S" || 
        user === "S" && pc === "P" ||
        user === "P" && pc === "R"
    ){
        result.playerWon()
    }else{
        result.playerLost()
    }
    score.scoreBoard()
    choice.user = null
    choice.pc = null
}

function nextRound(){
    userChoice()
    computerChoice()
    comparation(choice)
}

function game(){
    while (score.user < 5 && score.pc < 5){
        nextRound()
    }
    if (score.user === 5) {
        console.log("Congrats!! You Won!")
    } else {
        console.log("You lost!")
    }
}

game()