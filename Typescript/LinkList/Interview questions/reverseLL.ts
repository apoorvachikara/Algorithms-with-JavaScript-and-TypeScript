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
     this.tail = this.head;
   }
 
   public head: LinkNode;
   private tail: LinkNode;
 
   /**
    * Inserting new node at the top of linklist
    * @param value { Number | String}
    */
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
 
   /**
    * Insert the given node at particular, we move current and previous pointer 
    * once we reach at the index while loop breaks
    * we create a new node and update the previous.next with it 
    * similary we update the newNode.next with current pointer
    * @param value { Number | String}
    * @param index {Number}
    * @returns { LinkNode }
    */
   insertAtPosition(value: value, index: number) {
 
     if (index < 0) return `Invalid Index to add`;
 
     let count = 0;
     let current: LinkNode = this.head;
     let previous: null | LinkNode = null;
     
     
     while (current && count !== index) {
       console.log(count, index);
       previous = current;
       current = current.next;
        count += 1;
     }
     
     const newNode: LinkNode = new LinkNode(value, current);
     if (previous) return previous.next = newNode;
     this.head = newNode;
   }
   
   /**
    * Move the current pointer to the index location
    * Also, update the previous and current LinkNode
    * Once we are out of loop, we check if the index is first position or not
    * At first position we update the current pointer next to current.next
    * else we update the previous pointer next to current.next by removing the 
    * current.value 
    * 
    * @param index { Number }
    */
   remove(index) {
     let current: LinkNode = this.head;
     let count: number = 0;
     let previous: null | LinkNode = null;
 
     while (current && count !== index) {
        count += 1;
        previous = current
        current = current.next;
     }
     
     if (previous) previous.next = current.next;
     else current = current.next;
   }
 
   /**
    * Removes the node form top of the link list
    */
   removefromHead() {
     this.head = this.head.next
   }
 
   /**
    * Removes the node from last of the link list
    * There could be more efficient way like creating a tail pointer 
    * we can do that using doubly link list
    */
   removeFromTail() {
      let current: null | LinkNode = this.head;
      let previous: null | LinkNode = null;
      let count : number = 0;
 
      // this is fast loop in linklist
      while (current && current.next) {
        count += 1;
        previous = current.next;
        current = current.next.next;
      }
      console.log(count);
      previous.next = null;
   }


   revere () {
    let current: LinkNode | null = this.head;
    let next: LinkNode | null = null;
    let previous: LinkNode | null= null;

    while (current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    this.head = previous;
    this.print();
  }
 }
 
 const l1 = new LinkList(3);

 for (let i = 3; i < 10; i++) {
    l1.insertNode(i);
 }
 
 l1.print();

 l1.revere()

 