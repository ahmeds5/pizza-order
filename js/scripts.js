//Business Logic
var toppingsArray= [];


function Pizza(size, topings) {
  this.size= size;
  this.toppings= toppings;
  this.cost=0;
}



//User Logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();

    var size= parseInt($("#pizzaSize option:selected").val());

    $("input:checkbox[name=topping]:checked").each(function() {
      toppingsArray.push(parseInt($(this).val()));
    })

  });
});
