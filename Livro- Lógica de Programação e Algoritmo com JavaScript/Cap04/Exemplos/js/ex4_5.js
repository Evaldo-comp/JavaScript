// declara e incializa contadores e acumuladores 
var numContas = 0;
var valTotal = 0;
var resposta = "";

function registraConta(){
    // cria referências  aos elementos manipulados pela função
    var inDescricao = document.getElementById("inDescricao");
    var inValor = document.getElementById("inValor");
    var outListaContas = document.getElementById("outlistaContas");
    var outTotal = document.getElementById("outTotal");

    // obtém conteúdo dos campos
    descricao = inDescricao.value;
    valor = Number(inValor.value);

    // verifica o preenchimento dos campos
    if (descricao == "" || valor == 0 || isNaN(valor)){
        alert("Informe os dados corretamente");
        inDescricao.focus();
        return;
    }

    // adiciona valores ao contador e acumulador
    numContas++;
    valTotal+= valor;

    // coctena as contas
    resposta =resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

    // altera o conteúdo das tags de resposta
    outListaContas.textContent = resposta + " ----------------------- ";
    outTotal.textContent = numContas + "Conta(s) - Total R$: "+ valTotal.toFixed(2);

    // limpa campos e posiciona o cursor em inDescrição
    inDescricao.value = " ";
    inValor.value = " ";
    inDescricao.focus();
}

// referencia elemento e após associa a function ao evento click

var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", registraConta)
