/* eslint-disable require-jsdoc */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkList {
  constructor(value) {
    this.head = new Node(value, this.head);
  }
}
