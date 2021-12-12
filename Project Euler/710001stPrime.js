var primes = []

function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

for(var n = 0; primes.length < 10001; n++){
    if(isPrime(n) == true){
        primes.push(n)
    }
}

console.log(primes[primes.length - 1])