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
    }

    insert(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (current) {
            if (current.value < data) {
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
}

const helper = (node1, node2, status = false) => {
   
    if (node1 !== null && node2 !== null) {
        status = helper(node1.left, node2.left);
        if (node1.value !== node2.value) return status = true;
        status = helper(node1.left, node2.right);
    }
    return status;
}

const compare = (tree1, tree2) => {
    if (!tree1 && !tree2) return "Both trees empty";
    console.log(helper(tree1, tree2));
    return helper(tree1, tree2) ? "Trees not equal": "Trees equal";
}

const tree1 = new Tree();
const tree2 = new Tree();

tree1.insert(10).insert(9).insert(8).insert(7).insert(11).insert(12).insert(13)
.insert(14).insert(16);

tree2.insert(10).insert(9).insert(8).insert(7).insert(1).insert(12).insert(13)
.insert(14).insert(16);

console.log(compare(tree1.root, tree2.root));

console.dir(tree1)

console.dir(tree2)



