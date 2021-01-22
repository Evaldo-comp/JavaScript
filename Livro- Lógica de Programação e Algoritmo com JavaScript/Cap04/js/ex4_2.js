function descrescerNumero(){
    // referência aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outSaida = document.getElementById("outSaida");

    // converte conteúdo do campo inNumero
    var numero = Number(inNumero.value);

    //validao numero
    if(numero == 0 || isNaN(numero)){
        alert("Informe um número válido");
        inNumero.focus();
        return;
    }

    // cria uma variável do tipo string, que irá cocatenar a resposta
    var resposta ="Entre "+numero+ " e 1: ";

    //cria um laço
    for (var i = numero; i >1; i=i-1){
        resposta = resposta + i + ", ";
        
    }

    reposta = resposta + i + ".";

    // alteração do conteúdo da tag pre
    outSaida.textContent = resposta;
}

// referencia o botão e cria a função do evento
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", descrescerNumero);