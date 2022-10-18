const heartList = document.querySelectorAll(".fa-heart");
const shopping = document.querySelectorAll(".fa-shopping-cart");
let order = document.querySelector(".order");
let close = document.querySelector(".close");

heartList.forEach(element => {
    element.addEventListener("click",function(e){
        element.style.color="#fe302f";
    })
    
});

shopping.forEach(element =>{
    element.addEventListener("click", function(e){
        window.open("page.html");
       })
});

order.addEventListener("click",function(){
    window.location.href="basket.html";
});


close.addEventListener("click",function(){
    window.close();
});

