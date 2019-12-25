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
// its a tree problem god
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

// unfinished tree
var rockPaperScissorsTrees = (num) => {
    var chars = ['R', 'P', 'S'];
    var charTrees = [new Tree('R'), new Tree('P'), new Tree('S')];

    var addTrees = function(node, n) {
        if (n === 0) {
            return;
        }

        for (var i = 0; i < charTrees.length; i++) {
            charTrees[i].addChild(new Tree(charTrees[i]))
        }
    }

}

var Tree = function(value) {
    var newTree = {};
    newTree.value = value;
    newTree.parent = null;
    // your code here
    newTree.children = []; 
    extend(newTree, treeMethods)
  
    return newTree;
  };
  
  var treeMethods = {};
  
  var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  };
  
  treeMethods.addChild = function(value) {
    var node = Tree(value);
    node.parent = this;
    this.children.push(node)
  };
  
  treeMethods.contains = function(target) {
      var flag  = false;
  
      var findElement = function(element){
        if (element.value === target ) {
          flag = true;
          return;
        }
        if (element.children) {
           element.children.forEach(function(child){
        findElement(child);
           });
        } 
      }
      findElement(this);
      return flag;
  };
  
  treeMethods.removeFromParent = function(){
    this.children = [];
    this.parent.children = this.parent.children.filter(function(element){
      return this.value === element.value
    });
  }
