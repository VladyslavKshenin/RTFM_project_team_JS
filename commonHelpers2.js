import"./assets/support-sidebar-236c4b6a.js";const n="/RTFM_project_team_JS/assets/icons-bb60c522.svg";console.dir(`${n}#icon-del`);const c=[{sebel:"sdfsdfsdf",sdfss:"sdfsdfsdf",fdsdfsdfsdf:"sdfsdf"},{sebel:"sdfsdfsdf",sdfss:"sdfsdfsdf",fdsdfsdfsdf:"sdfsdf"},{sebel:"sdfsdfsdf",sdfss:"sdfsdfsdf",fdsdfsdfsdf:"sdfsdf"}];localStorage.setItem("localCard",JSON.stringify(c));const a="localCard",t=document.querySelector(".js-shopping-list"),o=l(a);o[0]!==void 0?(t.innerHTML="",t.insertAdjacentHTML("afterbegin",d(o)),t.addEventListener("click",g)):r();function g(s){if(s.target.nodeName==="BUTTON"||s.target.nodeName==="svg"||s.target.nodeName==="use")t.innerHTML="",o.splice(s.target.id,1),localStorage.removeItem(a),p(a,o),o[0]!==void 0?t.insertAdjacentHTML("afterbegin",d(l(a))):r();else return}function d(s){return s.map(({sebel:e},i)=>`<li class="shopping-list-item">
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
          ${e}
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
        <div>
          <button class="btn-shop shopping-list-card-container-trash" id="${i}">
            <svg class="shopping-list-card-icon-trash" width="18px" height="18px">
              <use href="${n}#icon-del"></use>
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
    `)}function p(s,e){try{const i=JSON.stringify(e);localStorage.setItem(s,i)}catch(i){console.error("Get state error: ",i.message)}}function l(s){try{const e=localStorage.getItem(s);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}}
//# sourceMappingURL=commonHelpers2.js.map
