function calcularMedia(){
    //cria referência aos elementos da página
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outSituacao = document.getElementById("outSituacao");
    var outMedia = document.getElementById("outMedia");

    //obtém os conteúdos dos campos de edição da página
    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    //calcula a média das notas
    var media = (nota1 + nota2)/2;

    //apresenta a média(outMedia)
    outMedia.textContent = "Média das Notas: " + media.toFixed(1);

    //cria a condição
    if(media >= 7){
        outSituacao.textContent = "Parabéns "+ nome + "! Você foi aprovado(a)";
        outSituacao.style.color = "blue";
    }else{
        outSituacao.textContent = "Eita "+ nome + "tu não passou não ó.";
        outSituacao.style.color = "red";
    }


}

// cria uma referência ao elemento btResultado
var btResultado = document.getElementById("btResultado");
//registra um evento relacionado ao botão
btResultado.addEventListener("click", calcularMedia);
