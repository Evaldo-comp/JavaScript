function mostrarTabuada(){
    // referência aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outTabuada = document.getElementById("outTabuada");

    // converte conteúdo do campo inNumero
    var numero = Number(inNumero.value);

    //validao numero
    if(numero == 0 || isNaN(numero)){
        alert("Informe um número válido");
        inNumero.focus();
        return;
    }

    // cria uma variável do tipo string, que irá cocatenar a resposta
    var resposta ="";

    //cria um laço
    for (var i = 1; i <= 10; i++){
        resposta = resposta+numero+" x "+ i +" = " + numero * i + "\n";
    }

    // alteração do conteúdo da tag pre
    outTabuada.textContent = resposta;
}

// referencia o botão e cria a função do evento
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarTabuada);