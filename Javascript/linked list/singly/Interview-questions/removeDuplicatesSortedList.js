/* eslint-disable require-jsdoc */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkList {
  constructor(value) {
    this.head = new Node(value);
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  printList() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    console.log(arr);
  }

  removeDuplicatesfastForward() {
    let current = this.head;

    while (current && current.next) {
      if (current.value === current.next.value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  removeDuplicates() {
    let prev = this.head;
    let current = this.head;

    while(current) {
        
    }
  }
}


const list1 = new LinkList(4);

for (let i = 2; i >= 0; i--) {
  list1.insert(i);
  list1.insert(i);
  list1.insert(i);
}


list1.printList();
list1.removeDuplicates();
list1.printList();
