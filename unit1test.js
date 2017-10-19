// Write a function called everyStringFilter that takes an array as an argument.
// The function will return a new array containing only every string element of the 
// original array. You must use map.filter().

// function everyStringFilter(arr){
//     return arr.filter(function(elem){
//         if(typeof elem === 'string')
//             return elem
//     })
// }

// Write a function replaceVowelsWithUnderscores that takes a string as an argument,
// and returns the string with all the lowercase vowels (a, e, i, o, u) replaced with
// underscores (_).

function replaceVowelsWithUnderscores(str) {
    var vowels = 'aeiou'
    strArr = str.split('')
    for(var i = 0; i < strArr.length; i++){
        if(vowels.includes(strArr[i])){
                strArr[i] = '_'
        }
    }
    return strArr.join('')
}

console.log(replaceVowelsWithUnderscores('hello'))


// var arr = ['pepperoni', 'bologna', 'capicola']
// forEachElem(arr,function (elem) {
//     return 'the value is: ' + elem
// })


// function createTask(title, completed){
//     return {title: title,
//             completed: completed}
// }


// Fill in the blank with code to make a new array where every element of the original
// array is multiplied by 10.

// var arr = [1, 2, 3, 4, 5]

// var newArr = arr.map(function(num){
//     return num * 10
// })



// Write a function addThreeNumsFromString that takes a single string as argument.
// The given string will consist of three numbers separated by a space. The function
// will add the three the numbers and return their sum.


// function addThreeNumsFromString(str) {
//     var sum = 0
//      var strArr = str.split(' ')
//      for(var i = 0; i < strArr.length; i++){
//          sum += Number(strArr[i])
//      }
//      return sum
// }



// Write a function strToNumArr that takes as argument an array of strings and 
// converts it to an array of numbers. If a strings cannot be converted to a valid number,
// convert it to 0. You may use the built-in array map method.
    
    
    // function strToNumArr(arr){
    //     return arr.filter(function (elem){
    //         if(Number(elem)) {
    //             return elem
    //         } else {
    //             return 0
    //         }
    //     })
    // }

    // console.log(strToNumArr(['1', 'blue', '']))




// Write a function stringsToNumbers that takes an array of strings as an argument 
// and returns an array of numbers. The function should filter out the strings that 
// cannot be converted to valid numbers, and convert the rest of the strings to numbers.
// Use the built-in array filter and map methods.

// function stringsToNumbers(arr) {
//     return arr.filter(function (elem){ 
//         if(Number(elem))
//         return Number(elem)
//     })
// }

// console.log(stringsToNumbers(['1', 'blue']))

// Write a function namesOlderThan that takes as arguments:

// 1. An array of students, where each student is an objects that has a name and age properties.

// 2. An age (number).

// The function will return an array with the names of the students who are older than the provided age.

// You may use the built-in array filter and map methods.

// function namesOlderThan(arr, age)  {
//     return arr.filter(function (elem){
//         if(elem.age > age){
//             return elem.name
//         }
//     })
// }



// Write a function findElement that takes as arguments:

// 1. An array.

// 2. A truth-test : a callback function that takes a single value as argument,
// and returns either true or false.

// The function will return the first element in the array that passes the truth
// test, or undefined if no such element is found.

// function findElement(arr, truthTest) {
//     for(var i = 0; i < arr.length; i++){
//         if(truthTest(arr[i])){
//             return arr[i]
//         }
//     }
//     return undefined
// }
