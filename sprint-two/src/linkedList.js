var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create new node
    let newNode = Node(value);
    // check to see if list.tail is null
    if(list.tail === null){
      // set list.head and list.tail to newNode
      list.head = newNode;
      list.tail = newNode;
    } else {
      // set node.next of list.tail to new node
      list.tail.next = newNode;
      // and setting list.tail to new node
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // check to see if list.head is null
    if (list.head === null) {
      return undefined;
    } else {
      // store value of list.head value
      let oldVal = list.head.value;
      // set list.head to node.next
      list.head = list.head.next;
      // return value of the old list.head
      return oldVal;
    }
  };

  // Find out if a target value is in one of the node values of the list
  // Return a boolean - true if it exists, false if it doesn't
  list.contains = function(target) {

    // check to see if the list is not empty
    if (list.head !== null) {
     // let's check the head and tail first since we have references to them
      if (list.tail.value === target) {
        return true;
      }
      // Create a variable to reference the current node we're checking
      let current = list.head;
      // let's go through the list and search
      while (current !== list.tail) {
        if (current.value === target) {
          return true;
        }
        // go to the next node
        current = current.next;
      }
    }
    // return false if nothing found
    return false;
  };

  return list;
}

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // contains: O(n) = Linear Time
 // addToTail: O(1) = Constant Time
 // removeHead: O(1) = Constant Time