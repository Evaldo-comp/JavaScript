var criancas = [];  // inicialização do vetor global


// FUNÇÃO PARA ADICIONAR AS CRIANÇAS
function adicionarCriancas(){
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");

    var nome = inNome.value;
    var idade = Number(inIdade.value)

    // verifica preenchimento dos campos
    if(nome == "" || idade == 0 || isNaN(idade) ){
        alert("Informe Corretamente os dados");
        inNome.focus();
        return;
    }

    // Adiciona dados ao vetor do objeto
    criancas.push({nome: nome, idade: idade});

    // limpa campos e posiciona o cursor em nome
    inNome.value = "";
    inIdade.value = "";
    inNome.focus();

    listarCriancas();   // chama a função que lista crianças

}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCriancas);

// FUNÇÃO PARA LISTAR OS CRIANÇAS
function listarCriancas(){
    // verifica se o vetor está vazio
    if (criancas.length == 0){
        alert("Não há crianças na lista");
        return ;
    }

    var lista = "";   // usada para cocatenar a lista de crianças

    //percorre os elementos do vetor
    for(i = 0; i < criancas.length; i++){
        // adiciona à lista cada objeto do vetor'
        lista += criancas[i].nome + "Nome: " + criancas[i].idade + "\n";
    }

    // referencia elemento e altera o conteúdo exibido
    document.getElementById("outLista").textContent = lista;

}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCriancas);


// FUNÇÃO PARA FILTRAR OS CARROS 
function resumirLista() {
    // verifica se o vetor está vazio
    if(criancas.length == 0){
        alert("Não há crianças na lista");
        return;
    }

     //cria uma cópia do vetor crianças
     var copia = criancas.slice();

     // ordena o vetor cópia pela idade
     copia.sort(function (a, b) {return a.idade - b.idade});

     var resumo = "";  // para cocatenar a saída

     var aux = copia[0].idade;  //menor idade do vetor ordenado
     var nomes = [];            // vetor para inserir nomes de cada idade

     // percorre os elementos do veor ordenado (classificado por idade)
     for(var i = 0; i < copia.length; i++){
         // se é da mesma idade auxiliar , adiciona ao vetor
         if(copia[i].idade == aux){
             nomes.push(copia[i].nome);
         }else{
             // senão, adiciona ao resumo, dados e nomes inseridos em nomes[]
             resumo += aux + "ano(s): " + nomes.length + "criança(s) - ";
             resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
             resumo += "(" + nomes.join(", ") + ")\n\n";
             aux = copia[i].idade;  //obtem a nova idade na ordem
             nomes = [];  //limpa o vetor dos nomes
             nomes.push(copia[i].nome); // adiciona o primeiro da nova idade
         }
     }

     // adiciona os nomes da última idade ordenada
     resumo += aux + " ano(s): " + nomes.length + " criança(s) -";
     resumo += (nome.length / copia.length * 100)..toFixed(2) + "%\n";
     resumo += "(" + nomes.join(", ") + ")n\n";

     // altera o conteúdo de outlista
     document.getElementById("outLista").textContent = resumo;
}

var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click", resumirLista);