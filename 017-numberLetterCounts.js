/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
The use of "and" when writing out numbers is in compliance with British usage.
*/

// object with string version of numbers in english 
let strings = {
    'units' : [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    'tens' : ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
}

let numberLetterCounts = (limit) => {

    let sum = 0
    let i

// cycles through every number from 1 to maximum
    for(i = 1; i <= limit; i++){

        let currentNumber = i
        let numberString = ''

// calculate how many thousands current value contains, add to number string, then subtract so only hundreds remain
        let thousands = Math.floor(currentNumber / 1000)

        if(thousands > 0){
            numberString = numberString + strings['units'][thousands] + 'thousand'
            currentNumber = currentNumber - (thousands * 1000)
        }

// calculate how many hundreds current value contains, add to number string, and then subtract to have tens only 
        let hundreds = Math.floor(currentNumber / 100)

        if(hundreds > 0){
            numberString = numberString + strings['units'][hundreds] + 'hundred'
            currentNumber = currentNumber - (hundreds * 100)
            if(currentNumber > 0){

// remove 'and' if there's nothing left
                numberString = numberString + 'and'
            }    
        }

// if remainder is less than twenty add the appropriate string 
        if(currentNumber < 20){
            numberString = numberString + strings['units'][currentNumber]
        
        } else {

// if remainder is more than twenty, split into tens and units then add strings 
            let tens = Math.floor(currentNumber / 10)

            numberString = numberString + strings['tens'][tens]
            currentNumber = currentNumber - (tens * 10)
            numberString = numberString + strings['units'][currentNumber]
        }

// calculate length of current number's string representation and add to sum */
        console.log(i + ' : ' + numberString)
        sum = sum + numberString.length
    }

    return sum
}

console.log('Result is ' + numberLetterCounts(1000))

// 5 SHOULD RETURN 19
// 150 SHOULD RETURN 1903
// 1000 SHOULD RETURN 21124