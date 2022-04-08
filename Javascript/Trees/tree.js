class Node {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


class Tree {
    constructor() {
        this.root = null;
        this.size = 0;
        this.depth = 0;
        this.heigth = 0;
    }


    insert(data = 0) {
        const newNode = new Node(data);
        if (this.root) {
            // to insert data through looping
            this.loopThrough(data, newNode);
        } else {
            this.root = newNode;
        }

        this.increaseSize();
    }

    // need to update the context as it is not removing the elemet
    // logic is fine
    remove(data = 0, node = this.root) {
        if (!node) return null;

        let current = node;
            if (current.value > data) {
                this.remove(data, current.left);
            } else if (current.value < data) {
                this.remove(data, current.right);
            } else {

                if (current.right === null && current.left === null) {
                      current = null;
                      return
                } else {
                    // move up the smaller node
                    // that is the left node
                    current  = current.left === null ? current.right : current.left;
                    return;
                }
            }
        }

    loopThrough(data, node) {
        let current = this.root;
        while (current) {
            if (current.value > data) {
                    if (current.left === null) {
                        current.left = node;
                        return
                    } 
                    current = current.left;
            } else {
                if (current.right === null) {
                    current.right = node;
                    return
                } 
                current = current.right;
            }
        }
        
    }

    increaseSize() {
        return this.size += 1;
    }
}

const tree = new Tree();

tree.insert(10);
tree.insert(9);
tree.insert(8);
tree.insert(7);
tree.insert(6);
tree.insert(11);
tree.insert(12);
tree.insert(14);
tree.insert(15);

console.dir(tree);