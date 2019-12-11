/*
Given two binary trees and imagine that when you put one of them to cover the other, 
some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, 
then sum node values up as the new value of the merged node. Otherwise,
the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
 

Note: The merging process must start from the root nodes of both trees.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
	var t1Arr = [];
	var t2Arr = [];

	var travese = function(node, arr = []) {
		console.log(node)
		arr.push(node.val);
		if(node.left === null) {
			arr.push(undefined);
		} 
		if(node.left !== null) {
			travese(node.left, arr);
		}
		if(node.right === null) {
			arr.push(undefined);
		} 
		if(node.right !== null) {
			travese(node.right, arr);
		}
		return arr;
	}
	t1Arr = travese(t1);
	t2Arr = travese(t2);
	console.log(t1Arr) // [1, 3, 5, undefined, undefined, undefined, 2, undefined, undefined]
	console.log(t2Arr) // [2, 1, undefined, 4, undefined, undefined, 3, undefined, 7, undefined, undefined]

	var length = t1Arr.length > t2Arr.length ? t1Arr.length : t2Arr.length;
	var result = [];
	for (var i = 0; i < length; i++) {
		if (t1Arr[i] !== undefined && t2Arr[i] !== undefined ) {
			result.push(t1Arr[i] + t2Arr[i]);
		}
		if (t1Arr[i] === undefined && t2Arr[i] !== undefined) {
			result.push(t2Arr[i])
		}
		if (t2Arr[i] === undefined && t1Arr[i] !== undefined) {
			result.push(t1Arr[i])
		}
	}
	// then we create a tree upon that result array
	return result;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


// Input: 
// 	Tree 1                     Tree 2                  
//           1                         2                             
//          / \                       / \                            
//         3   2                     1   3                        
//        /                           \   \                      
//       5                             4   7                  
// Output: 
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7

var root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.left = new TreeNode(3);
root1.left.left = new TreeNode(5);

var root2 = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left = new TreeNode(1);
root2.left.right = new TreeNode(4);
root2.right.right = new TreeNode(7);

mergeTrees(root1, root2)


