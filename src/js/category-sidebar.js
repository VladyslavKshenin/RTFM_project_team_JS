import api from './books-api';
// import { API_OPTIONS, fetchBookList } from './books-api';
const ctgList = document.querySelector('.ctg-list');

api.fetchBookList(api.API_OPTIONS.list).then(response => {
  const markup = response
    .map(
      ({
        list_name,
      }) => `<li class="ctg-item js-ctg-item" data-ctg-name = ${list_name}>${list_name}
          </li>`
    )
    .join('');

  ctgList.insertAdjacentHTML('beforeend', markup);
});
