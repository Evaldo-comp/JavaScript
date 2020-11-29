
function calcularPreco(){
    
    var inPrecoQuilo = document.getElementById("inPrecoQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var ouValorAPagar = document.getElementById("ouValorAPagar");
   
   
    

    var preco = inPrecoQuilo.value;
    var consumo = Number(inConsumo.value);

    var calculo = preco / 1000; 
    var valorPrato = calculo * consumo;

    ouValorAPagar.textContent = "Valor a Pagar R$: "+ valorPrato.toFixed(2)+ " Reais";
    ;
}


var btCalcularPreco = document.getElementById("btCalcularPreco");

btCalcularPreco.addEventListener("click", calcularPreco);