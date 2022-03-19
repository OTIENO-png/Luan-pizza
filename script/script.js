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
    $('#checkoutbutton').on('click', function () {
        var x = document.getElementById("checkoutbutton");
        x.style.display = "none";

        var order_x = document.getElementById("addBtnAnother");
        order_x.style.display = "none";
        
        var totalcost_x = document.getElementById("cost_disply");
        totalcost_x.style.display = "block";
        
    })
    $('#yes').on('click', function () {
        var x = document.getElementById("yes");
        x.style.display = "none";

        var order_x = document.getElementById("no");
        order_x.style.display = "none";
        
    })
    $('#no').on('click', function () {
        var x = document.getElementById("no");
        x.style.display = "none";

        var order_x = document.getElementById("yes");
        order_x.style.display = "none";
        
    })
    });




