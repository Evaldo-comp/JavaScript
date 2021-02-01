function verificaPrimo(){
    var inNumero = document.getElementById("inNumero");
    var outResposta= document.getElementById("outResposta");

    var numero = Number(inNumero.value)

    if (numero == "" || isNaN(numero)){
        alert("Informe os dados corretamente");
        inNumero.focus();
        return;
    }

    var numDivisores = 0

    for (var i = 1; i <= numero; i++){
        if (numero % i == 0) {
            numDivisores++;
        }
    }
    if (numDivisores == 2) {
        outResposta.textContent = numero + " é Primo"
    }else{
        outResposta.textContent =  numero + " Não é Primo"

    }


}

var btVerificaPrimo = document.getElementById("btVerificaPrimo")
btVerificaPrimo.addEventListener("click", verificaPrimo);