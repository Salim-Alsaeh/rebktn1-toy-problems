/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters
and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

<<<<<<< HEAD
function longestRun(string) {
    var count = 0;
    var res = string[0];
    if(string.length === 0) reutrn [0, 0];
    // to get the most concecutive occurred character
    for (var i = 0; i < string.length; i++) {
        var currentCount = 1;

        for (var j = 0; j < string.length; j++) {
            if(string[i] === string[j])
            currentCount++;
        }

        if(currentCount > count) {
            count = currentCount;
            res = string[i];
        }

    }
    // to get the indexes of that character
    var result = [string.indexOf(res), (string.length - 1) - string.split('').reverse().join('').indexOf(res)];

    return result;
}
=======



>>>>>>> 95af5ca94c596181a543f52fbc950149d417307f
