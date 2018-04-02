function node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}
function tree() {
  this.root = null;
}
tree.prototype.add = function (val) {
  if (!this.root) {
    this.root = new node(val);
    console.log('root added', val);
    return;
  }
  var currentNode = this.root;
  var newNode = new node(val);
  while (currentNode) {
    if (currentNode.value>newNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        console.log('left added', newNode.value);
        break;
      }else {
        currentNode = currentNode.left;
        console.log('moving left');
      }
    }else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        console.log('right added', newNode.value);
        break
      }else {
        currentNode = currentNode.right;
        console.log(currentNode.value);
        console.log('moving right');
      }
    }
  }
};

var test = new tree()
var arr = [7,2,11,3,16,1,23,22]
for (var i = 0; i < arr.length; i++) {
  test.add(arr[i])
}
