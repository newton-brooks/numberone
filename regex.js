// console.log(/h..e/.exec('is there a have'))

// // ? stands for one or zero matches

// console.log()

// var kanye = 'I feel like Yeezus on a Sunday'
// var yeezy = new RegExp('Yeezus')
// console.log(yeezy.exec(kanye))



// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'

// var pattern = / [a-z[a-z][a-z] /

// var pattern = / [a-z]{3} /

// text.match(pattern)   only useful if your looking for the first match
// pattern.exec(text)   better for loops
// what is the arrow?


// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'

// var pattern = /\b\w{3}\b/

// console.log(text.match(pattern))


// var pattern = /[A-Z]/
// console.log(text.match(pattern))


// console.log(text.match(pattern))

// var m;
// while(m = pattern.exec(text)){
//     console.log(m)
// } 

//  use pattern.exec when you're looping through a string, DONT FORGET THE STRING





// var text = 'There are 300,000,000 Americans, give or take.'
// var pattern = /[\d,]+/

// console.log(pattern.exec(text))



// var text = 'txting: the Great Debate'

// var pattern = /[A-Z][a-z]*/

// console.log(pattern.exec(text))



// var text = "This is an example of a hexadecimal number: af00cce1. So is this: AF11. A dad is hex but a mom isn't."

// var pattern = /\b\b/


// var text = 'This is an example.'

// pattern = /\w+/
// console.log(pattern.exec(text))



// var string = "This is an example of a hexadecimal number: af00cce1. So is this: AF11. A dad is hex but a mom isn't."
// var pattern = /\b[a-fA-F0-9]{3,16}/g;
// console.log(string.match(pattern))



// var text = 'This is an example....';
// var pattern = /\w+\W*$/

// console.log(pattern.exec(text))


// var dates = ['01/01/2000', '12/31/1999', '02/29/2017'];

// var pattern = /(/




//     var html = '<html><head>'+
//     '<title>Simple</title>'+
//     '</head><body>'+
//     'Nothing to see here'+
//     '</body></html>';


// var pattern = /<.+?>/g
// // pattern = /[<>/]\w+[></]/g
// console.log(html.match(pattern))

// var m;
// while(m = pattern.exec(html)){
//     console.log(html)
// }



// var text = "This is an example of a hexadecimal number: af00cce1. So is this: AF11. A dad is hex but a mom isn't."
// var pattern = /\b[0-9a-f]+\b/gi

// console.log(text.match(pattern))





