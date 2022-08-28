/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

let specialPythagoreanTriplet = (targetValue) => {

// return abc    
    let a 
    let b

// cycle through all possible values of a    
    for (a = 1; a < targetValue - 2; a ++ ) {

// cycle through all possible values of b. b can be greater than a        
        for(b = a + 1; b < targetValue - 2; b ++ ) {

// calculate c squared   (a squared + b squared)         
            let cSquared = Math.pow(a, 2) + Math.pow(b, 2)
            let c = Math.sqrt(cSquared)

// if c is an integer and a + b + c equals the target value             
            if(Number.isInteger(c) && (a + b + c) === targetValue ) {
                    product = a * b * c
                    console.log('a is ' + a)
                    console.log('b is ' + b)
                    console.log('c is ' + c)

                    return product

            }
        }
    }

}


console.log('result is ' + specialPythagoreanTriplet(120));

// 24 SHOULD RETURN 480
// 120 SHOULD RETURN 49920, 55080, OR 60000