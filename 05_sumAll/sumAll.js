const sumAll = function (a, b) {
  if (a < 0 || b < 0) {
    return "ERROR";
  } else if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }
  if (a > b) {
    let c = b;
    b = a;
    a = c;
  }

  let result = a;

  for (let i = a + 1; i <= b; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
