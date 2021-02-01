function geraEstrelas(){
    var inNumero = document.getElementById("inNumero");
    outSaida = document.getElementById("outSaida");
    


    var numero = Number(inNumero.value);

    if (numero=="" || isNaN(numero)){
        alert("Dados incorretos");
        inNumero.focus();
        return
    }
     var estrelas = ""

     for (var i = 1; i <= numero; i++) {
        // dentro dessa repetição é criada uma outra (para cada linha, até i)
        for (var j = 1; j <= i; j++) {
          estrelas = estrelas + "*"
        }
        estrelas = estrelas + "\n";     // faz uma quebra de linha
      }

    outSaida.textContent = estrelas;
}

var btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", geraEstrelas);