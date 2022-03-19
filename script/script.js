function popupateTable(){
    
      var crust = {
        "Crispy": 250, "Gluten free": 600, "Stuffed": 1000
      };
    var Toppings = {
        "Olives": 270, "Cheese":350, "Peppron": 250
      };
    
    var crust = document.getElementById("crust").value; 
    var topping = document.getElementById("toppings").value; 
    var size = document.getElementById("size").value; 
    var size = {
        "small": 250, "Medium": 500, "Large": 1000
      }; 

    var table = document.createElement('table');


    var tr = document.createElement('tr');   

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');

    var text1 = document.createTextNode(1);
    var text2 = document.createTextNode(size);
    var text3 = document.createTextNode(crust);
    var text4 = document.createTextNode(topping);
    var text5 = document.createTextNode("");

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