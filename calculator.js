const pageLoaded = () => {
    const acBtn = document.querySelector("#clear-btn");
    const dotBtn = document.querySelector("#dot-btn");
    const helloBtn = document.querySelector("#hello-btn");
    const byeBtn = document.querySelector("bye-btn");
    const zeroBtn = document.querySelector("#zero-btn");
    const equalBtn = document.querySelector("#equal-btn");



    const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const operators = ["plus", "minus", "times", "divide"]


    const addOnclick = (button, dosomething) => {
        const btn = document.querySelector(`#${button}-btn`)
        btn.onclick = () => dosomething(btn.value)
    }




    let input = "";
    let operator = "";
    let firstNumber = "";
    let computed = false;


    function displayOnScreen(something) {
        document.getElementById("screen").innerHTML = something;
    }

    acBtn.addEventListener("click", () => {
        console.log("AC");
        displayOnScreen("0");
        input = "";
        operator = "";
        firstNumber = "";
        computed = false;
    })


    function refreshScreen() {
        displayOnScreen(input);
    }

    const getInput = (str) => {

        if (computed && firstNumber.length > 0) {
            displayOnScreen("");
            firstNumber = operator.length <= 0 ? "" : input;
            computed = false;
            input = str;
        } else {
            input += str;
        }
        refreshScreen()
    }


    dotBtn.addEventListener("click", () => {
        const hasNoDot = !input.includes(".");

        if (hasNoDot || computed) {
            input.length <= 0 || computed ? getInput("0.") : getInput(".")
        }
    })

    zeroBtn.addEventListener("click", () => {
        if (input.length > 0) {
            getInput("0");
        };
    })

    const getOperator = (str) => {
        if (!computed && firstNumber.length <= 0) {
            operator = str
            firstNumber = input;
            input = '';
            refreshScreen()
        } else if (input.length > 0) {
            compute()
            operator = str
        }
    }

    function operate(operator) {
        const a = Number(firstNumber);
        const b = Number(input);

        const add = () => a + b;

        const subtract = () => a - b;

        const divide = () => a / b;

        const multiply = () => a * b

        const operation = {
            '+': add,
            '-': subtract,
            '/': divide,
            '*': multiply
        }

        return operation[operator]();
    }

    const compute = () => {
        if (!computed) {
            input = String(operate(operator))
            displayOnScreen(input);
            operator = "";
            computed = true;
        }
    }

    equalBtn.addEventListener("click", compute)


    const numbersOnclick = (button) => addOnclick(button, getInput)
    const operatorsOnclick = (button) => addOnclick(button, getOperator)

    numbers.forEach(numbersOnclick)
    operators.forEach(operatorsOnclick)
}

pageLoaded();





