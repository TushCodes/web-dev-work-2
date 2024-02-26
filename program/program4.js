var theForm = document.forms['cakeform'];

var cake_prices = new Array();
cake_prices['Round6'] = 20;
cake_prices['Round8'] = 25;
cake_prices['Round10'] = 35;
cake_prices['Round12'] = 75;

function getCakeSizePrice() {
    var cakeSizePrice=0;
    var theForm = document.forms["cakeform"];
    var selectedCake = theForm.elements['selectedcake'];
    for(var i=0; i < selectedCake.length; i++) {
        if(selectedCake[i].checked) {
            cakeSizePrice = cake_prices[selectedCake[i].value];
            break;
        }
    }
    console.log(cakeSizePrice);
    return cakeSizePrice;
}

var filling_prices = new Array();
filling_prices["None"]=0;
filling_prices["Lemon"]=5;
filling_prices["Custard"]=5;
filling_prices["Fudge"]=7;
filling_prices["Mocha"]=8;
filling_prices["Raspberry"]=10;

function getFillingPrice() {
    var cakeFillingPrice=0;
    var theForm = document.forms['cakeform'];
    var selectedFilling = theForm.elements['filling'];
    cakeFillingPrice = filling_prices[selectedFilling.value];

    return cakeFillingPrice;
}

function candlesPrice() {
    var candlePrice = 0;
    var theForm = document.forms['cakeform'];
    var includesCandles = theForm.elements['includecandles'];
    if(includesCandles.checked==true) {
        candlePrice=5;
    }
    return candlePrice;
}

function getQuantity() {
    var theForm = document.forms['cakeform'];
    var quantity = theForm.elements['quantity'];
    var howmany=1;

    if(quantity.value!="") {
        howmany = parseInt(quantity.value);
    }
    return howmany;
}

function calculateTotal() {
    var cakePrice = (getCakeSizePrice() + getFillingPrice() + candlesPrice()) * getQuantity();

    document.getElementById('totalPrice').innerHTML = 'Total Price for Cake $'+cakePrice;
}
