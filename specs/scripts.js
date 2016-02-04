

function pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

pizza.prototype.newPizza = function() {
  var size = this.size;
  var toppings = this.toppings;
  return (this.size + "," + this.toppings);
};
