// Alina Stadnyk // List of Categories

import { fetchCategories } from './js/category-sidebar';
const ctgList = document.querySelector('.ctg-list');
// ctgList.addEventListener('click', selectCtg);

fetchCategories().then(response => {
  const markup = response
    .map(
      ({ list_name }) => `<li class="ctg-item js-ctg-item">${list_name}
        </li>`
    )
    .join('');
  ctgList.insertAdjacentHTML('beforeend', markup);
});

// function selectCtg(evt) {
//   const selectedCategory = evt.target.innerText;
// }
