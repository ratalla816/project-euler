/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?
*/


let factorial = (number) => {
    if (number === 1) {
        return number

    } else {
        return number * factorial(number - 1)
    }
}

let latticePaths = (gridSize) => {

let n = 2 * gridSize 
let k = gridSize

return factorial(n) / (factorial(k) * factorial (n-k))




}

console.log('result is ' + latticePaths(20));

// 4 SHOULD RETURN 70
// 9 SHOULD RETURN 48620
// 20 SHOULD RETURN 137846528820
