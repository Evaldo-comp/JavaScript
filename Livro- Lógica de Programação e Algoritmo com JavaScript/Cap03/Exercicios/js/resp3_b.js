function VerificaVelocidade(){
    var inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
    var inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");
    var outResposta = document.getElementById("outResposta");

    var velociadePermitida = Number(inVelocidadePermitida.value);
    var velocidadeCondutor = Number(inVelocidadeCondutor.value);


    if(isNaN((velociadePermitida || velocidadeCondutor)) || (velociadePermitida || velocidadeCondutor) == ""){
        alert("Informe um número válido");
        inVelocidadePermitida.focus();
    } 
    if (velocidadeCondutor <= velociadePermitida){
        outResposta.textContent = "Sem Multa";
    }else if (velocidadeCondutor <= (velociadePermitida + ( velociadePermitida * 0.2))){
        outResposta.textContent = "Multa Leve";
    }else {
        outResposta.textContent = "Multa Grave";
  
    }
}

var btVerfica = document.getElementById("btVerifica");
btVerfica.addEventListener("click", VerificaVelocidade)

