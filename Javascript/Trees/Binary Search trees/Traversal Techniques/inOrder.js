class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.arr = [];
    }

    insert(value = 0) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while(current) {
            if (current.value < value) {
                 if (current.right === null) {
                    current.right = newNode;
                    return this;
                 }
                 current = current.right;
            } else {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                 }
                 current = current.left;
            }
        }
    }

    /**
     * 
     */
  
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            this.arr.push(node.value)
            this.inOrder(node.right);
        }
    }

    get res() {
        console.log(this.arr)
    }
}

const tree = new Tree();
tree.insert(10).insert(14).insert(13).insert(15).insert(6).insert(1).insert(2);

console.dir(tree, {depth: null});
tree.inOrder(tree.root);
tree.res;