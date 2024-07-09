let ulSec = document.querySelector(".liste");

let liste = ["Fargo", "Dodge", "Mercedes", "BMW", "Ferrari", "Audi","Citröen"];

let html = ``;


liste.forEach(function(arabalar){

    html += `<li> ${arabalar} </li>`

})

ulSec.innerHTML = html;