import api from './books-api';
import markup from './markup';
import getRefs from './refs';

const refs = getRefs();

api.fetchBookList(api.API_OPTIONS.top).then(markup.renderTopBooks);

function showSelectedCategoryBooks(event) {
  const selectedCategory = event.target.childNodes[0].data;
  console.dir(event.target);
  console.log(selectedCategory);
  if (selectedCategory !== 'All categories') {
    api
      .fetchBookList(api.API_OPTIONS.category, selectedCategory)
      .then(markup.renderCategoryBooks);
  } else {
    api.fetchBookList(api.API_OPTIONS.top).then(markup.renderTopBooks);
  }
}

function showMoreCategoryBooks(event) {
  if (!event.target.classList.contains('top-books-button')) {
    return;
  }
  const category = event.target.dataset.category;
  api
    .fetchBookList(api.API_OPTIONS.category, category)
    .then(markup.renderCategoryBooks);
}

refs.ctgList.addEventListener('click', showSelectedCategoryBooks);
refs.bookCollectionWrapper.addEventListener('click', showMoreCategoryBooks);
