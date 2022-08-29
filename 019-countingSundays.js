/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

let countingSundays = (firstYear, lastYear) => {

    let sundayCount = 0
    let currentYear
    let currentMonth

// number of days for each month 
    let daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// starting day 0 is Sunday, 6 is Saturday - requires lookup to work from given year
    
    let startingDayOfMonth = new Date(firstYear, 0, 1).getDay()

    for(currentYear = firstYear; currentYear <= lastYear; currentYear++){

// if the current year meets the conditions to be a leap year, then edit daysInMonth array so that feb has 29 days
// the current year is divisble by 4 (divides by 4 with no remainder) and isn't a century (divides by 100 without a remainder)
// current year divides by 400 without a remainder
        
        if((currentYear % 4 === 0 && currentYear % 100 != 0 )|| currentYear % 400 == 0){
            daysInMonth[2] = 29
        }else{
            daysInMonth[2] = 28
        }

// go through each month 
        for(currentMonth = 1; currentMonth <= 12; currentMonth++){

// if the starting day of the month is a Sunday then add 1 to the sunday count
            if(startingDayOfMonth === 0){
                sundayCount = sundayCount + 1
            }

// calculate the starting day for the next month
            console.log('Starting day of ' + currentMonth + ' ' + currentYear + ' is ' + startingDayOfMonth)
            startingDayOfMonth = (startingDayOfMonth + daysInMonth[currentMonth] % 7) % 7
        }
    }
    
    return sundayCount
}

console.log('Result is ' + countingSundays(1901, 2000))