/*
The prime factors of 13195 are 5, 7, 13 and 29. (prime #'s that can be multiplied together to get the original #)
What is the largest prime factor of the number 600851475143 ?
*/

let largestPrimeFactor = (number) => {

    let latestDivisor
    let quotient = number

    while(quotient % 2 === 0) {
        latestDivisor = 2
        quotient = quotient / 2 
        // divide by two as much as possible
    }
    
    // now divide by odd numbers
    let divisor = 3
    
    while(quotient > 1){ // keep dividing while greater than one
        while(quotient % divisor === 0) {
            quotient = quotient / divisor
            latestDivisor = divisor
        }

        divisor = divisor + 2 // moving the divisor along **divide by 3 then 5 then 7 and so on**
    }


    return latestDivisor // function will stop when it gets to one

}

console.log('result is ' + largestPrimeFactor(600851475143))
/*
largestPrimeFactor(2) should return 2
largestPrimeFactor(3) should return 3
largestPrimeFactor(5) should return 5
largestPrimeFactor(7) should return 7
largestPrimeFactor(8) should return 2
largestPrimeFactor(13195) should return 29
largestPrimeFactor(600851475143) should return 6857
*/