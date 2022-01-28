/**
 * How will you find the length of a linked list which contains a cycle?
 * Floyd’s Cycle detection algorithm
 * It is also known as Tortoise and Hare problem
*/
//
/**
 * NodeLL to create nodes
 */
class NodeLL {
  /**
     *
     * @param {string | number | null} value
     * @param {string | number | null} next
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
     * @param {string | number | null} value
     */
  constructor(value = value) {
    this.head = new NodeLL(value);
    this.tail = this.head;
  }

  /**
   *
   * @param {string | number | null} value
   */
  insert(value = null) {
    const node = new NodeLL(value);
    this.tail.next = node;
    this.tail = this.tail.next;
  }

  /**
   * to make list circular
   */
  makeListCircular() {
    this.tail.next = this.head;
  }

  /**
   * Prints the list
   */
  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      console.log(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

/**
 *
 * @param {LinkList} list
 * @return {number}
 */
const detectionCycle = (list) => {
  let slowPointer = list;
  let fastPointer = list;

  while (slowPointer && fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return countLength(slowPointer);
    }
  }
};

/**
 *
 * @param {LinkList} list
 * @return {number} count
 */
const countLength = (list) => {
  let count = 1;
  let current = list;

  while (current.next !== list) {
    count += 1;
    current = current.next;
  }
  return count;
};

const l1 = new LinkList(1);
const start = process.hrtime();
for (let i = 2; i < 10000; i++) {
  l1.insert(i);
}

// this will make the list fully circular
// you can directly call countLength method as we know
// what is the start point
l1.makeListCircular();
// l1.print();
console.log(detectionCycle(l1.head));
const endTime = process.hrtime(start);
console.log('Entime', endTime);

