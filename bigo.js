// function quadraticTime(characterNames) {
//     for (var i = 0; i < characterNames.length; i++) {
//         for (var j = 0; j < characterNames.length; j++ ) {
//                 console.log("Player One: " + characterNames[i] + "; Player Two: " + characterNames[j])
//         }
//     }
// }


// quadraticTime(["Agnes", "Bart", "Carl", 'newton'])


//Print out who selected which character.  Two players can select the same character.

// function quadraticTime(characterNames) {
//     var arr = []
//     for (var i = 0; i < characterNames.length; i++) {
//         for (var j = 0; j < characterNames.length; j++ ) {
//             arr.push(("Player One: " + characterNames[i] + "; Player Two: " + characterNames[j]))
//         }
//     }
//     return arr
// }


// var arr = quadraticTime(["Agnes", "Bart", "Carl"])
// console.log(arr)
// console.log(arr.length)





// function quadraticTime(characterNames) {
//     var arr = []
//     for (var i = 0; i < characterNames.length; i++) {
//         for (var j = 0; j < characterNames.length; j++ ) {
//             arr.push(("Player One: " + characterNames[i] + "; Player Two: " + characterNames[j]))
//         }
//     }
//     return arr
// }


// var arr = quadraticTime(["Agnes", "Bart", "Carl"])
// console.log(arr)
// console.log(arr.length)




// var arr = [['x', 'o','o'], ['x', 'o','x'],['x','o','x']]
// function ticTac(arr){
//     for(var i = 0; i < arr.length; i++){
//         for(var j = 0; j < arr[i].length; j++){
//             console.log(arr[i][j])
//         }
//     }
// }

// ticTac(arr)



// var arr = [['x', 'o','o'], ['x', 'o','x'],['x','o','x']]
// function ticTac(arr){
//     var newArr = arr.join(' ')
//     for(var i = 0; i < newArr.length; i++){
//         console.log('|' + newArr[i].join(' ') + '|')
//     }
// }

// ticTac(arr)


// function exampleThree(arr) {
//     var counter = 0
//     arr.forEach(function(num) {
//         if (arr.indexOf(num + 1) !== -1) {
//             counter += 1
//         }
//     })
//     return counter
//  }


//  console.log(exampleThree([1,2,3,4,5,6]))




// function secondSmallest(myArr) {
//     var min = myArr[0];
//     var minIndex = 0;
//     myArr.forEach(function(num, index) {
//         if (num < min) {
//             min = num;
//             minIndex = index;
//         }
//     })
   
//     var secondMin = min === myArr[0] ? myArr[1] : myArr[0]

//     myArr.forEach(function(num, index) {
//         if (num < secondMin && index !== minIndex) {
//             secondMin = num;
//         }
//     })

//     return secondMin
// }


// console.log(secondSmallest([1,2,3,5]))






var arr = [2, 4, 5, 10, 22, 120, 2480]
function secondSmallest(arr){
    var sortArr = arr.sort(function(a,b){
        return a > b
    })
    return sortArr[1]
}


console.log(secondSmallest(arr))



