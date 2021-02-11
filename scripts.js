let menu = document.getElementById("menu");
let startBtn = document.createElement("button");
let exitBtn = document.createElement("button");
let inputField = document.createElement("input");
let enterBtn = document.createElement("button");
let img = document.createElement("img");
let inputHealth = document.createElement("input");
let statsText = document.createElement("p");
let statsTotalText = document.createElement("p");
let addBtn = document.createElement("button");

let statsTotal = 30;

let userName = "";

startBtn.textContent = "Start";
exitBtn.textContent = "Exit";
enterBtn.textContent = "Enter";
statsText.innerHTML = "<b>Health</b>";
statsTotalText.innerHTML = `<b>Total Stats: ${statsTotal}</b>`;
inputHealth.value = 1;
addBtn.textContent = "+";

// img.src = "images/home.png";
// img.setAttribute("src", "images/home.png");
img.setAttribute("src", "images/character.png");

menu.append(startBtn);
menu.append(exitBtn);

//Add style
startBtn.classList.add("start");
exitBtn.classList.add("end");
enterBtn.classList.add("enter");
inputHealth.classList.add("health");
addBtn.classList.add("add");

//Functions

const grabUserName = userName => {
    userName = inputField.value;
    greeting(userName);
}

const greeting = userName => {
    menu.textContent = "Welcome " + userName;
    // menu.append(img);
    status();
}

const status = () => {
    

    menu.append(img);
    menu.append(statsText);
    menu.append(inputHealth);
    menu.append(addBtn);
    menu.append(statsTotalText);
    
}

const addStat = () => {
    
    let intHealth = parseInt(inputHealth.value);

    if(intHealth < 10) {
        intHealth++;
        statsTotal--;

        inputHealth.value = intHealth;
        statsTotalText.innerHTML = `<b>Total Stats: ${statsTotal}</b>`;
    }
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
addBtn.addEventListener("click", addStat);
