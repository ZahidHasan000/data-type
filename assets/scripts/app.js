/* let currentResult = 0;

currentResult = (currentResult + 10) * 3 / 2 - 1;

outputResult(currentResult, ''); */

// outputResult(currentResult, 'code');

/* let currentResult = 0;

currentResult = (currentResult + 10) * 3 / 2 - 1;
let calculationDescription = '(0 + 10) * 3/2 - 1';

outputResult(currentResult, calculationDescription); */

/* let currentResult = 0;

currentResult = (currentResult + 10) * 3 / 2 - 1;
let calculationDescription = '(' + currentResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription); */

/* const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;
let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription); */

/* const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;
// let calculationDescription = "(${defaultResult} + 10) * 3 / 2 - 1";
let calculationDescription = `(${defaultResult} + 10)* 3 / 2 - 1`;
let errorMessage = "An Error \\" +
    "occurred!";

// outputResult(currentResult, calculationDescription);
outputResult(currentResult, errorMessage);  */


/* const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    alert('The Result is :' + result);
}

add(1, 2);
add(5, 5);

currentResult = (currentResult + 10) * 3 / 2 - 1;
let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription); */



/* const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = add(1, 2);

let calculationDescription = `(${defaultResult} + 10)* 3 / 2 - 1`;
// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription); */

/*const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    return;
}

currentResult = add(1, 2);

let calculationDescription = `(${defaultResult} + 10)* 3 / 2 - 1`;
// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription); */


/*const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '')
}

addBtn.addEventListener('click', add); */


/*const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + parseInt(userInput.value);
    //                 Or
    //  currentResult = currentResult + +(userInput.value);

    outputResult(currentResult, '')
}

addBtn.addEventListener('click', add);*/


/*const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult.toString() + parseInt(userInput.value);
    outputResult(currentResult, '')
}

addBtn.addEventListener('click', add); */


/*const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    const calcDescription = `${currentResult} + ${userInput.value}`;
    currentResult = currentResult + parseInt(userInput.value);

    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add); */



/* const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

//Get input from input fields
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc}  ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //From vendor file
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // currentResult = currentResult + enteredNumber;
    currentResult += enteredNumber;
    // alert(currentResult++);

    logEntries.push(enteredNumber);

    // console.log(logEntries[0]);
    console.log(logEntries[1]);

    createAndWriteOutput('+', initialResult, enteredNumber);


}
function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // currentResult = currentResult - enteredNumber;
    currentResult -= enteredNumber;

    createAndWriteOutput('-', initialResult, enteredNumber);
}
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // currentResult = currentResult * enteredNumber;
    currentResult *= enteredNumber;

    createAndWriteOutput('*', initialResult, enteredNumber);

}
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // currentResult = currentResult / enteredNumber;
    currentResult /= enteredNumber;

    createAndWriteOutput('/', initialResult, enteredNumber);

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);     */


/*const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

//Get input from input fields
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc}  ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //From vendor file
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;

    createAndWriteOutput('+', initialResult, enteredNumber);

    const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        Number: enteredNumber,
        result: currentResult
    }
    logEntries.push(logEntry);
    // console.log(logEntry.operation);
    console.log(logEntries);
}

addBtn.addEventListener('click', add); */



const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

//Get input from input fields
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc}  ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //From vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {

    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        Number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);

    writeToLog('ADD', initialResult, enteredNumber, currentResult);

}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);

    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);

}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);

    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);

}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);

    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);   