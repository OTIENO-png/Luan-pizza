function selected_order(){
    var crust = document.getElementById("crust").value; 
    var topping = document.getElementById("toppings").value; 
    var size = document.getElementById("size").value; 
    size_prices = {small:500,medium:750,large:1000}
    toppings_prices = {olives:100,pepperon:400,cheese:300}
    crust_prices ={crispy:400,gluten_free:250,shufferd:300} 
    var total_cost = size_prices[size] + toppings_prices[topping] + crust_prices[crust]

    return [crust, topping,size, toppings_prices[topping], size_prices[size], crust_prices[crust], total_cost]

}

$(document).ready(function () {

    // Denotes total number of rows
    var rowIdx = 0;
    var total_order_cost =0

    // jQuery button click event to add a row
    $('#addBtn').on('click', function () {
        var orders = selected_order()
        //[crust, topping,size, toppings_prices[topping], size_prices[size], crust_prices[crust], total_cost] =var orders = selected_order()
        var crust = orders[0]
        var topping = orders[1]
        var size = orders[2]
        var toppings_price = orders[3]
        var size_price= orders[4]
        var crust_price = orders[5]
        var total_cost = orders[6]
        total_order_cost = total_order_cost+total_cost
        
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
                <p> ${size}-${size_price} </p>
            </td>
            <td class="text-center">
            <p> ${topping}-${toppings_price} </p>
            </td>

            </td>
            <td class="text-center">
            <p> ${crust}-${crust_price} </p>
            </td>
            
            <td class="text-center">
                 <p> ${total_cost} </p>
            </td>

            </tr>`);
    });
    
    // Add another order
    $('#addBtnAnother').on('click', function () {
        //var rowIdx = 1;
        var orders = selected_order()
        var crust = orders[0]
        var topping = orders[1]
        var size = orders[2]
        var toppings_price = orders[3]
        var size_price= orders[4]
        var crust_price = orders[5]
        var total_cost = orders[6]
        total_order_cost= total_order_cost+total_cost
        

        // Adding a row inside the tbody.
        $('#tbody').append(`<tr id="R${++rowIdx}">
            <td class="row-index text-center">
            <p>${rowIdx}</p>
            </td>

            <td class="text-center">
                <p> ${size}-${size_price} </p>
            </td>
            <td class="text-center">
                <p> ${crust}-${crust_price} </p>
            </td>
            <td class="text-center">
            <p> ${topping}-${toppings_price} </p>
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
        $("#totalCost").append(document
            .createTextNode(total_order_cost));
        console.log(total_order_cost)
        
    })
    $('#yes').on('click', function () {
        var x = document.getElementById("yes");
        x.style.display = "none";
        var order_x = document.getElementById("no");
        order_x.style.display = "none";
        var location_x  = document.getElementById("location"); 
        location_x.style.display = "none";

        var submit_form  = document.getElementById("submit_location"); 
        submit_form.style.display = "block";

        var checkout_cost = total_order_cost +200
        $("#totalCost").replaceWith("The total is: " + checkout_cost);
        console.log(total_order_cost)
        
        
    })
    $('#no').on('click', function () {
        var x = document.getElementById("no");
        x.style.display = "none";
        var location_x  = document.getElementById("location"); 
        location_x.style.display = "none";
        
        var submit_form  = document.getElementById("submit_location"); 
        submit_form.style.display = "block";

        var order_x = document.getElementById("yes");
        order_x.style.display = "none";

    
        
    })
    $('#complete_order').on('click', function () {
        // hide the form 
        var submit_form  = document.getElementById("submit_location"); 
        submit_form.style.display = "none";
        //show paragraph
        var location  = document.getElementById("submit_location").value; 
        var par = "Your order has been received! We are dispatching our rider to "+ location
        $("#delivery").replaceWith(par);
    })
    });




