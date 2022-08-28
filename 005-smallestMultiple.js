/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

let smallestMultiple = (largestDivisor) => {

    let solution

    let potentialSolution = largestDivisor
    let unsolved = true

    while(unsolved === true) {

        let currentDivisor
        for(currentDivisor = 1; currentDivisor <= largestDivisor; currentDivisor ++) {
            if(potentialSolution % currentDivisor !== 0) {
                break 
            } else {

                if(currentDivisor === largestDivisor) {
                    solution = potentialSolution
                    unsolved = false 
                }    
            }
        }

        potentialSolution = potentialSolution + 1
    }

    return solution
}

console.log('Result is ' + smallestMultiple(13))

// 5 SHOULD RETURN 60
// 7 SHOULD RETURN 420
// 10 SHOULD RETURN 2560
// 13 SHOULD RETURN 360360