class Node {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.right = right;
        this.left = left;
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.inorder = [];
        this.postorder = []
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
    postOrder(node = this.root) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            this.postorder.push(node.value);
        }
    }

   
    inOrder(node = this.root) {
        if (node !== null) {
            this.inOrder(node.left);
            this.inorder.push(node.value);
            this.inOrder(node.right);
        } 
    }
}


const tree = new Tree(); 
// tree.postOrder();// {15, 28, 25, 35, 30, 45, 55, 70, 60, 50, 40}


tree.insert(40).insert(30).insert(50).insert(25).insert(35).insert(15).insert(28).insert(45).insert(60).insert(55).insert(70)
tree.inOrder();
tree.postOrder();
console.log(tree.inorder); //{15, 28, 25, 35, 30, 45, 55, 70, 60, 50, 40}
console.dir(tree, {depth: null});

