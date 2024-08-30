import img from "../images/pepiPizza.png"

const hero = (function(){
    const loadDOM = ()=>{
        const heroSection = document.createElement("div");
        heroSection.classList.add("heroSection");
        
        heroSection.innerHTML = ` <div class="heroImg">
            </div><div class= "backImg"></div>
            <div class="priceTag"></div>
            <div class="heroContent">
                <div class="mainHeadline">Fresh, Flavorful and Fun at Italianno</div>
                <div class="textDescription">Dive into a plate of pure deliciousness! At Italianno, we bring Italy to your table with every bite. Fresh ingredients, bold flavors—your taste buds are in for a treat!"</div>
                <button class="orderBtn">Order Now</button>
            </div>`;

        const heroImg = new Image();
        heroImg.src = img ;
        
        const imgContainer = heroSection.querySelector(".heroImg");
        imgContainer.appendChild(heroImg);
        return heroSection;
    };
    return {loadDOM};
})();

export {hero}