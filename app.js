let secretNumber = null;
let attempts = null;
let randomNumberList = [];
let intervalMax = 10;

function assignElementText(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random()*intervalMax)+1;

    console.log(generatedNumber);
    console.log(randomNumberList);

    // if all the secret number were used
    if (randomNumberList.length == intervalMax) {
        assignElementText("p", "All the secret numbers were used");
    } else {
        // if the generated number is included in the list.
        if (randomNumberList.includes(generatedNumber)) {
            return generateSecretNumber();
        } else {
            randomNumberList.push(generatedNumber);
            return generatedNumber;
        }
    }   
}

function initialConditions() {
    assignElementText("h1","Secret Number Game");
    assignElementText("p",`Enter a number from 1 to ${intervalMax}`);
    // no se adecua cuando reducimos el tamaño de la ventana de chrome
    secretNumber = generateSecretNumber();
    attempts = 1;
    console.log(secretNumber);
}

initialConditions();

function verifyAttemtp() {
    let userNumber = parseInt(document.getElementById("userNumber").value);
   
    if (userNumber === secretNumber) {
        assignElementText("p", `You got the number right in ${attempts}
         ${(attempts === 1) ? "attempt" : "attempts"}!!`);
         document.getElementById("restart").removeAttribute("disabled");
    } else {
        if (userNumber > secretNumber) {
            assignElementText("p", "The secret number is less...");
        } else {
            assignElementText("p", "The secret number is greater...");    
        }
        attempts++;
        cleanBox();
    }
    return;
}

function cleanBox() {
    document.querySelector("#userNumber").value = "";
    /*let Box = document.querySelector("#userNumber");
    Box.value = "";
    */
}

function restartGame() {
    //Clean the box
    cleanBox();
    //Indicate initial conditions (number interval, secret number, attempts)
    initialConditions();
    //disable new game button
    document.querySelector("#restart").setAttribute("disabled", "true");
}

