function popupateTable(){
    
    var crust = document.getElementById("crust").value; 
    var topping = document.getElementById("toppings").value; 
    var size = document.getElementById("size").value; 

    size_prices = {small:50,medium:700,large:1000}
    toppings_prices = {olives:100,pepperon:400,cheese:300}
    crust_prices ={crispy:400,gluten_free:250,shufferd:300}
     
     
     var total_cost = size_prices[size] + toppings_prices[topping] + crust_prices[crust]
     console.log(size_prices[size]);
     console.log(toppings_prices[topping]);
     console.log(crust_prices[crust]);

    var table = document.createElement('table');


    var tr = document.createElement('tr');   

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');

    var text1 = document.createTextNode(1);
    var text2 = document.createTextNode(size + '-' + size_prices[size]);
    var text3 = document.createTextNode(crust+ '-' + toppings_prices[topping]);
    var text4 = document.createTextNode(topping+ '-' + crust_prices[crust]);
    var text5 = document.createTextNode("kshs" + total_cost);

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
    //}
    document.body.appendChild(table);
}
var pizzaPrice = 0;

function Pizza(size,toppings,pizzaPrice) {
  this.size = size;
  this.toppings = toppings;
  this.pizzaPrice = 0;
}
