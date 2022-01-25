import chalk from 'chalk';
const log = console.log;

/**
 * NodeLL class
 */
class NodeLL {
  /**
     *
     * @param {number | string | null} value
     * @param {null | NodeLL} next
     */
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Linklist class
 */
class LinkList {
  /**
     *
     * @param {number | string|  null} value
     */
  constructor(value = null) {
    this.head = new NodeLL(value);
  }

  /**
   *
   * @param {number | string|  null} value
   */
  insert(value) {
    this.head = new NodeLL(value, this.head);
  }

  /**
   * Prints the linklist in form of array
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

/**
 *
 * @param {LinkList} list1
 * @param {LinkList} list2
 * @return {LinkList}
 *
 * What algorithm will you implement to find similar elements from two
 * Linked Lists given and return the result in the form of a Linked List?
 * Assume there are no duplicates.
 *
 * Steps to be followed
 * We can create a set to keep the visited elements from list1
 * and check for list2 if it exist in the set.
 * If we find the element in the set, add it to the result linklist
 */
const checkElement = (list1, list2) => {
  let current1 = list1.head;
  let current2 = list2.head;
  let newList = null;

  const duplicates = new Set();
  while (current1 || current2) {
    duplicates.add(current1.value);
    if (duplicates.has(current2?.value)) {
      if (!newList) {
        newList = new NodeLL(current2.value);
      } else {
        newList = new NodeLL(current2.value, newList);
      }
    }

    current1 = current1?.next;
    current2 = current2?.next;
  }
  return newList;
};

const l1 = new LinkList(1);
const l2 = new LinkList(3);

for (let i = 2; i < 5; i++) {
  l1.insert(i);
};

l2.insert(4);
l2.insert(5);


l1.print();
l2.print();

log(chalk.blueBright(JSON.stringify(checkElement(l1, l2))));
