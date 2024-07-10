let button = document.querySelector("button");
let kapsayici_pop = document.querySelector(".kapsayici-pop");
let kapama = document.querySelector(".kapa");

button.addEventListener("click",() => {

    kapsayici_pop.style.display = "block";

})


kapama.addEventListener("click",() =>{

    kapsayici_pop.style.display = "none";


})

