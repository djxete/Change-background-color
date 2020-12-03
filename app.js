//==================== VARIABLES =========================

const main = document.querySelector("main");
const btn = document.querySelector(".btn");
const span = document.querySelector(".container").firstElementChild.firstElementChild;
const colors = ["green", "yellow", "rgb(236, 81, 9)","#09a4ec"]



//=================== EVENT LISTENERS ==========================

btn.addEventListener("click", ()=>{
    const randomNumber = getRandomNumber();
    //console.log(randomNumber);
    main.style.backgroundColor = colors[randomNumber];
    span.textContent = `${colors[randomNumber]}`;
})

//=================== FUNCTIONS ==========================

function getRandomNumber(){

    return Math.round(Math.random()*(colors.length -1));

}




