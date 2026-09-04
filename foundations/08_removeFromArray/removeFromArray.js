const removeFromArray = function(array,...thingsToRemove) {
    return result = array.filter(num => !thingsToRemove.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
