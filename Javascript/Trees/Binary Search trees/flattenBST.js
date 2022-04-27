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
    }

    /**
     * 
     * @param {*} data 
     * @return {Tree}
     */
    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while(current) {

            if (current.value < data) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    /**
     * 
     */
    pre_order_traversal() {

    }
}

const tree = new Tree();
tree.insert(10).insert(9).insert(8).insert(7).insert(11).insert(12).insert(13)
.insert(14).insert(16);

console.dir(tree, {depth: null})