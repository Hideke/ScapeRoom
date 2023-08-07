
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

    var bait1 = document.getElementById("bait-1");
    var bait2 = document.getElementById("bait-2");

    var um = document.getElementById("um");
    var dois = document.getElementById("dois");
    var tres = document.getElementById("tres");
    var quatro = document.getElementById("quatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var sete = document.getElementById("sete");
    var oito = document.getElementById("oito");
    var nove = document.getElementById("nove");
    var dez = document.getElementById("dez");
    var onze = document.getElementById("onze");
    var doze = document.getElementById("doze");
    var treze = document.getElementById("treze");
treze
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
        /* Resposta Fase 1 */
        case "nove":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "block";
            break;
        /* Resposta Fase 2 */
        case "arquimedes":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "block";
            break;
        /* Resposta Fase 3 */
        case "octadecagono":
        case "octadecágono":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "block";
            break;
        /* Resposta Fase 4 */
        case "ampulheta":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "none";
            cinco.style.display = "block";
            break;
        /* Resposta Fase 5 */
        case "quinta feira":
        case "quinta-feira":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "none";
            cinco.style.display = "none";
            seis.style.display = "block";
            break;
        /* Resposta Fase 6 */
        case "trinta e sete":
        case "37":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "none";
            cinco.style.display = "none";
            seis.style.display = "none";
            sete.style.display = "block";
            break;
        /* Resposta Fase 7 */ 
        case "van gogh":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "none";
            cinco.style.display = "none";
            seis.style.display = "none";
            sete.style.display = "none";
            oito.style.display = "block";
            break;
        /* Resposta Fase 8 */
        case "hidrocarbonetos":
        case "hidrocarboneto":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "none";
            cinco.style.display = "none";
            seis.style.display = "none";
            sete.style.display = "none";
            oito.style.display = "none";
            nove.style.display = "block";
            break;
        /* Resposta Fase 9 */
        case "senador amaral":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "none";
            cinco.style.display = "none";
            seis.style.display = "none";
            sete.style.display = "none";
            oito.style.display = "none";
            nove.style.display = "none";
            setTimeout(() => {
                texto.value = '';
                bait1.style.display = "block";
            }, 100);
            setTimeout(() => {
                bait1.style.display = "none";
                bait2.style.display = "block";
            }, 4000);
            setTimeout(() => {
                bait2.style.display = "none";
                dez.style.display = "block";
            }, 7000);
            break;
        /* Resposta Fase 10 */
        case "trazendoosquestionamentosdaescrita":
        case "trazendo os questionamentos da escrita":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "none";
            cinco.style.display = "none";
            seis.style.display = "none";
            sete.style.display = "none";
            oito.style.display = "none";
            nove.style.display = "none";
            dez.style.display = "none";
            onze.style.display = "block";
            break;
        /* Resposta Fase 11 */
        case "trouxemosalinguagemaomundo,":
        case "trouxemos a linguagem ao mundo,":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "none";
            cinco.style.display = "none";
            seis.style.display = "none";
            sete.style.display = "none";
            oito.style.display = "none";
            nove.style.display = "none";
            dez.style.display = "none";
            onze.style.display = "none";
            doze.style.display = "block";
            break;
        /* Resposta Fase 12 */
        case "cuneiforme que ecoam ainda hoje.":
        case "cuneiformequeecoamaindahoje.":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "none";
            cinco.style.display = "none";
            seis.style.display = "none";
            sete.style.display = "none";
            oito.style.display = "none";
            nove.style.display = "none";
            dez.style.display = "none";
            onze.style.display = "none";
            doze.style.display = "none";
            treze.style.display = "block";
            break;
        /* Resposta Fase 13 */
        case "nas tramas das tábuas antigas,":
        case "nas tramas das tabuas antigas,":
        case "nastramasdastábuasantigas,":
        case "nastramasdastabuasantigas,":
            texto.value = '';
            um.style.display = "none";
            dois.style.display = "none";
            tres.style.display = "none";
            quatro.style.display = "none";
            cinco.style.display = "none";
            seis.style.display = "none";
            sete.style.display = "none";
            oito.style.display = "none";
            nove.style.display = "none";
            dez.style.display = "none";
            onze.style.display = "none";
            doze.style.display = "none";
            treze.style.display = "none";
            break;
    }

})


