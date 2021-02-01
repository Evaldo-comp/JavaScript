function preencherEstrelas(){
    var inSimbolo = document.getElementById("inSimbolo");
    var outResposta = document.getElementById("outResposta");

    var simbolo = Number(inSimbolo.value);

    if(simbolo == "" || isNaN(simbolo)){
        alert("Insira um número");
        inSimbolo.focus()
        return
    }

    var estrela = "";

    for(var i = 0; i <= simbolo; i++){
        if (i % 2 == 0){
            estrelas = estrelas + "*";
        }else{
            estrelas = estrelas + "_";
        }

    }
    outResposta.textContent = estrelas;
    

}

var btPreencheEspaco = document.getElementById("btPreencherEspaco")
btPreencheEspaco.addEventListener("click",preencherEstrelas)