// @ts-ignore
class BinaryTreeNode {
	constructor(value, parent = null) {
		this.value = value;
		this.parent = parent;
		// Descendents are nodes
		this.left = null;
		this.right = null;
	}

	getLeft() {
		return this.left;
	}

	setLeft(node) {
		this.left = node;
		if (node) {
			node.parent = this;
		}
		// console.log(this.getLeft().value);
	}

	setRight(node) {
		this.right = node;
		if (node) {
			node.parent = this;
		}
		// console.log(this.getRight().value);
	}

	getRight() {
		return this.right;
	}
}

class BinaryTree {
	constructor(value) {
		this.root = new BinaryTreeNode(value);
	}

	*inOrderTraversal(node = this.root) {
		if (node.left) yield* this.inOrderTraversal(node.left);
		yield node;
		if (node.right) yield* this.inOrderTraversal(node.right);
	}

	*postOrderTraversal(node = this.root) {
		if (node.left) yield* this.postOrderTraversal(node.left);
		if (node.right) yield* this.postOrderTraversal(node.right);
		yield node;
	}

	*preOrderTraversal(node = this.root) {
		yield node;
		if (node.left) yield* this.preOrderTraversal(node.left);
		if (node.right) yield* this.preOrderTraversal(node.right);
	}
}

/* const tree = new BinaryTree([1, 2, 3, 4]);

tree.insert(1, 11, 'AC');
tree.insert(1, 12, 'BC');
tree.insert(12, 121, 'BG', { right: true }); 


[...tree.preOrderTraversal()].map((x) => x.value);
console.log([...tree.preOrderTraversal()].map((x) => x.value)); */

// ['AB', 'AC', 'BC', 'BCG']

module.exports.BinaryTree = BinaryTree;
module.exports.BinaryTreeNode = BinaryTreeNode;
