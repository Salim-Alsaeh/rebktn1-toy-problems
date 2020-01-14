// Arrayception

// Given an array of arbitrarily nested arrays, 
//return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

const arrayCeption = (arr) => {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]) && arr[i].length !== 0) {
            count = arrayCeption(arr[i])
            count++;
        } else {
            count = 1;
        }
    }
    return count;
};