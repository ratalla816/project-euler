/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

// checks if the largest product is a palindrome
let isPalindrome = (string) => {
    let reverseString = string.split('').reverse().join('')
    if (string === reverseString) {
        return true
    }
        return false
}

// NEXT - do the math
let largestPalindromeProduct = (numberOfDigits) => {

    let largestProduct = 0

    let i
    let j

    // determines the beginning and ending values by adding the proper number of zeroes to the end
    let initialValueString = '1'
    for (i = 1; i < numberOfDigits; i ++) { // run two times
        initialValueString = initialValueString + '0' // add two zeroes to the end
    }

    let endValueString = initialValueString + '0' // adds another zero making the number 1000
    let initialValue = parseInt(initialValueString)
    let endValue = parseInt(endValueString) - 1 // takes back to 999 

    // console.log('value range is ' + initialValue + ' to ' + endValue)

    // go through all the possible combinations
    for ( i = initialValue; i <= endValue -1; i ++) { // starts at the beginning and iterates to 99 or 999 (depending on the value set below)
        for (j = initialValue + 1; j <= endValue; j ++) { // i is 10, j is 11, then i will be 10 and j will 12, i will be 10 and j is 13, then i will move to 11 and j is 12 then 13 yada yada yada 
            // multiply the values together
            let product = i * j 
            // if the product is a palindrome and it's larger the current product it is added to the largest product
            if (isPalindrome(product.toString()) && product > largestProduct) {
                largestProduct = product
            }
        }

    }

    return largestProduct
}

console.log('result is ' + largestPalindromeProduct(3))
/*
2 returns 9099
3 returns 906609
*/