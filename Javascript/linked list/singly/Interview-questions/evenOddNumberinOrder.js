/**
How will you modify a linked list of integers so that all even numbers
//appear before all odd numbers in the modified linked list?
//Also, keep the even and odd numbers in the same order.

Example:
Input: 17->15->8->12->10->5->4->1->7->6->NULL
Output: 8->12->10->4->6->17->15->5->1->7->NULL
*/
/**
 * NodeLL class
 */
class NodeLL {
/**
 *
 * @param {number |string| null} value
 * @param {number| string| null} next
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
* @param {null | string | number} value
*/
  constructor(value = null) {
    this.value = value;
  }

  /**
   *
   * @param {null | string | number} value
   */
  insert(value) {
    this.head = new NodeLL(value, this.head);
  }

  /**
   * Prints LL
   */
  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

/**
 *
 * @param {LinkList} list
 * @return {LinkList}
 * Steps
 * check if the value is odd or even
 *  if even keep in current list
 *  else remove the node and add it to the oddlist
 */
const evenOdd = (list) => {
  let current = list.head;
  let oddList = null;
  let previous = null;
  while (current) {
    if (current.value % 2 !== 0) {
      oddList = new NodeLL(current.value, oddList);
      previous.next = current.next;
    }
    previous = current;
    current = current.next;
  }
  previous.next = oddList;
  return list.head;
};

const l1 = new LinkList(1);

for (let i = 12; i >= 2; i--) {
  l1.insert(i);
}


l1.print();

console.log(evenOdd(l1));

