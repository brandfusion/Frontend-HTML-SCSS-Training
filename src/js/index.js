import "../sass/index.sass";

import { sleep, animateCSS } from "./utilities/index.js";

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
        modalTarget.classList.remove(`modal-fadein`);
        modalTarget.style.opacity = `100`;
        modalTarget.classList.add(`modal-fadeout`);
        sleep(500).then(a => {
            modalTarget.style.opacity = `0`;
            modalTarget.classList.remove(`modal-display-opacity`, `modal-fadeout`);
        })

    }
}));


// LOGIN Modal
const overlayAccount = document.querySelector(`.overlay-acc`);
const loginModal = document.querySelector(`.login`);
const accBtn = document.querySelector(`.account-button`);
const closeLogin = document.querySelector(`.login-svg`);
accBtn.addEventListener(`click`, function () {
    // overlayAccount.style.display = `flex`;
    loginModal.classList.add(`modal-display-opacity`);
    loginModal.classList.add(`modal-fadein`);
    overlayAccount.classList.add(`overlay-effect`, `modal-fadein`);

    sleep(500).then(a => {
        overlayAccount.classList.remove(`overlay-effect`, `modal-fadein`);
        overlayAccount.style.display = `flex`;
    })
})
overlayAccount.addEventListener(`click`, function () {
    loginModal.classList.remove("modal-fadein");
    loginModal.style.opacity = `100`;
    loginModal.classList.add(`modal-fadeout`);
    overlayAccount.classList.add(`modal-fadeout`);

    sleep(500).then(a => {
        loginModal.classList.remove(`modal-display-opacity`, `modal-fadeout`);
        overlayAccount.classList.remove(`modal-fadeout`);
        overlayAccount.style.display = `none`;
    });
})
closeLogin.addEventListener(`click`, function () {
    loginModal.classList.remove("modal-fadein");
    loginModal.style.opacity = `100`;
    loginModal.classList.add(`modal-fadeout`);
    overlayAccount.classList.add(`modal-fadeout`);

    sleep(500).then(a => {
        loginModal.classList.remove(`modal-display-opacity`, `modal-fadeout`);
        overlayAccount.classList.remove(`modal-fadeout`);
        overlayAccount.style.display = `none`;
    });
})


// Cart Modal

const cartModal = document.querySelector(`#cart-modal`);
const cartOverlay = document.querySelector(`.overlay-cart`);
const cartIcon = document.querySelector(`.cart-button`);
const cartCloseIcon = document.querySelector(`.close-cart-svg`);

cartIcon.addEventListener(`click`, function () {
    cartModal.style.display = `block`;
    cartModal.classList.add(`modal-slidein`);
    cartOverlay.classList.add(`overlay-effect`, `modal-fadein`);

    sleep(500).then(a => {
        cartOverlay.classList.remove(`overlay-effect`, `modal-fadein`);
        cartOverlay.style.display = `flex`;
    })
})

cartOverlay.addEventListener(`click`, function () {
    cartModal.classList.remove(`modal-slidein`);
    cartModal.classList.add(`modal-slideout`);
    cartOverlay.classList.add(`modal-fadeout`);

    sleep(500).then(a => {
        cartModal.classList.remove(`modal-slideout`);
        cartOverlay.classList.remove(`modal-fadeout`);
        cartModal.style.display = 'none';
        cartOverlay.style.display = `none`;
    })
})

cartCloseIcon.addEventListener(`click`, function () {
    cartModal.classList.remove(`modal-slidein`);
    cartModal.classList.add(`modal-slideout`);
    cartOverlay.classList.add(`modal-fadeout`);

    sleep(500).then(a => {
        cartModal.classList.remove(`modal-slideout`);
        cartOverlay.classList.remove(`modal-fadeout`);
        cartModal.style.display = 'none';
        cartOverlay.style.display = `none`;
    })
})
