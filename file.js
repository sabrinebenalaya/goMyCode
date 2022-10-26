console.log("function that return the length of a sentence, the number of word and the number of vowel")
function x(str) {
  let j = 1;
  let v = 0;
  let ch = str.toUpperCase()
  for (let i = 0; i < ch.length; i++) {
    if (str[i] == " ") {
      j++;
    }

    if (
      str[i] == "y" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U" ||
      str[i] == "Y"
    ) {
      v++;
    }
  }
  console.log("length = ", str.length);
  console.log("number of word = ", j);
  console.log("number of vowel = ", v);
}

console.log(x("hello and WelcomY"));


console.log("*********"); 
function test(str1, str2){
    let f = false;
    let i= 0;
    let c =0; 
    do {     
        if (str1[str1.length-str2.length]==str2[i]){
            f=true;
            c++;
            i++;
        }
    }while((f==false)&&(c==str1.length))
    return f
}

console.log("function that return true if a str1 is at the end of str2: ",test("sabrine", "ine"))

console.log("*************");

console.log("**************");

function testP(str) {
  let res = false;
  let j = str.length;
  let n = j / 2;
  for (let i = 0; i < n; i++) {
    if (str[i] == str[j-1]) {
      res = true;
      j--;
    }else {
        res= false
    }
  }
  return res;
}
console.log("function that returns if a string is irreversible : ", testP("azsssidza"));

console.log("*************");

console.log("**************");

function element(n){   
    let s= 0;
    for (let i=n[0]; i<=n[1]; i++ ){
        s= s+ i;
    }
   return s;
}

console.log("function that returns the sum of the array : ", element([2,3]));

console.log("*************");

console.log("**************");

 function test3(str, n){
    let ch="";
    for (let i=0; i<=n-1; i++){
        ch=ch+str
    }
    return ch;
 }
 console.log("function that repeat a str n times : ", test3("*",3))

 console.log("*************");

console.log("**************");

 function test3(str, n){
    let ch="";
    for (let i=0; i<=str.length-1; i++){
        for(let j=0; j<=n-1; j++)
        {
            ch=ch+str[i]

        }
    }
    return ch;
 }
 console.log("function that repeat all the character of str n times : ",test3("hello",2))
 
 console.log("*************");

console.log("**************");

function test4(tab1, tab2, n){
    let j=0;
    let l=0

    let k=0;
    let t=[];
    for (let i= 0; i<tab2.length+tab1.length; i++){
        if (i<n){
            t.push(tab2[i])
            j++
        }
        if ((i>=n)&&(i<=n+tab1.length-1)){
            t.push(tab1[l])
            l++
        }
        if (i>n+tab1.length-1){
            t.push(tab2[j])
            j++
        }

    }
    return t;
}
console.log("function that take two table and return the table two in the position n of table one : table is",test4([1,2],[5,1,3,4,33],3))

console.log("*****************")
console.log("*****************")

function test5 (str){

    let t = [];
    let i = 0;
    ch = "";    
        while (i<=str.length-1){
            if (str[i]!=" "){
                ch=ch+str[i];
            }
            if((str[i]==" ")||(i==str.length-1))
            
            {
                t.push(ch);
                ch = "";
            }
            i++;
        }   
    return t;
        
    }
    
console.log("function that convert a sentence in the table of word : ",test5("hello from the other side"));

console.log("*******************")
console.log("*******************")

function test6( str, str1, str2){
    let t = test5(str);
    let ch="";
    for (let i= 0; i<=t.length-1; i++){
        if (t[i]==str1){
            t[i]=str2;
        }
        ch=ch+" "+t[i];
    }
    return ch;

}
console.log("function that replace a word in the sentence by another word : " , test6("hello from the other side", "the", "a"))

console.log("*********************")
console.log("*********************")

function test7(t){
    let obj ={}
    for (let i=0; i<=t.length-1; i++){
      obj[i]=t[i]
    }
    return obj;
}
console.log ("function that return an object from a table :",test7([1,2,3,4]));

console.log("*********************")
console.log("*********************")
function get (){
    let t =[]
    let i =0;
        return Object.values(arguments)     
}
console.log("function that return the value of object : ", get([1,2], "e"));

console.log("*********************")
console.log("*********************")
function delet(tab){
    let a =[];
    for (let key in arguments){
        if (key!=0){
            a.push(arguments[key])
        }
     
    }

   for (let i=0; i<tab.length;i++){
        for(let j=0; j<a.length; j++){
            if (tab[i]===a[j]){
                tab.splice(i,1)                
            }
        }
    }
    return tab
}
console.log ("function that delete an arguments in the table :",delet([1,2,3,4],2,3))

console.log("*********************")
console.log("*********************")

function product(v1, v2){
    let prod = 0;
    for (let i=0; i<v1.length; i++){
        prod += v1[i]*v2[i];
    }
    return prod;
}
if (product([0,0,0],[1,0,2])==0){
    console.log("ok")
}else{
    console.log("nok")
}