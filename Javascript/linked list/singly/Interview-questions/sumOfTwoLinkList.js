/**
 * @params {node} - Node
 */
class Node {
/**
 *
 * @param {*} value - int
 * @param {*} next - Node
*/
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * @params {int} value - some number
 * @params {Node} next - some node
 */
class LinkList {
  /**
   *
   * @param {*} value - number
   * @param {*} next - Node
   */
  constructor(value) {
    this.value = value;
  }
  /**
   *
   * @param {*} value - integer value
   */
  insert(value) {
    this.head = new Node(value, this.head);
  }

  /**
   *
   * @param {*} head - Linklist
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
   * @param {*} list1 - Linklist1
   * @param {*} list2 - Linklist2
   * @return {*} number
   */
function sumLinkList(list1, list2) {
  let head1 = list1.head;
  let head2 = list2.head;

  let value1 = '';
  let value2 = '';
  while (head1 || head2) {
    if (head1 !== null) {
      value1 = head1.value + value1;
      head1 = head1.next;
    }

    if (head2 !== null) {
      value2 = head2.value + value2;
      head2 = head2.next;
    }
   
  }


  console.log(value1, value2);
  return +value1+ +value2;
}


const l1 = new LinkList(10);
l1.insert(9);
l1.insert(8);
l1.insert(7);

const l2 = new LinkList(6);
l2.insert(5);
l2.insert(4);
l2.insert(3);
l2.insert(2);

console.log(sumLinkList(l1, l2));
