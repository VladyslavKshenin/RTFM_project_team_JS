import api from './books-api';
import markup from './markup';
import getRefs from './refs';

const refs = getRefs();

api.fetchBookList(api.API_OPTIONS.top).then(markup.renderTopBooks);

function highlightMenuActiveCategory(event) {
  [...refs.ctgList.children].forEach(li =>
    li.classList.remove('ctg-item-active')
  );
  if (refs.ctgList.contains(event.target)) {
    event.target.classList.add('ctg-item-active');
  } else {
    const match = [...refs.ctgList.children].find(
      li => li.textContent.trim() === event.target.dataset.category
    );
    match.classList.add('ctg-item-active');
  }
}

function showSelectedCategoryBooks(event) {
  const selectedCategory = event.target.childNodes[0].data;
  highlightMenuActiveCategory(event);
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
  highlightMenuActiveCategory(event);
  api
    .fetchBookList(api.API_OPTIONS.category, category)
    .then(markup.renderCategoryBooks);
}

refs.ctgList.addEventListener('click', showSelectedCategoryBooks);
refs.bookCollectionWrapper.addEventListener('click', showMoreCategoryBooks);
