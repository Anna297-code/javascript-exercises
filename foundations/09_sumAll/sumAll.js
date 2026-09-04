const sumAll = function(a, b) {
    if ((a <= 0 || !Number.isInteger(a)) || (b <= 0 || !Number.isInteger(b))){
        return "ERROR";
    }

    const start = Math.min(a, b);
    const end = Math.max(a, b);

    let sum = 0;

    for (let index = start; index <= end ; index++) {
        sum += index;
        
    }
return sum
};

// Do not edit below this line
module.exports = sumAll;
