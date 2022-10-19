function x(str){

     let len = str.length;
     let j = 1;
     let v = 0;

     for (let i=0; i<str.length;i++){
      
        if (str[i]==" "){
            j++;
        }

        if ((str[i]=="a")||(str[i]=="e")||(str[i]=="i")||(str[i]=="o")||(str[i]=="u")||(str[i]=="y")||
        (str[i]=="A")||(str[i]=="E")||(str[i]=="I")||(str[i]=="O")||(str[i]=="U")||(str[i]=="Y")){
            v++;
        }

     }
     console.log("length = ", len) ;
     console.log("number of word = ",j);
     console.log("number of vowel = ",v);
}
console.log(x("hello and WelcomY"));
