var clubes = []

function adicionarClubes(){
    var inClube = document.getElementById("inClube");
    

    var clube = inClube.value;

    // verifica o preenchimento
    if (clube == ""){
        alert("Informe o nome de um clube");
        inClube.focus()
        return
    }

    clubes.push(clube)  // adiciona elemento no final do vetor

    //listarClubes();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClubes)

// função para listar os clubes
function listarClubes(){
    if (clubes.length == 0){
        alert("Não há clubes para mostrar");
        return
    }

    var lista = ""

    // percorrendo os elementos do vetor
    for(i = 0; i< clubes.length; i++){
        lista += (i + 1) + ". "+clubes[i] + "\n"
    }

    // altera o conteúdo de outLista
    document.getElementById("outLista").textContent = lista;

    //limpa o campo
    inClube.value = "";
    inClube.focus();
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClubes)

function montarTabela(){
    if (clubes.length % 2 != 0){
        alert("Para montar a tabela é necessário um númro par de clubes");
        return;
    }

    var lista2 = ""

    for (i = 0; i < (clubes.length)/2; i++){
        if(clubes[i] == clubes[((clubes.length) - i)-1]){
            break
        }
        lista2 += (clubes[i]) + " + "+ clubes[((clubes.length) - i)-1]+"\n";
    }

    document.getElementById("outLista").textContent = lista2;   
} 

var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarTabela);

    
