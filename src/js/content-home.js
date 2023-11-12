import api from './books-api';
import markup from './markup';
import getRefs from './refs';

const refs = getRefs();

api.fetchBookList(api.API_OPTIONS.top).then(markup.renderTopBooks);

function showSelectedCategoryBooks(evt) {
  const selectedCategory = evt.target.childNodes[0].data;
  console.dir(evt.target);
  console.log(selectedCategory);
  if (selectedCategory !== 'All categories') {
    api
      .fetchBookList(api.API_OPTIONS.category, selectedCategory)
      .then(markup.renderCategoryBooks);
  } else {
    api.fetchBookList(api.API_OPTIONS.top).then(markup.renderTopBooks);
  }
}

refs.ctgList.addEventListener('click', showSelectedCategoryBooks);
