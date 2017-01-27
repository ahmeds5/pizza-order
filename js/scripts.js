//Business Logic

function Pizza(size, topings) {
  this.size= size;
  this.toppings= toppings;
  this.cost=0;
}



//User Logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();

    var toppingsArray= [];
    var size= parseInt($("#pizzaSize option:selected").val());
    console.log($("#pizzaSize option:selected").val());


  });
});
