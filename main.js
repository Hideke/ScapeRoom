
const btn = document.querySelector("#enter");

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        
        btn.click();

    }
})

btn.addEventListener("click", function(e){

    e.preventDefault();

    const texto = document.querySelector("#texto")

    const value = texto.value;

    let resultado = value.toLowerCase();
    
    var um = document.getElementById("primeiro");

    var dois = document.getElementById("segundo");

    var tres = document.getElementById("terceiro");

    var quatro = document.getElementById("quarto");

    if (resultado == "dois"){
        
        if (um.style.display != "none") {
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "block";
        } 
    }     
    
    if (resultado == "quinta feira" || resultado == "quinta-feira"){
        
        if (dois.style.display != "none") {
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "block";
        } 
    }     

    if (resultado == "octodecágono" || resultado == "octodecagono"){
        
        if (tres.style.display != "none") {
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "block";
        } 
    } 

})


