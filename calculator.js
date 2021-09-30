let input = '';


function refreshScreen() {
    document.getElementById("screen").innerHTML = input;
}

function getInput(str) {


    input += str
    refreshScreen()

}




