describe('pizza', function() {
  it("creates a new pizza with the input properties of size and topping number", function() {
    var testPizza = new pizza("small",2);
    expect(testPizza.size).to.equal("small");
    expect(testPizza.toppings).to.eql(2);
  });
  it("creates a prototype for determining size price", function() {
    var testPizza = new pizza("adsfsa", 2);
    expect(testPizza.sizePrice()).to.equal(14);
  });
});
