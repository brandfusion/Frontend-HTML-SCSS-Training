const { Alert } = require("bootstrap");

let compareCollection = [];

const addItem = ({ name, img, id, compareCollection }) => [...compareCollection, { name, img, id }];

// Checkbox elemente
document.querySelectorAll("[data-role=\"compare-trigger\"]").forEach(el => el.addEventListener("click", e => {

  if (compareCollection.length === 3 && e.currentTarget.checked) {
    e.preventDefault();
    alert(`Deja 3 elemente in Compare`);
    return;
  }
  const name = e.currentTarget.closest(".col-md-6").querySelector("h4").innerHTML;
  const img = e.currentTarget.closest(".col-md-6").querySelector("img").src;
  const { id } = e.currentTarget;
  if (e.currentTarget.checked) {
    compareCollection = addItem({ name, img, id, compareCollection });
  } else if (!e.currentTarget.checked) {
    compareCollection = [...compareCollection].filter(({ id }) => id !== e.currentTarget.id);
  }

  // console.log(compareCollection);
  RenderCompareCollection({ collection: compareCollection });
  RegisterButtonEvents();
}));

// Buton de close pe fiecare element din Compare
const RegisterButtonEvents = () => {

  document.getElementById(`btn-close-compare`).addEventListener(`click`, () => {
    RenderCompareCollection({ collection: [] });
    document.querySelectorAll("[data-role=\"compare-trigger\"]").forEach(el => el.checked = false);
    compareCollection = [];
  });

  document.querySelectorAll(".offcanvas-body .btn-close").forEach(n => {
    n.addEventListener("click", e => {
      const idSelected = e.currentTarget.closest("[data-ref]").dataset.ref;
      compareCollection = [...compareCollection].filter(({ id }) => id !== idSelected);

      // console.log(compareCollection);
      RenderCompareCollection({ collection: compareCollection });
      document.querySelector(`#${idSelected}`).checked = false;
      RegisterButtonEvents();
    });
  });
};


const RenderCompareCollection = ({ collection }) => {

  if (collection.length === 0) {
    document.getElementById("offcanvasCompare").classList.remove(`show`);
    return;
  }
  // document.getElementById(`btn-close-compare`).addEventListener(`click`, () => {
  //   document.getElementById("offcanvasCompare").classList.remove(`show`);
  //   document.querySelectorAll("[data-role=\"compare-trigger\"]").forEach(e => e.currentTarget.checked == false);
  // });

  // console.log(collection[collection.length - 1]);
  // let lastEl = [];
  // lastEl.push(collection[collection.length - 1]);
  // console.log(lastEl);

  const output =
    collection.map(({ id, name, img }) => `
        <div data-ref="${id}" class="compare-item">
          <div class="d-flex">
            <img src= "${img}">
            <button type="button" class="btn-close"> </button>
          </div >
        <h4>${name}</h4>
        </div >  
        `).join("");

  // Elimin toate nodurile din offcanvas-body inainte de a le adauga pe cele noi. 
  while (document.querySelector(`.offcanvas-body`).firstChild) {
    document.querySelector(`.offcanvas-body`).removeChild(document.querySelector(`.offcanvas-body`).firstChild);
  }

  document.querySelector(`.offcanvas-start`).classList.add(`show`);
  document.querySelector(`.offcanvas-body`).insertAdjacentHTML("beforeend", output);
};


// addItem({name:"1",img:"img1"});
// addItem({name:"2",img:"img2"});
// addItem({name:"3",img:"img3"});

// compareCollection = [{name:"1",img:"img1"},{name:"2",img:"img2"},{name:"3",img:"img3"}]

// addItem({name:"4",img:"img4"});
// let idtoberemoved=2;
// let arr = [{name:"1",img:"img1",id:1},{name:"2",img:"img2","id":2},{name:"3",img:"img3",id:3}];

// let finalArr = arr.filter(({id})=>id!==idtoberemoved);

// finalArr = [{name:"1",img:"img1",id:1},{name:"3",img:"img3",id:3}];