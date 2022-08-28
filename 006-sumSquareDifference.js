/*
The sum of the squares of the first ten natural numbers is,

            1^2 + 2^2 +...+10^2 = 385

The square of the sum of the first ten natural numbers is,

            (1 + 2+...+10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

            3025 - 385 = 2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

let sumSquareDifference = (n) => {

// sum of each n value squared
    let squaredSum = 0

// Sum of each n value    
    let sum = 0
    let i 
    for (i = 1; i <= n; i++) {
// Add number to sum        
        sum = sum + i 

// Add the square of the number to squaredSum        
        squaredSum = squaredSum + Math.pow(i, 2)
    }

    console.log('sum of each number squared is ' + squaredSum)

// Square sum of all numbers    
    let sumSquared = Math.pow(sum, 2)
    console.log('(sum of all numbers) squared is ' + sumSquared)

    return sumSquared - squaredSum
}

console.log('result is ' + sumSquareDifference(100));

// 10 SHOULD RETURN 2540
// 20 SHOULD RETURN 41230
// 100 SHOULD RETURN 25164150