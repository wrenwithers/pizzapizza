describe('pizza', function() {
  it("creates a new pizza with the input properties of size and topping number", function() {
    var testPizza = new pizza("small",2);
    expect(testPizza.size).to.equal("small");
    expect(testPizza.toppings).to.eql(2);
  });
  //it("attatches a price to the size and topping values, and calculates the total"), function() {
    //var testPizza = new pizza("small",2);
    //expect(testPizza.price).to.eql(14);
//};
});
