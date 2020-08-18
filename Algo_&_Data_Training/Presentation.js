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
            var runner = this.root;
            while (true) {
                if (val === runner.val) return undefined;
                if (val > runner.val) {
                    if (!runner.right) {
                        runner.right = newNode;
                        this.count++
                        return this;
                    }
                    runner = runner.right;
                } else {
                    if (!runner.left) {
                        runner.left = newNode;
                        this.count++
                        return this;
                    }
                    runner = runner.left;
                }
            }
        }
    }

    min(runner = this.root) {
        if(!this.root || this.count === 1) return undefined;
        if(!runner.left){
            console.log(runner.val)
            return runner.val
        } else {
            return this.min(runner = runner.left)
        }
    }

    contains(val) {
        if (!this.root) {
            return false;
        } else {
            var runner = this.root;
            while (runner) {
                if (val > runner.val) {
                    runner = runner.right;
                } else if (val < runner.val) {
                    runner = runner.left;
                } else {
                    return true;
                }
            }
            return false
        }
    }
}

var tree = new BST()
tree.add(15)
tree.add(20)
tree.add(10)
tree.add(7)
tree.add(4)
tree.add(3)
tree.min(runner = this.root)
