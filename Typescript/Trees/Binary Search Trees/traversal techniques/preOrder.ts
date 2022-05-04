class Tree {
    value: number;
    left: Tree | null = null;
    right: Tree | null = null;
    root: Tree | null = null;
    constructor(value: number = 0, left: Tree | null = null, right: Tree|null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    insert(value: number) {

        const tree = new Tree(value);
        if (!this.root) {
            this.root = tree;
            return this;
        }

        let current = this.root;

        while(current) {
            if (current.value < value) {
                if (current.right === null) {
                    current.right = tree;
                    return this;
                }
                current = current.right;
            } else {
                    if (current.left === null) {
                        current.left = tree;
                        return this;
                    }
                current = current.left;
           }
        }
    }
}


const tree = new Tree(12);

tree.insert(10).insert(9).insert(13).insert(7).insert(12).insert(8);

console.dir(tree, {depth: null, colors: true});
