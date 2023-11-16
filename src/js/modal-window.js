import icon from '../images/icons.svg';
import amazon from '../images/modal-window/amazon.png';
import amazon2x from '../images/modal-window/amazon@2x.png';
import applebooks from '../images/modal-window/applebooks.png';
import applebooks2x from '../images/modal-window/applebooks@2x.png';
import booksApi from './books-api';

const KEY_LOCAL_STORAGE = 'localCard';
const bookCollectionWrapper = document.querySelector(".book-collection-wrapper");
const shoppingListArr = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)) ?? [];

let backdrop;
let modalWrapper;

bookCollectionWrapper.addEventListener('click', async (event) => {
    // Перевіряємо, чи клікнуто на .book-link або на його дочірніх елементах
    const bookElement = event.target.closest('.book-link');

    if (bookElement) {
        event.preventDefault();
        const bookId = bookElement.dataset.id;
        
        try {
            const book = await booksApi.fetchBookById(bookId);
            markupModalWindow(book);
        } catch (error) {
            console.error('Error fetching book details:', error);
        }
    }
});

const addBtn = document.querySelector('#js-book-modal-btn');
console.log('addBtn', addBtn)
if(addBtn) {
    addBtn.addEventListener('click', () => {
    const inStorage = shoppingListArr.some(({ _id }) => _id === book._id);

    if (inStorage) {
        // Якщо книга вже в localStorage, видаляємо її
        shoppingListArr = shoppingListArr.filter(({ _id }) => _id !== book._id);
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(shoppingListArr));
    } else {
        // Якщо книги немає в localStorage, додаємо її
        shoppingListArr.push(book);
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(shoppingListArr));
    }
    // Оновлюємо текст кнопки
    updateButtonText();
}); 
} else {
    console.error('Element with id "js-book-modal-btn" not found.');
}

//Функція для оновлення тексту кнопки
function updateButtonText() {
    const inStorage = shoppingListArr.some(({ _id }) => _id === book._id);

    if (inStorage) {
        addBtn.textContent = 'Remove from the shopping list';
        bookModalBuy.style.display = 'block';
    } else {
        addBtn.textContent = 'Add to shopping list';
        bookModalBuy.style.display = 'none';
    }
}

function markupModalWindow(book) {
    //console.log('Opening modal with book details:', book);
    // елементи для темного фону та модального вікна
    backdrop = document.createElement('div');
    modalWrapper = document.createElement('div');
    // Додала класи та стилі
    backdrop.classList.add('backdrop', 'visually-hidden');
    modalWrapper.classList.add('modal-wrapper', 'visually-hidden');

    modalWrapper.innerHTML= 
        `<div class="book-modal">
            <img src="${book.book_image}" alt="${book.title}" class="book-modal-img"/>
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
            <button class='book-modal-btn js-add' id='js-book-modal-btn'>Add to shopping list</button>
            <p class='book-modal-buy'>Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
            <button class='book-modal-close' id='js-book-modal-btn-close'>
                <svg class='icon-book-modal-close'><use href='${icon}#x-close'></use></svg>
            </button>
        </div>`;
        // Вставляємо створені елементи в тіло документу
        document.body.appendChild(backdrop);
        document.body.appendChild(modalWrapper);
        // Перевіка, чи вже існує екземпляр lightbox
        backdrop.classList.remove('visually-hidden');
        modalWrapper.classList.remove('visually-hidden');
        //Oбробник для закриття модального вікна
        const closeBtn = document.querySelector('#js-book-modal-btn-close');
        console.log(closeBtn);
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeModaWindow();
            });
        }
        toggleScrollLock(true); // блокування прокрутки

        document.addEventListener('keydown', handleKeyPress);
        backdrop.addEventListener('click', handleBackdropClick);
}

function toggleScrollLock(lock) {
    if (lock) {
        document.body.classList.add('modal-open');
    } else {
        document.body.classList.remove('modal-open');
    }
}
   
function handleKeyPress(event) {
    if (event.key === 'Escape') {
        closeModaWindow();
    }
}
    
function handleBackdropClick(event) {
    if (event.target === backdrop) {
            closeModaWindow();
    }
}
    
function closeModaWindow() {
    backdrop.classList.add('visually-hidden');
    modalWrapper.classList.add('visually-hidden');
    toggleScrollLock(false); // розблокування прокрутки
    document.removeEventListener('keydown', handleKeyPress);
    backdrop.removeEventListener('click', handleBackdropClick);
}

