var cartQuantity = 0;
const result = document.getElementById("result");
const price = document.getElementById("price");

function showQuantity(){
  if (cartQuantity == 0) {
    alert("Cart is empty: Please Select an item");
  }
    else if(cartQuantity == 1){
      result.textContent =(`${cartQuantity} item was selected`);
    }
    else{
      result.textContent =(`${cartQuantity} items where selected`);
  } 
}
function decrement(){
  if (cartQuantity == 0) {
    alert("Cart is empty: can't remove an item");
  }
    else{
    cartQuantity -- 
    alert("An Item was removed from cart")
    result.textContent = ("Cart Quantity:" + " " + cartQuantity);
  }
}


function reset(){
  cartQuantity = 0;
  alert("Cart Quantity was reset");
  result.textContent = ("Cart Quantity:" + " " + cartQuantity);
}

function increment1(){
  cartQuantity ++
  result.textContent = ("Cart Quantity:" + " " + cartQuantity);
}


function increment2(){
  cartQuantity += 2
  result.textContent = ("Cart Quantity:" + " " + cartQuantity);
}
function increment3(){
  cartQuantity += 3
  result.textContent = ("Cart Quantity:" + " " + cartQuantity);
}

function fetchPrice() {
  let amount = 25;
  let getPrice;
  getPrice = cartQuantity * amount;
  
  price.textContent = "$" + "" + getPrice;

}