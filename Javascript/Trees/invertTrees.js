class BST {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

    insert(value) {
        let currentNode = this;
    
        while(true) {
                if (value < currentNode.value) {
                        if (currentNode.left === null) {
                            currentNode.left = new BST(value);
                            break;
                        } else {
                            currentNode = currentNode.left;
                        }
                } else {
                    if (currentNode.right === null) {
                        currentNode.right = new BST(value);
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
        }

        return this;
    }


    invert(tree = null) {
        if (tree === null) return;
        this.swap(tree);
        this.invert(tree.left);
        this.invert(tree.right);
    }

    swap(tree) {
        const temp = tree.left;
        tree.left = tree.right;
        tree.right = temp;
    }

}

const tree = new BST(10);

tree.insert(5).insert(2).insert(5).insert(1).insert(15).insert(13).insert(22).insert(14)

console.dir(JSON.parse(JSON.stringify(tree)), {depth: null})

tree.invert(tree);

console.dir(tree, {depth: null});