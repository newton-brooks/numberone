// var names = ['ben', 'jafar', 'matt', 'priya', 'brian']

// names.forEach(function(name){
//     console.log(name)
// })

// names.map(function (name){
//     console.log(name)
// })


// for(var i = 0; i < names.length; i++){
//     console.log(names[i])
// }


// Array.prototype.sayHello = function (){
//     console.log('hello')
// }

// names.sayHello()




//  // this is what happens behind the scenes of .map 
// Array.prototype.map = function(func) {
//     var results = [];
//     for (var i = 0; i < this.length; i++){
//         results.push(func(this[i]));
//     }

//     return results;
// };
//  .map does not change the original array
// foreach does not return anything!!!!!!!!!!!!


// var arr1 = [1,2,3]
// var arr2 = []
// arr1.forEach(function(num){
//     return arr2.push(num * 2)
// })

// console.log(arr2)

// console.log(arr2)



// var arr3 = arr.map(function(num){
//     return num + num
// })



// console.log(arr3)


// function double(num){
//     return num * 2 
// }

// console.log(arr.map(double))


// arr1 = ['cat', 'dog']

// Array.prototype.map = function(cb) {
//     var results = [];
//     // for (var i = 0; i < this.length; i++){
//     //     results.push(func(this[i]));
//     // }
//     this.forEach(function (elm){
//         results.push(cb(elm))
//     })

//     return results;
// };

// arr3 = arr1.map(function(num){
//     return num + num
// })

// console.log(arr3)



// var arr2 = []
// arr1.forEach(function(num){
//     arr2.push(num * 2)
// })





// var numbers = [2,3,4,10,1]

// var numbers2 = numbers.filter(function(num){
//     return num > 3
// })

// console.log(numbers2)


// var animals = ["cat", "dog", 'giraffe']

// var animals2 = animals.filter(function(ele){
//     return ele.length ===3
// })

// console.log(animals2)



// Use .map() to build a new
//  array where every element of original is incremented by 10.


//  var original = [1, 2, 3];

// var neworg = original.map(function(num){
//     return num + 10
// })

// console.log(neworg)r original = [1, 2, 3];

// var neworg = original.map(function(num){
//     return num + 10
// })

// console.log(neworg)



// Use .map() to build a new array where every non-string 
// element of original is converted to an empty string.

// var original = [1, 2, 'buckle', 'my', 'shoe'];

// var neworg = original.map(function(elem){
//     if(typeof elem !== 'string'){
//         elem = ''
//     }
//     return elem
// })

// console.log(neworg)

// Use .filter() to build a new array containing 
// only the evenly numbered elements of original.

// var original = [1, 2, 3, 4, 5, 6];

// var neworg = original.filter(function(num){
//     if(num % 2 === 0){
//         return num
//     } 
// }) 

// console.log(neworg)

// Use .filter() to build a new array 
// containing only the truthy elements of original.



// var original = [true, false, [], '', 0, NaN, 'kittens', 500];

// var truthy = original.filter(function (elem){
//     if(elem){
//         return elem
//     }
// })

// console.log(truthy)

// Use .reduce() to return the sum of every element 
// in arr and assign it to a variable sumOfArr.

// var arr = [1, 2, 6, 7, 100];

// var sumOfArr = arr.reduce(function(a,b){
//     return a + b
// })

// sumOfArr







// Use .filter() to build a new array containing only the number-type 
// elements of arr and then use .reduce() to return the sum of every element 
// of that and assign it to a variable sumOfArr.


// var arr = [1, 2, 'popsicle', 6, 7, 'axe body spray', 100];

// var arr2 = arr.filter(function(elem){
//     if(typeof elem === 'number'){
//         return elem
//     }
// })

// var sumOfArr = arr2.reduce(function(a,b){
//     return a + b
// },0)

// console.log(sumOfArr)




// Use .map() to build a new array which doubles every element of 
// arr and then use .reduce() to return the sum of every element of that
//  and assign it to sumOfArr.


// var sumOfArr = arr.map.( YOUR CODE GOES HERE ).reduce( YOUR CODE GOES HERE );
// console.log( sumOfArr );
// // 232


// var arr = [1, 2, 6, 7, 100];
// var doubleArr = arr.map(function(num){
//     return num + num
// })

// var sumOfArr = doubleArr.reduce(function(a,b){
//     return a + b
// }, 0)

// console.log(sumOfArr)


// Use .reduce() to find the largest number in arr.
// var arr = [1, 0, 500, 6, 3, 600, 1000, 13000];

// var largest = arr.reduce(function(a,b){
//     if(a > b){
//         return a
//     }
//     return b
// })

// console.log(largest)


// Write a function elementDivisibleBy with parameters divisor and arr. 
// Use .filter() to return a new array of every element of arr that can be 
// evenly divided by divisor.



// function elementDivisibleBy(divisor, arr){
//      var divisible = arr.filter(function(elem){
//        if(elem % divisor === 0){
//            return arr
//        }
//     })
//     return divisible
// }


// console.log(elementDivisibleBy(2, [1, 2, 3, 4]))
// // [2, 4]
// console.log(elementDivisibleBy(5, [5, 25, 4, 8, 100]))
// // [5, 25, 100]















// Write a function joinByReduce with arguments str and arr. Use .reduce()
//  to return a string consisting of every element of arr separated by str. 
//   (There will be an extra occurrence of str at the end of your return value - 
//     this is okay.)

// function joinByReduce(str, arr){
//     var string = arr.reduce(function(a,b){
//         return a + str + b
//     })
//     return string
// }




// console.log( joinByReduce( '-', [2, 4, 'sportsball', 'sewing machine'] ));
// // "2-4-sportsball-sewing machine-"
// console.log( joinByReduce( '+', [1, 2, 3] ));
// // "1+2+3+";

// var arr1 = [1, 2, 3, 4, 5, 6];

// var arr2 = arr1.filter(function(num) {
//   if (num % 2 === 0){
//       return 
//   }
// });

// console.log(arr2);







// Write a function countZeroes, which takes an array of numbers as 
// its argument and returns 
// the amount of zeroes that occur in it. Use reduce.

// function countZeroes(arr){
//     var count = 0
// arr.filter(function(num){
//     if(!num){
//         count++
//     }
// })
// return count
// }

// function countZeros(arr){
//     var count = 0
//     var zeroless = arr.reduce(function(a,b){
//             return a
//     }, 0)
// }


// function countZeroes(array){
//     var counter = 0
//     var zeros = array.reduce(function(a,b){
//         if(a === 0 || b === 0){
//             counter++
//             return a + b
//         }else{
//             return a + b
//         }
//     })
//     return counter
// }

// console.log();
// console.log( countZeroes([1, 2, 0, 12, 0, 3, 0, 0, 0, 0, 9, 0] ));

// function countZero(array){
//     var counter = 0
//     array.reduce(function(a,b){
//         if(a === 0 || b === 0){
//             counter++
//         }
//     })
//     return counter
// }

// console.log(countZero([2, 4, 0, 2, 9, 0, 0, 5, 9, 0, 8, 0,0,0] ))


// function countZeroes(array) {
//     var counter = 0
//     var zero = array.reduce(function (arr, str){
//         if (arr === 0 || str === 0) {
//            return counter++
//         }
//     })
//     return counter - 1
// }


// console.log( countZeroes([2, 4, 0, 2, 9, 0, 0, 5, 9, 0, 8] ));
// console.log( countZeroes([1, 2, 0, 12, 0, 3, 0, 0, 0, 0, 9, 0] ));




// console.log(countZeroes([1, 2, 0, 12, 0, 3, 0, 0]))
// => 3




// function XO(string) {
//     var counter = 0
//     for (var i = 0; i < string.length; i++) {
//       switch (string[i].toLowerCase()) {
//         case "x":
//           counter++
//           break;
//         case "o":
//           counter--
//           break;
//       }
//     }
//  return counter === 0
//   }

//   console.log(XO('hellloxo'))


