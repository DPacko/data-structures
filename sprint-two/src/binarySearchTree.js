var BinarySearchTree = function(value) {
  this.value = value;
  // add .left (greater) and .right (less) properties
  this.left = null;
  this.right = null;
};

// add insert method
BinarySearchTree.prototype.insert = function(val){
  // compare own value
  if(this.value !== val){
    // compare value to node's value,
    // if less than, then insert to node on left
    if(this.value > val){
      // if this.left is null
      if(this.left === null){
        // create new BinarySearchTree and assign this.left to it
        this.left = new BinarySearchTree(val);
      }
      // if not
      else {
        // call insert func on this.left
        this.left.insert(val);
      }
    } else {
    // if greater, insert to node on right;
      // if this.right is null
      if(this.right === null){
        // create new BinarySearchTree and assign this.right to it
        this.right = new BinarySearchTree(val);
      }
      // if not
      else {
        // call insert func on this.right
        this.right.insert(val);
      }
    }
  }
},

BinarySearchTree.prototype.contains = function(val){
  // check this value and return true if it is the same as val
  if (this.value === val) {
    return true;
  }
  // compare this value to val
  if (this.value < val) {
     // if less than, then check right node
            // check to see if there's a node
    if (this.right !== null) {
      // recurse with that node
      return this.right.contains(val);
    }
  } else {
   // else check the left node
   // check to see if there's a node
   if (this.left !== null) {
     // recurse with that node
     return this.left.contains(val);
   }
  }
  // returns false if not found
  return false;
},

BinarySearchTree.prototype.depthFirstLog = function(cb){
  // execute the callback on myself
    cb(this.value);
  // check if left exists
    if (this.left !== null) {
      // recurse down left
      this.left.depthFirstLog(cb);
    }
    // check if right exists
    if (this.right !== null) {
      // recurse down right
      this.right.depthFirstLog(cb);
    }
}

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log n) - logarithmic time (Depends on height of the tree)
 contains: O(log n) - logarithmic time (Depends on height of the tree)
 depthFirstLog: linear time
 */
