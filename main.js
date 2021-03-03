veg_menu_list_array= [
    "Double Cheese Margherita",
    "Mexican Green Wave",
    "Indi Tandoori Paneer",
    "Veggie Paradise",
    "Veg Extravaganza",
]
non_veg_menu_list_array= [
    "Chicken Golden Delight",
    "Non Veg Supreme",
    "Indi Chicken Tikka",
    "Pepper Barbecue & Onion",
    "Chicken Sausage",
]

function veg_click() 
{
    var htmldata;
    htmldata="<ol class='menulist'>";
    veg_menu_list_array.sort();
    for (var i=0; i<veg_menu_list_array.length; i++) {
        htmldata=htmldata+'<li>' + veg_menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("veg_display_pizzas").innerHTML=htmldata;
    document.getElementById("non_veg_display_pizzas").style.display="none";
    document.getElementById("veg_display_pizzas").style.display="inline-block";
    }

    function non_veg_click() 
    {
        var htmldata1;
        htmldata1="<ol class='menulist'>";
        non_veg_menu_list_array.sort();
        for (var i=0; i<non_veg_menu_list_array.length; i++) {
            htmldata1=htmldata1+'<li>' + non_veg_menu_list_array[i] + '</li>'
        }
        htmldata1=htmldata1+"</ol>"
        document.getElementById("non_veg_display_pizzas").innerHTML=htmldata1;  
        document.getElementById("veg_display_pizzas").style.display="none";
        document.getElementById("non_veg_display_pizzas").style.display="inline-block";

    }
    function add_item(){
        var htmldata;
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        menu_list_array.sort();
        htmldata="<section class='cards'>";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<div class="card">'+'<img src="pizzaImg.png"/>'+menu_list_array[i]+'</div>'
        }
        htmldata=htmldata+"</section>"
        document.getElementById("display_addedmenu").innerHTML=htmldata;
        
    }
    menu_list_array= [
        "Chicken Dominator",
        "Chicken Tandoori Pizza",
        "Farm House",
        "Fresh veggie",
        "Mexican Green Wave",
    ]
    
    