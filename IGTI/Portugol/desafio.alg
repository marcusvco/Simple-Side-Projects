Algoritmo "Desafio"


Var

   num, i, primo: Inteiro

Inicio

      Escreva("Digite um número: ")
      Leia(num)
      
      i <- num - 1
      
      Enquanto i > 1 Faca
               Se num % i = 0 Entao
                  primo <- primo + 1
               Fimse
      i <- i - 1
      Fimenquanto

      Se primo = 0 Entao
         Escreva("Número", num, " é primo")
      Senao
           Escreva("Número", num, " não é primo")
      Fimse

Fimalgoritmo