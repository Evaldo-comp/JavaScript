import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPopanca} from "./ContaPopanca.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 12345678910);

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);


console.log(contaCorrenteRicardo);
