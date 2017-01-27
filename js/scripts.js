//Business Logic

function Pizza(size, topings) {
  this.size= size;
  this.toppings= toppings;
  this.pizzaCost=0;
  this.toppingsCost= 0;
}

Pizza.prototype.pizzaCost = function() {
  this.pizzaCost = this.size + toppingsArray.length;
}





//User Logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();

    var toppingsArray= [];
    var size= parseInt($("#pizzaSize option:selected").val());

    $("input:checkbox[name=topping]:checked").each(function() {
      toppingsArray.push(parseInt($(this).val()));
    });

      var newPizza = new Pizza(size, toppingsArray);
      newPizza.pizzaCost();

  });
});
