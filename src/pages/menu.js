import pizzaMargherita from "../images/pizzaMargherita.png";
import pizzaPepi from "../images/pepiPizza.png";
import marinara from "../images/shrimpMarinara.png"; 
import risotto from "../images/risoto.png";
import tiramisu from "../images/tiramisu.png"; 
import pesto from "../images/pestoPasta.png";
import pannaCotta from "../images/panna-cotta.png";
import mushPizza from "../images/mushPizza.png";
import maritozzo from "../images/maritozzo.png";
import lasagna from "../images/lasagana.png";
import cannoli from "../images/cannoli.png";
import cannelloni from "../images/cannelloni.png";

import { createStars } from "./stars"


const menu  = (function(){
    const menuItemsArr = [];
    const addToMenu = (type,name,img,price,rating)=>{
        menuItemsArr.push({type,name,img,price,rating});
    };
    const createItem = element =>{
        const item = document.createElement("div");
        item.classList.add("menuItem");
        
        const dishImg = new Image();
        dishImg.src = element.img;

        const dishName = document.createElement("p");
        dishName.classList.add("dishName");
        dishName.innerText = element.name;

        const dishPrice = document.createElement("p");
        dishPrice.classList.add("dishPrice");
        dishPrice.innerText= element.price;

        const dishRating = createStars(element.rating);

        const orderBtn = document.createElement("button");
        orderBtn.classList.add("orderBtn");
        orderBtn.innerText = "Order";
        
        item.appendChild(dishImg);
        item.appendChild(dishName);
        item.appendChild(dishPrice);
        item.appendChild(dishRating);
        item.appendChild(orderBtn);

        return item;
    };
    const loadDOM = ()=>{
        const menu = document.createElement("div");
        menu.classList.add("menuSection");

        menu.innerHTML = `<div class="headline">
            <h1>Menu</h1>
        </div>
        <div class="menuItems">
        <div class="title"> Pizza </div>
            <div class="pizzaDishes">
                
            </div>
            <div class="title"> Pasta </div>
            <div class="pastaDishes">
                
            </div>
            <div class="title"> Dessert </div>
            <div class="dessertDishes">
                
            </div>
        </div>`;

        const pizzaDishes = menu.querySelector(".pizzaDishes");
        const pastaDishes = menu.querySelector(".pastaDishes");
        const dessertDishes = menu.querySelector(".dessertDishes");

        menuItemsArr.forEach(element=>{
            const item = createItem(element);
            switch(element.type){
                case "pizza":
                    pizzaDishes.appendChild(item);
                    break;
                case "pasta":
                    pastaDishes.appendChild(item);
                    break;
                case "dessert":
                    dessertDishes.appendChild(item);
                    break;
            }
        });
        return menu ;
   };
   
   addToMenu("pizza","Margherita", pizzaMargherita, "8.45$", "4.5");
   addToMenu("pizza","Peperoni Pizza", pizzaPepi, "9.99$", "4.7");
   addToMenu("pasta","Shrimp Marinara", marinara, "12.99$", "4.8");
   addToMenu("pasta","Risotto", risotto, "11.50$", "4.6");
   addToMenu("dessert","tiramisu",tiramisu,"15$","5");
   addToMenu("pasta", "Pesto Pasta", pesto, "10.00$", "4.3");
   addToMenu("dessert", "Panna Cotta", pannaCotta, "7.00$", "4.7");
   addToMenu("pizza", "Mushroom Pizza", mushPizza, "9.50$", "4.4");
   addToMenu("dessert", "Maritozzo", maritozzo, "6.00$", "4.2");
   addToMenu("pasta", "Lasagna", lasagna, "13.00$", "4.9");
   addToMenu("dessert", "Cannoli", cannoli, "8.00$", "4.8");
   addToMenu("pasta", "Cannelloni", cannelloni, "12.00$", "4.5");
   

   return {loadDOM};
})();

export {menu}