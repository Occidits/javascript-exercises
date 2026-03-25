const removeFromArray = function (arr, ...num) {
	let newArr = arr.filter((item) => !num.includes(item));
	return newArr;
};

console.log(removeFromArray([2, 5, 1, 7, 0, 3], 5, 7));

// Do not edit below this line
module.exports = removeFromArray;
