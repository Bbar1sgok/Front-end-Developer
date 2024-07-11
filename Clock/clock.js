let zaman_al = document.querySelector(".saat");
let uyari_al = document.querySelector(".uyari");

let saat = () =>{

    let zaman = new Date();
    let saat_al = zaman.getHours();
    let dakika_al = zaman.getMinutes();
    let saniye_al = zaman.getSeconds();
    console.log(saat_al,dakika_al,saniye_al);

    let html_göm = `
    
        <span> ${saat_al} : </span>
        <span> ${dakika_al} : </span>
        <span> ${saniye_al} </span>

    `
    zaman_al.innerHTML = html_göm;

    if(saniye_al === 0){

        uyari_al.innerHTML = "Dakika Doldu";
    }
    else{

        uyari_al.innerHTML= "";
    }

    
}

setInterval(saat,1000);
