const cards = (function(){
    const loadDOM  = ()=>{
        const cardsSection = document.createElement("div");
        cardsSection.classList.add("cardsSection");

        cardsSection.innerHTML = `<div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>`;
        
        return cardsSection;
    }
    return {loadDOM};
})();

export {cards}