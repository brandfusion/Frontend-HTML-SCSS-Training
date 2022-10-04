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

document.querySelectorAll("[data-role=\"compare-trigger\"]").forEach(el => el.addEventListener("click", e => {
  const canInsert = checkItemAvailability({ node: document.querySelector(`.offcanvas-body`) });
  const { availability, message } = canInsert;

  if (availability) {
    if (e.currentTarget.checked) {
      insertInCompare(e);
    } else {
      removeFromCompare(e);
    }
  } else if (!e.currentTarget.checked) {
    removeFromCompare(e);
  } else {
    e.preventDefault();
    alert(message);
  }


  // UX 
  if (document.querySelector(`.offcanvas-body`).children.length > 0) {
    document.querySelector(`.offcanvas-start`).classList.add(`show`);
  } else {
    document.querySelector(`.offcanvas-start`).classList.remove(`show`);
  }
}));


const products = [
  { image: `resources/images/category-1.png`, title: `Nullam` },
  { image: `resources/images/category-2.png`, title: `Duis` },
  { image: `resources/images/category-3.png`, title: `Aliquam` },
  { image: `resources/images/category-4.png`, title: `Praesent` },
  { image: `resources/images/category-5.png`, title: `Quisque` },
  { image: `resources/images/category-6.png`, title: `Etiam` },
  { image: `resources/images/category-7.png`, title: `Cras` },
  { image: `resources/images/category-8.png`, title: `Vivamus` }
];