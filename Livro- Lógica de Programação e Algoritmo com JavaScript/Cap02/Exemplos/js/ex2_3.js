
function mostrarPromocao(){
    
    var inModelo = document.getElementById("inModelo");
    var inValor = document.getElementById("inValor");
    var outModelo = document.getElementById("outModelo")
    var outEntrada = document.getElementById("outEntrada")
    var outParcela = document.getElementById("outParcela")
   
    

    var modelo = inModelo.value;
    var valor = Number(inValor.value);

    var entrada = valor / 2;
    var parcela = (valor - entrada) /12;

    outModelo.textContent = "Promoção:" + modelo;
    outEntrada.textContent = "Entrada de R$ " + entrada.toFixed(2) + " Reais";
    outParcela.textContent = " +12 de R$ " + parcela.toFixed(2) + " Reais";
}


var btVerPromocao = document.getElementById("btVerPromocao");

btVerPromocao.addEventListener("click", mostrarPromocao);