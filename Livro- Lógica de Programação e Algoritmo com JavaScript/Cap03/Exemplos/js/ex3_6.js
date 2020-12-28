function calcularNotas(){
    var inSaque = document.getElementById("inSaque");
    var outNotas100 = document.getElementById("outNotas100");
    var outNotas50 = document.getElementById("outNotas50");
    var outNotas10 = document.getElementById("outNotas10");

    // limpa mensagens
    outNotas100.textContent = "";
    outNotas50.textContent = "";
    outNotas10.textContent = "";

    var Saque = Number(inSaque.value);

    if(Saque == 0 || isNaN(Saque)){
        alert("Informe um valor de saque válido");
        inSaque.focus();
        return;
    }

    //verifica se saque não é múltiplo de 10
    if(Saque % 10 != 0){
        alert("Valor inválido para notas de (R$ 10, 50, 100)");
        inSaque.focus();
        return;
    }

    var notas100 = Math.floor( Saque / 100);
    var resto = Saque % 100;
    var notas50 = match.floor(resto/50);
    resto = resto % 50;
    var notas10 = Math.floor(resto / 10);

    if(notas100 > 0){
        outNotas100.textContent = "Notas de R$ 100: "+ notas100;
    }
    if(notas50>0){
        outNotas50.textContent = "Notas de R$ 50: "+ notas50;
    }
    if(notas10>0){
        outNotas10.textContent = "Notas de R$ 10: "+ notas10;
    }
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularNotas);