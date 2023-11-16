import getRefs from './refs';
import api from './books-api';
// import markup from './markup';
import amazon from '../images/modal-window/amazon.png';
import amazon2x from '../images/modal-window/amazon@2x.png';
import applebooks from '../images/modal-window/applebooks.png';
import applebooks2x from '../images/modal-window/applebooks@2x.png';

const refs = getRefs();
const modal = document.getElementById('bookModal');
const modalTitle = document.getElementById('bookModalTitle');
const modalBody = document.getElementById('bookModalBody');
const addToShoppingListBtn = document.getElementById('addToShoppingList');
const modalCloseBtn = document.querySelector('.modal-close');
// const modalCloseFooterBtn = document.querySelector('.btn-secondary');

let shoppingList = [];

function openModal(bookId) {
  api.fetchBookById(bookId).then(book => {
    modalTitle.innerText = book.title;
    modalTitle.dataset.bookId = bookId; // Додати dataset для збереження bookId
    modalBody.innerHTML = `<img src="${book.book_image}" alt="${book.title}" class="book-modal-img"/>
            <div class="book-modal-details">
                <h2 class="book-modal-title">${book.title}</h2>
                <h3 class="book-modal-author">${book.author}</h3>
                <p class="book-modal-desc">${book.description}</p>
                <ul class="icon-book-modal-list">
                    <li>
                        <a href="${book.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-amazon" srcset="${amazon} 1x, ${amazon2x} 2x" src="${amazon}" alt="Amazon" loading="lazy"/>
                        </a>
                    </li>
                    <li>
                        <a href="${book.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-ibooks" srcset="${applebooks} 1x, ${applebooks2x} 2x" src="${applebooks}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
    `;
    
    // Перевірити, чи книга вже є в списку покупок
    if (shoppingList.includes(bookId)) {
      addToShoppingListBtn.innerText = 'Remove from the shopping list';
    } else {
      addToShoppingListBtn.innerText = 'Add to shopping list';
    }

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Вимкнути прокручування, коли відкрито вікно
  });
}

function closeModal() {
  modal.classList.remove('show');
  document.body.style.overflow = ''; // Увімкнути прокручування, коли вікно закрито
}

function toggleShoppingList(bookId) {
  console.log('Toggling shopping list for bookId:', bookId);

  if (!bookId) {
    console.error('Invalid bookId:', bookId);
    return;
  }

  const index = shoppingList.indexOf(bookId);
  if (index === -1) {
    shoppingList.push(bookId);
  } else {
    shoppingList.splice(index, 1);
  }

  console.log('Updated shoppingList:', shoppingList);

  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

  if (index === -1) {
    addToShoppingListBtn.innerText = 'Remove from the shopping list';
  } else {
    addToShoppingListBtn.innerText = 'Add to shopping list';
  }
}

addToShoppingListBtn.addEventListener('click', () => {
  const currentBookId = modalTitle.dataset.bookId; // Отримання bookId з dataset
  toggleShoppingList(currentBookId);
});

modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

refs.bookCollectionWrapper.addEventListener('click', event => {
  const bookLink = event.target.closest('.book-link');
  if (bookLink) {
    event.preventDefault();
    const bookId = bookLink.dataset.id;

    // Виклик функції openModal для відображення модального вікна
    openModal(bookId);
  }
});

// Отримати список покупок із локального сховища
const savedShoppingList = localStorage.getItem('shoppingList');
if (savedShoppingList) {
  shoppingList = JSON.parse(savedShoppingList);
}

modalCloseBtn.addEventListener('click', closeModal);
// modalCloseFooterBtn.addEventListener('click', closeModal);