console.log("Trabalhando com Condicionais");


// const salvador = ;
// const saoPaulo = 
// const rioDeJaneiro = ;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);

const idadeComprador = 15;
const estaAcompanhada = true;

listaDeDestinos.push(`Curitiba`); // Adiciona elemento na lista

//console.log("Destinos Possíveis");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); // eliminando item da lista 
}else if (estaAcompanhada){
        console.log("Você está acompanhada, pode comprar");
        listaDeDestinos.splice(1,1);
    }
    console.log("Comprador não é maior de idade");

console.log(listaDeDestinos);





