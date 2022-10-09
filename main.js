const userScore = document.querySelector(".yourScore");
const pcScore = document.querySelector(".pcScore");
const btns = document.querySelectorAll("button");
const results = document.querySelectorAll(".results h1");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        nextRound(btn.className[0].toUpperCase());
    });
});

let score = {
    user: 0,
    pc: 0,
};

let choice = {
    user: "",
    pc: "",
};

function letterToName(letter) {
    const name =
        letter === "R" ? "Rock" : letter === "P" ? "Paper" : "Scissors";
    return name;
}

let result = {
    tie: () => {
        results[2].textContent = "It's a tie!";
        results[1].textContent = `You and the computer choosed ${letterToName(
            choice.user
        )}`;
    },
    playerWon: () => {
        results[2].textContent = "You Won!";
        results[1].textContent = `${letterToName(
            choice.user
        )} beats ${letterToName(choice.pc)}`;
        score.user++;
    },
    playerLost: () => {
        results[2].textContent = "You Lost!";
        results[1].textContent = `${letterToName(
            choice.pc
        )} beats ${letterToName(choice.user)}`;
        score.pc++;
    },
};

function computerChoice() {
    const calc = Math.floor(Math.random() * 3);
    choice.pc = calc === 0 ? "R" : calc === 1 ? "P" : "S";
    results[0].textContent = `The computer choosed ${letterToName(choice.pc)}`;
}

function comparation({ user, pc }) {
    if (user === pc) {
        result.tie();
    } else if (
        (user === "R" && pc === "S") ||
        (user === "S" && pc === "P") ||
        (user === "P" && pc === "R")
    ) {
        result.playerWon();
    } else {
        result.playerLost();
    }
    choice.user = null;
    choice.pc = null;
}

function scoreUpdate() {
    userScore.textContent = `0${score.user}`;
    pcScore.textContent = `0${score.pc}`;
}

function nextRound(userChoice) {
    choice.user = userChoice;
    computerChoice();
    comparation(choice);
    scoreUpdate();
    if (score.user === 5 || score.pc === 5) {
        setTimeout(() => {
            alert(
                `You ${score.user === 5 ? "Won" : "Lost"} the round! ${
                    score.user === 5 ? "Congrats!" : "More luck next time..."
                }`
            );
            score.user = 0;
            score.pc = 0;
            results[0].textContent = null;
            results[2].textContent = "Make Your Choice!";
            results[1].textContent = `Wanna try again?`;
            scoreUpdate();
        }, 100);
    }
}
