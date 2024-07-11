// HEr anahtara bir tane değer atayabilirsin

// SESSİON STORAGE

// sessionStorage.setItem("İsim","Bayram Barış gök");
// sessionStorage.setItem("Agam","Yiğit Erbay");

// LOCAL STORAGE // silinmez

//localStorage.setItem("İsim","Bayram Barış gök");


let add = document.querySelector(".add");
let delete_item = document.querySelector(".delete");
let clear_item = document.querySelector(".clear");
let anahtar = document.querySelector(".anahtar");
let deger = document.querySelector(".deger");
let sil_ = document.querySelector(".sil_");

add.addEventListener("click",e =>{

    sessionStorage.setItem(anahtar.value,deger.value);

})

delete_item.addEventListener("click",e =>{

    sessionStorage.removeItem(sil_.value);

})

clear_item.addEventListener("click", e=>{

    sessionStorage.clear();

})