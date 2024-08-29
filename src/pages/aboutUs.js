const aboutUs = (function(){
    const loadDOM = ()=>{
        const about = document.createElement("div");
        about.classList.add("aboutUs");

        about.innerHTML = `
            <div class="title">About Us</div>
            <div class="quote">At Italianno, we're passionate about bringing the authentic taste of Italy to your table. Our journey began with a love for traditional Italian cuisine, where every dish tells a story of rich flavors, fresh ingredients, and family traditions.

                From hand-tossed pizzas to creamy pastas and delectable desserts, we craft each dish with care and dedication, just like Nonna used to make. Our warm, welcoming atmosphere makes Italianno the perfect spot for family dinners, date nights, or a cozy meal with friends.
                
                Join us and experience the true essence of Italy—right here in your neighborhood!</div>`
        
        return about;
    }
    return {loadDOM};
})();

export{aboutUs}