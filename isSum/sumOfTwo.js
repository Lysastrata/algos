function sum(arr, total) {
  if (arr.length===1 ) {
    console.log(false);
    return false;
  }else if (arr[0]+arr[arr.length-1]===total) {
    console.log(true);
    return true;
  }else if (arr[0]+arr[arr.length-1]<total) {
    arr.splice(0,1);
    return sum(arr, total)
  }else{
    arr.pop();
    return sum(arr, total)
  }
}
sum([1,2,3,9], 8);
sum([1,2,4,4], 8);
var arr = []
var total = Math.floor(Math.random()*100)
for (var i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random()*100));
}
arr.sort(function(a, b){return a-b});
sum([arr, 50])
