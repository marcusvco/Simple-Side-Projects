const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Funcionario{
    constructor(nome, salario){
        this.nome = nome
        this.salario = salario
    }

    get calculoINSS(){
        return this.inss();
    }

    get calculoIRRF(){
        return this.irrf();
    }

    get salarioLiquido(){
        return this.salLiquido();
    }

    inss(){
        var resultado;

        if(this.salario <= 1100){
            resultado = this.salario * 0.075;
        }else if(this.salario <= 2203.48){
            resultado = 82.5 + ((this.salario - 1100.01) * 0.09);
        }else if(this.salario <= 3305.22){
            resultado = 82.5 + 99.31 + ((this.salario - 2203.49) * 0.12);
        }else if(this.salario <= 6433.57){
            resultado = 82.5 + 99.31 + 132.21 + ((this.salario - 3305.23) * 0.14);
        }else{
            resultado = 751.99;
        }

        return resultado;
    }

    irrf(){
        var resultado, menosINSS = this.salario - this.calculoINSS;

        if(menosINSS <= 1903.98){
            resultado = menosINSS * 0.00;
        }else if(menosINSS <= 2826.65){
            resultado = menosINSS * 0.075 - 142.8;
        }else if(menosINSS <= 3751.05){
            resultado = menosINSS * 0.15 - 354.8;
        }else if(menosINSS <= 4664.68){
            resultado = menosINSS * 0.225 - 636.13;
        }else{
            resultado = menosINSS * 0.275 - 869.36;
        }

        return resultado;
    }

    salLiquido(){
        return this.salario - this.calculoINSS - this.calculoIRRF;
    }
    
    imprimir(){
        console.log(`Nome: ${this.nome}, Salario: ${this.salario.toFixed(2)}, Desconto INSS: ${this.calculoINSS.toFixed(2)}, Desconto IRRF: ${this.calculoIRRF.toFixed(2)}, Salario Liquido: ${this.salarioLiquido.toFixed(2)}`);
    }
}

var funcionarios = [], i = 0;
menu();

function menu(){
    console.log("1 - Cadastrar funcionário, 2 - Imprimir contracheque, 3 - Sair");

    rl.question("Digite um numero: ", function(num){
        switch(num){
            case '1':
                rl.question("Digite o nome: ", function(name) {
                    rl.question("Digite o salario: ", function(salary) {
                        funcionarios[i] = new Funcionario(name, parseFloat(salary));
                        i++;
                        menu();
                    });
                });
                break;
            case '2':
                rl.question("Digite o indice: ", function(indice){
                    funcionarios[indice].imprimir();
                    menu();
                });
                break;
            case '3':
                console.log("Saindo...");
                rl.close();
                break;
            default:
                menu();
        }
    });
}