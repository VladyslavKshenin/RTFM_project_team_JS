import"./assets/support-sidebar-564960fe.js";const n="https://books-backend.p.goit.global/books",d={list:"category-list",top:"top-books",category:"category?category="};async function u(o,t=""){try{const e=await fetch(`${n}/${o}${t}`),r=await e.json();return console.log(`data retrieving was succesfull: ${e.status} - ${e.statusText}`),r}catch(e){console.log(`An error occurred: ${e.message}`)}}async function p(o){try{const t=await fetch(`${n}/${o}`),e=await t.json();return console.log(`data retrieving was succesfull: ${t.status} - ${t.statusText}`),e}catch(t){console.log(`An error occurred: ${t.message}`)}}const s={API_OPTIONS:d,fetchBookList:u,fetchBookById:p},b=document.querySelector(".ctg-list");s.fetchBookList(s.API_OPTIONS.list).then(o=>{const t=o.map(({list_name:e})=>`<li class="ctg-item js-ctg-item" data-ctg-name = ${e}>${e}
          </li>`).join("");b.insertAdjacentHTML("beforeend",t)});function l(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper"),ctgList:document.querySelector(".ctg-list"),ctgName:document.querySelector(".selected-ctg-name")}}const c=l();function h(o){const t=o.books.map(e=>`<li class="top-book-card">
            <a class="book-link" href="">
              <img class="book-img"
                src="${e.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="book-info">
                <h3 class="book-title">
                  ${e.title}
                </h3>
                <p class="book-author">
                  ${e.author}
                </p>
              </div>
            </a>
          </li>`).join("");return`<div class="top-books-block">
            <h2 class="top-books-category-header">${o.list_name}</h2>
            <ul class="top-books-category">
            ${t}
            </ul>
            <button class="top-books-button" type="button" data-category="${o.list_name}">see more</button>
          </div>`}function f(o){return`<ul class="category-books">
            ${o.map(e=>`<li class="category-book-card">
            <a class="book-link" href="">
              <img class="book-img"
                src="${e.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="book-info">
                <h3 class="book-title">
                  ${e.title}
                </h3>
                <p class="book-author">
                  ${e.author}
                </p>
              </div>
            </a>
          </li>`).join("")}
            </ul>`}function i(o){return c.bookCollectionWrapper.insertAdjacentHTML("beforeend",h(o))}function y(o){return c.bookCollectionWrapper.insertAdjacentHTML("beforeend",f(o))}function m(){c.bookCollectionWrapper.insertAdjacentHTML("afterbegin",'<h1 class="books-header">Best Sellers <span class="books-accent">Books</span></h1>')}function $(o){const t=o[0].list_name.split(" "),e=t.pop(),r=t.join(" ")+` <span class="books-accent">${e}</span>`;c.bookCollectionWrapper.insertAdjacentHTML("afterbegin",`<h1 class="books-header">${r}</h1>`)}function k(){c.bookCollectionWrapper.innerHTML=""}function B(o){console.log(o),k(),o.forEach(i),m()}function C(o){console.log(o),k(),y(o),$(o)}const a={renderTopBooks:B,renderCategoryBooks:C,insertCategoryBlocks:i},g=l();s.fetchBookList(s.API_OPTIONS.top).then(a.renderTopBooks);function L(o){const t=o.target.childNodes[0].data;console.dir(o.target),console.log(t),t!=="All categories"?s.fetchBookList(s.API_OPTIONS.category,t).then(a.renderCategoryBooks):s.fetchBookList(s.API_OPTIONS.top).then(a.renderTopBooks)}function T(o){if(!o.target.classList.contains("top-books-button"))return;const t=o.target.dataset.category;s.fetchBookList(s.API_OPTIONS.category,t).then(a.renderCategoryBooks)}g.ctgList.addEventListener("click",L);g.bookCollectionWrapper.addEventListener("click",T);
//# sourceMappingURL=commonHelpers.js.map
