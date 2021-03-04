var pacientes = [];

function adicionarPaciente() {
    // cria referência aos elementos de entrada e saída
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inPaciente.value;

    //verifica preenchimento do nome
    if(nome == ""){
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.push(nome);   // adiciona o nome ao final do vetor

    var lista = "";        // string para cocatenar pacientes

    // percorrendo os elementos do vetor
    for(i = 0; i < pacientes.length; i++){
        lista += (i + 1) + ". "+ pacientes[i] + "\n";
    }

    // altera o conteúdo da tag outLista
    outLista.textContent = lista;

    // limpa o campo e posiciona o cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}

// Função para atendimento urgência

function Urgencia() {
    // cria referência aos elementos de entrada e saída
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inPaciente.value;

    //verifica preenchimento do nome
    if(nome == ""){
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.unshift(nome);   // adiciona o nome ao final do vetor

    var lista = "";        // string para cocatenar pacientes

    // percorrendo os elementos do vetor
    for(i = 0; i < pacientes.length; i++){
        lista += (i + 1) + ". "+ pacientes[i] + "\n";
    }

    // latera o conteúdo da tag outLista
    outLista.textContent = lista;

    // limpa o campo e posiciona o cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}


function atenderPaciente() {
    

    //verifica preenchimento do nome
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera");
        inPaciente.focus();
        return;
    }

    // cria referência aos elementos de entrada e saída
    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");

    var atender = pacientes.shift();

    outAtendimento.textContent = atender;

    var lista = "";        // string para cocatenar pacientes

    // percorrendo os elementos do vetor
    for(i = 0; i < pacientes.length; i++){
        lista += (i + 1) + ". "+ pacientes[i] + "\n";
    }

    // latera o conteúdo da tag outLista
    outLista.textContent = lista;

   
}

// cira referência ao btAdicionar e associa function ao evento click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", Urgencia);

var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);