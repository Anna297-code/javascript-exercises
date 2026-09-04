const reverseString = function(str) {
    let char = str.split('');
    let charReversed = char.reverse();
    let result = charReversed.join('');

    return result;
 

};

// Do not edit below this line
module.exports = reverseString;
