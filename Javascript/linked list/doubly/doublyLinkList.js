/* eslint-disable require-jsdoc */

/** Node_1 {
//   value: 11,
//   previous: Node_2,
//   next: null
// }

// Node_2 {
//   value: 12,
//   previous: Node_3,
//   next: Node_1
// }

// Node_3 {
//   value: 13,
//   previous: null,
//   next: Node_2
// }
*/
class Node {
  constructor(value, previous = null, next = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLL {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
  }

  insert(value) {
    const previous = this.head;
    this.head = new Node(value, null, this.head);
    previous.previous = this.head;
  }

  insertAtIndex(value, index) {
    let current;
    let count = 0;
    if (index >= 0 ) current = this.head;
    else current = this.tail;

    while (current && count !== index) {
      const node = new Node(value);

      if (current.previous) {
        node.previous = current;
      } else {
        node.next = current;
      }
      current = this.head.next;
    }
  }

  remove(index) {
    let current = this.head;
    let count = 0;
    while (current && index !== count) {
      count += 1;
      current = current.next;
    }
    const prev = current.previous;
    prev.next = current.next;
  }

  print() {
    let current = this.head;
    const arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

const dll = new DoublyLL(10);
dll.insert(9.5);
dll.insert(9);
dll.insert(8);
// console.log(dll);
console.log(dll.print());
console.log(dll.remove(2));
dll.print();

