let menu = document.getElementById("menu");
let startBtn = document.createElement("button");
let exitBtn = document.createElement("button");
let inputField = document.createElement("input");
let enterBtn = document.createElement("button");
let img = document.createElement("img");

let statsTotal = 30;

let userName = "";

startBtn.textContent = "Start";
exitBtn.textContent = "Exit";
enterBtn.textContent = "Enter";

img.setAttribute("src", "images/character.png");

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
    let button = document.createElement("button");
    button.textContent = "Let's Go!";
    button.classList.add("start");

    menu.append(img);
    menu.append(button);

    button.addEventListener("click", spawn(img, button));
}

const spawn = (img, button) => {
    menu.classList.add("dark");
    img.style.display = "none"; 
    button.style.display = "none";

}

const startGame = () => {
    menu.textContent = "What is your name?";
    menu.append(inputField);
    menu.append(enterBtn);

    enterBtn.addEventListener("click", grabUserName);
    inputField.addEventListener("keydown", (e) => {
        if(!e.repeat && e.key === "Enter"){
            grabUserName();
        }
    });
    
}

const endGame = () => {
    console.log("Goodbye");
    menu.textContent = "GOODBYE!";
}


//Adding Events
startBtn.addEventListener("click", startGame);
exitBtn.addEventListener("click", endGame);
