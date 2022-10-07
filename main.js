
let score = {
    user: 0,
    pc: 0,
    board: () => {
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
    win: () => {
        console.log(`${choice.user === "R" ? "Rock" : choice.user === "P" ? "Paper" : "Scissors"} beats ${choice.pc === "R" ? "Rock" : choice.pc === "P" ? "Paper" : "Scissors"}`);
        console.log("You won this round!")
        score.user++
    },
    lose: () => {
        console.log(`${choice.pc === "R" ? "Rock" : choice.pc === "P" ? "Paper" : "Scissors"} beats ${choice.user === "R" ? "Rock" : choice.user === "P" ? "Paper" : "Scissors"}`);
        console.log("You lost this round!")
        score.pc++
    }
}

const ask = () => {return prompt("What is your choice? (R)ock / (P)aper / (S)cissors").trim().toUpperCase()}

let cont

function user(){
    choice.user = ask()
    while(choice.user !== "R" && choice.user !== "P" && choice.user !== "S"){
        cont++
        if (cont === 5){
            break
        }
        alert("Please enter a valid value")
        choice.user = ask()
    }
    console.log(`Your choice: ${choice.user}`)
}

function pc(){
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
        result.win()
    }else{
        result.lose()
    }
    score.board()
    choice.user = null
    choice.pc = null
}

function round(){
    user()
    pc()
    comparation(choice)
}

function game(){
    while (score.user < 5 && score.pc < 5){
        round()
    }
    if (score.user === 5) {
        console.log("Congrats!! You Won!")
    } else {
        console.log("You lost!")
    }
}

game()