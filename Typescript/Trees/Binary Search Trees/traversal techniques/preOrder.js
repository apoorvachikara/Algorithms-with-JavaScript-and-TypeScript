var Tree = /** @class */ (function () {
    function Tree(value, left, right) {
        if (value === void 0) { value = 0; }
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.left = null;
        this.right = null;
        this.root = null;
        this.value = value;
        this.left = left;
        this.right = right;
    }
    Tree.prototype.insert = function (value) {
        var tree = new Tree(value);
        if (!this.root) {
            this.root = tree;
            return this;
        }
        var current = this.root;
        while (current) {
            if (current.value < value) {
                if (current.right === null) {
                    current.right = tree;
                    return this;
                }
                current = current.right;
            }
            else {
                if (current.left === null) {
                    current.left = tree;
                    return this;
                }
                current = current.left;
            }
        }
    };
    return Tree;
}());
var tree = new Tree(12);
tree.insert(10).insert(9).insert(13).insert(7).insert(12).insert(8);
console.dir(tree, { depth: null, colors: true });
