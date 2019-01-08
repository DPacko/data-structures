// Instantiate a new graph
var Graph = function() {
  // array of nodes
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create a new node with value "node"
  let newNode = new Node(node);
  // add it to the graph list of nodes
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // Check each node in the graph to see if its value is equal to "node"
  // return true if found, false if not
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // create a flag for if we find it
  let found = false;
  // find the node, if it exists
  for (let i = 0; !found && i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      found = true;
      let nodeToRemove = this.nodes[i];
      // Look at all the other nodes we are connected to and tell them to delete us from their list of edges
      for (let j = 0; j < nodeToRemove.edges.length; j++) {
        this.removeEdge(nodeToRemove, nodeToRemove.edges[j]);
      }
    // Tell the graph to delete me from it.
    this.nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    // loop to find nodes with fromNode and toNode values, assign each to variables
  let from = null;
  let to = null;
  let found = false;
  for (let i = 0; !found && i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      from = this.nodes[i];
    }
    if (this.nodes[i].value === toNode) {
      to = this.nodes[i];
    }
      // Check to see if both exist
    if ((from !== null) && (to !== null)) {
        found = true;
        // Check to see if they both have each other in their edges
        if ((from.edges.indexOf(to) !== -1) && (to.edges.indexOf(from) !== -1)){
          return true;
        }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // loop to find nodes with fromNode and toNode values, assign each to variables
  let from = null;
  let to = null;
  let found = false;
  for (let i = 0; !found && i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      from = this.nodes[i];
    }
    if (this.nodes[i].value === toNode) {
      to = this.nodes[i];
    }
      // Check to see if both exist
    if ((from !== null) && (to !== null)) {
        // for both nodes, modify their edges to push each other's node to the node's edges.
        from.edges.push(to);
        to.edges.push(from);
        found = true;
    }
  }
  console.log(this);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // loop to find nodes with fromNode and toNode values, assign each to variables
  let from = null;
  let to = null;
  let found = false;
  for (let i = 0; !found && i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      from = this.nodes[i];
    }
    if (this.nodes[i].value === toNode) {
      to = this.nodes[i];
    }
      // Check to see if both exist
    if ((from !== null) && (to !== null)) {
        // find the edge that points to the other node and delete it
        let fromIndex = from.edges.indexOf(to);
        let toIndex = to.edges.indexOf(from);
        from.edges.splice(fromIndex, 1);
        to.edges.splice(toIndex, 1);
        found = true;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // loop through the graph's nodes
  for(let i = 0; i < this.nodes.length; i++){
    // invoke function for each node
    cb(this.nodes[i].value);
  }
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.edges = [];

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: Constant time
 contains: linear time
 removeNode: linear time <- assuming we have to find the node before we remove it, otherwise, constant time
 hasEdge: linear time
 addEdge: linear time
 removeEdge: linear time
 forEachNode: linear time, but we don't know the overall time because it's based on cb's order of complexity
 */


