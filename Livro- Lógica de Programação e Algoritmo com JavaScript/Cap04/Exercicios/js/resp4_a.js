function repetirFruta() {
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outSaida = document.getElementById("outSaida");

    var fruta = inFruta.value;
    var numero = Number(inNumero.value);

    if(numero == "" || isNaN(numero)||fruta == ""){
        alert("Os dados estão incorretos");
        inFruta.focus();
        return
    }

    var sequencia = ""
    for(var i = 1; i <= numero; i++){
        sequencia +=  fruta+" * ";
    }

    outSaida.textContent = sequencia;
    
}

var btRepete = document.getElementById("btRepete");
btRepete.addEventListener("click", repetirFruta);