function calcularPesoIdeal(){
    //cria referência aos elementos da página
    var inNome = document.getElementById("inNome");
    var inSexoM = document.getElementById("rbMasculino");
    var inSexoF = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outPesoIdeal = document.getElementById("outPesoIdeal");
    

    //obtém os conteúdos dos campos de edição da página
    var nome = inNome.value;
    var masculino = inSexoM.checked;
    var feminino = inSexoF.checked;
    
    //var sexoF = inSexoF.value;
    var altura = Number(inAltura.value);

    //calcula o peso ideal
    var pesoIdealM = (22 * Math.pow(altura , 2));
    var pesoIdealF = (21 * Math.pow(altura , 2));

    //apresenta a média(outMedia)
    //outMedia.textContent = "Média das Notas: " + media.toFixed(1);

    //cria a condição

    // verifica se nome foi preenchido e sexo foi selecionado
    if (nome =="" || (masculino == false && feminino == false)){
        alert("Por favor, informe o nome e sexo");
        inNome.focus();
        return;
    }

    // verifica a correta inserção de dados em altura
    if(altura == 0 || isNaN(altura)){
        alert("Por Favor, informe a altura corretamente");
        inAltura.focus();
        return;
    }

    // fa a verificação do sexo
    if(masculino){
        outPesoIdeal.textContent = nome  + " Seu peso ideal é : "+ pesoIdealM.toFixed(2);
        outSituacao.style.color = "blue";
    }else{
        outPesoIdeal.textContent = nome  + " Seu peso ideal é : "+ pesoIdealF.toFixed(2);
        outSituacao.style.color = "red";
    }


}

// cria uma referência ao elemento btResultado
var btResultado = document.getElementById("btResultado");
//registra um evento relacionado ao botão
btResultado.addEventListener("click", calcularPesoIdeal);



// função apra limpar o form
function limparCampos(){
    location.reload();
    document.getElementById("inNome").focus();
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);