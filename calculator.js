const pageLoaded = () => {
    const acBtn = document.querySelector("#clear-btn");
    const dotBtn = document.querySelector("#dot-btn");
    const helloBtn = document.querySelector("#hello-btn");
    const byeBtn = document.querySelector("#bye-btn");
    const zeroBtn = document.querySelector("#zero-btn");
    const equalBtn = document.querySelector("#equal-btn");
    const screenElement = document.getElementById("screen");


    const displayRandomWord = () => {
        screenElement.style.background = "white"
        const words = ["Hello", "Hi", "Yo", "Howdy", "Hey", "Ciao"];
        const randomIndex = Math.trunc(Math.random() * words.length);
        displayOnScreen(words[randomIndex]);
    }

    helloBtn.onclick = displayRandomWord;



    const fadeToBlack = (opacity) => {
        const screenFadeToBlack = () => {
            screenElement.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            fadeToBlack(opacity + 0.02);
        }

        if (opacity <= 0.9) {
            setTimeout(screenFadeToBlack, 10);
        }
    }

    byeBtn.onclick = () => fadeToBlack(0.1);



    const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const operators = ["plus", "minus", "times", "divide"];

    const addOnclick = (button, dosomething) => {
        const btn = document.querySelector(`#${button}-btn`);
        const task = () => dosomething(btn.value);
        btn.onclick = task;
    }




    let input = "";
    let operator = "";
    let firstNumber = "";
    let computed = false;

    const isEmpty = (str) => str.length <= 0;
    const isNotEmpty = (str) => !isEmpty(str);
    const displayOnScreen = (something) => screenElement.innerHTML = something;


    const clear = () => {
        console.log("AC");
        displayOnScreen("0");
        input = "";
        operator = "";
        firstNumber = "";
        computed = false;
    }


    acBtn.addEventListener("click", clear);


    const refreshScreen = () => displayOnScreen(input);


    const getInput = (str) => {
        input += str;
        refreshScreen();
    }

    const addDot = () => {
        const hasNoDot = !input.includes(".");

        if (hasNoDot || computed) {
            isEmpty(input) || computed ? getInput("0.") : getInput(".");
        }
    }


    dotBtn.addEventListener("click", addDot);


    addZero = () => {
        if (isNotEmpty(input)) {
            getInput("0");
        }
    }

    zeroBtn.addEventListener("click", addZero);

    const getOperator = (str) => {
        operator = str;
        firstNumber = input;
        input = "";
        refreshScreen();
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
        if (!computed && isNotEmpty(input) && isNotEmpty(firstNumber) && isNotEmpty(operator)) {
            input = String(operate(operator))
            displayOnScreen(input);
            operator = "";
            computed = true;
            input = ""
        }
    }

    equalBtn.addEventListener("click", compute)


    const numbersOnclick = (button) => addOnclick(button, getInput);
    const operatorsOnclick = (button) => addOnclick(button, getOperator);

    numbers.forEach(numbersOnclick);
    operators.forEach(operatorsOnclick);
}

pageLoaded();
