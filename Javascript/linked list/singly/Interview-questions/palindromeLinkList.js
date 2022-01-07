class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkList {
    constructor (value) {
        this.head = new Node(value);
    }

    insert(value) {
        this.head = new Node(value, this.head);
    }

    checkIfPanlindrome() {
        let current = this.head,
            simpleStr = '',
            reverseStr = '';
        
        while (current) {
            simpleStr = simpleStr + current.value;
            reverseStr = current.value + reverseStr;
            current = current.next;
        }
        console.log(simpleStr, reverseStr);
        return simpleStr === reverseStr;
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
l1.insert(2);
l1.insert(2);
l1.insert(1);
l1.insert(1);
  
console.log(l1.checkIfPanlindrome())
l1.print();