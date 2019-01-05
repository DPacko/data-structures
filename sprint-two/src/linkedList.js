//
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

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
