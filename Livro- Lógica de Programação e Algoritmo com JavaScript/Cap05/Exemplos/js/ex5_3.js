var carros = [];  // inicialização do vetor global


// FUNÇÃO PARA ADICIONAR OS CARROS
function adicionarCarros(){
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");

    var modelo = inModelo.value;
    var preco = Number(inPreco.value)

    // verifica preenchimento dos campos
    if(modelo == "" || preco == 0 || isNaN(preco) ){
        alert("Informe Corretamente os dados");
        inModelo.focus();
        return;
    }

    // Adiciona dados ao vetor do objeto
    carros.push({modelo: modelo, preco: preco});

    // limpa campos e posiciona o cursor em modelo
    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();

    listarCarros();   // chama a função que lista carros

}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarros);

// FUNÇÃO PARA LISTAR OS CARROS
function listarCarros(){
    // verifica se o vetor está vazio
    if (carros.length == 0){
        alert("Não há carros na lista");
        return ;
    }

    var lista = "";   // usada para cocatenar a lista de carros

    //percorre os elementos do vetor
    for(i = 0; i < carros.length; i++){
        // adiciona à lista cada objeto do vetor'
        lista += carros[i].modelo + "-R$: " + carros[i].preco.toFixed(2) + "\n";
    }

    // referencia elemento e altera o conteúdo exibido
    document.getElementById("outLista").textContent = lista;

}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCarros);


// FUNÇÃO PARA FILTRAR OS CARROS 
function filtrarCarros() {
    // faz a leitura do valor a partir do prompt
    var maximo = Number(prompt("Qual o valor máximo que o cliE  nte deseja pagar?"));

    // caso não preencha ou preencha com valor inválido
    if (maximo == 0 || isNaN(maximo)){
        return ;
    }

    // para cocatenar a lista de carros que obedecem a pesquisa
    var lista = "";

    // percorre todos os elementos do vetor
    for (var i = 0; i < carros.length; i++){
        // veifica o preço é igual ou inferior ao máximo
        if (carros[i].preco <= maximo){
            lista += carros[i].modelo + "R$: "+ carros[i].preco.toFixed(2) + "\n"
        }
    }

    var outLista = document.getElementById("outLista");

    // se a lista ficar vazia é sinal que nenhum elemento foi encontrado
    if(lista ==""){
        outLista.textContent = "Não há carros com preço até R$ " + maximo.toFixed(2);
    }else{
        // senão mostra os veículos obtidos
        outLista.textContent = "Carros até R$ "+ maximo.toFixed(2)+
                                "\n------------------------\n" + lista;
    }

}

var btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarCarros);