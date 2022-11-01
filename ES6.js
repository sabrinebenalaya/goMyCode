console.log("*********************")
console.log("*********************")
/*Return the number (count) of vowels in the given string.*/


function getCount(ch) {
    let str = ch.toLowerCase()
    let j = 0
    for (let i=0; i<str.length; i++){
        if(str[i].match('[aeiou]')) {
            j++
        }
    }
      
    return j;
  }
console.log("get count = ",getCount("abracadabra"))

console.log("*********************")
console.log("*********************")
/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/
function evenOrOdd(number) {
    return (number%2 === 0)?"Even":"Odd";
}
console.log("evenOrOdd = ",evenOrOdd(4))



console.log("*********************")
console.log("*********************")
/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.*/
function getMiddle(s)
{
    if(evenOrOdd(s.length)==='Even'){
        return s[(s.length/2)-1]+s[s.length/2]

    }
    else{
        return s[Math.round(s.length/2)-1]
    }
   /*return evenOrOdd(y)?s[(s.length/2)-1]+s[s.length/2]:s[(s.length/2)-0.5]*/

}
console.log("getMiddle = ",getMiddle("test"))



console.log("*********************")
console.log("*********************")
/*Very simple, given an integer or a floating-point number, find its opposite.*/
function opposite(number) {
    return number<0 ? Math.abs(number) : number-(number*2)
}
console.log("opposite = ",opposite(-2))



console.log("*********************")
console.log("*********************")
/*accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"*/

function accum(str) {
    let s=str.toLowerCase()
    let ch=""

    for (let i=0; i<s.length;i++){
        ch=ch+"-"+s[i].repeat(i)
    }


    chh =ch.split("-").map( el =>{
        return el.charAt(0).toUpperCase()+el.slice(1)
      }).join("-")

return chh.substring(2,ch.length-1)
}
console.log("accum = ",accum("ZpglnRxqenU"))



console.log("*********************")
console.log("*********************")
/*Given an integral number, determine if it's a square number*/
var isSquare = function(n){
    return Math.sqrt(n)% 1 == 0  ?true :false
  }
console.log("isSquare = ",isSquare(-1))


console.log("*********************")
console.log("*********************")
/*Your task is to write a function that takes a string and return a new string with all vowels removed.*/
function disemvowel(str) {
    let reg = /[aeiou]/i
    let ch =""
    for (let i=0; i<str.length ; i++){
        if (!reg.test(str[i])){
        ch = ch+str[i]
        }
    }
    return ch
}
console.log("disemvowel = ",disemvowel("This website is for losers LOL"))


console.log("*********************")
console.log("*********************")
/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/
function highAndLow(numbers){
    let y = numbers.split(" ").map((el)=>parseInt(el))
    let max = y[0]
    let min =y[0]
    for (let i=1; i<y.length; i++){
        if (y[i]>max){max= y[i]}
        if (y[i]<min){min = y[i]}    }
    return max.toString()+" "+min.toString() 
  }
  console.log("highAndLow = ",highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))



console.log("*********************")
console.log("*********************")
/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*/
function XO(str) {
    let regX = /x/ig
    let regO = /o/ig

    if(regX.test(str) && regO.test(str) ) {
        return (str.match(regO).length === str.match(regX).length)? true : false

    }else if (regX.test(str)||regO.test(str)){
        return false
    }else{
        return true
    }

}

console.log("XO = ",XO("ooxx"))



console.log("*********************")
console.log("*********************")
/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.*/
function squareDigits(num){
    let str = num.toString()
    let ch = ""
    for (let i=0; i< str.length; i++){
       ch= ch + (parseInt(str[i])* parseInt(str[i])).toString()
    }
    return parseInt(ch);
  }
  console.log("squareDigits = ",squareDigits("9119"))



console.log("*********************")
console.log("*********************")
/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out. */
function filter_list(l){
    return l.filter(el=> typeof(el)==='number')
}
console.log("filter_list = ",filter_list([1,2,'aasf','1','123',123]))



console.log("*********************")
console.log("*********************")
/*Given an array of integers your solution should find the smallest integer.*/
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }
console.log("SmallestIntegerFinder = ",new SmallestIntegerFinder().findSmallestInt([78,56,232,12,8]) )



console.log("*********************")
console.log("*********************")
  /*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.*/
  function sumTwoSmallestNumbers(numbers) { 
    function compareNumbers(a, b) {
        return a - b;
      }
    return numbers.sort(compareNumbers)[0]+numbers.sort(compareNumbers)[1]
  }
console.log("sumTwoSmallestNumbers = ",sumTwoSmallestNumbers([78,56,232,12,8]) )









































