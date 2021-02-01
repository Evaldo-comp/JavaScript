function preverChinchilas(){
    var inChinchilas = document.getElementById("inChinchilas");
    var inAnos = document.getElementById("inAnos");
    outSaida = document.getElementById("outSaida");

    var chinchilas = Number(inChinchilas.value);
    var anos = Number(inAnos.value);

    if (chinchilas=="" || isNaN(chinchilas) || anos =="" || isNaN(anos)){
        alert("Dados incorretos");
        inChinchilas.focus();
        return
    }else if(chinchilas < 2){
        alert("O número de chinchilas deve ser igual ou maior do que 2");
        inChinchilas.focus();;
        return
    }
    var saida=""
    var quebra = "\n"

    for(var i = 1;i<=anos; i++){
        //outSaida.textContent = i+"ª Ano:"+ chinchilas + " Chinchilas"
        //(i+"ª Ano:"+ chinchilas + " Chinchilas")
        saida += i+"ª Ano:"+ chinchilas + " Chinchilas\n";
        
        chinchilas*= 3
    }

    outSaida.textContent = saida  ;
}

var btPrevisao = document.getElementById("btPrevisao");
btPrevisao.addEventListener("click", preverChinchilas);