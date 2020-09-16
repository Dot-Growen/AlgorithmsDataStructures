class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this
        } else {
            var runner = this.root;
            while (true) {
                if (val === runner.val) return undefined;
                if (val > runner.val) {
                    if (!runner.right) {
                        runner.right = newNode;
                        return this;
                    } else {
                        runner = runner.right;
                    }
                } else if (val < runner.val) {
                    if (!runner.left) {
                        runner.left = newNode;
                        return this;
                    } else {
                        runner = runner.left;
                    }
                }
            }
        }
    }

    breadthFirstSearch() {
        var queue = []
        var visited = []
        var runner = this.root
        queue.push(runner)
        while (queue.length) {
            runner = queue.shift()
            visited.push(runner.val)
            if (runner.left) queue.push(runner.left)
            if (runner.right) queue.push(runner.right)
        }
        return visited
    }

    // create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current
    // Write a helper function which accepts a node
    // Push the value of the node to the variable that stores the values.
    // If the node has a left property, call the helper function with the left property on the node
    // if the node has a right property, call the helper function with the right property on the node
    // invoke the helper function with the current variable 
    // Return the array of values
    depthFirstPreOrder() {
        var visited = []
        var current = this.root
        function traverse(node) {
            visited.push(node.val)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return visited
    }


    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current 
    // Write a helper function which accepts a node
    //** */ If the node has a left property, call the helper function within the left property on the node
    //** */ If the node has a right property, call the helper function within the right property on the node
    //** */ Push the value of the node to the variable that stores the values
    // Invoke the helper function with the current variable
    // Return the array of values

    depthFirstPostOrder() {
        var visited = []
        var current = this.root
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visited.push(node.val)
        }
        traverse(current)
        return visited

    }


    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current 
    // Write a helper function which accepts a node
    //** */ If the node has a left property, call the helper function within the left property on the node
    //** */ Push the value of the node to the variable that stores the values
    //** */ If the node has a right property, call the helper function within the right property on the node
    // Invoke the helper function with the current variable
    // Return the array of values

    depthFirstInOrder() {
        var visited = []
        var current = this.root
        function traverse(node) {
            if (node.left) traverse(node.left)
            visited.push(node.val)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return visited

    }

}

var tree = new Tree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.depthFirstInOrder())
