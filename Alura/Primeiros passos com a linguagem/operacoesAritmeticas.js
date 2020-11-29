console.log("Trabalhando com operações Aritméticas");

const idade = 26;
const nome  = "Evaldo";


console.log(2+2);
console.log(10 + 8 * 2);
console.log((10 + 8) * 2); // parênteses modificam a precedência de operadores

// cocatenação

console.log("Ano: " + 2020);

// conversão de tipos

console.log("2" + "2");
// converte de string para int
console.log(parseInt("2") + parseInt("2"));

// obs: operações com textos que não sejam utilizando o +, são convertidas para int automaticamente
console.log("10" / "2");

// Se você tentar realizar uma operação que nãos eja utilizando o +, e esta operação tiver algum texto
//que não seja um número, será retornado um erro

console.log("Evado" / "2");



