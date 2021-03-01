// declaração do vertor global
var erros = [];

// gera número alearório entre(1 e 100)
var sorteado = Math.floor(Math.random() * 100) + 1;

// declaração de constante com número de cahances
const CHANCES = 6;

function apostarNumero(){
    var inAposta = document.getElementById("inAposta");
    var aposta = Number(inAposta.value);

    //valida número
    if(aposta  <= 0 || aposta > 100 || isNaN(aposta) ){
        alert("Informe um número válido");
        inAposta.focus();
        return;
    }


    // Referencia espaços de saída
    var outDica = document.getElementById("outDica");
    var outErros = document.getElementById("outErros");
    var outChances = document.getElementById("outChances");
   

    // Se a aposta do jogador for igual ao número sorteado
    if(aposta == sorteado){
        alert("Parabéns!!!! Você acertou");
        //troca status dos botões
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = "Parabéns!! Número sorteado: "+ sorteado;
    }else{
        // se o número existir no vetor
        if(erros.indexOf(aposta)>=0){
            alert("Você já apostou o número" + aposta + ". tente outro...");
        }else{
            erros.push(aposta);   //adiciona número ao vetor
            var numErros = erros.length;  //obtém o tamanho do vetor
            var numChances = CHANCES - numErros;  // calcula o número de chances
            // exibe o número de erros, conteúdo do vetor e número de chances
            outErros.textContent = numErros + "(" + erros.join(", ") + ")";
            outChances.textContent = numChances;

            if (numChances == 0){
                alert("Suas chances acabaram");
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.textContent = "Game Over!! Número Sorteado: " + sorteado;
            }else{
                // usa operador ternário para mensagem na dica
                var dica = aposta < sorteado ? "maior" : "menor";
                outDica.textContent = "Dica: tente um número "+ dica + " que "+aposta;
            }
        }
    }
    // limpa campo d eentrada e posiciona cursor neste campo
    inAposta.value = "";
    inAposta.focus();
}



var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", apostarNumero);

function jogarNovamente() {
    location.reload(); // recarrega a página
}    

var btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click", jogarNovamente);