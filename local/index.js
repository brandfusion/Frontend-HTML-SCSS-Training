let numberOfElements = 0;
const offcanvasBody = document.querySelector(`.offcanvas-body`);

function changeState(el) {
    if (el.checked == true && numberOfElements < 3) {
        numberOfElements++;
        insertInCompare(el);
    }
    else if (el.checked == false) {
        numberOfElements--;
        removeFromCompare(el);
    } else {
        numberOfElements = 3;
        el.checked = false;
        alert(`deja 3 elemente`);
    }
}

function insertInCompare(el) {
    let img = document.createElement(`img`);
    img.src = el.previousElementSibling.src;
    img.id = el.id + `--image`;

    let title = document.createElement(`h4`);
    title.innerText = el.nextElementSibling.textContent;
    title.id = el.id + `--title`;

    offcanvasBody.appendChild(img);
    offcanvasBody.appendChild(title);

    document.querySelector(`.offcanvas-start`).classList.add(`show`);
}

function removeFromCompare(el) {
    let img = document.getElementById(el.id + `--image`);
    let title = document.getElementById(el.id + `--title`);

    offcanvasBody.removeChild(img);
    offcanvasBody.removeChild(title);

    if (numberOfElements === 0) {
        document.querySelector(`.offcanvas-start`).classList.remove(`show`);
    }
}