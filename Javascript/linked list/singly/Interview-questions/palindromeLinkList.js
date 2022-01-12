/**
 * Node - node
 */
class Node {
  /**
     *
     * @param {*} value - number or any
     * @param {*} next - Node
     */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * LinkList - LinkList
 */
class LinkList {
/**
 *
 * @param {*} value - number or any
 */
  constructor(value) {
    this.head = new Node(value);
  }

  /**
   *
   * @param {*} value - number or any
   */
  insert(value) {
    this.head = new Node(value, this.head);
  }

  // eslint-disable-next-line valid-jsdoc
  /**
   * @return - boolean
   */
  checkIfPanlindrome() {
    let current = this.head;
    let simpleStr = '';
    let reverseStr = '';

    while (current) {
      simpleStr = simpleStr + current.value;
      reverseStr = current.value + reverseStr;
      current = current.next;
    }
    console.log(simpleStr, reverseStr);
    return simpleStr === reverseStr;
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

const l1 = new LinkList(1);
l1.insert(2);
l1.insert(2);
l1.insert(1);
l1.insert(1);

console.log(l1.checkIfPanlindrome());
l1.print();
