// var txt = 'Hello Monday'
// for(var i = 0; i < txt.length; i++){
//     console.log(txt[i])
// }


// function fibonacci(num){
//     for(var i = 1; i < num; i++){
//         if(i <= 1){
//             console.log(1)
//         } else if(i % 2 === 1) {
//             console.log((i - 1) + (i - 2))
//         }
//     }
// }

// fibonacci(20)

// function fibonacci(num)



// function listFib(number){
//     var start = 0
//     var previous = 1
//     var result = 1
//         for (var i = 0; i <= number; i ++){
//             console.log(result)
//             result = start + previous
//             start = previous
//             previous = result
            
//        }
// }
// listFib(20)


// var str = ''
// var num = 10

// for(var i = 1; i <= num; i++){
//     if(i > 1){
//         str += ', '
//     }
//     str += i

// }

// console.log(str)

// var num = 10
// var str = ''
// for(var i = 1; i <= num; num++){
//     console.log(i + ' ')
//     // for(var i = 1; i <= num; i++){
//     //     if(i < num){
//     //        str += i + ','
//     //     } else {
//     //         str += i
//     //     }
//     //     console.log(str)
//     // }
// }
// var num = 10
// var str = ''

// for(var i = 1; i <= num; i++){
//     if(i > 1){
//         str +=  ', '
//     } 
//     str += i
//     console.log(i + ' : ' + str)
//     }


    // var str = ''
    // var num = 10
    
    // for (var i = 1; i <= num; i++) {
    //     if (i > 1) {
    //         str += ', '
    //     }
    //     str += i;
    //     console.log(i + ' ' + str);
    // }

    // var list;
    // var num = 7
    
    // function joinList(n) {
    //     str = ''
    //     for (var j = 1; j >= n; j++) {
    //         if (j > 1) {
    //             str += ', '
    //         }
    //         str += j;
    //     }   
    //     return str; 
    // }
    
    // for (var i = 1; i <= num; i += 3) {
    //     list = joinList(i);
    //     console.log(i + ' ' + list);
    // }


    // var list;
    // var num = 7
    
    // function joinList(n) {
    //     str = ''
    //     for (var j = n; j > 0; j--) {
    //         if (j < n) {
    //             str += ', '
    //         } 
          
    //         str += j ;
    //     }   
    //     return str + ' Blast off!'; 
    // }
    
    // for (var i = 1; i <= num; i += 3) {
    //     list = joinList(i);
    //     console.log(i + ' : ' + list);
    // }

    // var name = 'peter' // name = 'PETER' // 'PetEr

// // console.log(name[0].toUpperCase() + name.slice(name[2], name.length))
// console.log(name[0].toUpperCase() + name.slice(1))
// console.log(name.toUpperCase())


// firstLetter = name[0].toUpperCase()
// secondToLast = firstLetter.replace(firstLetter[firstLetter.length - 2], firstLetter[firstLetter.length - 2].toUpperCase())
// var first = name.replace(name[0], name[0].toUpperCase())
// secondtoLast = first.replace(first[first.length - 1], first[first.length -1].toUpperCase())
// console.log(secondtoLast.replace(secondtoLast[secondtoLast.length - 2], secondtoLast[secondtoLast.length - 2].toUpperCase()))
// console.log(secondToLast)

// console.log(thirdToLast)


// var firstLetter = name[0].toUpperCase() + name.slice(1)
// var secondtoLast = firstLetter.slice()



// Create a function called DrEvil. It should take a single argument, an 
// amount, and return ' dollars', except it will add '(pinky)' at the end if
//  the amount is 1 million. For example:

// function DrEvil(amount){
//     if(amount === 1000000){
//         return amount + 'dollars' + '(pinky)'
//     } else {
//         return amount + 'dollars'
//     }
// }






// Create a function called verbing. It should take a single argument, a string.
//  If its length is at least 3, it should add 'ing' to its end, unless it already ends
//   in 'ing', in which case it should add 'ly' instead. If the string length is less than
//   it should leave it unchanged. For example:



// function verbing(string){
//     if(string.slice(-3) !== 'ing' && string.length >= 3){
//         return string + 'ing'
//     } else if (string.slice(-3) === 'ing'){
//         return string + 'ly'
//     } else {
//         return string
//     }
// }


// console.log(verbing('ing'))





// Create a function getInitString that takes a string as input and return a 
// copy of the string without the last letter.

// function getInitString(string){
//     return (string.slice(0,string.length - 1))
// }


// function getLast(string){
    
//     return string.slice(string.length -1)
    
//     }


//     console.log(getLast('blue'))

// function capitalLast(string){
    
//     return string.slice(0, string.length -1) + string[string.length -1].toUpperCase()
    
//     }


//     console.log(capitalLast('blue'))




// Create a function called mixUp
// . It should take two strings as input, and return the concatenation 
// of the two strings (separated by a space), swapping the first 2 characters 
// of each. You can assume that the strings are at least 2 characters long.

// function mixUp(str1,str2){
//    return str2.slice(0,2) + str1.slice(2) + ' ' + str1.slice(0,2) + str2.slice(2)
// }


// console.log(mixUp('dog', 'dinner'))



// function getLast(string){
    
//     return string.slice(string.length -1)
    
//     }


