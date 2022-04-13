/**
 * Node creation class
 */
 class Node {
    /**
       *
       * @param {number | string} val
       * @param {number | string} next
       */
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  
  /**
   * Linklist class
   */
  class LinkList {
    /**
       *
       * @param {number | string} data
       * Creates the first node and assign the head
       */
    constructor(data) {
      this.head = new Node(data);
      this.size = 0;
    }
  
    /**
     *
     * @param {*} data
     * insert the nodes to the LinkList
     */
    insert(data) {
      this.head = new Node(data, this.head);
    }
  
    /**
     * print the LL in form of array
     */
    print() {
      const values = [];
  
      let current = this.head;
      while (current) {
        values.push(current.val);
        current = current.next;
      }
  
      console.log(values);
    }

    /**
     * 
     * @return {number}
     * It uses reservoir sampling for random numbers
     */
    random() {
        let result = [];

        if (this.head === null) return null;

        let current = this.head;
        let count = 1;

        while (current) {

            const random = Math.trunc(Math.random() * count);
            const random_1 = Math.trunc(Math.random() * count);

            if (random  === 0|| random_1 === 0) {
                result.push(current.val);
            }

            

            current = current.next;
            count++;
        }
        console.log(result);
    }
  
  }
  
  const l1 = new LinkList(1);
  
  for (let i = 2; i < 11; i++) {
    l1.insert(i);
  }
  
  l1.print();
  l1.random();
//   l1.invert(3);
//   l1.print();
  



  