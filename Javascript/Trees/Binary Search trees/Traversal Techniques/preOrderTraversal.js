import util from "node:util";
class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.right = right;
        this.left = left;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value = 0) {
        const newNode = new Node(value);
        if (!this.root)  {
            this.root = newNode;
            return this;
        };

        let current = this.root;
        while (current) {
            if (current.value < value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                if (current.left === null) {
                    current.left = newNode;
                    return this
                }
                current = current.left;
            }  
        }
    }

    /**
     * preOrderTraversal using recursion
     * @param {*} node 
     * @return {Array<number>}
     */
    traverse(node = this.root) {
      if (!node) return;
       const result = [];
       this.traverselHelper(node, result);
       return result;
    }

    /**
     * preOrderTraversal using iteration
     * @param {*} node 
     * @return {Array<number>}
     */
    traverseIteration(node = this.root) {
        if (!this.root) return;
        const result = [];
        const queue = [node];
        let current = null;

        while(queue.length) {
            current = queue.pop();
            result.push(current.value);
            if (current.right) queue.push(current.left);
            if(current.left) queue.push(current.right);
        }

        return result;
    }

    /**
     * Depth helper function
     */

    traverselHelper(node, result) {
        if (!node) return 
        result.push(node.value);
        this.traverselHelper(node.left, result);
        this.traverselHelper(node.righ, result);
    }
}

const bst = new BST();
bst.insert(10).insert(7).insert(8).insert(6).insert(13).insert(11);
console.log(util.inspect(bst, {showHidden: false, depth: null, colors: true}));
console.log(bst.traverse());
console.log(bst.traverseIteration());