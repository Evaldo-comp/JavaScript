var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var tdPeso =paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaValida = true;
    var pesoValido = true;

    if(peso <= 0 || peso > 1000){
    console.log("peso inválido");
    tdImc.textContent = "Peso Inválido";
    pesoValido = false;

    paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.0){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida";
        alturaValida = false;

        paciente.classList.add("paciente-invalido");

    }

    if (pesoValido && alturaValida){
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc.toFixed(2);
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura)
    return imc.toFixed(2);
}
