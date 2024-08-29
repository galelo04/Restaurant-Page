import {menu} from './menu.js'
import { hero } from "./hero.js";
import { dishes } from "./dishes.js";
import { cards } from "./cards.js";

const home = (function(){
    const loadDOM = () =>{
        const homePage = document.createElement("div");
        homePage.classList.add("homePage");

        homePage.appendChild(hero.loadDOM());
        homePage.appendChild(dishes.loadDOM());
        homePage.appendChild(cards.loadDOM());
        homePage.appendChild(menu.loadDOM());

        return homePage;
    }
    return {loadDOM};
})();

export {home}