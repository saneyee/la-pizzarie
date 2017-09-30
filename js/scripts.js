//business logic//
var size = {
    small:10,
    medium:14,
    large:20
};
var topping = {
    cheese:1,
    peperoni:2,
    artichoke:1,
    anchovy:2,
    paneer:1,
    onions and tomatoes:1,
    jalapenos and peppers:1
};
function Pizza(size,topping) {
    this.size = size;
    this.topping = topping;
}
Pizza.prototype.cost = function() {
    var price = this.size;
    var fprice = price+work;
}






//user logic//
$(function() {
    $("form#formone").submit(function(event) {
        event.preventDefault();
        var inputtedName = $("input#name").val();
        var inputtedSize = $("select#size").val();
        var userToppingChoice = $("input[type=checkbox]:checked").each(function() {
            var work = $(this).val();
            cost();

    });


        var newPizza = new Pizza(inputtedSize, inputtedTopping);
        var costofPizza = newPizza.cost();



    });

});
