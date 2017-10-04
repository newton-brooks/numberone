// Write a function named and with parameters x and y. Your function should return true if x and y are both true, and otherwise return false.

// Invoke your function with the arguments true and true.

// Invoke your function with the arguments 'happy string' and [ ] (empty array).

// function and(x, y){
//    if(x && y){
//         return true
//    } 
//    return false
// }

// console.log(and([], 'park'))

// function and(x,y){
//     return !!(x && y)
// }
// console.log(and([], 'park'))







// Write a function named addOnlyNumbers with parameters foo and bar. 
// If foo and bar are both of type "number", return the result of foo plus bar.
//  If foo and bar are not both numbers, return NaN.

// Invoke your function with arguments 5 and Math.PI.

// Invoke your function with arguments 'fidget spinner' and 22.


// function addOnlyNumbers(foo, bar){
//     if(typeof foo === 'number' && typeof bar === 'number'){
//         return foo + bar
//     } else {
//         return NaN
//     }
// }

// addOnlyNumbers(5,Math.PI)



// Write a function isAllNum with parameter arr. If every element of arr is 
// of type number, return true. Otherwise, return false.

// Invoke your function with the argument [1, 2, 3, 4, 5].

// Invoke your function with the argument [1, 2, 'mountain dew'].

// function isAllNum(arr){
//     for(var i = 0; i < arr.length; i++){
//         if(typeof arr[i] !== 'number'){
//             return false
//         } 
//     }
//     return true
// }


// isAllNum([1, 2, 3, 4, 5])
// isAllNum[1,2,'mountain dew']



// Write a function forceAllNum with parameter arr. 
//  Convert every element of arr that is of type number to the value 
//  0 and return arr.

// Invoke your function with the argument [1, 2, 3, 4, 5].

// Invoke your function with the argument [1, 2, 'mountain dew'].


// function forceAllNum(arr){
//     for(var i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             // arr.splice(i,1,0)
//             arr[i] = 0
//         }
//     }
//     return arr
// }


// forceAllNum([1, 2, 3, 4, 5])
// forceAllNum([1,2,'mountain dew'])




// Write a function makeVowelsHyphens with parameter s. If s is not a string, 
// return undefined. If s is a string, convert every vowel (a, e, i, o, u) into a
//  hyphen (-) and return that string.

// Invoke your function with the argument 'tuesday is my favorite day'.

// Invoke your function with the argument { isString: false, isObject: true }.


// function makeVowelsHyphens(s){
//     var vowels = 'AEIOUaeiou'
//     if(typeof s !== 'string'){
//         return undefined
//     } else {
//         var splitStr = s.split('')
//         for(var i = 0; i < splitStr.length; i++){
//             if(vowels.includes(splitStr[i])){
//                 splitStr[i] = '-'
//             }
//         }
//         return splitStr.join('')
//     }
// }

// makeVowelsHyphens('tuesday is my favorite day')






// Write a function hasPropertyTacos with one parameter, loljk. If loljk 
// is an object with a defined property "tacos", return true. Otherwise, 
// return false.

// Invoke your function with argument { name: 'Cody', tacos: 'so many tacos' }.

// Invoke your function with argument 'i am not even an object'.



// var loljk = { name: 'Cody', tacos: 'so many tacos' }


// console.log(hasPropertyTacos(loljk))

// var loljk = {name: 'Cody', tacos: 'so many tacos'}
// console.log(hasPropertyTacos(loljk))

// function hasPropertyTacos(obj){
//     var check = 0
// if(typeof obj !== 'object'){
//         return 'I am not even an object.'
//     } 
//     for(var key in obj){
//         if(key === 'tacos'){
//            check ++
//         } 
//     }  
//     return check > 0
// }



// var loljk = {name: 'Cody', tacos: 'so many tacos'}
// function hasPropertyTacos(obj){
//     if(typeof obj === 'object'){
//         for(var key in obj){
//             if(key === 'tacos'){
//         return true
//             } 
//         }  
//     }
//     return false
// }

// hasPropertyTacos(loljk)


// Write a function hasPropertyGeneric with two parameters, bigO and littleP.
//  If bigO is an object with a defined property littleP, return true. Otherwise, 
//  return false.

// Invoke your function with arguments { name: 'cody', tacos: 3 } and 'tacos'.

// Invoke your function with arguments { name: 'cody', tacos: 3 } and 'sandwiches'.

// HTML Editor Keyboard Shortcuts


// function hasPropertyGeneric(bigO, littleP){
//     for(var key in bigO){
//         if(key === littleP){
//             return true
//         } 
//     }
//     return false
// }


// function hasPropertyGeneric(bigO, littleP){
//     var check = 0
//     for(var key in bigO){
//         if(key === littleP){
//             check++
//         } 
//     }
//     return check > 0
// }


// console.log(hasPropertyGeneric({ name: 'cody', tacos: 3 }, 'tacos'))
// hasPropertyGeneric({ name: 'cody', tacos: 3 }, 'sandwiches')

// Write a function convertVowelsGeneric with parameters str and sub. 
// If str or sub is not a string, return undefined. If str and sub are strings, 
// replace every vowel (a, e, i, o, u) in str with sub return that string.

// Invoke your function with the argument 'tuesday is my favorite day'.

// Invoke your function with the argument { isString: false, isObject: true }.

// function convertVowelsGeneric(str,sub){
//     var vowels = 'AEIOUaeiou'
//     var Splitstr = str.split('')
//     if (typeof str === 'string' && typeof sub === 'string'){
//         for(var i = 0; i < Splitstr.length; i++){
//             if(vowels.includes(Splitstr[i])){
//                 Splitstr[i] = sub
//             } 
//         }
//         return Splitstr.join('')
//     }
//     return undefined
// }

// convertVowelsGeneric('tuesday is my favorite day', 'blue')




// Write a function named and with parameters x and y.
//  Your function should return true if x and y are both true, and 
//  otherwise return false.

// Invoke your function with the arguments true and true.

// Invoke your function with the arguments 'happy string' and [ ] (empty array).



// Write a function hasPropertyTacos with one parameter, loljk. 
// If loljk is an object with a defined property "tacos", return true. Otherwise, 
// return false.

// Invoke your function with argument { name: 'Cody', tacos: 'so many tacos' }.

// Invoke your function with argument 'i am not even an object'.

// var loljk = { name: 'Cody', taos:  0}
// function hasPropertyTacos(){
//     return loljk.hasOwnProperty('tacos')
// }

// console.log(hasPropertyTacos())

// function hasPropertyGeneric(bigO, littleP){
//     return bigO[littleP] !== undefined
// }

// console.log(hasPropertyGeneric({ name: 'Cody', tacos:  0}, 'tacos'))