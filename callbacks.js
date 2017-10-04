// function forEachElem(arr, callback){
//     for (var i = 0; i < arr.length; i++) {
//        callback(arr[i])
//     }
//  }

// function logAll(element){
//     console.log(element)
// }

// function logEach(arr, logAll){
//     return forEachElem([1,2,3,4], logAll)
// }

// logEach([1,2,3,4], logAll)




// function forEachElem(arr, callback){
//     for (var i = 0; i < arr.length; i++) {
//        console.log(arr[i] + ' is a type of ' + callback(arr[i]))
//     }
//  }

//  function logArrTypes(arg){
//      return typeof arg
//  } 

// forEachElem([1,2,'cat', true], type)


// // var secondsPast = 0

// // function timer(){
// //    secondsPast += 1
// //    console.log(secondsPast)
// // }

// // setInterval(timer, 1000)


// function conservativeSpender(balance)  {
//     return balance > 100
//   }
  
//   function liberalSpender(balance) {
//     return balance > 10
//   }
  
//   function horribleSaver (balance) {
//     return balance > 0
//   }

// function shouldIBuyThis(balance, price, callback){
//     var Income = balance - price
//     if(callback(Income)){
//        return 'Sure, I have the money'
//     } else {
//         return 'Nope, gotta keep me savings up!'
//     }
// }

// console.log(shouldIBuyThis(45, 50, horribleSaver))




   

// function map(arr, func){
//     var newArr = []
//     for(var i = 0; i < arr.length; i++){
//         var newElement = func(arr[i])
//        newArr.push(newElement)
//     }
//     return newArr
// }


// function add4(num){
//     return num + 4
// }

// console.log(map([1,2,3], add4))


// /**
//  * @function map
//  * @param  {Any[]} arr  {an array}
//  * @param  {function} func 
//  * @return {Any[]} {a new array, made by taking every element
//  *                of arr and passing it as an argument to func}
//  */
// function map(arr, func) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++){
//       var newElement = func(arr[i])
//       newArr.push(newElement)
//     }
//     return newArr
//   }
  
  
//   function add4(num){
//     return num + 4
//   }
  
//   console.log(map([1, 2, 3], add4))
//   //  [5, 6, 7]



function addTwoElements(arr, value1, value2){
  arr.push(value1,value2)
  return arr
}

console.log(addTwoElements([1,2,3,4],5,6))