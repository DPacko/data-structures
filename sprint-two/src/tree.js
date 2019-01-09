// assuming value is always an integer
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let childNode = Tree(value);
  this.children.push(childNode);
};

treeMethods.contains = function(target) {
  // recursion function
  var searchTree = function(node) {
    // check own value if it's the target
    if (node.value === target) {
      // return true
      return true;
    }
    // if children array is not empty
    if (node.children.length > 0) {
      let found = false;
     // loop through children array
     for (let i = 0; (!found && i < node.children.length); i++) {
       // invoke recursion on child element
       found = searchTree(node.children[i]);
     }
     return found;
    }
    return false;
  };
  // invoke recursion function with 'this' Tree
  return searchTree(this);
};

// executes callback function on each node.
treeMethods.everyNode = function(cb){
  // execute the callback on myself

  var cbOnTree = function(node) {
      cb(node.value);
    // recurse through the children
    // if children array is not empty
    if (node.children.length > 0) {
      // loop through children array
       for (let i = 0; (i < node.children.length); i++) {
         cbOnTree(node.children[i]);
       }
    }
  }
  cbOnTree(this);
}


/*
 * Complexity: What is the time complexity of the above functions?
  add method: constant time
  contains method: linear time
 */
