// function add1(num){
//     return num + 1
// }

// function add2(num){
//     return add1(add1(num))
// }

// function add3(num){
//     return add2(add1(num))
// }

// function add4(num){
//     return add2(add2(num))
// }

// function add5(num){
//     return add4(add1(num))
// }


// Create two functions: double and square.
// double should take a number and return the number times two. 
// square should take a number and return the number squared. 
// Create a third function doubleSquare that uses both of the functions to return 
// a number that is first doubled and then squared.


// function double(num){
//  return num * 2
// }

// function square(num){
//     return Math.pow(num, 2)
// }

// function doubleSquare(num){
//     return square(double(num))
// }


// Create a function classyGreeting that takes as input the strings firstName 
//  and lastName , and returns a string with a greeting using the two. Create 
//  a second function yell  that takes as input as string and returns the string 
//  in all capitalized letters. Create a third function yellGreeting  that will 
//  take the firstName  and lastName  as inputs and yell a greeting using the two.

// function classyGreeting(firstName, lastName){
//     return 'Hello!, my name is ' + firstName + ' ' + lastName
// }

// function yell(str){
//     return str.toUpperCase()
// }

// function yellGreeting(firstName, lastName){
//     return yell(classyGreeting(firstName, lastName))
// }

// console.log(yellGreeting('newton', 'brooks'))


// The concat (Links to an external site.)Links to an external site. 
// array method is used to merge two (or more) arrays. Write a removeDupes
//  function that takes an array as an argument and returns a copy without 
//  any duplicate elements. Then, write a function concatAndRemoveDupes  that 
//  combines two arrays and removes any duplicates.

// Hint: Use the array method includes (Links to an external site.)Links to 
// an external site. to check if an element is in an array.

// function removeDupes(arr1) {
//     for(var i = 0; i < arr1.length; i++){
//         if(arr1.includes(arr1[i])){
//             delete arr1[i]
//         }
//     }
//     return arr1
// }

// console.log(removeDupes([1, 1, 2, 3, 4]))




// function concatAndRemoveDupes(arr1, arr2) {
//     return
// }


// console.log(removeDupes([1, 2, 3, 4, 5]))



// Given a list of grades, we can get the median grade by 
// sorting the list and taking the middle element, or the average of 
// the two middle elements. Create the functions sort and middleElement, 
// and then use them to create the functions median.

// var grades = [91, 85, 100, 92, 88]

// console.log(median(grades)) // Should log 88

// HTML Editor Keyboard Shortcuts

// function sort(arr){
//     var sorty = arr.sort(function(a,b){
//         return a - b
//     })
//     return sorty
// }

// function middleElement(arr){
//     if(arr.length % 2 === 0){
//       return  (arr[(arr.length) / 2] + arr[Math.floor((arr.length - 1) / 2)]) / 2
//     } else {
//         return arr[(arr.length - 1) / 2]
//     }
// }

// function median(arr){
//     return middleElement(sort(arr))
// }



// function removeDupes(array){
//     var newArr = [] 
//     for (var i = 0; i < array.length; i++){
//         if (newArr.includes(array[i]) !== true){
//             newArr.push(array[i])
//         }
//     }
//     return newArr
// }

// function concatAndRemoveDupes(array1,array2){
//     return removeDupes(array1.concat(array2))
// }


// function removeDupes(array) {
//     newArr = []
//     for(var i = 0; i < array.length; i++){
//         if(newArr.includes(array[i])){
//             continue
//         } else {
//             newArr.push(array[i])
//         }
//     }
//     return newArr
// }

// function concatAndRemoveDupes(array1,array2){
//     return removeDupes(array1.concat(array2))
// }

// console.log(concatAndRemoveDupes([1,2,3,4], [1,2,3,46,6,7,8]))




// function forEachElement(arr, initialValue, callback){

// }

function hello(){
    console.log('hello')
}
setInterval(hello, 1000)

setInterval(function never(){
    console.log('running')
}, 2000)

// clear function - '\033[H'

