//business logic//
var sizePrices = {
    small:10,
    medium:14,
    large:20
}
var toppingPrices = {
    cheese:1,
    peperoni:2,
    artichoke:1,
    anchovy:2,
    paneer:1,
    onions:1,
    jalapenos:1
}
var Pizza = function(size, toppings){
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.cost = function() {
    var price = 0;
    price += sizePrices[this.size];
    for(var i = 0; i < this.toppings.length; i++){
        price += toppingPrices[this.toppings[i]];
    }
    return price;
}

//user logic//
$(function() {
    $("form#formone").submit(function(event) {
        event.preventDefault();
        var inputtedName = $("input#name").val();
        var inputtedSize = $("select#size").val();
        var toppings = [];
        $("input[type=checkbox]:checked").each(function(index) {
            toppings[index] = $(this).val();
        });

        var myPizza = new Pizza(inputtedSize,toppings);
        var costofPizza = myPizza.cost();
        $("#name").text(inputtedName);
        $("#topping").text(myPizza.toppings);
        $("#size-chosen").text(myPizza.size);
        $("#cost").text(costofPizza);
        $(".result").show();

    });

});
