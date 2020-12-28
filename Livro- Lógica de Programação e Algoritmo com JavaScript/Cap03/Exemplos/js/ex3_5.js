function calculaFuso(){

// referencia elementos utilizados na página
 var inNumero = document.getElementById("inNumero");
 var outResposta = document.getElementById("outResposta");
 

 //converte o ddo inserido para numero
 var Numero = Number(inNumero.value);
 
 //verificação de dado iserido
 if(Numero == 0 || isNaN(Numero)){
     alert("por favor informe um número válido");
     inNumero.focus();
 }

 var raiz = Math.sqrt(Numero);

 //verificação da raiz
 if (raiz == Math.floor(raiz)){
     outResposta.textContent  = "Raiz: "+ raiz;
 }else {
     outResposta.textContent = "Não há Raiz exata para : "+ Numero;
    }
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calculaFuso);