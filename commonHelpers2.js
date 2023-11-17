import{a as p,b as _,c as d,d as x,l as y}from"./assets/applebooks@2x-f9771f69.js";const S="/RTFM_project_team_JS/assets/books-desk@1x-1f62c9bc.png",v="/RTFM_project_team_JS/assets/books-desk@2x-306b4264.png",T="/RTFM_project_team_JS/assets/books-mob@1x-93df6442.png",a="shoppingCard",i="shoppingList",o=document.querySelector(".js-shopping-list"),c=document.querySelector(".shopping-list-container"),L="The daughter of a Korean mother and Jewish American father, and leader of the indie rock project Japanese Breakfast, describes creating her own identity after losing her mother to cancer.",n=l(a),g=l(i);n[0]!==void 0?(c.innerHTML="",o.innerHTML="",o.insertAdjacentHTML("afterbegin",m(n)),o.addEventListener("click",M)):f();function M(s){let e=s.target.closest(".btn-shop");if(e)o.innerHTML="",n.splice(e.id,1),g.splice(e.id,1),localStorage.removeItem(a),localStorage.removeItem(i),h(a,n),h(i,g),n[0]!==void 0?o.insertAdjacentHTML("afterbegin",m(l(a))):f();else return}function m(s){return s.map(({book_image:e,title:t,author:b,description:r,amazonLinks:u,appleLinks:k},$)=>(r||(r=L),`<li class="shopping-list-item">
      <img class="shopping-list-card-img" src="${e}" alt="${t}">
      <div class="shopping-list-card-container">
        <h2 class="shopping-list-card-title">${t}</h2>
        <p class="shopping-list-card-text">Hardcover fiction</p>
        <p class="shopping-list-card-desc">${r}</p>
        <div class="shopping-list-card-bottom-container">
          <p class="shopping-list-card-author">${b}</p>
          <div class="shopping-list-card-container-img">
            <a href="${u}" class="shopping-amazon-link" rel="noopener noreferrer nofollow" target="_blank">
              <img class="shopping-list-card-icon-amazon"srcset="${p} 1x, ${_} 2x" src="${p}" alt="Amazon" loading="lazy">
            </a>
            <a href="${k}" class="shopping-book-link" rel="noopener noreferrer nofollow" target="_blank">
              <img class="shopping-list-card-icon-book" srcset="${d} 1x, ${x} 2x" src="${d}" alt="Apple books" loading="lazy">
            </a>
          </div>
        </div>
        <div>
          <button class="btn-shop shopping-list-card-container-trash" id="${$}">
            <svg class="shopping-list-card-icon-trash" width="18px" height="18px">
              <use href="${y}#icon-del"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `)).join("")}function f(){c.innerHTML="",c.insertAdjacentHTML("afterbegin",`
    <p class="shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <img
      class="shopping-list-image"
      srcset="
        ${S} 1x,
        ${v} 2x
      "
      src="${T}"
      alt="books"
      width="265"
      height="198"
    />
    `)}function h(s,e){try{const t=JSON.stringify(e);localStorage.setItem(s,t)}catch(t){console.error("Get state error: ",t.message)}}function l(s){try{const e=localStorage.getItem(s);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}}
//# sourceMappingURL=commonHelpers2.js.map
