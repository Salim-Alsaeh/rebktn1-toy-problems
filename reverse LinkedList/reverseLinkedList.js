/*
Write a function that reverses a linked list.
​
Explanation:
​
Given the below linked list:
​
	A -> B -> C -> D -> E -> null
​
Return:
​
	E -> D -> C -> B -> A -> null
​
Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes by adding any new properties
*/
// Helpers

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail === null) {
      list.tail = node;
      list.head = node;
      return;
    }
    list.tail.next = node;
    list.tail = list.tail.next;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return;
    }
    var removed = list.head.value;
    list.head = list.head.next;

    return removed;
  };

  list.contains = function(target) {
    var pointer = list.head;
    var flag  = false;

    var findElement = function(element){
      if (element.value === target ) {
        flag = true;
        return;
      }
      if (element.next != null) {
         findElement(element.next);
      } 
    }
    findElement(pointer);
    return flag;
  };

  return list;
};
var Node = function (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null; 
  return obj;
}
var reverseLinkedList = function(linkedList) {
  var newList = LinkedList();
  var arr = [];
  var p = linkedList.head;
  while(p !== null) {
    arr.push(p.value);
    p = p.next;
  }
  for (var i = arr.length - 1; i >= 0; i--) {
    newList.addToTail(arr[i]);
  }
  return newList;
};

