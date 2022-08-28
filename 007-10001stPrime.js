/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

let nthPrime = (n) => {


    let count = 0
    let candidate = 2
    let latestPrimeNumber = 2

    while(count < n) {

        let isPrime = true
        let i
        for(i = 2; i < candidate; i ++) {

            if (candidate % i === 0) {
                isPrime = false
                break
            }
        }

        if(isPrime) {
            latestPrimeNumber = candidate
            count = count + 1
        }

        if (candidate === 2) {
            candidate = 3
            
        } else {
            candidate = candidate + 2
        }
    }

        return latestPrimeNumber
}

console.log('result is ' + nthPrime(10001))





// 6 SHOULD RETURN 13
// 10 SHOULD RETURN 29
// 100 SHOULD RETURN 541
// 1000 SHOULD RETURN 7919
// 10001 SHOULD RETURN 104743