import{a as i,b as f,c as d,d as g,l as h}from"./assets/applebooks@2x-619c574b.js";const m="/RTFM_project_team_JS/assets/books-desk@1x-1f62c9bc.png",u="/RTFM_project_team_JS/assets/books-desk@2x-306b4264.png",b="/RTFM_project_team_JS/assets/books-mob@1x-93df6442.png",k=[{sebel:"sdfsdfsdf",sdfss:"sdfsdfsdf",fdsdfsdfsdf:"sdfsdf"},{sebel:"sdfsdfsdf",sdfss:"sdfsdfsdf",fdsdfsdfsdf:"sdfsdf"},{sebel:"sdfsdfsdf",sdfss:"sdfsdfsdf",fdsdfsdfsdf:"sdfsdf"}];localStorage.setItem("localCard",JSON.stringify(k));const r="localCard",o=document.querySelector(".js-shopping-list"),n=document.querySelector(".shopping-list-container"),a=p(r);a[0]!==void 0?(n.innerHTML="",o.innerHTML="",o.insertAdjacentHTML("afterbegin",l(a)),o.addEventListener("click",v)):c();function v(s){if(s.target.nodeName==="BUTTON"||s.target.nodeName==="svg"||s.target.nodeName==="use")o.innerHTML="",a.splice(s.target.id,1),localStorage.removeItem(r),y(r,a),a[0]!==void 0?o.insertAdjacentHTML("afterbegin",l(p(r))):c();else return}function l(s){return s.map(({sebel:e},t)=>`<li class="shopping-list-item">
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
            <a href="" class="shopping-amazon-link" rel="noopener noreferrer nofollow" target="_blank">
              <img class="shopping-list-card-icon-amazon"srcset="${i} 1x, ${f} 2x" src="${i}" alt="Amazon" loading="lazy">
            </a>
            <a href="" class="shopping-book-link" rel="noopener noreferrer nofollow" target="_blank">
              <img class="shopping-list-card-icon-book" srcset="${d} 1x, ${g} 2x" src="${d}" alt="Apple books" loading="lazy">
            </a>
          </div>
        </div>
        <div>
          <button class="btn-shop shopping-list-card-container-trash" id="${t}">
            <svg class="shopping-list-card-icon-trash" width="18px" height="18px">
              <use href="${h}#icon-del"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join("")}function c(){n.innerHTML="",n.insertAdjacentHTML("afterbegin",`
    <p class="shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <img
      class="shopping-list-image"
      srcset="
        ${m} 1x,
        ${u} 2x
      "
      src="${b}"
      alt="books"
      width="265"
      height="198"
    />
    `)}function y(s,e){try{const t=JSON.stringify(e);localStorage.setItem(s,t)}catch(t){console.error("Get state error: ",t.message)}}function p(s){try{const e=localStorage.getItem(s);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}}
//# sourceMappingURL=commonHelpers2.js.map
