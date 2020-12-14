class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;


    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    depositar(valor){
        if (this.saldo >= 0){
            this.saldo += valor;
        }
        
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }
}


const cliente1 = new Cliente();
cliente1.nome = "Evaldo";
cliente1.cpf = 11111111111;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22222222222;
cliente2.saldo = 0;

const ContaCorrenteEvaldo = new ContaCorrente();
ContaCorrenteEvaldo.saldo = 0;
ContaCorrenteEvaldo.agencia = 1001;

console.log(ContaCorrenteEvaldo);





//console.log(cliente1, cliente2);
