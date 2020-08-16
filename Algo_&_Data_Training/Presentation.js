class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.count = 0;
    }

    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            this.count++
            return this
        } else {
            var runner = this.root;
            while (true) {
                if (val === runner.val) return undefined;
                if (val > runner.val) {
                    if (!runner.right) {
                        runner.right = newNode;
                        this.count++
                        return this;
                    } else {
                        runner = runner.right;
                    }
                } else if (val < runner.val) {
                    if (!runner.left) {
                        runner.left = newNode;
                        this.count++
                        return this;
                    } else {
                        runner = runner.left;
                    }
                }
            }
        }
    }

    insert_recursive(val, runner = this.root) {
        var newNode = new Node(val);
        if (!runner) {
            this.root = newNode;
            return this
        }
        if (val === runner.val) return undefined;
        if (val > runner.val) {
            if (!runner.right) {
                runner.right = newNode;
                this.count++
                return this;
            } else {
                return this.insert_recursive(val, runner = runner.right)
            }
        } else if (val < runner.val) {
            if (!runner.left) {
                runner.left = newNode;
                this.count++
                return this;
            } else {
                return this.insert_recursive(val, runner = runner.left)
            }
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

    contains_recurise(val, runner = this.root) {
        if (!runner) {
            return false;
        }
        if (val == runner.val) {
            return true
        } else if (val > runner.val) {
            return this.contains_recurise(val, runner = runner.right)
        } else {
            return this.contains_recurise(val, runner = runner.left)
        }
    }


    min_recurisve(runner = this.root) {
        if (!this.root || this.count == 1) {
            return undefined;
        } else {
            if (!runner.left) {
                return runner
            } else {
                return this.min(runner = runner.left)
            }
        }
    }

}

var tree = new BinarySearchTree()

tree.insert_recursive(10)
tree.insert_recursive(12)
tree.insert_recursive(6)
tree.insert_recursive(4)
tree.insert_recursive(2)
console.log(tree.contains_recurise(2, runner = this.root))