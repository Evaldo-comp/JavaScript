var nome = [];
var pontuacao = []

function inserir(){
    var inCandidato = document.getElementById("inCandidato");
    var inNumero = document.getElementById("inNumero");

    var candidato = inCandidato.value;
    var numero = Number(inNumero.value);

    nome.push(candidato);
    pontuacao.push(numero);

    

    var lista = "";

    for(i = 0; i < nome.length; i++){
        for(j = 0; j < pontuacao.length; j++){
            lista += nome[i] + " - "+ pontuacao[j] + " acertos\n";
        }
    }
    
    document.getElementById("outLista").textContent = lista;
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", inserir);

function aprovados(){
    var pontos = prompt("Qual a pontuação mínima?");

    var lista2 = "";
    for(i = 0; i < nome.length; i++){
        for(j = 0; j < pontuacao.length; j++){
            if(pontuacao[j] >= pontos){
                lista += nome[i] + " - "+ pontuacao[j] + " acertos\n";    
            }
            ;
        }
    }
    
    document.getElementById("outLista").textContent = lista;
}
var btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener("click", aprovados);