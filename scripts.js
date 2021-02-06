let menu = document.getElementById("menu");
let startBtn = document.createElement("button");
let exitBtn = document.createElement("button");
let inputField = document.createElement("input");
let enterBtn = document.createElement("button");

let userName = "";

startBtn.textContent = "Start";
exitBtn.textContent = "Exit";
enterBtn.textContent = "Enter";

menu.append(startBtn);
menu.append(exitBtn);

//Add style
startBtn.classList.add("start");
exitBtn.classList.add("end");
enterBtn.classList.add("enter");

//Functions

const grabUserName = userName => {
    userName = inputField.value;
    greeting(userName);
}

const greeting = userName => {
    menu.textContent = "Welcome " + userName;
}

const startGame = () => {
    menu.textContent = "What is your name?";
    menu.append(inputField);
    menu.append(enterBtn);

    enterBtn.addEventListener("click", grabUserName);
}

const endGame = () => {
    console.log("Goodbye");
    menu.textContent = "GOODBYE!";
}

//Adding Events
startBtn.addEventListener("click", startGame);
exitBtn.addEventListener("click", endGame);