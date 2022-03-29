// @ts-ignore
class BinaryTreeNode {
	constructor(value, parent = null) {
		this.value = value;
		this.parent = parent;
		// Descendents are nodes
		this.left = null;
		this.right = null;
		this.step = '';
	}

	getLeft() {
		return this.left;
	}

	setLeft(node) {
		this.left = node;
		if (node) {
			node.parent = this;
		}
		node.step = this.step + 'L';
		// console.log(this.step);
		// console.log(this.getLeft().value);
	}

	setRight(node) {
		this.right = node;
		if (node) {
			node.parent = this;
		}
		node.step = this.step + 'R';
		// console.log(this.step);
		// console.log(this.getRight().value);
	}

	getRight() {
		return this.right;
	}

	getStep() {
		return this.step;
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

/* 

		MERGE SORT FUNCTIONS BELOW

*/

// Array of random numbers
let nums = [];
for (let i = 0; i < 32; i++) {
	//randomly generates the table with 10 numbers
	let a = Math.floor(Math.random() * 100 + 1);
	nums.push(a);
}

// Return the generate array of random numbers
export function getNumArray() {
	return nums;
}

// Initilize parent node
let tree = new BinaryTree(nums);

//  List for entires of nodes, their values and step
let entries = [];

// Merge sort
function mergeSort(unsortedArray, index, flag, node) {
	// No need to sort the array if the array only has one element or empty
	if (unsortedArray.length <= 1) {
		return unsortedArray;
	}

	// To indicae which split it is
	let count = index != 0 ? index : 0;

	// In order to divide the array in half, we need to figure out the middle
	let middle = Math.floor(unsortedArray.length / 2);

	// This is where we will be dividing the array into left and right
	let left = unsortedArray.slice(0, middle);
	let right = unsortedArray.slice(middle);
	++count;

	// console.log(left, right);

	function enterSplit(split, count, flag) {
		let entry = {
			count: count,
			flag: flag,
			array: split,
		};
		entries.push(entry);
		// console.log(entry);
	}

	/* console.log('Divide the array in half');
	console.log('\nSplit #' + count + flag.substring(count - 1) + '    Left: ' + left + '    Right: ' + right + '    Flag: ' + flag);
	enterSplit(left, count, flag + '0');
	enterSplit(right, count, flag + '1');

	let L = new BinaryTreeNode(mergeSort(left, count, flag + '0'));
	let R = new BinaryTreeNode(mergeSort(right, count, flag + '1')); */

	let L = new BinaryTreeNode(left);
	let R = new BinaryTreeNode(right);

	node.setLeft(L);
	node.setRight(R);

	let leftEntry = {
		value: node.getLeft().value,
		step: node.getLeft().step,
	};

	entries.push(leftEntry);

	let rightEntry = {
		value: node.getRight().value,
		step: node.getRight().step,
	};

	entries.push(rightEntry);

	// console.log(node.getLeft().value, node.getLeft().step, node.getRight().value, node.getRight().step);

	// Using recursion to combine the (left = 0) and (right = 1)
	return merge(mergeSort(left, count, flag + '0', node.getLeft()), mergeSort(right, count, flag + '1', node.getRight()));
}

function merge(left, right) {
	let resultArray = [],
		leftIndex = 0,
		rightIndex = 0;

	// We will concatenate values into the resultArray in order
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			resultArray.push(left[leftIndex]);
			leftIndex++; // move left array cursor
		} else {
			resultArray.push(right[rightIndex]);
			rightIndex++; // move right array cursor
		}
	}

	// We need to concat here because there will be one element remaining
	// from either left OR the right
	return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// console.log(mergeSort(nums, 0, 'S'));

mergeSort(nums, 0, '', tree.root);

// console.log(entries);

let depth = Math.round(Math.log(20) / Math.log(2) + 1);

// console.log(entries.sort((a, b) => (a.count > b.count ? 1 : -1)));
// console.log(entries.sort((a, b) => (a.flag.length > b.flag.length ? 1 : -1)));

// let sortedList = [];

/* for (let i = 1; i < depth; i++) {
	// Used to save the sub array
	let subarray = [];
	entries.forEach((e) => {
		if (e.flag.length == i) {
			// console.log(e.flag.length + ' ' + i);

			subarray.push(e);
			// console.log(e);
			// parseInt(e.flag, 2);
		}
	});
	// Sort the sub array by bit value
	subarray.sort((a, b) => (parseInt(a.flag, 2) < parseInt(b.flag, 2) ? 1 : -1));

	// console.log(subarray);
	// console.log('\n');

	sortedList = sortedList.concat(subarray);
} */

// console.log([...tree.preOrderTraversal()].map((x) => x.value));
// console.log(sortedList);

export function getEntries() {
	return entries;
}

let order = [
	'L',
	'R',
	'LL',
	'LR',
	'LLL',
	'LLR',
	'LLLL',
	'LLLR',
	'LLLLL',
	'LLLLR',
	'LLLRL',
	'LLLRR',
	'LLRL',
	'LLRR',
	'LLRLL',
	'LLRLR',
	'LLRRL',
	'LLRRR',
	'LRL',
	'LRR',
	'LRLL',
	'LRLR',
	'LRLLL',
	'LRLLR',
	'LRLRL',
	'LRLRR',
	'LRRL',
	'LRRR',
	'LRRLL',
	'LRRLR',
	'LRRRL',
	'LRRRR',
	'RL',
	'RR',
	'RLL',
	'RLR',
	'RLLL',
	'RLLR',
	'RLLLL',
	'RLLLR',
	'RLLRL',
	'RLLRR',
	'RLRL',
	'RLRR',
	'RLRLL',
	'RLRLR',
	'RLRRL',
	'RLRRR',
	'RRL',
	'RRR',
	'RRLL',
	'RRLR',
	'RRLLL',
	'RRLLR',
	'RRLRL',
	'RRLRR',
	'RRRL',
	'RRRR',
	'RRRLL',
	'RRRLR',
	'RRRRL',
	'RRRRR',
];

export function getOrder() {
	return order;
}

console.log(entries);
