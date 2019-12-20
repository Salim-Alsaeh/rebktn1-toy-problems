/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
    let countRight = 0;
    let countLeft = 0;

    for (var i = 0; i < str.length; i++) {
        if(str[i] === '(' ) countRight++;
        if(str[i] === ')' ) countLeft++;
    }
    return countRight === countLeft;
};
