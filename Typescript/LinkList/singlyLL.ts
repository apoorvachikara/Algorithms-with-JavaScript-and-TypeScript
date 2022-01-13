/**
 * Types used in th class will be put here
 */
type value = number | string;

/**
 * Node class
 */
class LinkNode {
/**
 * @param {number| string} value
 * @param {Node} next
 */
  constructor(value : value, next: LinkNode | null = null) {
    this.value = value;
    this.next = next;
  }

  public value: value;
  public next: null | LinkNode;
}

class LinkList {
/**
*
* @param {number| string} value
*/
  constructor (value: value) {
    this.head = new LinkNode(value);
  }

  private head: LinkNode;

  insertNode(value: value) {
    this.head = new LinkNode(value, this.head);
  }

  print() {
    let current: LinkNode = this.head;
    const result: Array<value> = [];
    while (current) {
       result.push(current.value);
       current = current.next;
    }
    console.log(result);
  }
}

const l1 = new LinkList(3);

for (let i = 3; i < 10; i++) {
   l1.insertNode(i);
}

l1.print();

