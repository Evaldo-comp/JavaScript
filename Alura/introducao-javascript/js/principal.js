var paciente = document.querySelector("#primeiro-paciente");
var Peso = paciente.querySelector(".info-peso").textContent;
var Altura = paciente.querySelector(".info-altura").textContent;

var imc = Peso / (Altura * Altura);

pesoValido = true;
alturaValida = true;

if(Peso <= 0 || Peso > 1000){
    paciente.querySelector(".info-peso").textContent = "Peso Inválido";
    pesoValido = false;
}

if(Altura <= 0 || Altura >= 3){
    paciente.querySelector(".info-altura").textContent = "Altura Inválida";
    alturaValida = false;

}

if (pesoValido && alturaValida){
    paciente.querySelector(".info-imc").textContent = imc;
}

