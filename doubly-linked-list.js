class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
   this.head = null;
   this.tail = null;
   this.length = 0;
  }

  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val, null, null);
    if(this.length === 0){
      // if array is empty point both head and tail to new node
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      
    }else{
      // point the previous head prev prop to new Node
      this.head.prev = newNode;
      // point the new node next prop to current head
      newNode.next = this.head;
      //  change the head to the new node
      this.head = newNode;
      // add length
      this.length++;
    }
    
  }

  addToTail(val) {
    const newNode = new DoublyLinkedListNode(val, null, null);
    if (this.length === 0) {
      // if array is empty point both head and tail to new node
      this.head = newNode;
      this.tail = newNode;
      this.length++;

    } else{
      // point the prev tail next prop to new Node
      this.tail.next = newNode;
      // point the new node prev prop to prev tail 
      newNode.prev = this.tail;
      // change the tail to new node 
      this.tail = newNode;
      // add length
      this.length++;
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;