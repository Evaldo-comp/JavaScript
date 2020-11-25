// declara a função mostrarOla
function mostrarOla(){
    // obtém o coteúdo co campo (com id = nome)
    var nome =document.getElementById("nome").value;
    // exibe o paragráfo resposta: 
    document.getElementById("resposta").textContent = "Olá "+ nome; 
}

// cria uma refrência ao botão("mostrar")
var mostrar = document.getElementById("mostrar");
// registra para o botão "mostrar" um ouvinte par o evento click,
// que ao ser clicado irá chamar a função mostrarOla
mostrar.addEventListener("click", mostrarOla);