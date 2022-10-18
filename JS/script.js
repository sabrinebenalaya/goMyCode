let email = document.querySelector("#email");
let psw = document.querySelector("#psw");

let btnShow = document.querySelector("#showPsw");
const login = document.querySelector("#btn_login");

login.disabled=true;
const validation =[false, false];

email.addEventListener("change", function(e){
    let mail = e.target.value; 
    if(!(mail
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ))){
        alert("Invalide Email");
    }else {
        validation[0]=true;
    }
});


psw.addEventListener("change", function(e){
    let pswd = e.target.value; 

    if(!(pswd
        .match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
        ))){
        alert("Invalide Password ; Min 1 uppercase letter, 1 lowercase letter,1 special character, 1 number, 8 characters and Max 30 characters");
    }else {
        validation[1]=true;
    }
    validationLogin();

});

btnShow.addEventListener("click",function(e){
    if (psw.type === "password") {
        psw.type = "text";
        btnShow.innerHTML= "Hide Password";   
      } else {
        psw.type = "password";
        btnShow.innerHTML= "Show Password";
      }
      validationLogin();
})

function validationLogin(){
   let sum =0;
    for(let i=0; i<validation.length;i++){
        if (validation[i]==true){
            sum+=1;
        }
    }
    if(sum==validation.length){
        login.disabled=false;
        login.classList.add("btn-success");
    }else{
        login.disabled=true;
        login.classList.add("btn-primary"); 
   }
}

login.addEventListener("click", function(e){
    window.location.href="product.html";
})
