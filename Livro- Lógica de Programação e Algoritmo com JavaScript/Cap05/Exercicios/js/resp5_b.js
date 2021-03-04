var numeros = [];

function adicionarNumeros() {
    var inNumero = document.getElementById("inNumero");
    var outNumeros = document.getElementById("outNumeros");

    
    
    numero = Number(inNumero.value);
    

    if (numero == "" || isNaN(numero)){
        alert("Insira um valor válido");
        return;
    }

    numeros.push(numero);
    
    document.getElementById("outNumeros").textContent = numeros
    
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNumeros);

function verificaOrdem(){
    //var outMensagem = document.getElementById("outMensagem");
   
    
       if(numeros.sort() != numeros)
        {
            document.getElementById("outMensagem").textContent = "Números não estão na ordem crescente";
            
        }else{
            document.getElementById("outMensagem").textContent = "Números  estão na ordem crescente";
            // contém um erro aqui
        }   
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificaOrdem)