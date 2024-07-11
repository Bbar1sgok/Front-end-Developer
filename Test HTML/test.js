let cevap_a = ["D","D","D","D","D"];

let form = document.querySelector("form");
let bilgilendir = document.querySelector(".bilgilendir");

form.addEventListener("submit", e => {

    e.preventDefault();
    let puan = 0;
    let k_cevapları = [form.s1.value, form.s2.value, form.s3.value, form.s4.value, form.s5.value];

    k_cevapları.forEach((x, index) =>{

        if(x === cevap_a[index]){

            puan +=20;

        }

    });
    if(puan < 50){

        bilgilendir.setAttribute("style","background-color:red; text-align:center; font-size:large; font-weight:bolder;margin-bottom:10px;")
        bilgilendir.textContent = `Geçersiz Puan: ${puan}`
    }
    else{

        bilgilendir.setAttribute("style","background-color:greenyellow; text-align:center; font-size:large; font-weight:bolder;margin-bottom:10px;")
        bilgilendir.textContent = `Tebrikler Geçtiniz: ${puan}`
    }   
})