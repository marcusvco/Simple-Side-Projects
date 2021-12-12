var n = 0, sumOfSquares = 0, sumOfHundred = 0, result = 0

for (var i = 1; i <= 100; i++) {
    sumOfSquares += (Math.pow(i, 2))
    sumOfHundred += i
}

result = Math.pow(sumOfHundred, 2) - sumOfSquares 

console.log(result)