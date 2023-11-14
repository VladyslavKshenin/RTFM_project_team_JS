import getRefs from './refs';

const refs = getRefs();

// top books (bestsellers) and category books collection rendering functions

function markupBookCard(book, cardClass) {
  return `<li class="${cardClass}">
            <a class="book-link" href="" data-id="${book._id}">
              <div class="book-img-wrapper">
                <img class="book-img"
                  src="${book.book_image}"
                  alt="book image"
                  width="100%"
                  loading="lazy"
                />
                <p class="book-img-overlay">quick view</p>
              </div>
              <div class="book-info">
                <h3 class="book-title">
                  ${book.title}
                </h3>
                <p class="book-author">
                  ${book.author}
                </p>
              </div>
            </a>
          </li>`;
}

function markupCategoryBlock(category) {
  const bookCard = category.books
    .map(book => markupBookCard(book, 'top-book-card'))
    .join('');
  return `<div class="top-books-block">
            <h2 class="top-books-category-header">${category.list_name}</h2>
            <ul class="top-books-category">
            ${bookCard}
            </ul>
            <button class="top-books-button" type="button" data-category="${category.list_name}">see more</button>
          </div>`;
}

function markupCategoryCollection(books) {
  const bookCard = books
    .map(book => markupBookCard(book, 'category-book-card'))
    .join('');
  return `<ul class="category-books">
            ${bookCard}
            </ul>`;
}

function insertCategoryBlocks(category) {
  return refs.bookCollectionWrapper.insertAdjacentHTML(
    'beforeend',
    markupCategoryBlock(category)
  );
}

function insertCategoryCollection(category) {
  return refs.bookCollectionWrapper.insertAdjacentHTML(
    'beforeend',
    markupCategoryCollection(category)
  );
}

function insertTopBooksHeader() {
  refs.bookCollectionWrapper.insertAdjacentHTML(
    'afterbegin',
    `<h1 class="books-header">Best Sellers <span class="books-accent">Books</span></h1>`
  );
}

function insertCategoryBooksHeader(books) {
  const words = books[0].list_name.split(' ');
  const lastWord = words.pop();
  const header =
    words.join(' ') + ` <span class="books-accent">${lastWord}</span>`;
  refs.bookCollectionWrapper.insertAdjacentHTML(
    'afterbegin',
    `<h1 class="books-header">${header}</h1>`
  );
}

function cleanBookCollection() {
  refs.bookCollectionWrapper.innerHTML = '';
}

function renderTopBooks(books) {
  console.log(books);
  cleanBookCollection();
  books.forEach(insertCategoryBlocks);
  insertTopBooksHeader();
}

function renderCategoryBooks(books) {
  console.log(books);
  cleanBookCollection();
  insertCategoryCollection(books);
  insertCategoryBooksHeader(books);
}

// Support Ukraine
export function createMarkup(arr) {
  return arr
    .map(
      ({ id, title, url, img, img2x }) => `
        <li class="support-items">
          <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
            <span>0${id}</span>
            <img class="support-img" src="${img}" srcset="${img} 1x, ${img2x} 2x"  alt="${title}" >
          </a>
        </li>
        `
    )
    .join('');
}

export default { renderTopBooks, renderCategoryBooks, insertCategoryBlocks };
