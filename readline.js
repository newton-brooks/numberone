var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


//   rl.on('line', function(input) {
//     // attempting to convert the input to a number
//     var num = Number(input)
//     // checking if input was not a number
//     if (isNaN(num)) {
//       console.log('that is not a valid number')
//     } else {
//       console.log('your input was the number: ' + num)
//     }
//   })

// function parseInput(input){
//     console.log('your input was: ' + input)
// }

// rl.on('line', function(input){
//   var maybeNumber = Number(input)
//   if(isNaN(input)){
//     console.log('thats not a number')
//   } else {
//     console.log('your input was: ' + input )
//   }
//   console.log('input a number' )
// })

// console.log('input a number1')



// Write a program that reads the user input one line at a time. 
// Every time the user inputs a new line, the program will show all 
// the lines that have been input before.
// Hint: Use a variable to keep track of the input.

// function readInput(input){
//   var hold = ''
//   hold += input
//   console.log(hold)
// }

// var hold = ''
// rl.on('line', function(input){
//   hold = hold + input + ' '
//   console.log(hold)
// })

// console.log('input something')

//  // This will log the input without using console log
  // var str = ""

  // rl.on('line', function(input) {
  //   str += input
  // })
  // console.log('enter something')

// Write a program that reads the user input one line at a time. 
// After each input the program will log the sum of all numbers that 
// the user had input. If the input is not a number the program will ignore 
// it.

// var sum = 0
// rl.on('line', function(input){
//   number = Number(input)
//   if(isNaN(number)){
//     console.log('Please type a number')
//   } else {
//     sum += number
//   }
//   console.log('Your sum is: ' + sum)
//   console.log('Insert a number.')
// })


// console.log('Insert a number.')



// Write a program that the user input one line at a time.
//  It would expect the user input to be a sequence of numbers and space.
//   For example: "3 4 9".  The program will add all the numbers and log 
//   the result. The program will ignore any non-numerical input, but would 
//   still add up the rest.

// For example, if the user enters: "3 a 4" the program should log `7`.

// rl.on('line', function(input){
//   sum = 0 
//   inputSplit = input.split(' ')
//   for(var i = 0; i < inputSplit.length; i++){
//     if(Number(inputSplit[i])){
//       sum += Number(inputSplit[i])
//     } 
//   }
//   console.log(sum)
// })


// console.log('Enter a set of numbers seperated by spaces!')




// var options = 'list, show n, reserve n'



// var rooms = [
//     {
//         price: 200,
//         location: '11 Broadway, NY',
//         maxOccupants: 3,
//         amenities: ['washer/dryer', 'wifi', 'cable']
//     },
//     {
//         price: 100,
//         location: '11 Delancey, NY',
//         maxOccupants: 1,
//         amenities: []
//     },
//     {
//         price: 2000,
//         location: '1 Park Pl, NY',
//         maxOccupants: 2,
//         amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
//     },
//     {
//         price: 90000,
//         location: '1 Broad St, NY',
//         maxOccupants: 33,
//         amenities: ['disco ball']
//     },
//     {
//         price: 2000,
//         location: '2312 144th St, NY',
//         maxOccupants: 4,
//         amenities: []
//     },
//     {
//         price: 200000,
//         location: '47-10 Austell Pl, NY',
//         maxOccupants: 200,
//         amenities: ['drill', 'sometimes wifi', 'luna']
//     },
//     {
//         price: 0,
//         location: 'Times Square, NY',
//         maxOccupants: 3,
//         amenities: ['sewage water', 'hagglers', 'naked cowboy']
//     },
//     {
//         price: 200000,
//         location: '1600 Pennsylvania Ave, DC',
//         maxOccupants: 500,
//         amenities: ['nixon\'s bowling', 'orange hairpiece', 'oval office', 'pair of small hands']
//     },
//     {
//         price: 2000000,
//         location: 'Falchi Bldg, NY',
//         maxOccupants: 5000,
//         amenities: ['food truck', 'drill']
//     },
//     {
//         price: 250,
//         location: 'Washington Pl, NY',
//         maxOccupants: 100,
//         amenities: ['fountain', 'dosa cart']
//     }    
// ];

// // make the string exactly as long as len
// function padTo(str, len) {
//     if (str.length > len) {
//         return str.slice(0, len - 3) + '...'
//     } else {
//         while (str.length < len) {
//             str += ' '
//         }
//         return str;
//     }
// }

// // make the string exactly as long as len
// function padLeft(str, len) {
//     var money = str
//     if (money.length > len) {
//         return money.slice(0, len - 3) + '...'
//     } else {
//         while (money.length < len) {
//             money = ' ' + money
//         }
//         return money;
//     }
// }

// function toMoney(num) {
//     return '$' + num.toString()
// }

// function whatsAvailable() {
//     console.log(
//         padLeft('ID', 2),
//         '...',
//         padTo('Address', 30), 
//         ' ', 
//         padLeft('Price', 8)
//     );
//     for (var i = 0; i < rooms.length; i++) {
//         if (rooms[i].reserved) {
//             continue;
//         }
//         var counter = i + 1;
//         console.log(
//             padLeft(counter.toString(), 2),
//             '...',
//             padTo(rooms[i].location, 30), 
//             ' ', 
//             padLeft(toMoney(rooms[i].price), 8)
//         );
//     }
// }

// function bulletPoints(list) {
//     return '\n - ' + list.join('\n - ')
// }

// function showDetails(n) {
//     var room = rooms[n]
//     console.log('Details of room #' + (n + 1))
//     console.log('----------------------\n')
//     if (room.reserved) {
//         console.log('[RESERVED]')
//     }
//     console.log('Location:', room.location)
//     console.log('Price:', toMoney(room.price))
//     console.log('Max. Occupancy:', room.maxOccupants)
//     console.log('Amenities:', bulletPoints(room.amenities))
// }

// function reserve(n) {
//     if (rooms[n].reserved) {
//         console.log('Sorry, it\'s already reserved.')
//         return
//     } 
//     rooms[n].reserved = true
//     console.log('Thank you for reserving')
// }

// function Occupancy(roomnumber, value){
//   rooms[roomnumber].maxOccupants = value
//   console.log('Occupants set.')
// } 

// function search(value){
//   for(var i = 0; i < rooms.length; i++){
//     if(rooms[i].amenities.includes(value) && rooms[i].reserved !== true){
//       showDetails([i])
//     } 
//   }
// }




// rl.on('line', function(input) {
//     var inputArr = input.split(' ')
//     if (inputArr[0] === 'list') {
//         whatsAvailable();        
//     } else if (inputArr[0] === 'show') {
//         showDetails(inputArr[1] - 1)
//     } else if (inputArr[0] === 'reserve') {
//         reserve(inputArr[1] - 1)
//     } else if(inputArr[0] === 'change'){
//         Occupancy(inputArr[1] - 1, inputArr[2])
//     } else if (inputArr[0] === 'search'){
//         search(inputArr.slice(1).join(' '))
//     } else {
//         console.log('Unknown command: ' + input)
//     }

//     console.log('\n\nPlease choose one of [' + options + '] $')
// })

// console.log('Please chose one of [' + options + '] $')






// Write a counter program that reads the user input one line at a time.
//  The count would be initially zero. The app will start by displaying the
//   count and prompting the user for input. valid input strings are: 'inc',
//    'dec', 'res'. The user input may be in uppercase, lowercase, or any 
//    combination of the two. On input of 'inc' and 'dec', the counter will
//     be incremented / decremented by 1. On input of 'res'  the counter will
//      be reset. Following each of these, the new count will be displayed, 
//      followed by a relevant message (e.g. 'the counter has been incremented')
//       followed by a prompt to the user for more input.



// var sum = 0
// rl.on('line', function(input){
//   var UpperInput = input.toUpperCase()
// if(UpperInput.includes('INC')){
//     sum++
//   console.log('The sum has been incremented ' + sum)
// }  if(UpperInput.includes('DEC')){
//     sum--
//   console.log('The sum has been decremented ' + sum)
// } if (UpperInput.includes('RES')){
//     sum = 0
//   console.log('The sum has been reset to ' + sum)
// } else {
//   console.log("Please enter 'res', 'inc', or 'dec'")
// }

// })

// console.log("Please enter 'res', 'inc', or 'dec'")





// rl.on('line', function(input){
// var SplitInput = input.split(' ')
// if(SplitInput[1] === '' || SplitInput[2] === '' ){
//   console.log('Please enter two numbers seperated by spaces')
// }
// var Operations = '/+*-'
// var Op = SplitInput[0]
// var firstNumber = Number(SplitInput[1])
// var secondNumber = Number(SplitInput[2])

// if(!Operations.includes(Op)){
//   console.log('Please enter a valid operation')
// } else if(isNaN(firstNumber) || isNaN(secondNumber)){
//   console.log('Please enter two numbers.')
// }  else if (Op === Operations[1]){
//   console.log(firstNumber + secondNumber)
//   } else if(Op === Operations[3]){
//   console.log( firstNumber - secondNumber)
//   } else if(Op === Operations[2]){
//   console.log(firstNumber * secondNumber)
//   } else if (Op === Operations[0]){
//   console.log( firstNumber / secondNumber ) 
//   } 

// })






// Write a program that reads the user input one line at a time. It would expect the user input to start
//  with one of four mathematical symbols: + - * / followed by numbers, separated by spaces. For example: 
//  + 2 4 2 . The program will perform the desired mathematical operation (addition, subtraction, multiplication
//   division) on all the numbers, from left to right, and log the result . 
//   The program will display an explanatory message if:


// rl.on('line', function(input){
//   var Operations = '*/+-'
//   if(Operations.includes(input[0])){
//     var InputArr = input.split(' ')
//     var sum = 0
//     for(var i = 1; i < InputArr; i++){
//       if(input[0] === '*' && Number(InputArr[i])){
//         sum *= InputArr[i]
//       } else if(InputArr[0] === '-'){
//         sum -= Number(InputArr[i])
//       } else if(InputArr[0] === '+'){
//         sum += Number(InputArr[i])
//       } else if(InputArr[0] === '/')
//         sum /= Number(Input[i])
//     }
//   }
//   console.log(sum)
// })


// function add(arr){
//   var sum = 0
//   for(var i = 1; i < arr.length; i++){
//       sum += Number(arr[i])
//   }
//   return sum
// }





// function subtract(arr){
//   var sum = arr[1]
//   for(var i = arr[1]; i < arr.length; i++){
//       sum -= Number(arr[i])
//   }
//   return sum
// }




// function multiply(arr){
//   var product = 1
//   for(var i = 1; i < arr.length; i++){
//     product *= Number(arr[i])
//   }
//   return product
// }

  


// function divide(arr){
//   var sum = 1
//   for(var i = 1; i < arr.length; i++){
//     sum /= Number(arr[i]) / 1
//   }
//   return sum   
// }

// // console.log(divide([20,10,2]))


// rl.on('line', function(input){
//   var inputArr = input.split(' ')
//       if(inputArr[0] === '*'){
//         console.log(multiply(inputArr))
//       } else if(inputArr[0] === '-'){
//         console.log(subtract(inputArr))
//       } else if(inputArr[0] === '*'){
//         console.log(multiply(inputArr))
//       } else if(inputArr[0] === '+')
//         console.log(add(inputArr))
// })


