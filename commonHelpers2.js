import{a as l,b as _,c as p,d as x,l as S}from"./assets/applebooks@2x-b02de412.js";const v="/RTFM_project_team_JS/assets/books-desk@1x-1f62c9bc.png",y="/RTFM_project_team_JS/assets/books-desk@2x-306b4264.png",L="/RTFM_project_team_JS/assets/books-mob@1x-93df6442.png",r="shoppingCard",a="shoppingList",o=document.querySelector(".js-shopping-list"),i=document.querySelector(".shopping-list-container"),n=c(r),d=c(a);n[0]!==void 0?(i.innerHTML="",o.innerHTML="",o.insertAdjacentHTML("afterbegin",h(n)),o.addEventListener("click",T)):m();function T(e){let s=e.target.closest(".btn-shop");if(s)o.innerHTML="",n.splice(s.id,1),d.splice(s.id,1),localStorage.removeItem(r),localStorage.removeItem(a),g(r,n),g(a,d),n[0]!==void 0?o.insertAdjacentHTML("afterbegin",h(c(r))):m();else return}function h(e){return e.map(({book_image:s,title:t,author:f,description:b,amazonLinks:u,appleLinks:k},$)=>`<li class="shopping-list-item">
      <img class="shopping-list-card-img" src="${s}" alt="${t}">
      <div class="shopping-list-card-container">
        <h2 class="shopping-list-card-title">${t}</h2>
        <p class="shopping-list-card-text">Hardcover fiction</p>
        <p class="shopping-list-card-desc">${b}</p>
        <div class="shopping-list-card-bottom-container">
          <p class="shopping-list-card-author">${f}</p>
          <div class="shopping-list-card-container-img">
            <a href="${u}" class="shopping-amazon-link" rel="noopener noreferrer nofollow" target="_blank">
              <img class="shopping-list-card-icon-amazon"srcset="${l} 1x, ${_} 2x" src="${l}" alt="Amazon" loading="lazy">
            </a>
            <a href="${k}" class="shopping-book-link" rel="noopener noreferrer nofollow" target="_blank">
              <img class="shopping-list-card-icon-book" srcset="${p} 1x, ${x} 2x" src="${p}" alt="Apple books" loading="lazy">
            </a>
          </div>
        </div>
        <div>
          <button class="btn-shop shopping-list-card-container-trash" id="${$}">
            <svg class="shopping-list-card-icon-trash" width="18px" height="18px">
              <use href="${S}#icon-del"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join("")}function m(){i.innerHTML="",i.insertAdjacentHTML("afterbegin",`
    <p class="shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <img
      class="shopping-list-image"
      srcset="
        ${v} 1x,
        ${y} 2x
      "
      src="${L}"
      alt="books"
      width="265"
      height="198"
    />
    `)}function g(e,s){try{const t=JSON.stringify(s);localStorage.setItem(e,t)}catch(t){console.error("Get state error: ",t.message)}}function c(e){try{const s=localStorage.getItem(e);return s===null?void 0:JSON.parse(s)}catch(s){console.error("Get state error: ",s.message)}}
//# sourceMappingURL=commonHelpers2.js.map
