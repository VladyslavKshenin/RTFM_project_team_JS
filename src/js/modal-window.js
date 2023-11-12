import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import icon from '../images/icons.svg';
import modalIcon from '../images/modal-window/modal.svg';
import booksApi from './books-api';

const bookCollectionWrapper = document.querySelector(".book-collection-wrapper");
let lightbox; 

// Oбробник подій на клік для div з класом .book-collection-wrapper.
bookCollectionWrapper.addEventListener('click', async (event) => {
    // Перевіряємо, чи клікнуто на .book-link або на його дочірніх елементах
    const bookLink = event.target.closest('.book-link');

    
    if (bookLink) {
        const bookId = bookLink.dataset.id; // Якщо .book-link знайдено, витягується id з датасету (data-id) цього елемента
        // та зберігається в змінній bookId.
        // Але у розмітці файлу markup.js (строка 10) дата-сет вказан не був. 
        // Локально дописала в 10-ту строку  data-id="${book.id}" щоб перевірити чи зможу забрати id обьекта книги, але інформація не відображається.
        // Перевіряла через console-log, консоль не видає ані інформаціі, ані помилок. 

        try {
            const book = await booksApi.fetchBookById(bookId);
            markupModalWindow(book);

        } catch (error) {
            console.error('Error fetching book details:', error);
        }
    }
});

function markupModalWindow(book) {
    console.log('Opening modal with book details:', book);

    const modalMarkup = `
        <div class="book-modal">
            <img src="${book.book_image}" alt="${book.title}" class="book-modal-img"/>
            <div class='book-modal-details'>
                <h2 class="book-modal-title">${book.title}</h2>
                <h3 class="book-modal-author">${book.author}</h3>
                <p class='book-modal-desc'>${book.description}</p>
                <ul class='icon-book-modal-list'>
                    <li>
                        <a href="${book.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <svg class='icon-book-modal-amazon'><use href="${modalIcon}#amazon"></use></svg>
                        </a>
                    </li>
                    <li>
                        <a href="${book.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <svg class='icon-book-modal-ibooks'><use href="${modalIcon}#applebooks"></use></svg>
                        </a>
                    </li>
                </ul>
            </div>
            <button class='book-modal-btn js-add' id='js-book-modal-btn'>Add to shopping list</button>
            <p class='book-modal-buy'>Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
            <button class='book-modal-close' id='js-book-modal-btn-close'>
                <svg class='icon-book-modal-close'><use href='${icon}#x-close'></use></svg>
            </button>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', modalMarkup);

        if (!lightbox) {
            lightbox = new SimpleLightbox('.book-modal');
        }
    
        lightbox.open();
        
        // Oбробник для кнопки Add to shopping list
        const addBtn = document.querySelector('#js-book-modal-btn');
        if (addBtn) {
            addBtn.addEventListener('click', () => {
                toggleShoppingList(book);
            });
        }

        // Oбробник для закриття модального вікна
        const closeBtn = document.querySelector('#js-book-modal-btn-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                lightbox.close();
            });
        }
};

//Oновлення списку покупок, додавання або видалення книги залежно від її наявності у списку.
function toggleShoppingList(book) {
    const shoppingList = getFromLocalStorage();

    const bookIndex = shoppingList.findIndex(item => item.id === book.id);

    if (bookIndex !== -1) {
        // Книга вже у shopping list, прибираємо книгу
        shoppingList.splice(bookIndex, 1);
    } else {
        // Додаємо книгу у shopping list
        shoppingList.push({
            id: book.id,
            title: book.title,
            author: book.author,
            // Перевірити за макетом що ще додати
        });
    }
    // Зберегаємо оновлений shopping list у localStorage
    saveToLocalStorage(shoppingList);
    updateTextBtn(book);
};

function getFromLocalStorage() {
    const shoppingListString = localStorage.getItem('shoppingList');
    return shoppingListString ? JSON.parse(shoppingListString) : [];
};

function saveToLocalStorage(shoppingList) {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
};


function updateTextBtn() {
    const addBtn = document.querySelector('#js-book-modal-btn');
    
    if (addBtn) {
        const isInShoppingList = isInShoppingList(book);
        
        if (isInShoppingList) {
            // Якщо книга є у списку, встановлюємо текст "Remove from the shopping list"
            addBtn.textContent = 'Remove from the shopping list';
        } else {
            // Якщо книга не у списку, встановлюємо текст "Add to shopping list"
            addBtn.textContent = 'Add to shopping list';
        }
    }
};

function isInShoppingList(book) {
    const shoppingList = getFromLocalStorage();
    return shoppingList.some(item => item.id === book.id);
};
