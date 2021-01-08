function VerificaEstacionamento(){
    var inValorDeposito = document.getElementById("inValorDeposito");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");
    

    /*var inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");
    var outResposta = document.getElementById("outResposta");*/

    var deposito = Number(inValorDeposito.value);
    var troco;
   

    // verifica validade do valor
    if(deposito == 0 || isNaN(deposito)){
        alert("Informe um valor válido");
        inValorDeposito.focus();
        return;
    }

    if (deposito < 1.00){
        alert("Valor insufucuente(mini = R$1.00)");
        inValorDeposito.focus();
        return;
    }

    var tempo;
    var troco;


   
    if (deposito >= 3.00){
        tempo = 120
        troco = deposito - 3.00;
    }else if(deposito >= 1.75){
        troco = deposito - 1.75;
        tempo = 60;
    }else{
        troco = deposito - 1.00;
        tempo =30;
    }
   
    outTempo.textContent = "Tempo: "+tempo+ " min";
    if(troco > 0){
        outTroco.textContent = "Troco R$: "+ troco.toFixed(2);
    }

}

var btConfirmaDeposito = document.getElementById("btConfirmaDeposito");
btConfirmaDeposito.addEventListener("click", VerificaEstacionamento)

