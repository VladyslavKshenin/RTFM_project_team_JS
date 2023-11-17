import logo from "./../images/icons.svg"
import emptyDesk1 from './../images/shopping-list-images/books-desk@1x.png';
import emptyDesk2 from './../images/shopping-list-images/books-desk@2x.png';
import emptyMob1 from './../images/shopping-list-images/books-mob@1x.png';
import amazon from '../images/modal-window/amazon.png';
import amazon2x from '../images/modal-window/amazon@2x.png';
import applebooks from '../images/modal-window/applebooks.png';
import applebooks2x from '../images/modal-window/applebooks@2x.png';

const KEY_LOCAL_STORAGE = "shoppingCard";//сюди треба ключ з вебсховища(який буде в модалці створений)
const KEY_LOCAL_STORAGE_ID = "shoppingList";
const shopEl = document.querySelector(".js-shopping-list");
const shopContainerEl = document.querySelector('.shopping-list-container');
const readyCard = parseStorage(KEY_LOCAL_STORAGE);
const numberCard = parseStorage(KEY_LOCAL_STORAGE_ID);
if (readyCard[0] !== undefined) {
  shopContainerEl.innerHTML="";
  shopEl.innerHTML="";
  shopEl.insertAdjacentHTML("afterbegin", funCreateCard(readyCard));
  shopEl.addEventListener("click", deleteCadr);
} else {
  funcCreateEmpty();
}
function deleteCadr(e) {
  //e.target.nodeName === "BUTTON" || e.target.nodeName === "svg" || e.target.nodeName === "use" 
  let parent = e.target.closest('.btn-shop');
  if (parent) {
  shopEl.innerHTML ="";
  readyCard.splice(parent.id, 1);
  numberCard.splice(parent.id,1);
  localStorage.removeItem(KEY_LOCAL_STORAGE);
  localStorage.removeItem(KEY_LOCAL_STORAGE_ID);

  setStorage(KEY_LOCAL_STORAGE, readyCard);
  setStorage(KEY_LOCAL_STORAGE_ID,numberCard);
  if (readyCard[0] !== undefined) {
    shopEl.insertAdjacentHTML(
      "afterbegin",
      funCreateCard(parseStorage(KEY_LOCAL_STORAGE))
    );

  } else {
    funcCreateEmpty();
  }
}
else{
    return;
}
}

function funCreateCard(readyCard) {
  return readyCard
    .map(({  book_image,title,author,description,amazonLinks, appleLinks }, index) => {
      return `<li class="shopping-list-item">
      <img class="shopping-list-card-img" src="${book_image}" alt="${title}">
      <div class="shopping-list-card-container">
        <h2 class="shopping-list-card-title">${title}</h2>
        <p class="shopping-list-card-text">Hardcover fiction</p>
        <p class="shopping-list-card-desc">${description}</p>
        <div class="shopping-list-card-bottom-container">
          <p class="shopping-list-card-author">${author}</p>
          <div class="shopping-list-card-container-img">
            <a href="${amazonLinks}" class="shopping-amazon-link" rel="noopener noreferrer nofollow" target="_blank">
              <img class="shopping-list-card-icon-amazon"srcset="${amazon} 1x, ${amazon2x} 2x" src="${amazon}" alt="Amazon" loading="lazy">
            </a>
            <a href="${appleLinks}" class="shopping-book-link" rel="noopener noreferrer nofollow" target="_blank">
              <img class="shopping-list-card-icon-book" srcset="${applebooks} 1x, ${applebooks2x} 2x" src="${applebooks}" alt="Apple books" loading="lazy">
            </a>
          </div>
        </div>
        <div>
          <button class="btn-shop shopping-list-card-container-trash" id="${index}">
            <svg class="shopping-list-card-icon-trash" width="18px" height="18px">
              <use href="${logo}#icon-del"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `;
    })
    .join("");
}
function funcCreateEmpty() {
  shopContainerEl.innerHTML="";
  shopContainerEl.insertAdjacentHTML(
    "afterbegin",
    `
    <p class="shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <img
      class="shopping-list-image"
      srcset="
        ${emptyDesk1} 1x,
        ${emptyDesk2} 2x
      "
      src="${emptyMob1}"
      alt="books"
      width="265"
      height="198"
    />
    `
  );
}
function setStorage(key, readyCard) {
  try {
    const stringFlag = JSON.stringify(readyCard);
    localStorage.setItem(key, stringFlag);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
}

function parseStorage(key) {
  try {
    const parseFlag = localStorage.getItem(key);
    return parseFlag === null ? undefined : JSON.parse(parseFlag);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
}
