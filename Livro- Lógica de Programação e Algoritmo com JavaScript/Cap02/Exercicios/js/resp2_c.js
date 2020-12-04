function MostrarPromoSupermercado(){
    var inDescricao = document.getElementById("inDescricao");
    var inPreco = document.getElementById("inPreco");
    var outDescricaoPromocao = document.getElementById("outDescricaoPromocao");
    var outValorTerceiro= document.getElementById("outValorTerceiro");

    var descricao = inDescricao.value;
    var preco = Number(inPreco.value);

    var valorComDesconto = (preco * 2) + (preco / 2);
    var ValorTerceiro = (preco /2  ) ;

    outDescricaoPromocao.textContent =  descricao + " Promoção: Leve 3 por R$:" + valorComDesconto.toFixed(2)
    outValorTerceiro.textContent = "O terceiro produto custa apenas R$: " + ValorTerceiro.toFixed(2);
    

}

var btMostrarPromocao = document.getElementById("btVerPromocao");
btMostrarPromocao.addEventListener("click", MostrarPromoSupermercado);