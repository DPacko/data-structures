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
  // find the node, if it exists
  if (this.contains(node)) {
  // Look at all the other nodes we are connected to and tell them to delete us from their list of edges

  // Delete our own list of edges
  // Tell the graph to delete me from it.
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.edges = [];

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


