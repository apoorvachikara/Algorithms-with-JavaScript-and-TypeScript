// eslint-disable-next-line max-len
// Write a program to delete all odd positioned nodes from a circular linked list. (Consider 1-based indexing).

/**
 * NodeLL class
 */
class NodeLL {
  /**
     *
     * @param {number | string | null} value
     * @param {NodeLL | null} next
     */
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * LinkList class
 */
class LinkList {
  /**
     *
     * @param {number | string | null} value
     */
  constructor(value = null) {
    this.head = new NodeLL(value);
    this.tail = this.head;
  }

  /**
     *
     * @param {null | number| string} value
     */
  insert(value = null) {
    this.head = new NodeLL(value, this.head);
  }

  /**
   * to make linklist circular
   */
  makeCircular() {
    this.tail.next = this.head;
  }

  /**
     * Prints the linklist
     */
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


const deletingNodeAtOddPosition = (list) => {
  let current = list?.head;
  let previous = null;
  let count = 0;
  while (current) {
    if (!previous) {
      previous = current;
    }

    if (count % 2 !== 0) {
      previous.next = current.next;
    }

    previous = current;
    current = current.next;
    count += 1;
  }
};

const l1 = new LinkList(1);
l1.insert(2);
l1.insert(3);
l1.insert(4);
l1.insert(5);
l1.print();


deletingNodeAtOddPosition(l1);
l1.print();

