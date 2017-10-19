// var date = new Date(2004, 1, 29)
// var now = new Date()

// // console.log(date.setDate(date.getDate() + 1000))
// // console.log(date.toString())

// var then = new Date()
// console.log(now.getTime() - then.getTime())


// console.log(now.getMinutes())
// console.log(now)
// console.log(now.setFullYear(now.getFullYear() - 1))
// console.log(now.getFullYear())
// console.log(now.toString())

// var start = new Date()

// for(var i = 0; i < 100000; i++){
//     console.log(i)
// }
// var end = new Date()

// console.log((end.getTime() - start.getTime()) / 1000)

// getFullYear() just gives year
// getMonth() just gives month
// getDay(), gives you the day of the week as a number 0-6
//  getDate(), gives you the day of the month
// getHours(), military time
// getMinutes(), 
// getSeconds()
// setFullYear() - sets the year
// .setDate 

// console.log(now.getDate())
// console.log(now.setDate(now.getDate() - 7))
// console.log(now.toString())
// console.log(now.setDate(now.getDate() - 7))


// console.log(now.setFullYear(now.getFullYear() - 1))
// console.log(now.toString())
// console.log(now)

// var timestamp = Date.parse()

// Create a Date object for the date:
//  March 14, 2016 3:12am.

//  var date = new Date(2016, 2, 14, 3, 12)

//  console.log(date.toString())


// Write a function getWeekDay that takes a date object as argument and 
// returns a string with the weekday: 'Mon' 'Tue' 'Wed' 'Thu' 'Fri' 'Sat' 'Sun'.





// console.log(date.getDay())

// var date = new Date(2012, 0, 3)
// var days = ['sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat',]
// function getWeekDay(arg){
//    return (days[date.getDay()])
// }




// console.log(getWeekDay(date))

// Create a function getDateBefore that takes as arguments

// 1. date - a date object.

// 2.days - a number.

// It return the day of month days days before the date.
// The function should not modify the date given as argument.

// For example, if today is 20th, then.


 
// var now = new Date()





// function getDateBefore(date, days){
//     var newDate = new Date(date)
//     newDate.setFullYear()
//    console.log(date.toString())
// }

// getDateBefore(date, 2)

// var date = new Date(2015, 2, 2)
// function getDateBefore(date, days){
//     var month = date.getMonth()
//     var daysOf = date.getDate()
//     var dayBefore = new Date(date.getFullYear(), month, daysOf - days)
//    return dayBefore.toString()

// }

// console.log(getDateBefore(date, 1))


// Write a function getLastDayOfMonth 
// that takes two numbers as arguments: a year 
// (4 digits) and a month (0 to 11). The function
// returns the last day of that month.

// For example, 



// function getLastDayOfMonth(year, month){
//     var lastDay = new Date(year, month + 1, 0)
//     console.log(lastDay.toString())
    
// }

// getLastDayOfMonth(2012, 1) // 29


// Write a JavaScript function that takes a date object as argument
//  and returns the name of the month.


// var date = new Date(2015, 2, 2)
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'December']
// function nameOfMonth(date){
//      return months[date.getMonth()]
// }

// console.log(nameOfMonth(date))

// console.log(nameOfMonth(new Date(2009, 10, 11)));
// // "October" 
// console.log(nameOfMonth(new Date(2014, 11, 13)));
// // "November"



// Write a function getSecondsToday() 
// that returns the number of seconds from the beginning of today.

// For instance, if now 10:00 am:

// function getSecondsToday(){

//     var now = new Date()
//     var beginning = new Date()
//     beginning.setHours(0, 0, 0, 0)
//     // beginning.setMinutes(0)
//     console.log((now.getTime() - beginning.getTime()) / 1000 )
// }


//  getSecondsToday() // 36000

// function getSecondsToTomorrow(){
//     var now = new Date()
//     var tomorrow = new Date()
//     tomorrow.setHours(24, 0, 0, 0)
//     console.log((tomorrow.getTime() - now.getTime()) / 1000 )
// }




// getSecondsToTomorrow() 
// 3600























// var start = new Date()

// for(var i = 0; i < 100000; i++){
//     console.log(i)
// }
// var end = new Date()

// console.log((end.getTime() - start.getTime()) / 1000)


// Create a function getSecondsToTomorrow() 
// that returns the number of seconds till tomorrow.

// For instance, if now is 23:00, then:








