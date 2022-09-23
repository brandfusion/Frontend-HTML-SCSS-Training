import "../sass/index.sass";

import {sleep,animateCSS} from "./utilities/index.js";

const x = 0;
const addTwo = v => v + 2;

const y = addTwo(x);
// console.log(y);

// console.log(`I'm gonna test this`);



// Menu Modal
const modalOpenTriggers = document.querySelectorAll(`[data-role="modal"]`);
modalOpenTriggers.forEach(el => el.addEventListener(`click`, e => {
    const el = e.currentTarget;
    const dataSet = el.dataset;
    const { target, status } = e.currentTarget.dataset;
    const modalTarget = document.querySelector(`#${target}`);
    if (status === `closed`) {
        // modalTarget.style.display = "block";
        modalTarget.classList.add(`modal-display-opacity`);
        modalTarget.classList.add(`modal-fadein`);

    } else {
        // modalTarget.style.display = "none";
        modalTarget.classList.remove(`modal-display-opacity`);
        modalTarget.classList.remove(`modal-fadein`);
    }
}));


// Cart Modal
const overlay = document.querySelector(`.overlay`);

document.addEventListener(`click`, (event) => {
    const cartModal = document.querySelector(`#cart-modal`);
    if (event.target.closest(`.close-modal`)) {
        document.querySelector("body").style.overflow = `auto`;
        // cartModal.style.display = "none";    
        cartModal.classList.add("modal-slideout");
        sleep(500).then(a =>{
            overlay.style.display = `none`;
            cartModal.classList.remove("modal-display","modal-slidein","modal-slideout");
        });    
       

    }
    else if (cartModal.classList.contains("modal-display") && !event.target.closest(`#cart-modal`)) {
        document.querySelector("body").style.overflow = `auto`;
        cartModal.classList.remove(`modal-display`);
        cartModal.classList.remove(`modal-slidein`);
        overlay.style.display = `none`;
    }

});

// LOGIN Modal

const loginModal = document.querySelector(`.login`);
document.addEventListener(`click`, function (event) {
    if (event.target.closest(`.account-button`)) {
        overlay.style.display = `flex`;
        this.body.style.overflow = `hidden`;
        // loginModal.style.display = `block`;
        loginModal.classList.add(`modal-display-opacity`);
        loginModal.classList.add(`modal-fadein`);
    }
    else if (event.target.closest(`.close-login`) || (loginModal.style.display == "block" && !event.target.closest(`.login`))) {
        this.body.style.overflow = `auto`;
        // loginModal.style.display = "none";
        loginModal.classList.remove(`modal-display-opacity`);
        loginModal.classList.remove(`modal-fadein`);
        overlay.style.display = `none`;
    }

});


// minicart trigger
document.querySelector(".cart-button").addEventListener("click", e=>{
    // const target = document.getElementById("header");
    document.getElementById("cart-modal").style.display = "block";
    animateCSS("#cart-modal", "fadeInRight").then((message) => {
        // Do something after the animation
        // alert("worked");
      });
    
});