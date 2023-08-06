
const btn = document.querySelector("#enter");

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        
        btn.click();

    }
})

btn.addEventListener("click", function(){

    const audio = document.querySelector("#audio");
    
    const texto = document.querySelector("#texto");

    const value = texto.value;

    let resultado = value.toLowerCase();

    var erro = document.getElementById("error");

    var um = document.getElementById("um");
    var dois = document.getElementById("dois");
    var tres = document.getElementById("tres");
    var quatro = document.getElementById("quatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var sete = document.getElementById("sete");
    var oito = document.getElementById("oito");
    var nove = document.getElementById("nove");
    var dez = document.getElementById("nove");

    switch (resultado) {
        default:
            audio.play();
            setTimeout(() => {
                texto.value = '';
                erro.style.display = "block";
            }, 100);
            setTimeout(() => {
                erro.style.display = "none";
            }, 2000);
            break;
        case "dois":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "block";
            break;
        case "?":
            texto.value = '';
            break;
        case "octodecagono":
        case "octodecágono":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "block";
            break;
        case "quinta feira":
        case "quinta-feira":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "block";
            break; 
        
    }

})


