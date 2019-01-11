// A module with some math functions

function squared(number) {
  return number * number;
}

function circleArea(radius, precision) {
  var result = Math.PI * squared(radius);
  return roundToPrecision(result, precision);
}

function circumference(radius, precision) {
  var result = 2 * Math.PI * radius;
  return roundToPrecision(result, precision);
}

function toKb(bytes, precision) {
  return roundToPrecision(bytes / 1024, precision);
}

function triangleArea(w, h, precision) {
  return roundToPrecision((w * h) / 2, precision);
}

function sum(numbers) {
  var total = 0;
  for (var number of numbers) {
    var cleanNumber = Number(number);
    if (isNaN(cleanNumber)) {
      continue;
    }
    total += number;
  }
  return total;
}

// Internal utility function (not exported)
function roundToPrecision(number, precision) {
  var precision = precision || 2; // default precision
  return Number(number.toFixed(precision));
}

function formattedCount(number) {
  number = Number(number);
  if (isNaN(number)) return 'N/A';
  if (number === 0) return 'No items';
  if (number === 1) return 'One item';
  return number + ' items';
}

module.exports = {
  squared: squared,
  circleArea: circleArea,
  circumference: circumference,
  toKb: toKb,
  triangleArea: triangleArea,
  sum: sum,
  average: average,
  formattedCount: formattedCount,
};
