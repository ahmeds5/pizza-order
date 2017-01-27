//Business Logic
var pizzaToppings= [];

function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaCost = 0;
};

Pizza.prototype.pizzaTotal = function () {
  this.pizzaCost = this.pizzaSize + (pizzaToppings.length * 0.75);

};


//User Logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();

    var pizzaSize= parseInt($("#pizzaSize option:selected").val());
    var newPizza = new Pizza(pizzaSize, pizzaToppings);

    $("input:checkbox[name=topping]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });

    newPizza.pizzaTotal();

    $(".bottom").show();
    $("#priceOutput").text(newPizza.pizzaCost.toFixed(2));


  });
});
