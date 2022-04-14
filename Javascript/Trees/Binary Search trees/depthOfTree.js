class Node  {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

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
                     return this;
                 }
                 current = current.left;
             }
        }
    }

    depth() {
        return this.maxDepthHandler(this.root, 1);
    }
    


    /**
     * Helper method
     * 
     * @param {*} root 
     * @param {*} num 
     * @return {number}
     */
    
    maxDepthHandler (root, num){   

            if(root == null){
                  return 0
              }

              if (root.right == null && root.left == null){
                  return num
              }
            
              if (root.right && root.left){
                  return Math.max( this.maxDepthHandler(root.right, num+1), this.maxDepthHandler(root.left, num + 1))
              }  else if (root.right != null){
                  return this.maxDepthHandler(root.right, num+1)
              } else {
                  return this.maxDepthHandler(root.left, num+1)
              }
    }

    depthFinder() {
        let max = 0;

        function findDepth(node, depth) {

            if (!node) {
                max = Math.max(max, depth);
                return
            }

            findDepth(node.left, depth +1);
            findDepth(node.right, depth +1);
        }

        findDepth(this.root, 0);
        return max;
    }
}

const tree = new BST();
tree.insert(10).insert(9).insert(8).insert(7).insert(11).insert(12).insert(13)
.insert(14).insert(16);
// tree.print();
console.log(tree.depth()); 
console.log(tree.depthFinder());