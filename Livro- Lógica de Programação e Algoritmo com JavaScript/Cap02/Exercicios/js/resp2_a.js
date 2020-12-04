function MostrarPromo(){
    var inDescricao = document.getElementById("inDescricao");
    var inPreco = document.getElementById("inPreco");
    var outDescricaoPromocao = document.getElementById("outDescricaoPromocao");
    var outValorComPromocao= document.getElementById("outValorComPromocao");

    var descricao = inDescricao.value;
    var preco = Number(inPreco.value);

    var desconto = (preco * 100)%100;
    var ValorComPromocao =((preco* 100) -desconto) * 2;

    outValorComPromocao.textContent = "Leve 2 por apenas R$: " + ValorComPromocao.toFixed(2)
    outDescricaoPromocao.textContent = "Promoção de " + descricao;
    

}

var btMostrarPromocao = document.getElementById("btMostrarPromocao");
btMostrarPromocao.addEventListener("click", MostrarPromo);