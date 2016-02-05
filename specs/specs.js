

describe('pizza', function() {
   it("creates a new pizza with the input properties of size and topping number", function() {
     var testPizza = new pizza("small",2);
     expect(testPizza.size).to.equal("small");
     expect(testPizza.toppings).to.equal(2);
   });

    it("creates a prototype for determining price", function() {
     var testPizza = new pizza("large", 2);
     expect(testPizza.Price()).to.equal(16);
   });

 })
