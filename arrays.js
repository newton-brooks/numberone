// var  arr = ['a', 1, 'b', 5, 'c']

// var arr1 = arr.slice(1,3)

// console.log(arr1)


// Write a function named `arrLength` that takes in an array as 
// an argument. The function should return the length of that array. 


// Write a function named `longestArr` that takes in two arrays as arguments.
// unction should compare the length of the two arrays and return whichever array is longer 
// (aka whichever array has more values in it). If the lengths of the two arrays are equal, 
// then return null.

// function longestArr(arr1,arr2){
//     if(arr1.length > arr2.length){
//         return arr1
//     } else {
//         return arr2
//     }
// }


// console.log(longestArr([1,2,3,4], [5,6,7]))




// Write a function `sumArray` that takes as argument an 
// array of numbers and returns the sum of all these numbers.

// function sumArray(arr){
//     var sum = 0
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(sumArray([1,2,3,4,5,6]))




// function rangeWithStep(min,max,step){
//     var arr = []
//     if(step === undefined){
//         step = 1
//     } 
//     for(var i = min; i <= max; i+=step){
//         arr.push(i)
//     }
//     return arr
// }

// console.log(rangeWithStep(2,10))



// function deepEquals(arr1, arr2){
//     var output = false
//     if(arr1.length === arr2.length){
//         return false
//     }
//     for(var i = 0; i < arr1.length; i++){
//         if (arr1[i] === arr2[i] ){
//             output = true
//         }
//     }
//     return output
// }
// console.log(deepEquals([1,2,3,4], [1,2,3]))




// function deepEquals(arr1, arr2){
//     var output = false
//     if(arr1.length === arr2.length){
//         for(var i = 0; i < arr1.length; i++){
//             if (arr1[i] === arr2[i] ){
//                 output = true
//             } else {
//                 return output
//             }
//         }
//     } 
// }
// console.log(deepEquals([1,2,3,4], [1,2,3,4]))



// function deepEquals(arr1, arr2){
    
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     for(var i = 0; i < arr1.length; i++){
//         if (arr1[i] !== arr2[i] ){
//             return false
//         }
//     }
//     return true
// }
// console.log(deepEquals([1,2,3,4], [1,2,3,5])) 




// Write a function named `addTwoElements` that takes in three arguments: an array, 
// and two values to add to that array. 
// The function should add those two values to the end of the array.


// function addTwoElements(arr, value1, value2){
//      arr.push(value1,value2)
//      return arr
// }

// console.log(addTwoElements([1,2,3,], 4, 5))



// Write a function `withoutLastTwo` that takes an array as an argument and returns a copy of the array
//  without the last two elements. If the original array is two elements or less, the function should return 
//  an empty array.


// function withoutLastTwo(arr){
//     arr.splice(arr.length-2, 2)
//     return arr
// }

// console.log(withoutLastTwo([1,2,3]))




// Write a function `everyThird` that takes an array as an argument and returns a new array
//  that contains every third element of the original array.

// function everyThird(arr){
//     var arr1 = []
//     for(var i = 2; i < arr.length; i += 3){
//             arr1.push(arr[i])
//         }
//     return arr1
// }

// console.log(everyThird(['cat', 'bird', 'dog', 'bear', 'elephant', 'owl']))
// 3,6,9

// function withoutLastTwo(arr){
//     arr.splice(arr.length-2, 2)
//     return arr
//     }

//     console.log(withoutLastTwo([1]))



// function remove(array, value) {
//     // var newArray = [];
//     if (array.includes(value)) {
//       for (var i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//              array.splice(i, 1)
//         }
//       }
//       return array
//     }
    
//   }
  
//   console.log(remove([1, 2, 3, 4, 5], 4));
//   console.log(remove([1, 2, 3, 4, 5, 4, 7, 9, 4], 4));
//   console.log(remove([1, 4, 4, 5, 5, 5, 6], 4));
  
//   console.log(remove([1, 2, 3, 4, 5, 4, 4], 4));


// function lastToFront(arr){
//     var lastElement = arr.pop()
//     arr.splice(0,0, lastElement)
//     return arr
//     }






// function lasttoFront(arr){
//    var last = arr.pop()
//    arr.splice(0,0,last)
//    return arr
// }


// console.log(lasttoFront([1,2,3,4]))



