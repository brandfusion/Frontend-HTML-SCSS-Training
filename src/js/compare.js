let numberOfElements = 0;
const offcanvasBody = document.querySelector(`.offcanvas-body`);


function removeFromCompare(el) {
  let output = document.getElementById(el.id + `-compare`);

  offcanvasBody.removeChild(output);

  if (numberOfElements === 0) {
    document.querySelector(`.offcanvas-start`).classList.remove(`show`);
  }
}

function insertInCompare(el) {
  const output = `
    <div id="${el.id}-compare">
      <div class="d-flex">
        <img src= "${el.previousElementSibling.src}">
        <button type="button" class="btn-close" onClick=""> </button>
      </div >
    <h4>${el.nextElementSibling.textContent}</h4>
    </div >
    `;
  offcanvasBody.insertAdjacentHTML("beforeend", output);

  document.querySelector(`.offcanvas-start`).classList.add(`show`);
}

function changeState(e) {
  const el = e.currentTarget;
  if (el.checked === true && numberOfElements < 3) {
    numberOfElements++;
    insertInCompare(el);
  }
  else if (el.checked === false) {
    numberOfElements--;
    removeFromCompare(el);
  } else {
    numberOfElements = 3;
    el.checked = false;
    alert(`deja 3 elemente`);
  }
}


document.querySelectorAll("[data-role=\"compare-trigger\"]").forEach(el => el.addEventListener("click", e => {
  changeState(e);
}));
