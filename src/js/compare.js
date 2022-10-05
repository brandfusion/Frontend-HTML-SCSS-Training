const { Alert } = require("bootstrap");

const numberOfElements = 0;

const removeFromCompare = e => {
  const { id } = e.currentTarget;
  const target = document.querySelector(`[data-ref="${id}"]`);
  target.remove();
};

const insertInCompare = (e) => {
  const id = e.currentTarget.getAttribute("id");
  const img = e.currentTarget.previousElementSibling.src;
  const title = e.currentTarget.nextElementSibling.textContent;
  const output = `
    <div data-ref="${id}" class="compare-item">
      <div class="d-flex">
        <img src= "${img}">
        <button type="button" class="btn-close"> </button>
      </div >
    <h4>${title}</h4>
    </div >
    `;
  document.querySelector(`.offcanvas-body`).insertAdjacentHTML("beforeend", output);
};

const checkItemAvailability = ({ node }) => {
  if (node.children.length === 3) {
    return { availability: false, message: "Nu poate fi adaugat, exista deja 3 elemente in lista" };
  }
  return { availability: true, message: null };
};

// document.querySelectorAll("[data-role=\"compare-trigger\"]").forEach(el => el.addEventListener("click", e => {
//   const canInsert = checkItemAvailability({ node: document.querySelector(`.offcanvas-body`) });
//   const { availability, message } = canInsert;

//   if (availability) {
//     if (e.currentTarget.checked) {
//       insertInCompare(e);
//     } else {
//       removeFromCompare(e);
//     }
//   } else if (!e.currentTarget.checked) {
//     removeFromCompare(e);
//   } else {
//     e.preventDefault();
//     alert(message);
//   }


//   // UX 
//   if (document.querySelector(`.offcanvas-body`).children.length > 0) {
//     document.querySelector(`.offcanvas-start`).classList.add(`show`);
//   } else {
//     document.querySelector(`.offcanvas-start`).classList.remove(`show`);
//   }
// }));


// const products = [
//   { image: `resources/images/category-1.png`, title: `Nullam` },
//   { image: `resources/images/category-2.png`, title: `Duis` },
//   { image: `resources/images/category-3.png`, title: `Aliquam` },
//   { image: `resources/images/category-4.png`, title: `Praesent` },
//   { image: `resources/images/category-5.png`, title: `Quisque` },
//   { image: `resources/images/category-6.png`, title: `Etiam` },
//   { image: `resources/images/category-7.png`, title: `Cras` },
//   { image: `resources/images/category-8.png`, title: `Vivamus` }
// ];


let compareCollection = [];

const addItem = ({ name, img, id, compareCollection }) => [...compareCollection, { name, img, id }];

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

  console.log(compareCollection);
  RenderCompareCollection({ collection: compareCollection });
  RegisterButtonEvents();
}));


const RegisterButtonEvents = () => {
  document.querySelectorAll(".offcanvas-body .btn-close").forEach(n => {
    n.addEventListener("click", e => {
      const idSelected = e.currentTarget.closest("[data-ref]").dataset.ref;
      compareCollection = [...compareCollection].filter(({ id }) => id !== idSelected);

      console.log(compareCollection);
      RenderCompareCollection({ collection: compareCollection });
      document.querySelector(`#${idSelected}`).checked = false;
      RegisterButtonEvents();
    });
  });
};
const RenderCompareCollection = ({ collection }) => {

  if (collection.length === 0) {
    document.getElementById("offcanvasCompare").remove();
    return;
  }



  const output = `  
  <div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvasCompare"  aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" id="btn-close-compare"></button>
        </div>
        <div class="offcanvas-body">
            ${collection.map(({id,name,img})=>`
              <div data-ref="${id}" class="compare-item">
                <div class="d-flex">
                  <img src= "${img}">
                  <button type="button" class="btn-close"> </button>
                </div >
              <h4>${name}</h4>
              </div >  
              `).join("")}
        </div>
  </div>
  
  `;
  document.querySelector(`body`).insertAdjacentHTML("beforeend", output);
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