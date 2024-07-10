
let form = document.querySelector("form");
let mesaj = document.querySelector(".mesaj");
let sifre_denetleme = document.querySelector(".sifre-denetleme");
const test_et = /^.{8,20}$/; // Regex Şifreleme

form.addEventListener("submit", e => {
    e.preventDefault();
    const deger_al = form.isimAl.value;

    if (test_et.test(deger_al)) {
        mesaj.textContent = "Giriş Başarılı";
        mesaj.setAttribute("style", "color:GreenYellow; font-weight:bolder; font-size:large; text-align:center;");
    } else {
        mesaj.textContent = "Hatalı Giriş";
        mesaj.setAttribute("style", "color:red; font-weight:bolder; font-size:large; text-align:center;");
    }
});

form.isimAl.addEventListener("keyup", e => {
    const value = e.target.value;

    if (value === "") {
        mesaj.textContent = "";
        sifre_denetleme.textContent = "";
        e.target.removeAttribute("style");
        return;
    }

    if (test_et.test(value)) {
        sifre_denetleme.textContent = "Şifre Güvenli";
        sifre_denetleme.style.color = "GreenYellow";
        sifre_denetleme.style.padding = "5px";
        sifre_denetleme.style.fontWeight = "bolder";
        sifre_denetleme.style.fontSize = "larger";
        e.target.setAttribute("style", "background-color:greenyellow;");
    } 
    
    else {
        sifre_denetleme.textContent = "Şifre Güvenli Değil";
        sifre_denetleme.style.color = "Red";
        sifre_denetleme.style.padding = "5px";
        sifre_denetleme.style.fontWeight = "bolder";
        sifre_denetleme.style.fontSize = "larger";
        e.target.setAttribute("style", "background-color:red;");
    }
});
