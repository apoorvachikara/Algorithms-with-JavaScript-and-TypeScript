class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
  

    // insert at first node
    insertNodeAtFirst(data) {
          this.head = new Node(data, this.head);
          this.increaseSize()
    }

    // insert at last node
    
    insertAtLastNode(data) {
        let node = new Node(data);
        let current;
        // if empty, assign head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.increaseSize();
    }

    // insert at index 
    insertAtIndex(index, data) {
         let length = 0,
             current = this.head;

        if (index === 0) {
            this.insertNodeAtFirst(data);
            return;
        }

        while(length !== index) {
             current = current.next;
             length += 1; 
        }

        current.next = new Node(data, current.next);
        this.increaseSize();
    }

    // get at index
    getAtIndex(index) {
       
        if (index < 0 || index > this.size) {
            return `Invalid data`;
        }

       let current = this.head,
           count = 0;
        
       while (count < index) {
           current = current.next;
           count += 1; 
       }

       console.log(current.data);
    }
    // remove at index 


    // print the list 
     print() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
     }
    // clear the list

    increaseSize() {
        this.size += 1; 
    }

}

const ll = new LinkList();

ll.insertNodeAtFirst(200);
ll.insertNodeAtFirst(300);
ll.insertNodeAtFirst(400);
ll.insertAtLastNode(100);
ll.insertAtIndex(0, 500)

console.log('************');
ll.getAtIndex(4);
console.log('************');

ll.print();
// console.log(ll);