const sumAll = function(num1, num2) {
    if(typeof(num1) !== "number" || typeof(num2) !== "number" || Math.min(num1,num2) < 0)
        return "ERROR";
    const maxNum = Math.max(num1,num2);
    const minNum = Math.min(num1,num2);
    let sum = 0;
    for(let i = minNum; i <= maxNum; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
