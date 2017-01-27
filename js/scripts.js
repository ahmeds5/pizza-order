//Business Logic
var pizzaToppings= [];

function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize= pizzaSize;
  this.pizzaToppings= pizzaToppings;
  this.pizzaCost=0;
}

Pizza.prototype.pizzaCost = function() {
  if (this.pizzaSize === 9) {
    this.pizzaCost += 9;
  }else if (this.pizzaSize === 12) {
    this.pizzaCost += 12;
  }else if (this.pizzaSize === 15) {
    this.pizzaCost += 15;
  }else if (this.pizzaSize === 18) {
    this.pizzaCost +=18
  }else {
    alert("Pick a pizza size please");
  }
  for (var i = 0; i < this.pizzaToppings.length; i++) {
    this.pizzaCost = this.pizzaCost + 1;
  }
}


//User Logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();

    var pizzaSize= parseInt($("#pizzaSize option:selected").val());
    var newPizza = new Pizza(pizzaSize, pizzaToppings);

    $("input:checkbox[name=topping]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });

    newPizza.pizzaCost();
    console.log(newPizza);

    $(".bottom").show();
    $("#priceOutput").text(newPizza.pizzaCost);


  });
});
