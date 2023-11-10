import { API_OPTIONS, fetchBookList } from './books-api';
const ctgList = document.querySelector('.ctg-list');

fetchBookList(API_OPTIONS.list).then(response => {
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
// ctgList.addEventListener('click', selectCtg);

// function selectCtg(evt) {
//   const selectedCategory = evt.target.childNodes[0].data;

//   console.dir(selectedCategory);
//   fetchBookList(API_OPTIONS.category, selectedCategory).then(response => {
//     console.log(response);
//     const markup = response
//       .map(
//         ({
//           book_image,
//           author,
//           title,
//           list_name,
//         }) => `<div class="ctg-top-books">
//   <h1 class="ctg-name">${list_name}</h1>
//   <div class="ctg-book-card">
//     <img src="${book_image}" alt="${title}" />
//     <h3 class="ctg-book-name">${title}</h3>
//     <h4 class="ctg-book-author">${author}</h4>
//   </div>
// </div>
// `
//       )
//       .join('');
//     ctgList.innerHTML = markup;
//   });
// }
