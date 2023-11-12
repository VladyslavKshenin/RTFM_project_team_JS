import"./assets/support-sidebar-fce787cb.js";const a="localCard",t=document.querySelector(".js-shopping-list"),o=l(a);o[0]!==void 0?(t.innerHTML="",t.insertAdjacentHTML("afterbegin",n(o)),document.querySelector(".btnDelet"),t.addEventListener("click",c)):r();t.insertAdjacentHTML("afterbegin",`<svg class="shopping-list-card-icon-trash" width="12px" height="12px">
<use href="${logo}#icon-del"></use>
</svg>`);function c(e){if(e.target.nodeName==="BUTTON"||e.target.nodeName==="svg")t.innerHTML="",o.splice(e.target.id,1),localStorage.removeItem(a),d(a,o),o[0]!==void 0?t.insertAdjacentHTML("afterbegin",n(l(a))):r();else return}function n(e){return e.map(({sebel:s},i)=>`<li class="shopping-list-item">
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
          ${s}
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
          <button class="btn-shop" id="${i}">
            <svg class="shopping-list-card-icon-trash" width="12px" height="12px">
              <use href="./images/icons.svg#icon-del"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join("")}function r(){t.insertAdjacentHTML("afterend",`
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
    `)}function d(e,s){try{const i=JSON.stringify(s);localStorage.setItem(e,i)}catch(i){console.error("Get state error: ",i.message)}}function l(e){try{const s=localStorage.getItem(e);return s===null?void 0:JSON.parse(s)}catch(s){console.error("Get state error: ",s.message)}}
//# sourceMappingURL=commonHelpers2.js.map
