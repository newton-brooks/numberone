// var rooms = [
//     {
//         price: 200,
//         location: '11 Broadway, NY',
//         maxOccupants: 3,
//         amenities: ['washer/dryer', 'wifi', 'cable']
//     },
//     {
//         price: 100,
//         location: '11 Delancey, NY',
//         maxOccupants: 1,
//         amenities: []
//     },
//     {
//         price: 2000,
//         location: '1 Park Pl, NY',
//         maxOccupants: 2,
//         amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
//     }
// ];

// // make the string exactly as long as len
// function padTo(str, len) {
//     if (str.length > len) {
//         return str.slice(0, len - 3) + '...'
//     } else {
//         while (str.length < len) {
//             str += ' '
//         }
//         return str;
//     }
// }

// // make the string exactly as long as len
// function padLeft(str, len) {
//     var money = str
//     if (money.length > len) {
//         return money.slice(0, len - 3) + '...'
//     } else {
//         while (money.length < len) {
//             money = ' ' + money
//         }
//         return money;
//     }
// }

// function toMoney(num) {
//     return '$' + num.toString()
// }

// function whatsAvailable(rooms) {
//     for (var i = 0; i < rooms.length; i++) {
//         if (rooms[i].reserved) {
//             continue;
//         }
//         console.log(
//             padTo(rooms[i].location, 20), 
//             ' ', 
//             padLeft(toMoney(rooms[i].price), 8)
//         );
//     }
// }

// function bulletPoints(list) {
//     return '\n - ' + list.join('\n - ')
// }

// function showDetails(room) {
//     console.log('Location:', room.location)
//     console.log('Price:', toMoney(room.price))
//     console.log('Max. Occupancy:', room.maxOccupants)
//     console.log('Amenities:', bulletPoints(room.amenities))
// }

// function reserve(which) {
//     rooms[which].reserved = true
//     console.log('Thank you for reserving')
// }

// whatsAvailable(rooms);

// console.log('----------')

// var selected = 2;
// showDetails(rooms[selected]);

// console.log('----------')

// reserve(selected);

// console.log('----------')

// whatsAvailable(rooms);




// Create an object to hold information on your favorite recipe.
//  It should have the following properties: title, number of servings, and 
//  ingredients (an array). Create a function that logs the recipe information,
//   so it looks like this:


// var recipe = {title: 'chicken', servings: 3, ingredients: ['jerk sauce', 'chicken', 'pepper'] }
// function favoriteRecipe(object){
//   for (var key in object){
//       if(key === 'ingredients'){
//             console.log(key + ':' ) 
//           for(var i = 0; i < object[key].length; i++){
//              console.log(object[key][i])
//           }
//       } else {
//         console.log(key + ':' + recipe[key])
//       }
//     }
// }
// // 

// favoriteRecipe(recipe)




// Create a function prettyLog that logs a recipe information. 
// A recipe is an object to that has the following properties: title,
// number of servings, and ingredients (an array). The output should look like 
// this: (make sure there 


// function prettyLog(object){
//     for (var key in object){
//         if(key === 'ingredients'){
//             console.log(key + ':' + object[key].join(' > '))
//         } else {
//             console.log(key + ':' + object[key])
//         }
//     }
// }


// prettyLog(recipe)


// Write a function getProps that takes an object as an argument and returns
//  all the keys of
//  that object in 
// an array.

// function getProps(object){
//     var newArr = []
//     for (var key in object){
//         newArr.push(object[key])
//     }
//     return newArr
// }

// console.log(getProps(recipe))





// Write a function getObjLength that returns the length of an object.
//  For this exercise, the length is the number of properties the object has.

// function getObjLength(obj){
//     var sum = 0
//     for(var key in obj){
//         if(key){
//             sum += 1
//         }
//     }
//     return sum
// }

// console.log(getObjLength(recipe))




// Create an array of films, where each film has the following properties: 
// title, director, and a boolean indicating if you started watching it. 
// Create a function that iterates over the array and logs the title and director 
// for each film. Like this:

// var films = [
//     {
//       name: 'Psycho',
//       director: 'Alfred Hitchcock',
//       released: 1960,
//       watched: true
//     },
//     {
//       name: 'Citizen Kane',
//       director: 'Orson Welles',
//       released: 1941,
//       watched: false
//     },
//     {
//       name: 'The Usual Suspects',
//       director: 'Bryan Singer',
//       released: 1995,
//       watched: true
//     }
//   ]
// function printAll(films){
//   for(var i = 0; i < films.length; i++){
//       console.log(films[i]['name'])
//   }
// }

// printAll(films)

//   function LogFilms(arr){
//       for(var i = 0; i < arr.length; i++){
//           if(films[i].watched){
//               console.log('You already watched ' + films[i].name + ', ' +  'directed by ' + films[i].director)
//           } else {
//               console.log(' You still need to watch ' + films[i].name + ', ' +  'directed by ' + films[i].director)
//           }
//       } 
//   }

// LogFilms(films)


// Let's put everything together by building a small todo list program. 
// Here are the steps:

// Decide what each todo task will look like: create a javascript object with at minimum the properties description and completed
// Create a todos array to hold all todo objects.
// Create a function that adds a todo to the todos array.
// Create a function that shows all todos.
// Create function that marks a todo as completed (based on the index number).


// var todos = [{task: 'clean room', completed: true}, {task: 'wash clothes', completed: false}]


// function addTodo(task, complete){
//     newTodo = {task: task, complete: complete}
//     return todos.push(newTodo)
// }

// function showAllTodo(){
//     return todos
// }

// function markComplete(index){
// todos[index].completed = true
// return todos[index]
// }

// console.log(showAllTodo())
// console.log(markComplete(1))


// console.log(markComplete(3))
