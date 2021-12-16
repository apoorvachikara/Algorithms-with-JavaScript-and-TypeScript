/**
 * Creating a Node class for creating multiple nodes
 * it will take data and pointer to the previous 
 * created node.
 */

class Node {
    constructor(data = null, next = null) {
       this.data = data;
       this.next = next;
    }
}

class LinkList {
      constructor(data) {
        this.head = new Node(data);  
      }

      insert(data) {
         this.head = new Node(data, this.head);
      }
}

const a = new LinkList('A', null);
a.insert('B');
a.insert('C');


console.log(a);

