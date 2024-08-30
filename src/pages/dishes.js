import pizza from "../images/pizza2.jpg"
import pasta from "../images/spaghetti.jpg"
import dessert from "../images/italian-desserts.jpg"

const dishes= (function(){
    const loadDOM = ()=>{
        const dishesSection = document.createElement("div");
        dishesSection.classList.add("dishesSection");

        dishesSection.innerHTML = `<div class="title">
                <h2>Italianno offers</h2>
            </div>
            <div class="dishes">
            <div id="pizzaDishes" class="dish"><div class="title">Pizza</div>
            </div>
                <div id="pastaDishes" class="dish"><div class="title">Pasta</div>
                </div>
                <div id="dessertDishes" class="dish"><div class="title">Desserts</div>
                </div>
            </div>`;

        const pizzaImg = new Image();
        pizzaImg.src = pizza;
        const pastaImg = new Image();
        pastaImg.src = pasta;
        const dessertImg = new Image();
        dessertImg.src = dessert;
        
        const pizzaDishes = dishesSection.querySelector("#pizzaDishes");
        pizzaDishes.appendChild(pizzaImg);
        const pastaDishes = dishesSection.querySelector("#pastaDishes");
        pastaDishes.appendChild(pastaImg);
        const dessertDishes = dishesSection.querySelector("#dessertDishes");
        dessertDishes.appendChild(dessertImg);
        
        return dishesSection;
    }
    return {loadDOM};
})();

export{dishes};