
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

    if (resultado == "dois"){
        
        if (um.style.display != "none") {
            
            um.style.display = "none";
            dois.style.display = "block";
            texto.value = '';

        }
    }     
    
})


