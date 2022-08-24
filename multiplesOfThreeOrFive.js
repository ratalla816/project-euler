/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/


// Option #1

var index = 0;
var maxValue = 1000;
var sumMultiplesOfThree = 0;
var sumMultiplesOfFive = 0;

for (index = 0; index < maxValue; index++) {

    if (index % 3 == 0) // if the index is a multiple of 3 add to sumMultiplesOfThree
    {
        sumMultiplesOfThree = sumMultiplesOfThree + index;
    }

    else if (index % 5 == 0) // if the index is a multiple of 5 add to sumMultiplesOfFive
    { 
        sumMultiplesOfFive = sumMultiplesOfFive + index;
    }
}

console.log("Sum of all the multiples of 3 or 5 below 1000 is " + Number(sumMultiplesOfThree + sumMultiplesOfFive));



// Option #2 - DYNAMIC

function sumMultiplesOfThreeAndFive(maxValue) {

var index;
var sumMultiplesOfThree = 0;
var sumMultiplesOfFive = 0;

for (index = 0; index < maxValue; index++) {

    if (index % 3 == 0) // if the index is a multiple of 3 add to sumMultiplesOfThree
    {
        sumMultiplesOfThree = sumMultiplesOfThree + index;
    }

    else if (index % 5 == 0) // if the index is a multiple of 5 add to sumMultiplesOfFive
    { 
        sumMultiplesOfFive = sumMultiplesOfFive + index;
    }
    }
        return Number(sumMultiplesOfThree + sumMultiplesOfFive); 
}

var maxValueUserInput = 1000; // You can change this number to whatever you want.
console.log("Sum of all the multiples of 3 or 5 below " +maxValueUserInput +" is " + sumMultiplesOfThreeAndFive(maxValueUserInput));
