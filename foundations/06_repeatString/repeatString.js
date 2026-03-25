const repeatString = function (str, num) {
	let newStr = "";
	if (num >= 0) {
		for (let i = 0; i < num; i++) {
			newStr += str;
		}
	} else {
		newStr = "ERROR";
	}
	return newStr;
};

// Do not edit below this line
module.exports = repeatString;
