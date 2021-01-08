function VerificaTriangulo(){
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outSimOuNao = document.getElementById("outSimOuNao");
    var outTipo = document.getElementById("outTipo");


    ladoA = Number(inLadoA.value);
    ladoB = Number(inLadoB.value);
    ladoC = Number(inLadoC.value);

    if(ladoA == 0 || ladoB == 0|| ladoC== 0 || isNaN(ladoA)||isNaN(ladoB)||isNaN(ladoc)){
        alert("Informe lados válidos");
        inLadoA.focus();
        return;
    }

    if(ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoB + ladoA){
        outSimOuNao.textContent = "Lados não podm formar um Triângulo!";
    }else{
        outSimOuNao.textContent = "Lados podem formar um Triângulo";
        if(ladoA == ladoB && ladoA == ladoC){
            outTipo.textContent = "Tipo: Equilátero"
        }else if(ladoA == ladoB|| ladoA == ladoC || ladoB == ladoC){
            outTipo.textContent = "Tipo: Isóceles";
        }else{
            outTipo.textContent = "Tipo: Escaleno";
        }
    }

}

var btVerificaLados = document.getElementById("btVerificaLados");
btVerificaLados.addEventListener("click", VerificaTriangulo)

