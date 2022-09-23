import "../sass/index.sass";

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
    let { target, status } = e.currentTarget.dataset;
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
}))


// Cart Modal
const overlay = document.querySelector(`.overlay`);
const cartModal = document.querySelector(`#cart-modal`);
document.addEventListener(`click`, function (event) {
    if (event.target.closest(`.cart-button`)) {
        this.body.style.overflow = `hidden`;
        // cartModal.style.display = "block";
        cartModal.classList.add(`modal-display`);
        cartModal.classList.add(`modal-slidein`);
        overlay.style.display = `flex`;
    }
    else if (event.target.closest(`.close-modal`)) {
        this.body.style.overflow = `auto`;
        // cartModal.style.display = "none";
        cartModal.classList.remove(`modal-display`);
        cartModal.classList.remove(`modal-slidein`);
        overlay.style.display = `none`;

    }
    else if (cartModal.classList.contains("modal-display") && !event.target.closest(`#cart-modal`)) {
        this.body.style.overflow = `auto`;
        cartModal.classList.remove(`modal-display`);
        cartModal.classList.remove(`modal-slidein`);
        overlay.style.display = `none`;
    }

})

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

})