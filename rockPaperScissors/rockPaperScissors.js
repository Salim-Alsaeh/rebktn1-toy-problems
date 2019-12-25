/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/
// its a tree problem
var rockPaperScissors = function () {
    var chars = ['R', 'P', 'S'];
    var result = [];
    for (var i = 0; i < chars.length; i++) {
        for (var j = 0; j < chars.length; j++) {
            for (var k = 0; k < chars.length; k++) {
                result.push([chars[i] + chars[j] + chars[k]])
            }
        }
    }
    return result;
};

rockPaperScissors()