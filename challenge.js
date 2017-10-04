var dictionary = []

function PushWord(word, definition){
    dictionary.push([word, definition])
 return dictionary.sort()
}


function UpdateDefinition(word, definition){
    for(var i = 0; i < dictionary.length; i++){
        if(dictionary[i][i] === word){
          dictionary[i][i + 1] = definition
          console.log('You have updated the definition of ' + dictionary[i][i])
          console.log(dictionary[i][i] + ': ' + definition)
        }
    }
    return dictionary
}

function deleteWord(word){
    for(var i = 0; i < dictionary.length; i++){
        if(dictionary[i][i] === word){
            console.log('The word ' + dictionary[i][i] + ' has been deleted from your dictionary.')
            delete dictionary[i]
        }
    }
    return dictionary
}

function getDefinition(word){
    for(var i = 0; i < dictionary.length; i++){
        if(dictionary[i][i] === word){
            return dictionary[i][i] + ' : ' +  dictionary[i][i + 1]
        }
    }
}


PushWord('walk', 'move legs')
PushWord('xavier', 'some jamaican nigga')
PushWord('code', 'to be a software developer')




// console.log(UpdateDefinition('code', 'to program'))
// console.log(deleteWord('code'))
// console.log(getDefinition('code'))
console.log(dictionary)


//  blue bear
//  blueargebeRBA


