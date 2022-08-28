/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

let primeSummation = (n) => {
    
    let sum =  0 
    let arrayToSum = [0, 0]
    let i 
    for(i = 2; i < n; i ++) {
        arrayToSum.push(i)
    }

    for(i = 2; i < n; i ++) {


        if (arrayToSum[i] != 0) {
            
            let j 
            for (j = (2 * i); j < n; j += i) {
                    arrayToSum[j] = 0 
            }
        }
    }

    for (i = 0; i < arrayToSum.length; i ++) {
        if (arrayToSum[i] != 0) {
            console.log('added prime ' + arrayToSum[i] + ', updated sum is ' + sum)

        }

        sum = sum + arrayToSum[i]
    }


    return sum

}



console.log('result is ' + primeSummation(17));

// 17 SHOULD RETURN 41
// 2001 SHOULD RETURN 277050
// 140759 SHOULD RETURN 873608362
// 2000000 SHOULD RETURN 142913828922