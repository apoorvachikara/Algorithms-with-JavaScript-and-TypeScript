/**
 * Question Prompt:
 *
 * If we have a link list like this
 * list: [1, 2, 3, 4, 5, 6]
 * We need to reorder it such that the
 * [list[0], list[5], list[1], list[4], list[2], list[3]]
 *
 * So, as we move further from the start, we need to move back from tail
 * and keep both the nodes in the following order
 */

/**
 * Node class is used for created Linklist Nodes
 */
class NodeLL {
/**
* @param {Number| string | null} value
* @param {NodeLL | null} next
*/
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Linklist class created the LL
 */
class Linklist {
/**
 * @param {null | Number| string} value
*/
  constructor(value = null) {
    this.head = new NodeLL(value);
  }

  /**
   *
   * @param {Number | string | null} value
   * @return {Linklist}
   */
  insert(value = null) {
    this.head = new NodeLL(value, this.head);
    return this;
  }

  /**
   * print out the linklist
   * @return {LinkList}
   */
  print() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result);
    return this;
  }

  /**
   * this method will reorder the list as per the prompt
   * @return {LinkList}
   */
  reOrderList() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    };

    current = this.head;

    let start = 0;
    let end = arr.length -1;
    while (start <= end) {
      if (start === end) current.value = arr[start];
      else {
        current.value = arr[start];
        current.next.value = arr[end];
      }
      start += 1;
      end -= 1;
      current = current.next?.next;
    }

    return this;
  }
}

const ll = new Linklist(1);
ll.insert(2).insert(3).insert(4).print().reOrderList().print();
