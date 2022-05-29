const removeFromArray = function(array, ...args) {
    for ( let arg of args ) {
        index = array.indexOf( arg );

        if ( index == -1 ) continue;

        array.splice( index, 1 );
    }

    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
