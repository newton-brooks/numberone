'use strict';
/*
 *   Boilerplate
 */


var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
}

// End of boilerplate

var ESCAPE_MESSAGE = 'You escaped the room!'

/**
 * @function findElem
 * @param  {any[]} arr
 * @param  {function} callback
 * @return {any | void} {the first element, if exists in the array, to satisfy the callback}
 */
function findElem(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
}


/**
 * Result
 * @constructor
 * @param {string} {description}
 * @param {string[]} [items]
 */
function Result(description, items){
    this.description = description;
    this.items = items || null;
}

/**
 * RoomObject
 * @constructor
 * @param  {string} name
 * @param  {string} description
 * @param  {string[]} items  
 * @param  {string[]} neededItems
 */
function RoomObject(name, description, items, neededItems, actions) {
    this.name = name;
    this.description = description;
    this.items = items;
    this.neededItems = neededItems;
    this.actions = actions; 
}

var door = new RoomObject('Door','you need the code',[],['1995'],'use code')
var drawer = new RoomObject('Drawer','slids drawer open',['key'],[],'use drawer')
var closet = new RoomObject('Closet','a dusty closet',['flashlight','blanket'],[],'use flashlight')
var Laptop = new RoomObject('Laptop', 'Solve the riddle: get half code needed to unlock the door.', ['1,9'] , [], 'use laptop')
var TV = new RoomObject('Television', 'Watch the news to get hald the code needed to unlock the door', ['19'], [], 'use television'  )


var RoomObjectsArray = []
RoomObjectsArray.push(door,drawer,closet, Laptop, TV )




var room = new Room(RoomObjectsArray)
var rooms = []
rooms.push(room)


/**
 * @function {getItems}
 * @return {string[]}
 */
RoomObject.prototype.getItems = function () {
    var itemsRef = this.items;
    this.items = [];
    return itemsRef;
};

/**
 * @function {removeNeededItem}
 */
RoomObject.prototype.removeNeededItems = function () {
    this.neededItems = [];
};

/**
 * @function {isItemNeeded} 
 * @param  {string} itemName
 * @return {boolean}
 */
RoomObject.prototype.isItemNeeded = function (item) {
    return this.neededItems.indexOf(item) !== -1
};

/**
 * @function {useItem} 
 * @param  {string} item
 * @return {boolean}
 */
RoomObject.prototype.useItem = function(item) {
    var isNeeded = this.isItemNeeded(item)
    if (!isNeeded) {
        return new Result("Could not use " + item + " on " + this.name);
    } else {
        this.removeNeededItems();
        return new Result(" Used " + item + " -> " + this.name);
    }
}

/**
 * @function hasItems
 * @return {boolean}
 */
RoomObject.prototype.hasItems = function(){
    return this.items.length !== 0;
}

/**
 * @function hasItems
 * @return {boolean}
 */
RoomObject.prototype.needsItems = function(){
    return this.neededItems.length !== 0;
}

/**
 * @function interact
 * @return {Result}
 */
RoomObject.prototype.interact = function (action) {
    if (this.actions.indexOf(action) === -1){
        return new Result("cannot " + action + " " + this.name)
    } else if (this.needsItems()) {
        return new Result(this.description)
    } else if (this.hasItems()) {
        return new Result("You " + action + " the " + this.name, this.getItems()) 
    } else if (this.name === "Door") {
        return new Result(ESCAPE_MESSAGE)
    } else {
        return new Result("didn't find anything useful")         
    }
}

/**
 * Room
 * @constructor
 * @param  {RoomObject[]} objects
 */
function Room(objects, exit) {
    this.objects = objects;
    this.exit = exit;
}



/**
 * @function {getObject}
 * @param  {string} objectName
 * @return {RoomObject | void}
 */
Room.prototype.getObject = function (objectName) {
    var name = objectName.toLowerCase()
    var object = findElem(this.objects, function (object) {
        return object.name.toLowerCase() === name
    })
    return object
}


/**
 * Player
 * @constructor
 * @param  {string[]} items 
 * @param  {Room} room  
 */
function Player(room) {
    this.items = [];
    this.currentRoom = room
}


var player = new Player(room)

/**
 * @function {getItem}
 * @param  {string} itemName
 * @return {string | void}
 */
Player.prototype.getItem = function (itemName) {
    var name = itemName.toLowerCase()
    var item = findElem(this.items, function (itemName) {
        return itemName.toLowerCase() === name
    })
    return item
}



/**
 * @function {addItems}
 * @param  {string[]} items
 */
Player.prototype.addItems = function (items) {
    this.items = this.items.concat(items)
}

/**
 * @function {examineObject}
 * @param  {string} objectName
 * @return {string}
 */
Player.prototype.interactWithObject = function (objectName, action) {
    var object = this.currentRoom.getObject(objectName)

    if (object === undefined) {
        return objectName + " not found in room"
    } else {
        var result = object.interact(action);
        if (result.items){
            this.addItems(result.items)
            return result.description + "\n" + "found items: " + result.items
        }
        return result.description;
    }
}

/**
 * @function {useItem} use item on object
 * @param  {string} itemName
 * @param  {string} objectName
 * @return {string}
 */
Player.prototype.useItem = function (itemName, objectName) {
    var item = this.getItem(itemName)
    var object = this.currentRoom.getObject(objectName)

    if (item === undefined) {
        return itemName + " not found in inventory"
    } else if (object === undefined) {
        return objectName + " not found"
    } else {
        var result = object.useItem(item);
        return result.description;
    }
}

function Game() {
    this.currentRoomIndex = 0;
    this.rooms = rooms;
}


var Game1 = new Game()

Game.prototype.getCurrentRoom = function(){
    return this.rooms[this.currentRoomIndex]
}

Game.prototype.getNextRoom = function(){
    this.currentRoomIndex++;
    return this.rooms[this.currentRoomIndex]
}

/**
 * @function getObjectNames
 * @param  {RoomObject[]} objects
 * @return {string}
 */
function getObjectNames(objects) {
    var objectNames = objects.map(function (object) {
        return object.name
    })
    return objectNames.join("\n")
}

/**
 * @function view
 * @param  {string} [message]
 * @return {string}
 */
function view(message) {
    message = message || ""
    var room = player.currentRoom
    var title =
        "--Escape the room-- \n" + 
        "1. [action] [object] \n" + 
        "2. use [item] [object] \n" 

    var objects =
        "--You See-- \n" + getObjectNames(room.objects) + "\n";

    var items =
        "--Your Items-- \n" + player.items.join("\n") + "\n";

    var input =
        "--Your Input--";

    return title + objects + items + message + input;
}

function parseInput(words){
    
    if (words.length === 2){
        var action = words[0].toLowerCase()
        var objectName = words[1].toLowerCase();
        var message = player.interactWithObject(objectName, action)
        if (message === ESCAPE_MESSAGE){
            return "YOUR'E FREE"
        }
        return message
    } else if (words[0] === "use" && words.length === 3) {
        var itemName = words[1].toLowerCase();
        var objectName = words[2].toLowerCase();
        var message = player.useItem(itemName, objectName)
        return message;
    } else {
        return "invalid command"
    }
     
}

/**
 *  Called when a user presses <Enter>
 */
rl.on('line', function (input) {
    clear()

    var words = input.split(' ')
    
    var message = "-- message -- \n" 
                  + parseInput(words)
                  + "\n"

    console.log(view(message))    
});


// Create an array of RoomObject objects


// Create an array of Room objects


// Create a new Game

// Create a new Player


clear()
console.log(view())

