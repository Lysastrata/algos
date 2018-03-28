function newArray(arr, rotate) {
  console.time()
  var rotated = [];
  for (var i = rotate; i < arr.length; i++) {
    rotated.push(arr[i]);
    // console.log(rotated);
  }
  for (var i = 0; i < rotate; i++) {
    rotated.push(arr[i]);
    // console.log(rotated);
  }
  console.timeEnd()
  console.log(arr);
  console.log(rotated);
}



var arr = [];
var total = Math.floor(Math.random()*50)
var rotate = Math.floor(Math.random()*total)
for (var i = 0; i < total; i++) {
  arr.push(Math.floor(Math.random()*100));
  // console.log(arr);
}
// console.log(arr);
console.log(rotate);
newArray(arr, rotate)
