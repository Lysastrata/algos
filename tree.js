function node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}
function tree() {
  this.root = null;
}
tree.prototype.print = function (node) {
  if (node) {
    console.log(node.value);
    this.print(node.left);
    this.print(node.right);
  }
};
tree.prototype.inorder = function (node) {
  if(node){
    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }
};

tree.prototype.add = function (val) {
  if (!this.root) {
    this.root = new node(val);
    // console.log('root added', val);
    return;
  }
  var currentNode = this.root;
  var newNode = new node(val);
  while (currentNode) {
    if (currentNode.value>newNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
         // console.log('left added', newNode.value);
        break;
      }else {
        currentNode = currentNode.left;
         // console.log('moving left');
      }
    }else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        // console.log('right added', newNode.value);
        break
      }else {
        currentNode = currentNode.right;
        // console.log('moving right');
      }
    }
  }
};
  var testTree = new tree()
  var myTree = new tree()
function orderedArray(arr) {

  if (arr.length===1) {
    myTree.add(arr[0])
    return
  }else if (arr.length>1) {
    let mid = Math.floor(arr.length/2);
    myTree.add(arr[mid]);
    orderedArray(arr.slice(0, mid));
    orderedArray(arr.slice(mid +1, arr.length))
  }
}
// orderedArray([0,1,2,3,4,5,6,7,8,9])
orderedArray([2,4,6,8,10,11,12,14])
myTree.add(5)
myTree.print(myTree.root)
//                10
//         6                12
//    4       8       11         14
//  2   5
function unorderedArray() {
  var arr = [7,2,11,3,16,1,23,22]
  for (var i = 0; i < arr.length; i++) {
    testTree.add(arr[i])
  }
  // testTree.inorder(testTree.root)
  // testTree.print(testTree.root)
}
unorderedArray()
