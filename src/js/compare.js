let numberOfElements = 0;
const offcanvasBody = document.querySelector(`.offcanvas-body`);

function removeFromCompare(el) {
  const img = document.getElementById(`${el.id  }--image`);
  const title = document.getElementById(`${el.id  }--title`);

  offcanvasBody.removeChild(img);
  offcanvasBody.removeChild(title);

  if (numberOfElements === 0) {
      document.querySelector(`.offcanvas-start`).classList.remove(`show`);
  }
}

function insertInCompare(el) {


    const output = `
    <div id="${el.id}-compare">
     <h1>${el.id}</h1>
    </div>
    `;
    const img = document.createElement(`img`);
    img.src = el.previousElementSibling.src;
    img.id = `${el.id  }--image`;

    const title = document.createElement(`h4`);
    title.innerText = el.nextElementSibling.textContent;
    title.id = `${el.id  }--title`;

    offcanvasBody.appendChild(img);
    offcanvasBody.appendChild(title);
    offcanvasBody.insertAdjacentHTML("afterbegin",output);

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




document.querySelectorAll("[data-role=\"compare-trigger\"]").forEach(el=>el.addEventListener("click",e=>{
  changeState(e);
}));