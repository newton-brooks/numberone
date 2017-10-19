// var cat = {
//     name: 'whiskers',
//     words: 'meow meow',
//     talk: function(){
//         console.log(this.words)
//     }
// }

// cat.talk()

// function createDog(name, breed){
//     var dog = {
//         name: name,
//         breed: breed
//     }
//     return dog
// }

// var pluto = createDog('pluto', 'labrador')
// console.log(pluto)



// //  this will create and return an object for me
// function Dog(name, breed, weight){
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }

// var charlie = new Dog('Charlie', 'Mixed', 38)
// console.log(Dog.name)

// console.log(Dog.property)



// function Rabbit(type){
//     this.type = type
// }

// var killerRabbit = new Rabbit('killer');
// var kr = {
//     type: 'killer'
// }
// var blackRabbit = new Rabbit('black')

// console.log(killerRabbit)
// console.log(blackRabbit)
// console.log(kr)
// console.log(Rabbit.prototype)

// function Rabbit(type){
//     this.type = type
// }

// Rabbit.prototype.speak = function(){
//     console.log('hello')
// }

// var killerRabbit = new Rabbit("killer")

// killerRabbit.speak = function() {
//     console.log(" I am a rabbit")
// }

// killerRabbit.speak()
// Rabbit.prototype.speak()




// function Rabbit(type, name) {
//     this.type = type;
//     this.name = name;
// }

// Rabbit.prototype.speak = function(line) {
//     console.log("The " + this.type + " rabbit " +
//                 this.name + " says '" + line + "'");
// };

// var killerRabbit = new Rabbit("killer", "George");
// console.log(killerRabbit instanceof Rabbit)
// console.log(Rabbit.prototype.speak(killerRabbit))








// distance between v1 = (x1, y1) and  v2 = (x2, y2)

// Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));


// function Rabbit(name) {
//     this.name = name;
//   }
  
//   Rabbit.prototype.eats = 'lettuce';
  
//   var rabbit = new Rabbit('Oreo');
  
//   Rabbit.prototype.eats = 'carrot';
  
// //   console.log(rabbit.eats); 

// function Rabbit(name) {
//     this.name = name
//   }
  
//   Rabbit.prototype.food = 'carrot'
  
//   var rabbit = new Rabbit('Fluffers');
  
//   rabbit.food = 'cucumber';
  
//   console.log(rabbit.food); 

// function Rabbit(name, food) { 
//     this.name = name;
//     this.food = food;
//   } 
  
//   Rabbit.prototype.food = 'carrot';
  
//   var rabbit = new Rabbit('fluffer', 'banana'); 
  
//   console.log( rabbit.food );











// Write a constructor Vector that represents a vector in two-dimensional space. 
// It takes two number arguments: x and y parameters, which it should save to properties 
// of the same name. Give the Vector prototype two methods, plus and minus, that take 
// another vector as an argument and
//  returns a new vector that has the sum or difference of the two vectors’ (the one 
//     in this and the parameter) x and y values. Add a method getLength to the prototype 
//      computes the length of the vector ;that is, the distance of the point (x, y)
//       from the origin (0, 0).

// distance between v1 = (x1, y1) and  v2 = (x2, y2)



// function vector(x,y){
//     this.x = x;
//     this.y = y
// }

// var v1 = new vector(1, 2)
// var v2 = new vector(2, 3)
// // console.log(v2)

// vector.prototype.plus = (function() {
//     console.log(v1.x + v2.x)
//     console.log(v2.y + v2.y)
// })

// vector.prototype.minus = (function(){
//     console.log(v1.x + v2.x)
//     console.log(v2.y + v2.y)
// })

// v1.plus(v2)
// v1.minus(v2)


// Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

// console.log(v1.plus(v2));



// function Vector(x,y){
//     this.x = x;
//     this.y = y 
//  }
 
//  var v1 = new Vector(2,4)
//  var v2 = new Vector(3,6)

//  Vector.prototype.add = function(vector){
//    var num1 = this.x + vector.x
//    var num2 = this.y + vector.y
//    return new Vector(num1,num2)
//  }
 
//  Vector.prototype.multiply = function(argument){
//    var num1 = this.x * argument.x
//    var num2 = this.y * argument.y
//    return new Vector (num1, num2)
//  }
 

//  Vector.prototype.minus = function(vector){
//     var num1 = this.x - vector.x
//     var num2 = this.y - vector.y
//     return new Vector(num1,num2)
//  }

// Vector.prototype.getLength = function(length){

// }




// // console.log(v1)
// // console.log(v2)
//  console.log(v1.add(v2))
//  console.log(v1.minus(v2))
// //  console.log(v1.add(v2).add(v1).add(v1))
// //  console.log(v1.multiply(v2))





















// function Vector( x, y) {
//   this.x = x;
//   this.y = y;
// }


// Vector.prototype.plus = function(otherVector){
//   var newX = this.x + otherVector.x;
//   var newY = this.y + otherVector.y;

//   return new Vector(newX, newY);
// }

// Vector.prototype.minus = function(otherVector){
//   var newX = this.x - otherVector.x;
//   var newY = this.y - otherVector.y;

//   return new Vector(newX, newY);
// }

// Vector.prototype.getLength = function(){
//   var sumOfX = this.x * this.x;
//   var sumOfY = this.y * this.y;
//   sumOfBoth = sumOfX + sumOfY;
//   length = Math.sqrt(sumOfBoth);
//   return length;
// }


// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)

// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}

// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

// var v3 = new Vector(4, 4)
// // d = sqrt ( this.x ^ 2 + this.y ^ 2)
// console.log(v3.getLength());
// => 5


//  is there a way to see all the objects that are in the prototype and all the functions that can be exercised?
