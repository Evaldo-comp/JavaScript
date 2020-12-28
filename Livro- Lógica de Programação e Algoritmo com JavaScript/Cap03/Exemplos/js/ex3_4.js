function calculaFuso(){
    // cria a referência aos elementos da página
    var inHoraBrasil = document.getElementById("inHora");
    var outHoraFranca = document.getElementById("outHoraFranca");

    // obtém e converte os dados do campo inHora
    var horaBrasil = Number(inHoraBrasil.value);

    // condicional para tratar o não preenchimento
    if(inHoraBrasil.value == ""|| isNaN(horaBrasil)){
        alert("Informe a hora corretamente");
        inHoraBrasil.focus();
        return;
    }

    // converte para o fuso horário frances
    var horaFranca = horaBrasil + 5;

    // se passar das 24 horas na Franca
    if(horaFranca > 24){
        horaFranca -= 24;
    }
    //exibe resposta

    outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2);
}
 

// cria ma referência ao botão
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click".calculaFuso);