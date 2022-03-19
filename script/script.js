$(document).ready(function () {

    // Denotes total number of rows
    var rowIdx = 0;
    var crust = document.getElementById("crust").value; 
    var topping = document.getElementById("toppings").value; 
    var size = document.getElementById("size").value; 

    size_prices = {small:500,medium:750,large:1000}
    toppings_prices = {olives:100,pepperon:400,cheese:300}
    crust_prices ={crispy:400,gluten_free:250,shufferd:300} 
     
    var total_cost = size_prices[size] + toppings_prices[topping] + crust_prices[crust]
    
    
    // jQuery button click event to add a row
    $('#addBtn').on('click', function () {
        // Adding a row inside the tbody.
        var x = document.getElementById("addBtn");
        x.style.display = "none";
        var order_x = document.getElementById("addBtnAnother");
        order_x.style.display = "block";
        var checkout_x = document.getElementById("checkoutbutton");
        checkout_x.style.display = "block";
        
    
        $('#thead').append(`<tr id="R${rowIdx}">
            <th class="text-center">
            <p> Order Number</p>
            </th>

            <th class="text-center">
            <p>Pizza Size</p>
            </th>

            <th class="text-center">
            <p>Crust</p>
            </th>

            <th class="text-center">
            <p>Toppings</p>
            </th>

            <th class="text-center">
            <p>Total cost</p>
            </th>
            total_cost

            </tr>`);
    
        $('#tbody').append(`<tr id="R${++rowIdx}">
            <td class="row-index text-center">
                  <p>${rowIdx}</p>
            </td>
            <td class="text-center">
                <p> ${size}-${size_prices[size]} </p>
            </td>
            <td class="text-center">
            <p> ${topping}-${toppings_prices[topping]} </p>
            </td>

            </td>
            <td class="text-center">
            <p> ${crust}-${crust_prices[crust]} </p>
            </td>
            
            <td class="text-center">
                 <p> ${total_cost} </p>
            </td>

            </tr>`);
    });
    
    // Add another order
    $('#addBtnAnother').on('click', function () {
        //var rowIdx = 1;
        // Adding a row inside the tbody.
        $('#tbody').append(`<tr id="R${++rowIdx}">
            <td class="row-index text-center">
            <p>${rowIdx}</p>
            </td>

            <td class="text-center">
                <p> ${size}-${size_prices[size]} </p>
            </td>
            <td class="text-center">
                <p> ${crust}-${crust_prices[crust]} </p>
            </td>
            <td class="text-center">
            <p> ${topping}-${toppings_prices[topping]} </p>
            </td>
            
            <td class="row-index text-center">
            <p> ${total_cost} </p>
            </td>

            </tr>`);
    });
    });




function popupateTable(){
    
    var crust = document.getElementById("crust").value; 
    var topping = document.getElementById("toppings").value; 
    var size = document.getElementById("size").value; 

    size_prices = {small:500,medium:750,large:1000}
    toppings_prices = {olives:100,pepperon:400,cheese:450}
    crust_prices ={crispy:400,gluten_free:250,shufferd:300}
     
     
     var total_cost = size_prices[size] + toppings_prices[topping] + crust_prices[crust]
    

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

