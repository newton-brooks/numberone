// var dictionary = []

// function PushWord(word, definition){
//     dictionary.push([word, definition])
//  return dictionary.sort()
// }


// function UpdateDefinition(word, definition){
//     for(var i = 0; i < dictionary.length; i++){
//         if(dictionary[i][i] === word){
//           dictionary[i][i + 1] = definition
//           console.log('You have updated the definition of ' + dictionary[i][i])
//           console.log(dictionary[i][i] + ': ' + definition)
//         }
//     }
//     return dictionary
// }

// function deleteWord(word){
//     for(var i = 0; i < dictionary.length; i++){
//         if(dictionary[i][i] === word){
//             console.log('The word ' + dictionary[i][i] + ' has been deleted from your dictionary.')
//             delete dictionary[i]
//         }
//     }
//     return dictionary
// }

// function getDefinition(word){
//     for(var i = 0; i < dictionary.length; i++){
//         if(dictionary[i][i] === word){
//             return dictionary[i][i] + ' : ' +  dictionary[i][i + 1]
//         }
//     }
// }


// PushWord('walk', 'move legs')
// PushWord('xavier', 'some jamaican')
// PushWord('code', 'to be a software developer')




// // console.log(UpdateDefinition('code', 'to program'))
// // console.log(deleteWord('code'))
// // console.log(getDefinition('code'))
// console.log(dictionary)


// //  blue bear
// //  blueargebeRBA

// var arr = [2,3,4,4,4,5,5]

// function checkValue(arr){
//     var element = false
//     for(var i = 0; i < arr.length; i++){
//         if(arr.includes(arr[i])){
//             arr.splice(i,1)
//             continue
//         } else if(arr.includes(arr[i])){
//             arr.splice(i,1)
//         } 
        
    
//     if(arr.includes(arr[i])){
//             element = arr[i]
//             arr.splice(i,1)
//         }
//     }
    
//     return element
// }
    

// console.log(checkValue(arr))


// arr = [2,3,4,4,4,5,5]


// function checkOddValue(arr){
//     var emptyArr = []
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i]){
//             emptyArr.push(arr[i])
//             arr.splice(i,1)
//         }
//     }
// }


// function checkOddValue(arr){
//     var emptyArr = []
//     for(var i = 0; i < arr.length; i++){
//         emptyArr =+ arr[i]
    
//     }
// }





// function EvenIndexCap(string){
//     var newString = ''
//     var stringArr = string.split(' ')
//     for(var i = 0; i < stringArr.length; i++){
//         for(var j = 0; j < stringArr[i].length; j++){
//             if(j % 2 === 0){
//                newString += stringArr[i][j].toUpperCase()
//             } else {
//                 newString += stringArr[i][j]
//             }
//         } 
//         newString += ' '
//     }
//     return newString
// }


// console.log(EvenIndexCap('fly kite'))

// function EvenIndexCap(str){
//     var newStr = ''
//     var strArr = str.split('')
//     var index = strArr.indexOf('')
//     if(index !== -1){
//         newStr += strArr[index + 1].toUpperCase()
//     } else {
//         newStr += strArr[index]
//     }
//   console.log(newStr)
// }

// console.log(EvenIndexCap('fly kite'))


// function outlier(arr){
//     var evenArr = []
//     var oddArr = []
//     for(var i = 0; i < arr.length; i++){
//             if(arr[i] % 2 === 0){
//                 evenArr.push(arr[i]) 
//         } else if(arr[i] % 2 === 1){
//             oddArr.push(arr[i])
//         }
//     }
//     if(evenArr.length === 1){
//         return evenArr
//     } else if(oddArr.length === 1){
//         return oddArr
//     } else {
//         return 'there are no outliers'
//     }
// }

// console.log(outlier([2,4,6,8,9,13]))


// function round(num){
//     return Math.floor(num)
// }

// console.log(round(2.5431214))

// Create a function repeat that takes a string str and a number times 
// as arguments, and returns an array of length times where each element is string str

// function repeat(str, num){
// var arr = []
//     for(var i = 1; i <= num; i++){
//         arr.push(str)
//     }
//     return arr
// }

// console.log(repeat('hello', 3))



// function Tellme(arr){
//     var NorthSouth = []
//     var EastWest = []
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] === 'north' || arr[i] === 'south'){
//             NorthSouth.push(arr[i])
//         } else if(arr[i] === 'east' || arr[i] === 'west'){
//             EastWest.push(arr[i])
//         }
//     }
   
// }

// Tellme(['west','west', 'north', 'east', 'south'])




// function palidrome(num){
//     var counter = 0
//         while(num !== reverse(num)){
//           num += reverse(num)
//         counter++
//         }
//         return counter + ':' + num
// }

// function reverse(num){
//     var string = ''
//    var numStringArr = num.toString().split('')
//     for(var i = numStringArr.length - 1; i >= 0; i--){
//         string += numStringArr[i]
//         }
//         return Number(string)
// }

// console.log(palidrome(195))


// function Weight(str){
//     var sumArr = []
//     var numberSplit = str.split(' ')
//     for(var i = 0; i < numberSplit.length ; i++){
//         var sum = 0
//        for(var j = 0; j < numberSplit[i].length; j++){
//          sum += Number(numberSplit[i][j])
//        }
//         sumArr.push(sum)
//     }
    
    
// }







// console.log(Weight('100 56 65 650'))



// function XO(str){
//     count= 0
//     stringLower = str.toLowerCase()
//     stringArr = stringLower.split('')
//     for(var i = 0; i < stringArr.length; i++){
//         if(stringArr[i] === 'x'){
//             count++
//         } else if(stringArr[i] === 'o'){
//             count--
//         }
//     }
//     return count === 0

// }


// console.log(XO('Xoxo'))



// function calculateYears(principal, interest, taxRate, desired) {
//     var years = 0
//     while(principal < desired){
//         years++
//         taxes = principal * interest * taxRate
//         Gains = principal * interest
//        principal = principal + Gains - taxes
   
//     }
//     return years
// }

// console.log(calculateYears(1000,.001,.80,10e32))


// function isTriangle(a,b,c) {
//     if(a > 0 || b > 0 || c > 0){
//     return true
//     }
//     return false;
//   }


//   console.log(isTriangle(7.23,2,3))



// function round(num){
//    return Number(num.toFixed(0))
// }

// round(10)



// function isTriangle(a,b,c) {
//     return a >= b && a >= c && a < b + c ||
//         b >= a && b >= c && b < a + c ||
//         c >= a && c >= b && c < a + b;
// }


// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }


// console.log(isTriangle(-1,-1,-1))


// function digPow(n, p){
// var sum = 0
//     n.toString().split('').forEach(function(elem){
//         sum += Math.pow(Number(elem), p++)
//     })
//     return sum
//   }

// console.log(digPow(12,2))




// function digPow(n, p){
//    var summy =  n.toString().split('').reduce(
//         (sum, digit) => result = sum + Math.pow(Number(digit), p++)
//         ,0)

//     if((summy / n) % 1 === 0){
//         return summy / n
//     } else {
//         return -1
//     }
// }


// console.log(digPow(92,1))


// Create a function named divisors/Divisors that takes an integer and returns an
//  array with all of the integer's divisors(except for 1 and the number itself). 
//  If the number is prime return the string '(integer) is prime' (null in C#)
//   (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// function divisors(num){
//     var array = []
//     for(var i = 2; i < num; i++) {
//      if(isPrime(i) && num % i === 0){
//          array.push(i + ' is prime')
//      }else if(num % i === 0){
//          array.push(i)
//         }
//     }
//     return array
// }

// function isPrime(num) {
//     for(var i = 2; i < num; i++)
//       if(num !== 1 && num % i === 0){
//           return false
//       } 
//       return true
//   }


// console.log(divisors(12))



// function divisors(num){
//     var array = []
//     if(isPrime(num)){
//         return num + ' is prime'
//     } else {
//         for(var i = 2; i < num; i++) {
//             if(num % i === 0){
//                 array.push(i)
//                }
//          }
//          return array
//     } 

// }

// function isPrime(num) {
//     for(var i = 2; i < num; i++)
//       if(num !== 1 && num % i === 0){
//           return false
//       } 
//       return true
//   }


//   console.log(divisors(11))



// function squareDigit(num){
//    var splitNum = num.toString().split('')
//    var string = ''
//    for(var i = 0; i < splitNum.length; i++ ){
//        string += Math.pow(Number(splitNum[i]),2)
//    }
//    return Number(string)
// }


// console.log(squareDigit(9119))


// Write a function that accepts an array of 10 integers (between 0 and 9),
//  that returns a string of those numbers in the form of a phone number.

// function createPhoneNumber(arr){
//     return '(' + arr.slice(0,3).join('') + ')' + ' ' + arr.slice(3,6).join('') + '-' + arr.slice(6).join('')
// } 


// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))



// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for 
// the last two names, which should be separated by an ampersand.
// list()
// returns 'Bart, Lisa & Maggie'
// [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]

// function list(names){
// names[0].name + ', ' + names[1].name + ' & ' + names[2].name
    
// }


// function list(names){
//     if(!names.length){
//         return ''
//     }
//     var holdNames = ''
//     if(names.length === 1){
//         return names[0].name
//     } else if(names.length === 2){
//         return names[0].name + ' & ' + names[1].name
//     } else {
//         var holdNames = ''
//         holdNames = holdNames + names[0].name + ', '
//         for(var i = 1; i < names.length - 2; i++){
//             holdNames += names[i].name + ', '
//         } 
//         holdNames += names[names.length - 2].name 
//         holdNames += ' & ' + names[names.length - 1].name
//         return holdNames
//     }
   
// }










// function list(names){
//     var emptyStr = ''

//     for(var i = 0; i < names.length - 2; i++){
//             emptyStr += names[i].name + ', '
//     } if(names.length >= 2){
        
//     }
//     // return emptyStr.slice(0,-2)
// }

// console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))





// The goal of this exercise is to convert a string to a new string where
//  each character in the new string is '(' if that character appears only
//   once in the original string, or ')' if that character appears more than
//    once in the original string. Ignore capitalization when determining if 
//    a character is a duplicate.


// function duplicateEncode(word){
//     var newStr = []
//     var symbols = ''
//     var splitWord = word.toLowerCase().split('')
//     for(var i = 0; i < splitWord.length; i++){
//             newStr.push(splitWord[i])
//             if(newStr.includes(splitWord[i - 1])){
//                 symbols += '(' 
//          } else {
//              symbols += ')'
//          }
//     }
//     return symbols
// }

// console.log(duplicateEncode('recede'))







// function duplicateEncode(word){
//     var newStr = []
//     var symbols = ''
//     var splitWord = word.toLowerCase().split('')
//     for(var i = 0; i < splitWord.length; i++){
//         newStr.push(splitWord[i])
//         if(countInArray(newStr, splitWord[i])){
//             symbols += '('
//         } else {
//             symbols += ')'
//         }
//     }
//     return symbols
// }

// console.log(duplicateEncode('recede'))


// var list = [2, 1, 4, 2, 1, 1, 4, 5];  

// function countInArray(array, what) {
//     var count = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] === what) {
//             count++;
//         }
//     }
//     return count > 0;
// }

// countInArray(list, 2); // returns 2
// countInArray(list, 1)







// function tickets(peopleInLine){
//     var output = 'yes'
//     var cashDrawer = 0
//     var Avengersticket = 25
//     var change = 0
//     for(var i = 0; i < peopleInLine.length; i++){
//         if(peopleInLine[i] === Avengersticket){
//             continue
//         } else {
//             change = peopleInLine[i] - Avengersticket
//             if(change > cashDrawer){
//                  output = 'no'
//             } else{
//                 output = 'Yes'
//             }
//         }
//     }
//     return output

//   }



//   console.log(tickets([25, 25, 50]))




//   function tickets(peopleInLine){
//       var output = 'yes'
//     var cashDrawer = 0
//     Customerchange = 0
//     var leftOver = 0
//     for(var i = 0; i < peopleInLine.length; i++){
//         if(peopleInLine[i] === 25){
//             cashDrawer += 25
//         } else {
//             Customerchange = peopleInLine[i] - 25
//             leftOver = cashDrawer - Customerchange
//         }
     
//     }
//     if(leftOver < Customerchange){
//        return 'NO' 
//     } else {
//         return 'YES'
//     }

//   }

//   console.log(tickets([25,50,25,100,25,25,25,100,25,50,25,100,100,50]))






// function tickets(peopleInLine){
//     var cashDrawer = 0
//     for(var i = 0; i < peopleInLine.length; i++){
//       if(peopleInLine[i] === 25){
//           cashDrawer += 25
//           if(cashDrawer < 0){
//               return 'No'
//           }
//       } else if(peopleInLine[i] === 50){
//           cashDrawer -= 25
//           if(cashDrawer < 0){
//               return 'No'
//           }
//       } else if(peopleInLine[i] === 100){
//           cashDrawer -= 75
//           if(cashDrawer < 0){
//               return 'No'
//           }
//       } 
//     }
//     return 'Yes'
 
//   }

// console.log(tickets([25,50,25,100,25,25,25,100,25,50,25,100,100,50]))

// Complete the solution so that it reverses 
// all of the words within the string passed in.

// function reverseWords(str){
//     var string1 = ''
//     Strsplit = str.split(' ')
//     for(var i = Strsplit.length - 1; i >= 0; i--){
//         string1 += Strsplit[i] + ' '
//     }
//     return string1.trim()
//   }


//   console.log(reverseWords('the cow'))





// function spinWords(str){
//     var string1 = ''
//     var splitit = str.split(' ')
//     for(var i = 0; i < splitit.length; i++){
//         if(splitit[i].length >= 5){
//             for(var j = splitit[i].length - 1; j >= 0; j--){
//                 string1 += splitit[i][j]
//             }
//             string1 += ' '
//         } else {
//             string1 += splitit[i] + ' '
//         }
//     }
//     return string1.trim()
//   }

//   console.log(spinWords("Hey fellow warriors"))




// function narcissistic( value ) {
//     var sum = 0
//     var length = value.toString().split('').length
//     value.toString().split('').forEach(function(elem){
//         sum += Math.pow(Number(elem), length)
//     })
//     return sum === value
//   }

//   console.log(narcissistic(1634))



// Write function scramble(str1,str2) that returns true if a portion
//  of str1 characters can be rearranged to match str2, otherwise returns false.

// function scramble(str1, str2){
//     var counter = 0
//     splitit = str1.split('')
//  for(var i = 0; i < splitit.length; i++){
//      if(str2.includes(splitit[i])){
//         counter++
//      }
//  }
//  return counter === str1.length 
// }







// function scramble(str1, str2){
//     var counter = 0
//     splitit = str1.split('')
//  for(var i = 0; i < splitit.length; i++){
//      if(str2.indexOf(splitit[i]) !== -1){
//         counter++
//      }
//  }
//  return counter === str2.length 
// }

// console.log(scramble('cedewaraaossoqqyt','codewars'))
  


// function pigIt(str){
//     var arr = []
// var splitit = str.split(' ')
//     for(var i = 0; i < splitit.length; i++){
//        var First = splitit[i].split('').splice(0,1)
//        arr.push((splitit[i].slice(1) + First) + 'ay')
//     }
//     return arr.join(' ')
//   } 


// console.log(pigIt('Pig latin is cool'))






// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. We want to create
//  the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in 
// input array, containing the names of people who like an item. It must return 
// the display text as shown in the examples:


// function likes(names) {
//     if(names.length === 0){
//         return 'no one likes this'
//     } else if (names.length === 1){
//         return names[0] + ' likes this'
//     } else if(names.length === 2){
//         return names[0] + ' and ' + names[1] + ' like this'
//     } else if(names.length === 3){
//         return names[0] + ', ' + names[1] + ' and ' +  names[2] + ' like this'
//     } else {
//         return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'
//     }
//   }

//   console.log(likes(['peter']))




// var greeting = 'hi'

// function hello(){
//   greeting = 'bye'
// }

// console.log(greeting)

// var greeting = 'blue'

// function hello(){
//   var greeting = 'red'
// }

// console.log(greeting)




// var num = 1
// while(num < 100){
//     console.log(num)
//     num++
// }


// function logAll(num){
//     for(var i = num; i >=1; i--){
//            console.log(i)

//     }

// }

// logAll(5)


// function printEven(num){
    
//            for(var i = 1; i < num; i++){
    
//                     if(i % 2 === 0){
    
//                            console.log(i)
    
//                     }
    
//             }
    
//     }

//     printEven(5)


// function printOdd(num){
    
//            for(var i = 1; i < num; i++){
    
//                     if(i % 2 === 1){
    
//                            console.log(i)
    
//                     }
    
//             }
    
//     }

//     printOdd(5)



// Write a function that takes a number num as an argument and logs that 
// many multiples of 9. 
// For example, when given 5 as the argument, the function will log:


// function logMultiple(num){
    
//             for(var i = 1; i <= num; i++){
    
//                    console.log(i * 9)
    
//            }
    
//     }

// logMultiple(5)

// function capitalLast(str){
    
//          return str.slice(0,-1) + str.slice(-1).toUpperCase()
    
//     }
//     console.log(capitalLast('jimmy'))


// function countVowels(str){
    
//        var splitIt = str.split('')
    
//          var vowels = 'aeiouAEIOU'
    
//         var count = 0
    
//        for(var i = 0; i <  splitIt.length; i++){
    
//                 if(vowels.includes(splitIt[i])){
    
//                       count++
    
//                 }
    
//          }
    
//            return count
    
//     }


//     console.log(countVowels('helloae'))

// var x = ['rainbow dash', 'fluttershy', 'rarity', 'applejack'];
// console.log(x.join(''));
// console.log(x.join(', '));
// var dog



// function repeat(str, num){
//     for(var i = 0; i < num; i++){
//         console.log(str)
//     }
// }

// repeat('hello', 3)


// Create a function logArrTypes that uses the forEach 
// (Links to an external site.)Links to an external site. 
// method to log each array element followed by its type. For example:


// function logArrTypes(arr){
//    var newArr = arr.forEach(function(elem){
//         console.log(typeof elem)
//     })
//     return newArr

//     }
    
    // logArrTypes([1,2, 'cat'])


    // function isEven(num) {
    //     return num % 2 === 0
    //   }

    //   function checkit(arr){
    //        if(arr.filter(isEven)){
    //            return true
    //        } 
    //     return false
    //   }

    //   console.log(checkit([2,4,7]))



    // Use the array reduce method in combination with the 
    // array concat method to “flatten” an array of arrays into
    //  a single array that has all the elements of the input arrays.
  




    // var arrayOfArrays = [ [1, 2, 3], [4, 5], [6] ];
    // Your code here.
    // → [1, 2, 3, 4, 5, 6]


    // You are given an array of objects representing developers who
    //  have signed up to attend a coding meetup. Given the following 
    //  input array, write a function getAverageAge that returns the 
    //  average age of developers (rounded to the nearest integer).
    // var list1 = [
    //     { firstName: 'Maria', lastName: 'Y.',  age: 30, language: 'JavaScript' },
    //     { firstName: 'Victoria', lastName: 'T.',  age: 35, language: 'Python' },
    //     {firstName: 'Newton', lastName: 'Brooks', age: 22, language: 'java'}
    //   ];

    //   function getAverageAge(list1){
    //       var sum = 0
    //       for(var i = 0; i < list1.length; i++){
    //           sum += list1[i].age
    //       }
          
    //       return (sum / i).toFixed(0)
    //   }

    //   console.log(getAverageAge(list1))


    // Use the array reduce method in combination with the array concat m
    // ethod to “flatten” an array of arrays into a single array that has 
    // all the elements of the input arrays.


    // var arrayOf = [ [1, 2, 3], [4, 5], [6] ];
    // Your code here.
    // → [1, 2, 3, 4, 5, 6]

    // arrayOf.concat(function(elem){
    //     newArr = []
    //     newArr.reduce(function(elem){
    //         newArr.push(elem)
    //     })
    //     return newArr
    // })

    


    // Write a function someElem that re-implement the built-in array some method. 
    // The function takes as arguments an array and a test function that, when called
    //  with an array element as argument, returns true or false. Your function will
    //   return true if one or more elements in the array passes the test function.

    // function someElem()
    
    
    // Write a function onlyUnique that takes as argument an array, 
    // and returns a new array, where each value appears only once.

    // function onlyUnique(arr){
    //     var newArr = []
    //     for(var i = 0; i < arr.length; i++){
    //         if(!newArr.includes(arr[i])){
    //             newArr.push(arr[i])
    //         }
    //     }
    //     return newArr
    // }


    // console.log(onlyUnique([1,2,3,4,1,2,3]))

    // Use the array reduce method in combination with the array
    //  concat method to “flatten” an array of arrays into a single 
    //  array that has all the elements of the input arrays.

//     var arrayOfArrays = [ [1, 2, 3], [4, 5], [6] ];
//     // Your code here.
//     // → [1, 2, 3, 4, 5, 6]

//    console.log(arrayOfArrays.reduce(function(a,b) {
//        return a.concat(b)
//     })




//     function isEven(num) {
//         return num % 2 === 0
//       }


// function EveryElem(arr,isEven){
//    var newArr = arr.filter(isEven)
//    return newArr.length === arr.length
// }


// function isEven(num) {
//     return num % 2 === 0
//     }
    
    
//     function someElem(arr,isEven){
//     return arr.some(isEven)
//     }

// console.log(someElem([2, 4, 6, 7], isEven))


// var list1 = [
//     { firstName: 'Maria', lastName: 'Y.',  age: 30, language: 'JavaScript' },
//     { firstName: 'Victoria', lastName: 'T.',  age: 35, language: 'Python' },
//   ];
// //   getAverageAge(list1) // => 33


// console.log(list1.reduce(function(a,b, i){
//     // var sum = 0
//     // return Math.floor((a.age + b.age) / 2)
//     return (a + b) / (i + 1)
    

// }))



// function number(strletter){
//     var letter = '@abcdefghijklmnopqrstuvwxyz'
//     for(var i = 0; i < strletter.length; i++){
//         if(letter.includes(strletter[i])){

//         }
//     }
// }



// function sum_pairs(arr, num){

//     for(var i = 0; i < arr.length; i++){
//         secondNum = arr[i] - num
//         if(arr.includes(secondNum)){
//             return arr.indexOf(arr[i]) 
//         }
//     }
// }
// num = 1234

// num.toString(2)

// function findBinary(num){
//     counter = 0
//     numSplit = num.toString(2).split('')
//     for(var i = 0; i < numSplit.length; i++){
//         if(numSplit[i] === '1'){
//             counter++
//         }
//     }
//     return counter
// }

// console.log(findBinary(1234))


// function findBiggest(num){
//     numArr = num.toString().split('')
//    numArr.sort(function(a,b){
//         return a - b
//     })
// }

// console.log(findBiggest(412))

function flatten(arrOfArrs){
    var flat = arrOfArrs.reduce(function(acc, curr){
        return acc.concat(curr)
    }, [])
    return flat;
}


var flat = flatten([[1,2,3], [4,5,7], [8,9,10]])
console.log(flat)