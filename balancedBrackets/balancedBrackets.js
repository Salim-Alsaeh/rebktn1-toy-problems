/*
Balanced Brackets
Given a string, return true if its arrangement of
parenthesis (), curly-brackets {}, and square-brackets []
would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
    var obj = {};
    var flag = false;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            obj[str[i]] = 1;
        }
    }
    return Object.keys(obj).every((el, i) => {
        return isBalancedwWithType(el, str);
    });
    
};

var isBalancedwWithType = (type, str) => {
    let type2 = String.fromCharCode(str.charCodeAt(0) + 2);
    if(type === '(') type2 = ')';

    let counter = 0;
    for (var i = 0; i < str.length; i++) {
        if(str[i] === type2 ) counter--;
        if(counter < 0) return false;
        if(str[i] === type ) counter++;
    }
    return counter === 0;
}

///////////////////////////////////////////////////////
var isBalancedOptimazed = function (str) {
    var result = [];
    let typesOfBracks = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (var char of str) {
        if (types[ch]) result.push(types[ch]);
        if (ch === result[result.length - 1]) result.pop();
    }
    return result.length === 0;
};

