

function pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price= 10;
}

 pizza.prototype.Price = function() {
   var price = this.price;
   var toppings = this.toppings;
   if (this.size === "small") {
     price = price;
   } else if (this.size === "medium") {
     price = price * 1.2;
   } else {
     price = price * 1.4;
   }
   price = price + toppings;
   return price;
  };

$(document).ready(function() {

  $('form#pizza-order').submit(function(event){
    event.preventDefault();
      var sizeOption = $('.messageCheckbox:checked').val();
      var toppings_count = 0;
      var toppings = document.getElementsByName('topping')
           for (var i=0; i<toppings.length; i++) {
             if (toppings[i].checked) {
                toppings_count += 1;
              }
            }
      var pizzaPizza = new pizza(sizeOption, toppings_count);
            finalOrder.innerHTML = "$ " + pizzaPizza.Price();
  })
});
