function verificaPerfeito(){
    var inNumero = document.getElementById("inNumero");
    outSaida = document.getElementById("outSaida");
    outSaida2 = document.getElementById("outSaida2");


    var numero = Number(inNumero.value);

    if (numero=="" || isNaN(numero)){
        alert("Dados incorretos");
        inNumero.focus();
        return
    }
     var div = "";
     somadiv = 0;
     saida= "Divisores de " + numero + ": "
    

    for(var i = 1;i< numero; i++){
        if (numero % i == 0){
            somadiv+= i
            saida += i + " ," 
            
            if (somadiv == numero){
                outSaida2.textContent = numero + " É um número perfeito"
            }else{
                outSaida2.textContent = numero + " Não É um número perfeito"

            }
        }
        
    }

    outSaida.textContent = saida;
}

var btPerfeito = document.getElementById("btPerfeito");
btPerfeito.addEventListener("click", verificaPerfeito);