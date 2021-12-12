print("Codigo 1:")
def func():
    print ("Estou aprendendo python")

func()

print("Codigo 2:")

num = [1,2,3,4,5,6,7,8,9,10]

for x in num:
    print(x)
    if x == 3:
        break

print("Codigo 3:")

def sum(x, y):
    print(x + y)

sum(3, 2)

print("Codigo 4:")
num = 0

while num < 15:
    num += 1
    if num == 7:
        continue
    print(num)

print("Codigo 5:")

sum = lambda x, y: x + y

print(sum(3,2))

print("Codigo 6:")

def calculo_imc(peso, altura)
    print(peso / altura ** 2)

calculo_imc(59, 1.75)

print("Codigo 7:")

for i in range(1,101):
    print (i)
