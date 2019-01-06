// assuming value is always an integer
//
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let childNode = new Tree(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
