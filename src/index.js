import "./styles.css";
import {menu} from './pages/menu'
import { home } from "./pages/homePage";
import { aboutUs } from "./pages/aboutUs";

const index = (function(){

    const content = document.querySelector(".content");
    const navBtns = document.querySelector("nav");

    const init = ()=>{
        content.innerHTML = "";
        content.appendChild(home.loadDOM());
        bindEvents();
    };

    const bindEvents = ()=>{
        navBtns.addEventListener("click",(event)=>{
            if(event.target.id==="homeBtn"){
                content.innerHTML = "";
                content.appendChild(home.loadDOM());
            }
            else if(event.target.id==="menuBtn"){
                content.innerHTML = "";
                content.appendChild( menu.loadDOM());
            }
            else if(event.target.id==="aboutBtn"){
                content.innerHTML = "";
                content.appendChild(aboutUs.loadDOM());
            }
        });        
    }

    init();
})();


