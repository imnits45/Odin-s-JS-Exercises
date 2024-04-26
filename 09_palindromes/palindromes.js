const palindromes = function (str) {
    let original = "";
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9'))
            original += char.toLowerCase();
    }
    
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9'))
            reversed += char.toLowerCase();
    }
    
    return original === reversed;
};


// Do not edit below this line
module.exports = palindromes;
