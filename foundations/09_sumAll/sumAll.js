const sumAll = function (start, end) {
	let min = Math.min(start, end);
	let max = Math.max(start, end);

	if (
		min < 0 ||
		!Number.isInteger(min) ||
		!Number.isInteger(max) ||
		typeof start !== "number" ||
		typeof end !== "number"
	) {
		return "ERROR";
	}

	//Sequence sum formula
	return ((max - min + 1) * (min + max)) / 2;
};
// Do not edit below this line
module.exports = sumAll;
