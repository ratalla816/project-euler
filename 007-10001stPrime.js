/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

let nthPrime = (n) => {

// Number of values generated
    let count = 0

// First Prime Value    
    let candidate = 2

// Latest found Prime    
    let latestPrimeNumber = 2

    while(count < n) {

// Assume the value is prime    
        let isPrime = true
        let i
        for(i = 2; i < candidate; i ++) {

            if (candidate % i === 0) {
                isPrime = false
                break
            }
        }

// If value is still prime, set last prime and update count        
        if(isPrime) {
            latestPrimeNumber = candidate
            count = count + 1
        }

// move to the next number        
        if (candidate === 2) {
            candidate = 3
            
        } else {
            candidate = candidate + 2
        }
    }

// end of cycle    
        return latestPrimeNumber
}

console.log('result is ' + nthPrime(10001))

// 6 SHOULD RETURN 13
// 10 SHOULD RETURN 29
// 100 SHOULD RETURN 541
// 1000 SHOULD RETURN 7919
// 10001 SHOULD RETURN 104743