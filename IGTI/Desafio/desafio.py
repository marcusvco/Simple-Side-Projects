class Funcionario():
    def __init__(self, nome, salario):
        self.nome = nome
        self.salario = salario

    def calculoINSS(self):
        if(self.salario <= 1100):
            resultado = self.salario * 0.075
        elif(self.salario <= 2203.48):
            resultado = 82.5 + ((self.salario - 1100.01) * 0.09)
        elif(self.salario <= 3305.22):
            resultado = 82.5 + 99.31 + ((self.salario - 2203.49) * 0.12)
        elif(self.salario <= 6433.57):
            resultado = 82.5 + 99.31 + 132.21 + ((self.salario - 3305.23) * 0.14)
        else:
            resultado = 751.99

        return resultado

    def calculoIRRF(self):
        menosINSS = self.salario - self.calculoINSS()

        if(menosINSS <= 1903.98):
            resultado = menosINSS * 0.00
        elif(menosINSS <= 2826.65):
            resultado = menosINSS * 0.075 - 142.8
        elif(menosINSS <= 3751.05):
            resultado = menosINSS * 0.15 - 354.8
        elif(menosINSS <= 4664.68):
            resultado = menosINSS * 0.225 - 636.13
        else:
            resultado = menosINSS * 0.275 - 869.36

        return resultado

    def salarioLiquido(self):
        return self.salario - self.calculoINSS() - self.calculoIRRF()
        

    def imprimir(self):
        print("Nome: " + self.nome + ", Salario: " + str(self.salario) + ", Desconto INSS: " + str("{:.2f}".format(self.calculoINSS())) + ", Desconto IRRF: " + str("{:.2f}".format(self.calculoIRRF())) + ", Salario Liquido: " + str("{:.2f}".format(self.salarioLiquido())))

funcionarios = []

def menu():
    
    print("1 - Cadastrar funcionário, 2 - Imprimir contracheque, 3 - Sair")
    num = int(input("Digite um numero: "))
    if(num == 1):
        name = input("Digite o nome: ")
        salary = float(input("Digite um salario: "))
        funcionarios.append(Funcionario(name, salary))
        menu()
    elif(num == 2):
        indice = int(input("Digite o indice: "))
        funcionarios[indice].imprimir()
        menu()
    elif(num == 3):
        print("Saindo...")
    else:
        menu()

menu()