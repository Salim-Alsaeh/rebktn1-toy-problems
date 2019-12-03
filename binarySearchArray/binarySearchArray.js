/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target, start, end) {
	start = start || 0;
	end = end || array.length - 1;
	mid =  Math.floor((start + end) / 2);

	if (array[mid] === target) {
		return mid;
	}
	if (start === end) {
		return -1;
	}
	if (array[mid] < target ) {
		return binarySearch(array, target, mid + 1, end);
	} else {
		return binarySearch(array, target, start, mid - 1);
	}
};

