//Conversion formulas
//x °C ≘ (x × ⁠9/5 + 32) °F - convert Celsius to Fahrenheit
//x °F ≘ (x − 32) × ⁠5/9⁠ °C - convert Fahrenheit to Celsius

const convertToCelsius = function (num) {
	let celsiusResult = (num - 32) * (5 / 9);

	//Round to one decimal case
	return Math.round(celsiusResult * 10) / 10;
};

const convertToFahrenheit = function (num) {
	let fahrenheitResult = num * (9 / 5) + 32;

	//Round to one decimal case
	return Math.round(fahrenheitResult * 10) / 10;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
