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
        this.sum = 0;  
      }

      insert(data) {
         this.head = new Node(data, this.head);
      }

      /**
       * 
       * @param {*} data : number - it could be anything
       * @param {*} index : number
       * 
       * We need to insert a data at given index- itreate throgh linklist using two pointer prev and current 
       * create new node = update prev.next with node and new node.next with current
       */
      insertAtIndex(data, index = 0) {
          let count = 0,
              prev = this.head,
              current = this.head;
          while(count < index) {
              prev = current;
              current = current.next;
              count += 1;
          }

          const newNode = new Node(data, current.next);
          prev.next = newNode;
      }

      /**
       * 
       * @param {*} data : number|string
       * @param {*} index : number
       * @returns LinkList
       * 
       * It is similar to insert, just updates the current pointer data
       */

      updateAtIndex(data, index = 0) {
           let count = 0,
               current = this.head;
            
               while (count < index) {
                   current = current.next;
                   count +=1;
               }

               current.data = data;

               return this.head;
      }

      invertLinkList () {

      }

      print () {

         let current = this.head;
         while (current !== null ) {
            console.log(current.data);
            // this.arrayValues.unshift(current.data);
            current = current.next;
        }
      }

      /**
       * 
       * @param {*} current : Node
       * @returns void
       */
      printRec (current) {
         if (current === null) {
            return;
         } else if (current == 'r') {
            this.printRec(this.head);
         } else {
            // this.sum += current.data;
            console.log(current.data ? current.data: '')
            this.printRec(current.next);
         }
      }

      /**
       * Find the value at given Index
       */

      valueAtIndex(index) {

         if (index < 0) return `Index should be greater than zero`;

         let current = this.head,
             count = 0;
         while (current !== null && count !== index) {
            count += 1;
            current = current.next;
         }
         return current?.data || `Doesn't exist`;
      }

      valueAtIndexRec(index, count = 0, current = this.head) {
         if (index < 0) return `Index should be greater than zero`;
         if (count === index) {
            return current.data;
         }

         if (current === null) return false;

         return this.valueAtIndex(index, count++, current.next);
      }

}

const a = new LinkList(2, null);
a.insert(8);
a.insert(3);
a.insert(7);

// console.log(a.insertAtIndex(1, 0));

console.log(a.updateAtIndex('Hello', 1));
console.log(a.printRec('r'))







