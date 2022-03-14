/**
 * BST is useful when you need to search using comparison
 * 
Node - Each single object or data point.
Root - The first and uppermost node in the tree from which all other nodes are derived from.
Edge - A connection between two nodes.
Parent - The immediate ancestor of a lower node.
child - The immediate descendant of a higher node.
Siblings - Two nodes on the same depth with the same parent.
Leafs - The bottommost nodes with no children.
Depth - The height of the tree measured in levels with the number of edges away from the root, so level 2 is only two edges away from the root.
Breadth - The width of the tree measured by the number of leafs.
Subtree - A node and its descendants which could be treated as an independent tree.
 */

class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
        constructor() {
            this.root = null;
        }

        #createRoot(node) {
            if (this.root === null) {
                console.log(node);
                this.root = node;
            }
            return this;
        }

        #createNode(data) {
            return new Node(data);
        }

        insertNode(data) {
            if (this.root === null) {
                this.#createRoot(this.#createNode(data));
                return this;
            }

            let current = this.root;
            while (current) {
                if (current.value < data) {
                    if (current.right === null) {
                        current.right = this.#createNode(data);
                        return this;
                    }
                    current = current.right;
                } else {
                    if (current.left === null) {
                        current.left = this.#createNode(data);
                        return this;
                    }
                    current = current.left;
                }
            }
        }

        searching(value) {
            if (this.root) {
                let current = this.root;
                let sum = 0;
                while(current) {
                    if (current.value === value) return current;
                    else if (current.value > value) {
                        current = current.left
                    } else if (current.value < value){
                        current = current.right
                    } else {
                        return 'Doesn\'t exist'
                    }
                }
            }
        }

        sumofBranches() {
            let current = this.root;
            let value = 0;
            let sum = 0;
            let sums = [];
            while (current) {
               
                    if (current.left === null) {
                        sums.push(sum + current.left);
                        current = current.left;
                    } else {
                        sum += current.value;
                        current = current.left; 
                    }
                
                    
                if (current.right === null) {
                        sums.push(sum + current.right);
                        current = current.right;
                    } else {
                        sum += current.value;
                        current = current.right; 
                    }
                
            }
            return sums;
        }
       
}

// const node1 = new Node(10);
const bst = new BST();
bst.insertNode(10);
bst.insertNode(11);
bst.insertNode(9).insertNode(12)
console.log(bst.searching(111));
// console.log(node1);
// console.log(bst);

console.log(bst.sumofBranches());