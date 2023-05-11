//ex 1
function getPowerNumber(a, b) {
  var res = 1;
  for (var i = 0; i < b; i++) {
    res = res * a;
  }
  return res;
}

var powerNum = getPowerNumber(4, 3);
console.log(powerNum);

//ex 2

let duplicateNumbers = [5, 3, 3, 2, 5, 4, 5, 6, 6, 7, 6, 5, 3];

function getDuplicateNumberArray(arrayNums) {
  var duplicateNums = [];
  for (i = 0; i < arrayNums.length; i++) {
    for (j = i + 1; j < arrayNums.length; j++) {
      if (
        arrayNums[i] == arrayNums[j] &&
        !duplicateNums.includes(arrayNums[i])
      ) {
        duplicateNums.push(arrayNums[i]);
        break;
      }
    }
  }
  return duplicateNums;
}

console.log(getDuplicateNumberArray(duplicateNumbers));

//ex 3

let longestStringArr = ["abc", "abcdefghi", "a", "abcdefgcrt", "ab"];

function getLongestStringArr(arr) {
  var longestString = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
}

console.log(getLongestStringArr(longestStringArr));

//ex 4

const conversion = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

let romanNumber = "MCMXXIX";
function getIntegerFromRomanNumber(s) {
  let total = 0;
  let current;
  let currentValue;
  let next;
  let nextValue;

  for (var i = 0; i < s.length; i++) {
    current = s.charAt(i);
    currentValue = conversion[current];

    next = s.charAt(i + 1);
    nextValue = conversion[next];

    if (currentValue < nextValue) {
      total = total - currentValue;
    } else {
      total = total + currentValue;
    }
  }
  return total;
}

console.log(getIntegerFromRomanNumber(romanNumber));

//inspirat model de pe net

//5

let celsiusConvert = 50;

function convertCelsiusToFahrenheit(num) {
  var numFahrenheit = num * 1.8 + 32;
  return numFahrenheit;
}

console.log(convertCelsiusToFahrenheit(celsiusConvert));
