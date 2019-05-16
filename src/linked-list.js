//A Blockchain is a linked list, so to replicate a blockchain, we will implement the most basic Linked List - with just the pieces we need.
function Node(element){
  this.element = element;
  this.prev = null;
}
function LinkedList () {
  this.size = 0;
  this.tail = null; 

  this.add = (element) => {
    const node = new Node(element)
    if(this.head == null){
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail = node;
    }
    this.size += 1
  }
}

module.exports = {
  Node,
  LinkedList
}
