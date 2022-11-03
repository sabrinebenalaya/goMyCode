console.log("*********************");
console.log("*********************");
/*Return the number (count) of vowels in the given string.*/

function getCount(ch) {
  let str = ch.toLowerCase();
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match("[aeiou]")) {
      j++;
    }
  }

  return j;
}
console.log("get count = ", getCount("abracadabra"));

console.log("*********************");
console.log("*********************");
/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log("evenOrOdd = ", evenOrOdd(4));

console.log("*********************");
console.log("*********************");
/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.*/
function getMiddle(s) {
  if (evenOrOdd(s.length) === "Even") {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[Math.round(s.length / 2) - 1];
  }
  /*return evenOrOdd(y)?s[(s.length/2)-1]+s[s.length/2]:s[(s.length/2)-0.5]*/
}
console.log("getMiddle = ", getMiddle("test"));

console.log("*********************");
console.log("*********************");
/*Very simple, given an integer or a floating-point number, find its opposite.*/
function opposite(number) {
  return number < 0 ? Math.abs(number) : number - number * 2;
}
console.log("opposite = ", opposite(-2));

console.log("*********************");
console.log("*********************");
/*accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"*/

function accum(str) {
  let s = str.toLowerCase();
  let ch = "";

  for (let i = 0; i < s.length; i++) {
    ch = ch + "-" + s[i].repeat(i);
  }

  chh = ch
    .split("-")
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1);
    })
    .join("-");

  return chh.substring(2, ch.length - 1);
}
console.log("accum = ", accum("ZpglnRxqenU"));

console.log("*********************");
console.log("*********************");
/*Given an integral number, determine if it's a square number*/
var isSquare = function (n) {
  return Math.sqrt(n) % 1 == 0 ? true : false;
};
console.log("isSquare = ", isSquare(-1));

console.log("*********************");
console.log("*********************");
/*Your task is to write a function that takes a string and return a new string with all vowels removed.*/
function disemvowel(str) {
  let reg = /[aeiou]/i;
  let ch = "";
  for (let i = 0; i < str.length; i++) {
    if (!reg.test(str[i])) {
      ch = ch + str[i];
    }
  }
  return ch;
}
console.log("disemvowel = ", disemvowel("This website is for losers LOL"));

console.log("*********************");
console.log("*********************");
/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/
function highAndLow(numbers) {
  let y = numbers.split(" ").map((el) => parseInt(el));
  let max = y[0];
  let min = y[0];
  for (let i = 1; i < y.length; i++) {
    if (y[i] > max) {
      max = y[i];
    }
    if (y[i] < min) {
      min = y[i];
    }
  }
  return max.toString() + " " + min.toString();
}
console.log("highAndLow = ", highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

console.log("*********************");
console.log("*********************");
/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*/
function XO(str) {
  let regX = /x/gi;
  let regO = /o/gi;

  if (regX.test(str) && regO.test(str)) {
    return str.match(regO).length === str.match(regX).length ? true : false;
  } else if (regX.test(str) || regO.test(str)) {
    return false;
  } else {
    return true;
  }
}

console.log("XO = ", XO("ooxx"));

console.log("*********************");
console.log("*********************");
/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.*/
function squareDigits(num) {
  let str = num.toString();
  let ch = "";
  for (let i = 0; i < str.length; i++) {
    ch = ch + (parseInt(str[i]) * parseInt(str[i])).toString();
  }
  return parseInt(ch);
}
console.log("squareDigits = ", squareDigits("9119"));

console.log("*********************");
console.log("*********************");
/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out. */
function filter_list(l) {
  return l.filter((el) => typeof el === "number");
}
console.log("filter_list = ", filter_list([1, 2, "aasf", "1", "123", 123]));

console.log("*********************");
console.log("*********************");
/*Given an array of integers your solution should find the smallest integer.*/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
console.log(
  "SmallestIntegerFinder = ",
  new SmallestIntegerFinder().findSmallestInt([78, 56, 232, 12, 8])
);

console.log("*********************");
console.log("*********************");
/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.*/
function sumTwoSmallestNumbers(numbers) {
  function compareNumbers(a, b) {
    return a - b;
  }
  return numbers.sort(compareNumbers)[0] + numbers.sort(compareNumbers)[1];
}
console.log(
  "sumTwoSmallestNumbers = ",
  sumTwoSmallestNumbers([78, 56, 232, 12, 8])
);

console.log("*********************");
console.log("*********************");
/*Given a string of words, return the length of the shortest word(s).*/
function findShort(s) {
  return Math.min(...s.split(" ").map((el) => el.length));
}
console.log(
  "findShort = ",
  findShort("bitcoin take over the world maybe who knows perhaps")
);

console.log("*********************");
console.log("*********************");
/*In a small town the population is p0 = 1000 at the beginning of a year.
 The population regularly increases by 2 percent per year and moreover
 50 new inhabitants per year come to live in the town. How many years 
 does the town need to see its population greater or equal to p = 1200 inhabitants?
 */
function nbYear(p0, percent, aug, p) {
  let y = Math.floor(p0 + p0 * (percent / 100) + aug);
  let i = 1;
  while (y < p) {
    y += Math.floor(y * (percent / 100) + aug);
    i++;
  }
  return i;
}
console.log("nbYear = ", nbYear(1000, 1, 50, 1200));

console.log("*********************");
console.log("*********************");
/*An isogram is a word that has no repeating letters, 
consecutive or non-consecutive. Implement a function
that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case. */

function isIsogram(str) {
  str = str.toLowerCase();
  return str.split("").every((el, i) => str.indexOf(el) == i);
}

console.log("isIsogram = ", isIsogram("aba"));

console.log("*********************");
console.log("*********************");
/*You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.*/
function positiveSum(arr) {
  let sum = arr
    .filter((el) => el >= 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  return sum;
}
console.log("positiveSum = ", positiveSum([1, -4, 7, 12]));

console.log("*********************");
console.log("*********************");
/*
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).*/

function DNAStrand(dna) {
  let arr = dna.split("");
  let k = arr.map((el) => {
    if (el == "A") {
      el = "T";
    } else if (el == "T") {
      el = "A";
    } else if (el == "G") {
      el = "C";
    } else {
      el = "G";
    }
    return el;
  });
  return k.join("");
}
console.log("DNAStrand = ", DNAStrand("ATTGC"));

console.log("*********************");
console.log("*********************");
/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.*/
function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .map((el) => parseInt(el))
      .sort()
      .reverse()
      .join("")
  );
}
console.log("descendingOrder = ", descendingOrder("16895"));

console.log("*********************");
console.log("*********************");
/* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.*/
function repeatStr (n, s) {
    return s.repeat(n);
  }
  console.log("repeatStr = ", repeatStr(5,"j"));
