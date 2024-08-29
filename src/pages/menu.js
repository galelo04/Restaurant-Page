import pizzaMargherita from "../images/pizzaMargherita.png"
import pizzaPepi from "../images/pepiPizza.png"
import marinara from "../images/shrimpMarinara.png"
import risoto from "../images/risoto.png"

import { createStars } from "./stars"


const menu  = (function(){
   const menuItemsArr = [];
   const addToMenu = (name,img,price,rating)=>{
        menuItemsArr.push({name,img,price,rating});
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
            <div class="menuItems"></div>`;

        const menuItems = menu.querySelector(".menuItems");

        menuItemsArr.forEach(element=>{
            const item = createItem(element);
            menuItems.appendChild(item);
        });
        return menu ;
   };
   
   addToMenu("Margherita", pizzaMargherita, "8.45$", "4.5");
   addToMenu("Pepi Pizza", pizzaPepi, "9.99$", "4.7");
   addToMenu("Shrimp Marinara", marinara, "12.99$", "4.8");
   addToMenu("Risoto", risoto, "11.50$", "4.6");
   return {loadDOM};
})();

export {menu}