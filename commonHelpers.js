import"./assets/modulepreload-polyfill-ec808ebb.js";const c="https://books-backend.p.goit.global/books",a={list:"category-list",top:"top-books",category:"category?category="};async function n(o,s=""){try{const t=await fetch(`${c}/${o}${s}`),r=await t.json();return console.log(`data retrieving was succesfull: ${t.status} - ${t.statusText}`),r}catch(t){console.log(`An error occurred: ${t.message}`)}}async function l(o){try{const s=await fetch(`${c}/${o}`),t=await s.json();return console.log(`data retrieving was succesfull: ${s.status} - ${s.statusText}`),t}catch(s){console.log(`An error occurred: ${s.message}`)}}const e={API_OPTIONS:a,fetchBookList:n,fetchBookById:l};function i(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}const u=i();function k(o){const s=o.books.map(t=>`<li class="book-card">
            <a class="book-link" href="">
              <img
                src="${t.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="info">
                <p class="book-title">
                  ${t.title}
                </p>
                <p class="book-author">
                  ${t.author}
                </p>
              </div>
            </a>
          </li>`).join("");return`<div class="category-block">
            <h3>${o.list_name}</h3>
            <ul class="category-books">
            ${s}
            </ul>
            <button>more</button>
          </div>`}function g(o){return u.bookCollectionWrapper.insertAdjacentHTML("beforeend",k(o))}const p={insertCategoryBlocks:g};async function b(){const o=await e.fetchBookList(e.API_OPTIONS.top);console.log(o),o.forEach(p.insertCategoryBlocks)}b();
//# sourceMappingURL=commonHelpers.js.map
