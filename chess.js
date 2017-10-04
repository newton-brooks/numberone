// function makeboard(num){
//     var board = ' '
//     for(var column = 0; column < num; column++){
//         for (var row = 0; row < num; row++){
//             if((column + row) % 2 === 0){
//                 board += '#'
//             } else {
//                 board += ' '
//             }
//         }
//         board += '\n'
//     }
//     return board
// }

// console.log(makeboard(7))


// function makeBoard(num){
//     var board = ' '
//     for(var i = 0; i < num; i++){
//         if(i % 2 === 0){
//         board += '#'
//         } else {
//        board += ' ' 
//         }   
//     } 
//     return board
// }

// console.log(makeBoard(8))




// function fibonacci(num){
//     for(var i = 1; i <= num; i++){
//        console.log((i - 1 ) + (i - 2))
//     }
// }

// fibonacci(12)




// function makeBoard(num) {
//     var board = "";
//     for (var row = 0; row < num; row++) {
//       for (var column = 0; column < num; column++) {
//         if ((column + row) % 2 === 0) {
//           board += "#";
//         } else {
//           board += " ";
//         }
//       }
//       board += "\n";
//     }
//     return board;
//   }
//   console.log(makeBoard(8));

// function countVowels(string){
//     var vowels = 'aeiouAEIOU'
//     var vowelCount = 0
//     for(var i = 0; i < string.length; i++){
//     if(vowels.includes(string[i])){
//     vowelCount++
//     }
//     }
//     return vowelCount
//     }
    
//     console.log(countVowels('aeioubbbb'))
// function tellme(){
// if(0){
//     return undefined
// } 
// if(3){
//     return true
// }
// }


// console.log(tellme())

// function oddCaps(str){
    
//     var newString = ''
    
//          if(typeof str !== 'string') {
    
//              return undefined
    
//          } else {
    
//              for(var i = 0; i < str.length; i++) {
    
//                   if(i % 2 === 1) {
    
//                     newString += str[i].toUpperCase()
    
//                   } else {
    
//                     newString += str[i]
    
//                   }
    
//            }
    
//             return newString
    
//         }
    
//     }


    // console.log(oddCaps('blue'))



// function absoluteValue(num){
//     if (num < 0){
//         return -num 
//     } else {
//         return num
//     }
// }

// console.log(absoluteValue(-30))



