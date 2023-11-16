import getRefs from './refs';
import api from './books-api';
// import markup from './markup';

const refs = getRefs();
const modal = document.getElementById('bookModal');
const modalTitle = document.getElementById('bookModalTitle');
const modalBody = document.getElementById('bookModalBody');
const addToShoppingListBtn = document.getElementById('addToShoppingList');
const modalCloseBtn = document.querySelector('.close');
const modalCloseFooterBtn = document.querySelector('.btn-secondary');

let shoppingList = [];

function openModal(bookId) {
  api.fetchBookById(bookId).then(book => {
    modalTitle.innerText = book.title;
    modalTitle.dataset.bookId = bookId; // Додати dataset для збереження bookId
    modalBody.innerHTML = `
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Description:</strong> ${book.description}</p>
    `;
    
    // Перевірити, чи книга вже є в списку покупок
    if (shoppingList.includes(bookId)) {
      addToShoppingListBtn.innerText = 'Remove from Shopping List';
    } else {
      addToShoppingListBtn.innerText = 'Add to Shopping List';
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
    addToShoppingListBtn.innerText = 'Remove from Shopping List';
  } else {
    addToShoppingListBtn.innerText = 'Add to Shopping List';
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
modalCloseFooterBtn.addEventListener('click', closeModal);