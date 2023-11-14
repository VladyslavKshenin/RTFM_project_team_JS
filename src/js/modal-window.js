import icon from '../images/icons.svg';
import amazon from '../images/modal-window/amazon.png';
import amazon2x from '../images/modal-window/amazon@2x.png';
import applebooks from '../images/modal-window/applebooks.png';
import applebooks2x from '../images/modal-window/applebooks@2x.png';
import booksApi from './books-api';

const KEY_LOCAL_STORAGE = 'shoppingList';
const bookCollectionWrapper = document.querySelector(".book-collection-wrapper");
let backdrop;
let modalWrapper;
let addBtn;

bookCollectionWrapper.addEventListener('click', async (event) => {
    // Перевіряємо, чи клікнуто на .book-link або на його дочірніх елементах
    const bookElement = event.target.closest('.book-link');

    if (bookElement) {
        event.preventDefault();
        const bookId = bookElement.dataset.id;
        // потрібен датасет (дописала локально у markup.js (строка 11 та 43) після href="" data-id="${book._id}">)
        try {
            const book = await booksApi.fetchBookById(bookId);
            markupModalWindow(book);
        } catch (error) {
            console.error('Error fetching book details:', error);
        }
    }
});

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
        // Перевірте, чи вже існує екземпляр lightbox
        backdrop.classList.remove('visually-hidden');
        modalWrapper.classList.remove('visually-hidden');
        //Oбробник для закриття модального вікна
        const closeBtn = document.querySelector('#js-book-modal-btn-close');
        console.log('вбийте мене', closeBtn)
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeModaWindow();
            });
        }

        addBtn = document.querySelector('#js-book-modal-btn');
        console.log('це капець', addBtn);
        if (addBtn) {
            addBtn.addEventListener('click', () => {
                //toggleShoppingList(book);
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
// Oбробник для кнопки Add to shopping list     
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

    // Видаляємо слухача події з кнопки
    if (addBtn) {
        addBtn.removeEventListener('click', handleAddBtnClick);
    }
}

function handleAddBtnClick() {
    toggleShoppingList(book);
    // Видаляємо слухача події з кнопки після кліку
    if (addBtn) {
        addBtn.removeEventListener('click', handleAddBtnClick);
    }
}

//Oновлення списку покупок, додавання або видалення книги залежно від її наявності у списку.
function toggleShoppingList(book) {
    const shoppingList = getFromLocalStorage();
    const bookIndex = shoppingList.findIndex(item => item.id === book._id);

    if (bookIndex !== -1) {
        // Книга вже у shopping list, прибираємо книгу
        shoppingList.splice(bookIndex, 1);
    } else {
        // Додаємо книгу у shopping list
        shoppingList.push({
            id: book._id,
            image: book.book_image,
            title: book.title,
            author: book.author,
            description: book.description,
            buy_links: book.buy_links,
            // Перевірити за макетом що ще додати
        });
    }
    // Зберегаємо оновлений shopping list у localStorage
    saveToLocalStorage(shoppingList);
    updateTextBtn(book);
};


function getFromLocalStorage() {
    const shoppingListString = localStorage.getItem(KEY_LOCAL_STORAGE);
    return shoppingListString ? JSON.parse(shoppingListString) : [];
};

function saveToLocalStorage(shoppingList) {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(shoppingList));
};


function updateTextBtn(book) {
    const textBtn = document.querySelector('#js-book-modal-btn');
    console.log('updateTextBtn addBtn', textBtn);
    const buyMessage = document.querySelector('.book-modal-buy');
    if (textBtn && buyMessage) {
        const isInShoppingList = isInShoppingList(book);
        //console.log('updateTextBtn isInShoppingList', isInShoppingList);
        if (isInShoppingList) {
            textBtn.textContent = 'Remove from the shopping list';
            buyMessage.style.display = 'block'; // Відображаємо повідомлення
        } else {
            textBtn.textContent = 'Add to shopping list';
            buyMessage.style.display = 'none'; // Приховуємо повідомлення
        }
    }
};

function isInShoppingList(book) {
    const shoppingList = getFromLocalStorage();
    return shoppingList.some(item => item.id === book._id);
}

