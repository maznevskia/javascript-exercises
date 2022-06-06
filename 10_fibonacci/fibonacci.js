const fibonacci = function(n) {
    if (n < 1) return "OOPS";
    let array = [1];
    for ( let i = 1; i < n; i++) {
        if (i == 1)
            array.push(i);
        else 
            array.push(array[i-1]+array[i-2]);
    }

    return array[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
