let acBtn = document.querySelector("#clear-btn")
let dotBtn = document.querySelector("#dot-btn");
let zeroBtn = document.querySelector("#zero-btn");

let input = "";
let operator = '';
let firstNumber = '';

acBtn.addEventListener("click", () => {
    console.log("AC")
    document.getElementById("screen").innerHTML = "0";
    input = ""
})

function refreshScreen() {
    document.getElementById("screen").innerHTML = input;
}

function getInput(str) {
    input += str
    refreshScreen()
}

dotBtn.addEventListener("click", () => {
    const hasNoDot = !input.includes(".");
    if (hasNoDot) {
        if (input.length <= 0) {
            getInput("0")
        }
        getInput(".")
    }
})

zeroBtn.addEventListener("click", () => {
    if (input.length > 0) {
        getInput("0")
    }
})

function getOperator(str) {
    operator = str
    firstNumber = input;
    input = '';
    refreshScreen()
}






