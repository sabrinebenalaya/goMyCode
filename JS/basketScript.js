const quantite = document.querySelectorAll(".count");
const btnPlusMinus = document.querySelectorAll(".btn");

let removeALL = document.querySelector(".Action");
const remove = document.querySelectorAll(".remove");
const price = document.querySelectorAll(".price");
let totalPrice = document.querySelector(".total-price");
let totalitems = document.querySelector(".item");

let items = document.querySelectorAll(".Cart-Items");


/*initialisation of total price */
let sum = 0;
for (let i = 0; i < price.length; i++) {
  sum = sum + parseFloat(price[i].innerHTML);
}
totalPrice.innerHTML = sum;


/* button plus and button Minus*/
btnPlusMinus.forEach((element, index) => {
  element.addEventListener("click", function (e) {
    let priceOfItem =
      e.target.parentElement.nextElementSibling.children[0].children[0];

    if (element.innerHTML == "+") {
      let singleItemQuantity = element.nextElementSibling;
      singleItemQuantity.innerHTML++;
      totalPrice.innerHTML =
      (parseFloat(totalPrice.innerHTML) + parseFloat(priceOfItem.innerHTML)).toFixed(3);
    } else {
      let singleItemQuantity = element.previousElementSibling;
      if (singleItemQuantity.innerHTML > 0) {
        singleItemQuantity.innerHTML--;
        totalPrice.innerHTML =
        (parseFloat(totalPrice.innerHTML) - parseFloat(priceOfItem.innerHTML)).toFixed(3);
      }
    }
  });
});

/* button Remove All*/
removeALL.addEventListener("click", function (e) {
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
  totalPrice.innerHTML = 0;
  totalitems.innerHTML = 0;
});


/* button remove */
totalitems.innerHTML = items.length;
for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", function (e) {
    items[i].style.display = "none";
    totalPrice.innerHTML = (parseFloat(totalPrice.innerHTML) - (parseFloat(price[i].innerHTML)*parseFloat(quantite[i].innerHTML))).toFixed(3);
    totalitems.innerHTML = totalitems.innerHTML - 1;
  });
}

