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

function Delivery(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Delivery.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
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

    newPizza.pizzaTotal();

    $(".bottom").show();
    $("#priceOutput").text(newPizza.pizzaCost.toFixed(2));

    $("#delivery").click(function() {
      event.preventDefault();
      $("#form2").show();
    });
  });
      $("#form2").submit(function() {
        event.preventDefault();
        var inputtedStreet = $(".street").val();
        var inputtedCity = $(".city").val();
        var inputtedState = $(".state").val();

        var newDelivery = new Delivery(inputtedStreet, inputtedCity, inputtedState);
        newDelivery.fullAddress();
        $(".output").show();
        $(".address").text(newDelivery.fullAddress());

      });
});
