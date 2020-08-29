class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.count = 0;
    }

    add(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            this.count++
            return this;
        } else {
            var node = this.root;
            while (true) {
                if (val === node.val) return undefined;
                if (val > node.val) {
                    if (!node.right) {
                        node.right = newNode;
                        this.count++
                        return this;
                    }
                    node = node.right;
                } else {
                    if (!node.left) {
                        node.left = newNode;
                        this.count++
                        return this;
                    }
                    node = node.left;
                }
            }
        }
    }

    min_recursive(node = this.root) {
        if (!this.root || this.count === 1) return undefined;
        if (!node.left) {
            console.log(node.val)
            return node.val
        } else {
            return this.min(node.left)
        }
    }

    min(node = this.root){
        var current = node
        while(current.left){
            current = current.left
        }
        return current
    }

    contains(val) {
        if (!this.root) {
            return false;
        } else {
            var node = this.root;
            while (node) {
                if (val > node.val) {
                    node = node.right;
                } else if (val < node.val) {
                    node = node.left;
                } else {
                    return true;
                }
            }
            return false
        }
    }

    // Set a base case if the "checker node" is null return 1
    // Set recursive functions to check the left and right children
    // if not null have the "checker node" move to the left in the recursive function
    // when null return the sum of the left and right additions plus 1


    size(node = this.root) {
        if (node === null) {
            return 0;
        }

        let left = this.size(node.left)
        let right = this.size(node.right)
        return (left + right) + 1
    }

    // Set a base case for if the Node at the root is null. if so return -1
    // set a left and right variable the recurively checks for each node in the tree
    // check for max between the left and the right then return the greater

    height(node = this.root) {
        if (!node) {
            return 0;
        }
        const left = this.height(node.left)
        const right = this.height(node.right)
        if (left > right) {
            return left + 1
        } else {
            return right + 1
        }
    }

    // create a function with the input of the root as a node
    // if node is null return 0; 
    // recursively call node moving to the right and left

    balanced(node = this.root) {
        if (!node) {
            return 0;
        }
        const left = this.height(node.left)
        const right = this.height(node.right)

        Math.abs((left - right) <= 1)
    }

    // if head is null return undefine
    // loop through the tree for the given value
    // if the node is present
    // set a condition to check if its the head
    // if so, set the minimum value on the right side to the head
    // set a sondition to check if it has children
    // if so set the minimum val of that side to its position
    // if not set the the prev node right or left property to null

    Remove(val, node = this.root) {
        if (!this.root) {
            return this.root;
        }
        console.log(node.val)
        if (val < node.val) {
            node.left = this.Remove(val, node.left)
        } else if (val > node.val) {
            node.right = this.Remove(val, node.right)
        } else {
            if (node.left == null){
                return node.right
            } else if (node.right == null) {
                return node.left
            }
            var temp = this.min(node.right);
            node.val = temp.val
            node.right = this.Remove(val, node.right)
        }
        return node;
    }


}

var tree = new BST()
tree.add(10)
tree.add(20)
tree.add(8)
tree.add(9)
tree.add(7)
tree.add(15)
tree.add(25)
tree.add(26)
tree.add(2)
tree.Remove(10, node = tree.root)


