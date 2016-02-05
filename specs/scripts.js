

function pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price= 10;


}

pizza.prototype.sizePrice = function() {
  var price = this.price;
  if (this.size === "small") {
    this.price = this.price * 1;
  } else if (this.size === "medium") {
    this.price = this.price * 1.2;
  } else {
    price = 14;
  }
  return price;
 };
