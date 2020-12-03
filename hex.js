
//=================== VARIABLES ==========================

const btn = document.querySelector(".btn");
const main = document.querySelector("main");
const span = document.querySelector("h2").firstElementChild;
const colors =["#ff0000","#b3ff00","#ff00ea","#00b7ff"];


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
