/* eslint-disable require-jsdoc */

/**
 *  Creates Node
 *  return Node (value, next)
 * @param {int} value The first number.
 * @param {int} next The second number.
 * @return {int} The sum of the two numbers.
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  getIntersectionNode() {
    let a = headA;
    let b = headB;

    while (a !== b) {
      a = !!a ? a.next : headB;
      b = !!b ? b.next : headA;
    }

    return a;
  }

  connectList1and2(list1, list2) {
    let current = list2;

    const current1 = list1.next?.next;
    while (current) {
      current = current.next;
    }
    current.next = current1;
  }
}


const list1 = new LinkedList(5);

for (let index = 4; index > 0; index--) {
  list1.insert(index);
}

const list2 = new LinkedList(9);

for (let index = 8; index > 5; index--) {
  list2.insert(index);
}

list1.print();
list2.print();
list1.connectList1and2(list1, list2);

list2.print();


