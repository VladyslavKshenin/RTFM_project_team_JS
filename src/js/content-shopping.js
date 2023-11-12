
const KEY_LOCAL_STORAGE = "localCard";//сюди треба ключ з вебсховища(який буде в модалці створений)
const shopEl = document.querySelector(".js-shopping-list");
const readyCard = parseStorage(KEY_LOCAL_STORAGE);

if (readyCard[0] !== undefined) {
  shopEl.innerHTML = "";
  shopEl.insertAdjacentHTML("afterbegin", funCreateCard(readyCard));
  const btnDelEl = document.querySelector(".btnDelet");
  shopEl.addEventListener("click", deleteCadr);
} else {
  funcCreateEmpty();
}
shopEl.insertAdjacentHTML("afterbegin",`<svg class="shopping-list-card-icon-trash" width="12px" height="12px">
<use href="${logo}#icon-del"></use>
</svg>`);
function deleteCadr(e) {
  if (e.target.nodeName === "BUTTON" || e.target.nodeName === "svg" ) {
  shopEl.innerHTML = "";
  readyCard.splice(e.target.id, 1);
  localStorage.removeItem(KEY_LOCAL_STORAGE);

  setStorage(KEY_LOCAL_STORAGE, readyCard);
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
    .map(({ sebel }, index) => {
      return `<li class="shopping-list-item">
      <img class="shopping-list-card-img" src="https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg" alt="book">
      <div class="shopping-list-card-container">
        <h2 class="shopping-list-card-title">I will find you</h2>
        <p class="shopping-list-card-text">Hardcover fiction</p>
        <p class="shopping-list-card-desc">
          David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short
          drive away
          from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when
          David woke
          suddenly to discover Matthew had been murdered while David was asleep just down the hall.
          ${sebel}
        </p>
        <div class="shopping-list-card-bottom-container">
          <p class="shopping-list-card-author">Harlan Coben</p>
          <div class="shopping-list-card-container-img">
            <a href="">
              <img class="shopping-list-card-icon-amazon" src="" alt="amazon-icon">
              <img class="shopping-list-card-icon-book" src="" alt="book-icon">
            </a>
          </div>
        </div>
        <div class="shopping-list-card-container-trash">
          <button class="btn-shop" id="${index}">
            <svg class="shopping-list-card-icon-trash" width="12px" height="12px">
              <use href="./images/icons.svg#icon-del"></use>
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
  shopEl.insertAdjacentHTML(
    "afterend",
    `
    <div class="shopping-list-container">
    <p class="shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <img
      class="shopping-list-image"
      srcset="
        ./images/shopping-list-images/books-desk@1x.png 1x,
        ./images/shopping-list-images/books-desk@2x.png 2x
      "
      src="./images/shopping-list-images/books-mob@1x.png"
      alt="books"
      width="265"
      height="198"
    />
  </div>
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
