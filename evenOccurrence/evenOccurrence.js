/*
Even Occurrence
Find the first item that occurs an even number of times in an array. 
//Remember to handle multiple even-occurrence items and return the first one. 
//Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/


var evenOccurrence = (arr) => {

    var compareArrs = (arr1, arr2) => {
        let result;
        if (!arr1 || !arr2) {
            return;
        }
        arr1.forEach((el1, i) => arr2.forEach(el2 => {
            if(el1.length > 1 && el2.length) {
                result = compareArrs(el1, el2);
            } else if( el1 !== el2) {
                result = false;
            } else {
                result = true;
            }
        }));
        return result;
    }
 
    for (var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            var filteredElementOcurrences = arr.filter(e => compareArrs(e, arr[i]));
            if(filteredElementOcurrences.length % 2 === 0) {
                return filteredElementOcurrences[0];
            } 
        } else if(typeof arr[i] === 'object' && arr[0] !== null) {
            var filteredElementOcurrences = arr.filter(e => compareArrs(Object.entries(e), Object.entries(arr[i])));
            if(filteredElementOcurrences.length % 2 === 0) {
                return filteredElementOcurrences[0];
            } 
        } else {
            var filteredElementOcurrences = arr.filter(e => e === arr[i]);
            if(filteredElementOcurrences.length % 2 === 0) {
                return filteredElementOcurrences[0];
            } 
        }
    }
    return 'aint nothing up in here';
};