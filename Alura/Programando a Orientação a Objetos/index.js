import{Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
const cliente1 = new Cliente();
cliente1.nome = "Evaldo";
cliente1.cpf = 11111111111;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22222222222;
cliente2._saldo = 0;

const ContaCorrenteEvaldo = new ContaCorrente();
contaCorrenteEvaldo._saldo = 0;
contaCorrenteEvaldo.agencia = 1001;

contaCorrenteEvaldo.depositar(100);
contaCorrenteEvaldo.depositar(100);
contaCorrenteEvaldo.depositar(100);

const valorSacado = contaCorrenteEvaldo.sacar(50);

console.log(ContaCorrenteEvaldo);





//console.log(cliente1, cliente2);
