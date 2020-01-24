/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
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



function linkedListIntersection(list1, list2) {
  var list1Pointer = list1.head;
  var list2Pointer = list2.head;
  var list1Count = 0;
  var list2Count = 0;

  while(list1Pointer !== null) {
    list1Count++;
    list1Pointer = list1Pointer.next;
  }
  while(list2Pointer !== null) {
    list2Count++;
    list2Pointer = list2Pointer.next;
  }
  var list1Pointer = list1.head;
  var list2Pointer = list2.head;

  var p;
  if(list1Count >= list2Count) p = list1.head
  else p = list2.head;

  while(p !== null) {
    if(list1Pointer.value === list2Pointer.value) return list2Pointer.value;
    list1Pointer = list1Pointer.next;
    list2Pointer = list2Pointer.next;
    p = p.next;
  }
  return null;

}

