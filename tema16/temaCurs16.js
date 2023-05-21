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

function find_FirstNotRepeatChar(str) {
  var arra1 = str.split(" ");
  var result = "";
  var ctr = 0;

  for (var x = 0; x < arra1.lenght; x++) {
    ctr = 0;

    for (var y = 0; y < arra1.lenght; y++) {
      if (arra1[x] == arra1[y]) {
        ctr = ctr + 1;
      }
    }
    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}

//ex 6
const PI = 3.14;
function getSurfaceCircle(radius) {
  var surfaceCircle = PI * Math.pow(radius, 2);
  return surfaceCircle;
}

console.log("Raza cercului este: " + getSurfaceCircle(3));

//ex 7

function reverseNumber(num) {
  var reverseNum = 0;
  while (num !== 0) {
    var lastDigit = num % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    num = Number.parseInt(num / 10);
  }
  return reverseNum;
}

console.log("Numar inversat: " + reverseNumber(32243));

//ex 8

function palindromeNumber(num) {
  var arrayDigits = String(num).split("");

  for (var i = 0; i < arrayDigits.length / 2; i++) {
    if (arrayDigits[i] !== arrayDigits[arrayDigits.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(palindromeNumber(2332));

//ex 9

function randomNumber(a, b) {
  var x = Math.floor(Math.random() * (b - a) + a);
  //Math.floor rotunjeste in jos si il face numar intreg
  //Math.ceil rotunjeste in sus
  return x;
}

console.log(randomNumber(6, 50));

//ex 10

function getVowelsCount(str) {
  const arrayVowels = ["a", "e", "i", "o", "u"];
  var result = 0;
  for (var i = 0; i < str.length; i++) {
    if (arrayVowels.indexOf(str.charAt(i)) > -1) {
      result++;
    }
  }
  return result;
}

console.log(getVowelsCount("masina"));
