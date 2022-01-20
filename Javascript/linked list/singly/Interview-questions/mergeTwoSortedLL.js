class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkList {
  constructor(value) {
    this.head = new Node(value);
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  /**
     *
     * @param {*} l1 Linklist 1
     * @param {*} l2 Linklist 2
     */
  merge(l1, l2) {
    let list1 = l1.head;
    let list2 = l2.head;
    let next; let prev;
    while (list1 && list2) {
      // console.log(list2.value);
      next = list1.next;
      list1.next = new Node(list2.value, list1.next);
      // patch need to remove
      prev = list1.next;
      list1 = list1.next.next;
      list2 = list2.next;
    }

        list1 === null ? ( list2 === null ? '' : prev.next = list2 ) : list1 = next;
  }

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
const l2 = new LinkList(11);


for (let i = 3; i < 7; i = i +2) {
  l1.insert(i);
}

for (let i = 4; i <10; i = i +2) {
  l2.insert(i);
}

// l1.insertAtIndex(22, 6)

l1.print();
l2.print();
l1.merge(l1, l2);

l1.print();
