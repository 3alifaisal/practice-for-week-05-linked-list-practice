const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
const linkedList = new LinkedList();
const doubleLinkedList = new DoublyLinkedList();
// Increase the size of the linked list in each iteration
for (let i = 1; i <= 10; i++) {
    const prevDate = Date.now();

    // Add elements to the tail
    for (let j = 0; j < 10000; j++) {
        doubleLinkedList.addToTail(Math.random());
    }

    const afterDate = Date.now();
    console.log(afterDate - prevDate)

}
// linked list       
// 1321                 
// 362
// 625
// 826
// 1073
// 1290
// 1525
// 1824
// 2095
// 2281                                  
//doubleLinkedList
// 1
// 1
// 1
// 2
// 3
// 0
// 1
// 0
// 4
// 1