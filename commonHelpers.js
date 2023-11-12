import"./assets/support-sidebar-564960fe.js";const a="https://books-backend.p.goit.global/books",d={list:"category-list",top:"top-books",category:"category?category="};async function g(o,e=""){try{const t=await fetch(`${a}/${o}${e}`),n=await t.json();return console.log(`data retrieving was succesfull: ${t.status} - ${t.statusText}`),n}catch(t){console.log(`An error occurred: ${t.message}`)}}async function u(o){try{const e=await fetch(`${a}/${o}`),t=await e.json();return console.log(`data retrieving was succesfull: ${e.status} - ${e.statusText}`),t}catch(e){console.log(`An error occurred: ${e.message}`)}}const s={API_OPTIONS:d,fetchBookList:g,fetchBookById:u},p=document.querySelector(".ctg-list");s.fetchBookList(s.API_OPTIONS.list).then(o=>{const e=o.map(({list_name:t})=>`<li class="ctg-item js-ctg-item" data-ctg-name = ${t}>${t}
          </li>`).join("");p.insertAdjacentHTML("beforeend",e)});function l(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper"),ctgList:document.querySelector(".ctg-list"),ctgName:document.querySelector(".selected-ctg-name")}}const c=l();function b(o){const e=o.books.map(t=>`<li class="top-book-card">
            <a class="book-link" href="">
              <img class="book-img"
                src="${t.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="book-info">
                <h3 class="book-title">
                  ${t.title}
                </h3>
                <p class="book-author">
                  ${t.author}
                </p>
              </div>
            </a>
          </li>`).join("");return`<div class="top-books-block">
            <h2 class="top-books-category-header">${o.list_name}</h2>
            <ul class="top-books-category">
            ${e}
            </ul>
            <button class="top-books-button" type="button">see more</button>
          </div>`}function h(o){return`<ul class="category-books">
            ${o.map(t=>`<li class="category-book-card">
            <a class="book-link" href="">
              <img class="book-img"
                src="${t.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="book-info">
                <h3 class="book-title">
                  ${t.title}
                </h3>
                <p class="book-author">
                  ${t.author}
                </p>
              </div>
            </a>
          </li>`).join("")}
            </ul>`}function i(o){return c.bookCollectionWrapper.insertAdjacentHTML("beforeend",b(o))}function f(o){return c.bookCollectionWrapper.insertAdjacentHTML("beforeend",h(o))}function y(){c.bookCollectionWrapper.insertAdjacentHTML("afterbegin",'<h1 class="books-header">Best Sellers <span class="books-accent">Books</span></h1>')}function m(o){const e=o[0].list_name.split(" "),t=e.pop(),n=e.join(" ")+` <span class="books-accent">${t}</span>`;c.bookCollectionWrapper.insertAdjacentHTML("afterbegin",`<h1 class="books-header">${n}</h1>`)}function k(){c.bookCollectionWrapper.innerHTML=""}function $(o){console.log(o),k(),o.forEach(i),y()}function B(o){console.log(o),k(),f(o),m(o)}const r={renderTopBooks:$,renderCategoryBooks:B,insertCategoryBlocks:i},C=l();s.fetchBookList(s.API_OPTIONS.top).then(r.renderTopBooks);function T(o){const e=o.target.childNodes[0].data;console.dir(o.target),console.log(e),e!=="All categories"?s.fetchBookList(s.API_OPTIONS.category,e).then(r.renderCategoryBooks):s.fetchBookList(s.API_OPTIONS.top).then(r.renderTopBooks)}C.ctgList.addEventListener("click",T);
//# sourceMappingURL=commonHelpers.js.map
