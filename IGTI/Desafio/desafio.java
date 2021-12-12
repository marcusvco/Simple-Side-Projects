import java.util.*;

class Funcionario{
    String nome;
    double salario;

    Funcionario(String nome, double salario){
        this.nome = nome;
        this.salario = salario;
    }

    public double calculoINSS(){
        double resultado;

        if(salario <= 1100){
            resultado = salario * 0.075;
        }else if(salario <= 2203.48){
            resultado = 82.5 + ((salario - 1100.01) * 0.09);
        }else if(salario <= 3305.22){
            resultado = 82.5 + 99.31 + ((salario - 2203.49) * 0.12);
        }else if(salario <= 6433.57){
            resultado = 82.5 + 99.31 + 132.21 + ((salario - 3305.23) * 0.14);
        }else{
            resultado = 751.99;
        }

        return resultado;
    }

    public double calculoIRRF(){
        double resultado = 0, menosINSS = salario - calculoINSS();

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

    public double salarioLiquido(){
        return salario - calculoINSS() - calculoIRRF();
    }

    public void imprimir(){
        System.out.printf("Nome: %s, Salario Bruto: %.2f, Desconto INSS: %.2f, Desconto IRRF: %.2f, Salario Liquido: %.2f\n", nome, salario, calculoINSS(), calculoIRRF(), salarioLiquido());
    }
}

public class desafio {
    public static void main (String[] args){
        Scanner scan = new Scanner(System.in);
        Funcionario[] listaFuncionarios = new Funcionario[100];
        String nome = "";
        float salario = 0;
        int n = 0, i = 0, indice = 0;

        System.out.printf("1 - Cadastrar funcionário, 2 - Imprimir contracheque, 3 - Sair\nDigite um numero: ");
        do{
            n = Integer.parseInt(scan.nextLine());
            switch(n){
                case 1:
                    System.out.print("Digite o nome: ");
                    nome = scan.nextLine();
                    System.out.print("Digite o salario: ");
                    salario = Float.parseFloat(scan.nextLine());
                    listaFuncionarios[i] = new Funcionario(nome, salario);
                    System.out.printf("1 - Cadastrar funcionário, 2 - Imprimir contracheque, 3 - Sair\nDigite um numero: ");
                    i++;
                    break;
                case 2:
                    System.out.print("Digite o indice: ");
                    indice = Integer.parseInt(scan.nextLine());
                    listaFuncionarios[indice].imprimir();
                    System.out.printf("1 - Cadastrar funcionário, 2 - Imprimir contracheque, 3 - Sair\nDigite um numero: ");
                    break;
                case 3:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.printf("1 - Cadastrar funcionário, 2 - Imprimir contracheque, 3 - Sair\nDigite um numero: ");
            }
        }while(n != 3);

        scan.close();
    }
}