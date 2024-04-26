const removeFromArray = function(str, ...args) {
    const ans = [];
    for(let i = 0; i < str.length; i++)
    {
        if(!args.includes(str[i]))
            ans.push(str[i]);
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
