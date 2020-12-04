
//=================== VARIABLES ==========================

const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.querySelector(".btn");
const main = document.querySelector("main");
const span = document.querySelector("h2").firstElementChild;
const colors =["#ff0000","#b3ff00","#ff00ea","#00b7ff"];



btn.addEventListener("click", ()=>{

    let color = "#";
    for(let i =0;i<6;i++){
     color += hex[random6digitos()];

    }

    main.style.backgroundColor =`${color}`;
    span.textContent = `${color}`
  
    
})

// //=================== FUNCTIONS ==========================

function random6digitos(){

    return Math.floor(Math.random()* hex.length);
}





// ============================== OTRA FORMA DE HACERLO ==============


// //=================== EVENT LISTENERS ==========================

// btn.addEventListener("click", ()=>{

//     let newArray = randomNumber6digitos();
//     main.style.backgroundColor = `${newArray}`;
//     span.textContent = `${newArray}`;
    
// })

// //=================== FUNCTIONS ==========================


// function getRandomNumber(){

//     return Math.round(Math.random()*(colors.length -1));

// }


// function randomNumber6digitos (){

// let arrayVacio =["#"];
// let newArray =[];

// while(arrayVacio.length <=6){
    
//     let numeroAleatorio = Math.floor(Math.random() * hex.length);

//     arrayVacio.push(hex[numeroAleatorio]);
// }

// newArray = arrayVacio.join("");

// return newArray;



// }



