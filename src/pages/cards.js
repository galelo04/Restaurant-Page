import img1 from "../images/pizza1.jpg"
import img2 from "../images/pasta1.jpg"
import img3 from "../images/lasgana.jpg"

const cards = (function(){
    const loadDOM  = ()=>{
        const cardsSection = document.createElement("div");
        cardsSection.classList.add("cardsSection");

        cardsSection.innerHTML = `<div class="card" id="card1"></div>
            <div class="card" id ="card2"></div>
            <div class="card" id ="card3"></div>`;

            const card1 = cardsSection.querySelector("#card1");
            const card2 = cardsSection.querySelector("#card2");
            const card3 = cardsSection.querySelector("#card3");

            const cardimg1 = new Image();
            cardimg1.src = img1;
            const cardimg2 = new Image();
            cardimg2.src = img2;
            const cardimg3 = new Image();
            cardimg3.src = img3;

            card1.appendChild(cardimg1);
            card2.appendChild(cardimg2);
            card3.appendChild(cardimg3);

            card1.innerHTML+=`<div class="info-content">
    <h3 class="info-title">Experience Authentic Italian Dining</h3>
    <p class="info-description">At Italianno, we bring the heart of Italy to your table. Nestled in a cozy corner of the city, our restaurant offers a warm and inviting atmosphere where you can savor the flavors of traditional Italian cuisine.</p>
    <a href="#" class="info-link">Read More &rarr;</a>
  </div>`;

            card2.innerHTML+=`<div class="info-content">
    <h3 class="info-title">Join Us Today</h3>
    <p class="info-description">Whether you're celebrating a special occasion or simply craving a taste of Italy, Italianno is the perfect destination. Come and enjoy an authentic Italian meal in a setting that's as welcoming as it is delicious.</p>
    <a href="#" class="info-link">Read More &rarr;</a>
  </div>`;

            card3.innerHTML+=`<div class="info-content">
    <h3 class="info-title">Location & Hours</h3>
    <p class="info-description">Lorem ipsum dolor sit amet.</p>
    <a href="#" class="info-link">Read More &rarr;</a>
  </div>`;
            
        return cardsSection;
    }
    return {loadDOM};
})();

export {cards}