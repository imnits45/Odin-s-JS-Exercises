const fibonacci = function(n) {
    let num = parseInt(n);
    if(num < 0)
        return "OOPS";
    let f1 = 0;
    let f2 = 1;
    if(num <2)
        return num;
    let ans = 0;
    for(let i = 2; i <= num; i++)
    {
        ans = f1 + f2;
        f1 = f2;
        f2 = ans;
    }
    return ans;
};

// Do not edit below this line
module.exports = fibonacci;
