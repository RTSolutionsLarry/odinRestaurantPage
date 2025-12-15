// src/index.js
//import "./styles.css";

//main page
import { displayAboutUs } from "./aboutUs.js";
import { displayMainOffer } from "./mainOffer.js";
import { displayMenu } from "./menu.js";

//Need a funtion to clear the content then call the JS
const pageLogic = (function () {

    const mainSection = document.getElementsByClassName('mainSection')[0];
    const clearContent = () => {
        while (mainSection.firstChild) {
            mainSection.removeChild(mainSection.lastChild);
        }
    }

    const mainOfferButton = document.getElementsByClassName('mainOffer')[0];
    mainOfferButton.addEventListener('click',()=>{
        clearContent();
        displayMainOffer();
    });

    const menuButton = document.getElementsByClassName('menu')[0];
    menuButton.addEventListener('click',()=>{
        clearContent();
        displayMenu();
    });

    const aboutUsButton = document.getElementsByClassName('aboutUs')[0];
    aboutUsButton.addEventListener('click',()=>{
        clearContent();
        displayAboutUs();
    })


    const mainOffer = () => {
        displayMainOffer();
    };

    return {mainOffer};

})();

pageLogic.mainOffer();

