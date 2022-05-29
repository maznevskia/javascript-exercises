const repeatString = function( string, number ) {
    endString = '';

    if ( number < 0 ) {
        return 'ERROR';
    }

    for ( let i = 0; i < number; i++ ) {
        endString += string;
    }

    return endString;
};

// Do not edit below this line
module.exports = repeatString;
