const dishes= (function(){
    const loadDOM = ()=>{
        const dishesSection = document.createElement("div");
        dishesSection.classList.add("dishesSection");

        dishesSection.innerHTML = `<div class="title">
                <h2>Italianno offers</h2>
            </div>
            <div class="dishes">
                <div id="pastaDishes" class="dish">Pasta
                </div>
                <div id="pizzaDishes" class="dish">Pizza
                </div>
                <div id="dessertDishes" class="dish">Desserts
                </div>
            </div>`

        return dishesSection;
    }
    return {loadDOM};
})();

export{dishes};