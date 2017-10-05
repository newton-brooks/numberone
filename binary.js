// function decimalToBinary(num){
//     string = ''
//     for(var i = num; i >= 0; i--){
//         if(num >= Math.pow(2,i)){
//             num = num - Math.pow(2,i)
//             string += '1'
//         } else {
//             string += '0'
//         }
//     }
//     return string
// }


// console.log(decimalToBinary(2973))






// function decimalToBinary(num){
//     var string = ''
//     var bits = Math.floor(Math.log2(num))
//     // var MovingNum = num
//     for(var i = bits; i >= 0; i--){
//         if(num >= Math.pow(2,i)){
//             num = num - Math.pow(2,i)
//             string += '1'
//         } else {
//             string += '0'
//         }
//     }
//     return string

// }


// console.log(decimalToBinary(2973))


// var digits ='0123456789ABCDEFGHIJKL'

// function numToBase(num, base) {
//     console.assert(base <= digits.length, 'Base is too big')
//     if (num === 0) {
//         return '0';
//     }
//     var number = num
//     var result = []
//     while (number >= 1) {
//         result.unshift(digits[number % base])
//         number = Math.floor(number / base)
//     }
//     return result.join('')
//   }
//   console.log(numToBase(10, 2))



// Write a function that takes as argument a string with the binary representation of a number,
//  and returns the decimal representation of the number (as a number).



// function binaryDecimal(string){
//         var sum = 0
//     for(var i = 0; i < string.length; i++){
//         if(string[i] === '1'){
//             sum += Math.pow(2, string.length - 1 - i)
//         } 
//     }
//     return sum 
// }


// console.log(binaryDecimal('101'))


// var hexiDecimal = '0123456789ABCDEF'
