/* eslint-disable require-jsdoc */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Linklist creation class
 */
class LinkList {
  /**
   *
   * @param {number | string} value
   */
  constructor(value) {
    this.head = new Node(value, this.head);
  }
}
