let acBtn = document.querySelector("#clear-btn")

let input = "";

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




