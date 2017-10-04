var readline = require('readline')


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


var options = '[list,...., show[n], reserve n]$' 

var rooms = [
    {
        price: 200,
        location: '11 Broadway, NY',
        maxOccupants: 3,
        amenities: ['washer/dryer', 'wifi', 'cable']
    },
    {
        price: 100,
        location: '11 Delancey, NY',
        maxOccupants: 1,
        amenities: []
    },
    {
        price: 2000,
        location: '1 Park Pl, NY',
        maxOccupants: 2,
        amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
    }
];

// make the string exactly as long as len
function padTo(str, len) {
    if (str.length > len) {
        return str.slice(0, len - 3) + '...'
    } else {
        while (str.length < len) {
            str += ' '
        }
        return str;
    }
}

// make the string exactly as long as len
function padLeft(str, len) {
    var money = str
    if (money.length > len) {
        return money.slice(0, len - 3) + '...'
    } else {
        while (money.length < len) {
            money = ' ' + money
        }
        return money;
    }
}

function toMoney(num) {
    return '$' + num.toString()
}

function whatsAvailable() {
    console.log(
        '#', 
        '...',
        padTo('Address', 30),
        ' ',
        padLeft('Price', 8)
    )
    for (var i = 0; i < rooms.length; i++) {
        if (rooms[i].reserved) {
            continue;
        }
        var counter = i + 1
        console.log(
            counter.toString(),
            '...',
          padTo(rooms[i].location, 30), 
            ' ', 
            padLeft(toMoney(rooms[i].price), 8)
        );
    }
}

function bulletPoints(list) {
    return '\n - ' + list.join('\n - ')
}

function showDetails(n) {
    var room = rooms[n]
    console.log('ROOM DETAILS:' + (n + 1))
    console.log('-----------------\n')
    if(room.reserved === true){
        console.log('This room has been reserved')
    } else {
    console.log('Location:', room.location)
    console.log('Price:', toMoney(room.price))
    console.log('Max. Occupancy:', room.maxOccupants)
    console.log('Amenities:', bulletPoints(room.amenities))
    }
}

function reserve(n) {
    if(rooms[n].reserved){
        console.log("it's already reserved.")
    } else {
        rooms[n].reserved = true
        console.log('Thank you for reserving')
    }
 
}



// whatsAvailable(rooms);

// console.log('----------')

// var selected = 2;
// showDetails(rooms[selected]);

// console.log('----------')

// reserve(selected);

// console.log('----------')

// whatsAvailable(rooms);


rl.on('line', function(input){
    var inputArr = input.split(' ')
    if(inputArr[0] === 'list'){
        whatsAvailable()
    } else if (inputArr[0] === 'show'){
        showDetails([inputArr[1] - 1])
    } else if (inputArr[0] === 'reserve'){
        reserve([inputArr[1] - 1])
    }
    console.log(options)
})


console.log('Select one of ' + options)