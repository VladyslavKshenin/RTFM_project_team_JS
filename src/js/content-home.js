import api from './books-api';
import markup from './markup';

async function topBooks() {
  const topBooks = await api.fetchBookList(api.API_OPTIONS.top);
  console.log(topBooks);
  topBooks.forEach(markup.insertCategoryBlocks);
}

topBooks();

//const homeSection = document.querySelector('.home-container');
const allCtg = document.querySelector('.js-ctg-heading');
const ctgList = document.querySelector('.ctg-list');
const ctgName = document.querySelector('.selected-ctg-name');
const wrapper = document.querySelector('.book-collection-wrapper');
console.log(ctgName);
// import { API_OPTIONS, fetchBookList } from './books-api';

ctgList.addEventListener('click', selectCtg);
allCtg.addEventListener('click', renderTopBooks);

function renderTopBooks() {
  wrapper.innerHTML = '';
  topBooks();
}

function selectCtg(evt) {
  const selectedCategory = evt.target.childNodes[0].data;

  api
    .fetchBookList(api.API_OPTIONS.category, selectedCategory)
    .then(response => {
      ctgName.innerHTML = '';
      wrapper.innerHTML = '';
      const markup = response
        .map(
          ({ book_image, author, title }) => `<div class="ctg-top-books">

  <div class="ctg-book-card">
    <img class = 'ctg-book-image' src="${book_image}" alt="${title}" />
    <div class = 'ctg-book-text'>
    <h3 class="ctg-book-name">${title}</h3>
    <h4 class="ctg-book-author">${author}</h4>
    </div>
  </div>
</div>
`
        )
        .join('');
      ctgName.insertAdjacentHTML('afterbegin', selectedCategory);
      wrapper.insertAdjacentHTML('beforeend', markup);
    });
}
