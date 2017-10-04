// function nameCase(name) {
//     var theRest = name.toLowerCase().trim();
//     var space = theRest.indexOf(' ');
//     var result = '';
//     while (space !== -1) {
//         var part1 = theRest.slice(0, space + 1); // "Barack "
//         theRest = theRest.slice(space + 1);
//         result += part1[0].toUpperCase() + part1.slice(1);
//         space = theRest.indexOf(' ');
//     }
//     result += theRest[0].toUpperCase() + theRest.slice(1);
//     return result;
// }



// function nameCase(name) {
//     var result = name[0].toUpperCase();
//     for (var i = 1; i < name.length; i++) {
//         if (name[i - 1] === " ") {
//             result += name[i].toUpperCase();
//         } else {
//             result += name[i].toLowerCase();
//         }
//     }
//     return result;
// }



// Write a function `XO` to check to see if a string has the same amount of 
// 'x's and 'o's. The method must return a boolean and be case insensitive. 
// The string can contain any characater.


// function XO(string){
//     var vowelCount = 0
//     for(var i = 0; i < string.length; i++){
//         if (string[i] === 'x'){
//             vowelCount++
//         } else if(string[i] === 'o'){
//             vowelCount--
//         }
//     }
//     return vowelCount === 0
// }

// console.log(XO('xoxo'))




// Write a function `countVowels` that receives a string and returns the number of
//  vowels found in the string. 

// function countVowels(string){
//     var vowels = 'aeiouAEIOU'
//     var vowelCount = 0
//     for(var i = 0; i < string.length; i++){
//         if(vowels.includes(string[i])){
//             vowelCount++
//         }
//     }
//     return vowelCount
// }

// console.log(countVowels('aeioubbbb'))


// Write a function `isPalindrome` that receives a string and returns true 
// if the string is a palindrome and false if it is not a palindrome. 


// function isPalindrome(string){
//     var backwards = ''
//     for(var i = string.length - 1; i >= 0; i--){
//        backwards += string[i]
//     }
//     return backwards === string
// }

// console.log(isPalindrome('moiii'))





// Write your own mySubString function that takes three arguments, a 
// string and two numbers: a start index and an end index. The substring should 
// include all characters from the the start index and up to (but no including) the
//  end index. If either argument is greater than the string's length, treat it as if 
//  it were equal to the string's length. if the end index is omitted, also treat it as if
//  were equal to the string's length.


// function mySubString(str, num1, num2){
//     if(num1 > str.length || num2 > str.length){
//         return str
//     } else {
//         return str.slice(num1, num2)
//     }
// }

// console.log(mySubString('giraffe', 1, 2))




// Write a function `myIncludes` that receives a string and a letter and 
// returns true if the letter is found in the string and false otherwise. 


// function myIncludes(str, lett){
//         return str.includes(lett)
// }


// console.log(myIncludes('hello', 'ello'))



// Write a function that takes a number num as an argument and logs a triangle -
//  using hashtags, with height and base equal to the value of num. For example, if 
//  the value of num is 5, the triangle will look like this:

// function logTriangle(num){
//     var triangle = ''
//     for(var i = 0; i < num; i++){
//        console.log(triangle += '#')
//     }
// }


// logTriangle(5)


// function triangle(number){
//     var triangle2 = ''
//     for(var i = 0; i < number; i++){
//        console.log(triangle2 += '#')
//     }
// }


// triangle(5)