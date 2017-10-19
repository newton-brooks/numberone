// function namesOlderThan(arr, age) {
//     return arr.filter(function (elem){
//     if(elem.age > age){
//     return elem.name
//     }
//     })
//    }



//    var students = [
//     { name: 'John', age: 18 },
//     { name: 'Ava', age: 24 }, 
//     { name: 'Marco', age: 23 }, 
//     { name: 'Mia', age: 19}
//   ]

//   console.log(namesOlderThan(students, 20))



// function strToNumArr(arr){
//     return arr.filter(function (elem){
//     if(Number(elem)) {
//     return elem
//     } else {
//     return elem 
//     }
//     })
//     }


//     var arr = ["1", "2", "mongoose", "giraffe", "5", '00000']

//     console.log(strToNumArr(arr))













function stringsToNumbers(arr) {
    return arr.filter(function (elem){ 
    if(Number(elem))
    return Number(elem)
    })
   }



   var arr = ["2", "4", "rabbit", "cat", "6", '0'] 

   console.log(stringsToNumbers(arr))