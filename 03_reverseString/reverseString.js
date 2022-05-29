const reverseString = function( original ) {
    let characters = original.length;

    let reversedString = '';

    for ( let i = characters - 1; i >= 0; i-- ) {
        reversedString += original[i]
    }

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
