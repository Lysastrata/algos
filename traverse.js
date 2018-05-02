// function consecutiveSameElems(arr) {
// 	var counter= 0
// 	var tempCount = 1
// 	var temp = 0
// 	var pointer = 1
// 	var longest = arr[0]
// 	var oneNum = []
// 	if (arr.length === 1) {
// 		return 1;
// 	}
// 	while (pointer < arr.length) {
// 		if (arr[temp] === arr[pointer] && tempCount <= counter) {
// 			tempCount ++
// 			pointer ++
// 		}else if (arr[temp] === arr[pointer] && tempCount > counter) {
// 			tempCount ++
// 			counter = tempCount
// 			pointer ++
// 			longest= arr[temp];
// 		}else{
// 			temp = pointer
// 			pointer++
// 		}
// 	}
// 	for (var i = 0; i < counter; i++) {
// 		oneNum.push(longest)
// 	}
// 	console.log(oneNum);
// 	console.log(counter-1)
// }
// consecutiveSameElems([2,5,6,7,7,8,8,8,8,8,9,10])


function bitArraySort(arr) {
	var i=0
	var j=arr.length
	while (i<j) {
		if (arr[i] === 1 && arr[j] === 0) {
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i++;
			j--;
		}else if (arr[i] === 1) {
			j--;
		}else if (arr[j] === 0) {
			i++;
		}else {
			i++;
			j--;
		}
	}
	console.log(arr);
}

function targetSum(target, arr) {
	var i=0
	var j=arr.length -1
	while (i<j) {
		var sum = arr[i]+arr[j]
		if (sum === target) {
			console.log(arr[i],arr[j]);
			console.log(true);
			return;
		}else if (sum > target) {
			j--;
		}else if (sum < target) {
			i++;
		}
	}
	console.log(false);
	return
}
function targetsumunsorted(target, arr) {
	var possible = new Set();
	for (var i = 0; i < arr.length; i++) {
	 	if (possible.has(target-arr[i])) {
			console.log(true);
			return;
		}else {
			possible.add(arr[i])
		}
	}
	console.log(false);
	return
}
var target = Math.round(Math.random()*19);
var array = [];
for (var i = 0; i < 10; i++) {
	array.push(Math.round(Math.random()*10))
}
console.log(array);
console.log(target);
targetsumunsorted(target, array)
