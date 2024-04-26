const repeatString = function(str, repeats) {
    if(repeats < 0)
        return "ERROR";
    let ans  = "";
    for(let i = 0; i < repeats; i++)
        ans += str;
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
