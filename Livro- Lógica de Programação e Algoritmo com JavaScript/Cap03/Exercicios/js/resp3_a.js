function VerificarParOuImpar(){
    
    var inNumero = document.getElementById("inNumero");
    var outParOuImpar = document.getElementById("outParOuImpar");


    var numero = Number(inNumero.value);

    if (isNaN(numero) || numero == ""){
        alert("Por favor, informe um número válido")
        inNumero.focus();
        return
    }else if (numero % 2 == 0){
        outParOuImpar.textContent = "O número inserido é par";
    }else {
        outParOuImpar.textContent = "O número inserido é ímpar";
    }


}

var btVerificar = document.getElementById("btVerifica");
btVerificar.addEventListener("click", VerificarParOuImpar);