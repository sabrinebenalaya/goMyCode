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
function repeatStr(n, s) {
  return s.repeat(n);
}
console.log("repeatStr = ", repeatStr(5, "j"));

console.log("*********************");
console.log("*********************");
/* Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.*/
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b ? true : false;
}

console.log("isTriangle = ", isTriangle(1, 2, 2));

console.log("*********************");
console.log("*********************");
/*You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.*/

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 != 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
console.log("findNextSquare = ", findNextSquare(121));

console.log("*********************");
console.log("*********************");
/*Your task is to write a function maskify, which changes all but the last four characters into '#'.*/
function maskify(cc) {
  return cc.substring(0, cc.length - 4).replace(/./g, "#") + cc.slice(-4);
}
console.log("maskify = ", maskify("64607935616"));

console.log("*********************");
console.log("*********************");
/* Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) */
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
console.log("rowSumOddNumbers = ", rowSumOddNumbers(42));

console.log("*********************");
console.log("*********************");
/*Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's
 divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return
  the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).*/
function divisors(integer) {
  let arr = [];
  for (let i = 2; i <= integer / 2; i++) {
    if (integer % i == 0) {
      arr.push(i);
    }
  }
  return arr.length == 0 ? integer.toString() + " is prime" : arr;
}
console.log("divisors = ", divisors(13));

console.log("*********************");
console.log("*********************");
/*We need a function that can transform a number (integer) into a string.*/
function numberToString(num) {
  return num.toString();
}
console.log("numberToString = ", numberToString(-13));

console.log("*********************");
console.log("*********************");
/*Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.*/
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

console.log("boolToWord = ", boolToWord(false));

console.log("*********************");
console.log("*********************");
/* Remove the spaces from the string, then return the resultant string.*/
function noSpace(x) {
  // return x.split(" ").filter(el=>el!=="").join('')
  return x.replace(/ /g, "");
}
console.log("noSpace = ", noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

console.log("*********************");
console.log("*********************");
/*It's pretty straightforward. Your goal is to create a function that removes the first 
and last characters of a string. You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.*/
function removeChar(str) {
  return str.substring(1, str.length - 1);
}
console.log("removeChar = ", removeChar("eloquent"));

console.log("*********************");
console.log("*********************");
/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?*/
function makeNegative(num) {
  return num < 0 ? Math.abs(num) : -Math.abs(num);
}

console.log("makeNegative = ", makeNegative(9));

console.log("*********************");
console.log("*********************");
/*Given an array of integers, return a new array with each value doubled.*/
function maps(x) {
  return x.map((el) => el * 2);
}
console.log("maps = ", maps([1, 2, 3]));

console.log("*********************");
console.log("*********************");
/*Given a year, return the century it is in.*/
function century(year) {
  return Math.ceil(year / 100);
}

console.log("century = ", century(89));

console.log("*********************");
console.log("*********************");
/*Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.*/
function litres(time) {
  return Math.floor(time * 0.5);
}
console.log("litres = ", litres(6.7));

console.log("*********************");
console.log("*********************");
/*Your task is to write a function which returns the sum of following series upto nth term(parameter).*/
function SeriesSum(n) {
  let k = 0;
  let sum = 0;
  let i = 1;
  while (k < n) {
    sum = sum + 1 / i;
    i += 3;
    k++;
  }
  return Number(sum).toFixed(2);
}
console.log("SeriesSum = ", SeriesSum(2));

console.log("*********************");
console.log("*********************");
/*The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.*/
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}
console.log("basicOp = ", basicOp("-", 15, 18));

console.log("*********************");
console.log("*********************");
/*Complete the solution so that it reverses the string passed into it.*/
function solution(str) {
  return str.split("").reverse().join("");
}
console.log("solution = ", solution("world"));

console.log("*********************");
console.log("*********************");
/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).*/
function solutionStringEnd(str, ending) {
  //return str.substring(str.length-ending.length, str.length) == ending
  return str.endsWith(ending);
}
console.log("solutionStringEnd = ", solutionStringEnd("abc", "bc"));

console.log("*********************");
console.log("*********************");
/*Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.*/
function bonusTime(salary, bonus) {
  return bonus ? "£" + salary * 10 : "£" + salary;
}
console.log("bonusTime = ", bonusTime(10000, false));

console.log("*********************");
console.log("*********************");
/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.*/
function abbrevName(name) {
  return name
    .toUpperCase()
    .split(" ")
    .map((el) => el.substring(0, 1))
    .join(".");
}
console.log("abbrevName = ", abbrevName("Sam Harris"));

console.log("*********************");
console.log("*********************");
/*The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.*/

function DNAtoRNA(dna) {
  return dna
    .split("")
    .map((el) => {
      if (el == "T") {
        el = "U";
        return el;
      } else {
        return el;
      }
    })
    .join("");
}
console.log("DNAtoRNA = ", DNAtoRNA("CCAGAGGTT"));

console.log("*********************");
console.log("*********************");
/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order.*/
function digitize(n) {
  return n
    .toString()
    .split("")
    .map((el) => Number(el))
    .reverse();
}

console.log("digitize = ", digitize(0));

console.log("*********************");
console.log("*********************");
/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.*/
const binaryArrayToNumber = (arr) => {
  let s = 0;
  let ar = arr.reverse();
  for (let i = 0; i < ar.length; i++) {
    s = s + Math.pow(2, i) * ar[i];
  }
  return s;
};
console.log("binaryArrayToNumber = ", binaryArrayToNumber([0, 0, 0, 1]));

console.log("*********************");
console.log("*********************");
/*Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:*/
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
console.log(
  "findNeedle = ",
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

console.log("*********************");
console.log("*********************");
/* Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value, 
remove the one with a lower index. If you get an empty array/list, return an empty array/list. */
function removeSmallest(numbers) {
  return numbers.filter((el, i) => i != numbers.indexOf(Math.min(...numbers)));
}

console.log("removeSmallest = ", removeSmallest([354, 130, 338, 14, 191, 14]));

console.log("*********************");
console.log("*********************");
/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).*/
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((el) => el == true).length;
}
console.log(
  "countSheeps = ",
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

console.log("*********************");
console.log("*********************");
