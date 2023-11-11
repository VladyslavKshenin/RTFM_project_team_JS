import"./assets/modulepreload-polyfill-ec808ebb.js";const i="https://books-backend.p.goit.global/books",u={list:"category-list",top:"top-books",category:"category?category="};async function k(t,e=""){try{const o=await fetch(`${i}/${t}${e}`),s=await o.json();return console.log(`data retrieving was succesfull: ${o.status} - ${o.statusText}`),s}catch(o){console.log(`An error occurred: ${o.message}`)}}async function p(t){try{const e=await fetch(`${i}/${t}`),o=await e.json();return console.log(`data retrieving was succesfull: ${e.status} - ${e.statusText}`),o}catch(e){console.log(`An error occurred: ${e.message}`)}}const c={API_OPTIONS:u,fetchBookList:k,fetchBookById:p},b=document.querySelector(".ctg-list");c.fetchBookList(c.API_OPTIONS.list).then(t=>{const e=t.map(({list_name:o})=>`<li class="ctg-item js-ctg-item" data-ctg-name = ${o}>${o}
          </li>`).join("");b.insertAdjacentHTML("beforeend",e)});function m(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}const f=m();function h(t){const e=t.books.map(o=>`<li class="book-card">
            <a class="book-link" href="">
              <img
                src="${o.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="info">
                <p class="book-title">
                  ${o.title}
                </p>
                <p class="book-author">
                  ${o.author}
                </p>
              </div>
            </a>
          </li>`).join("");return`<div class="category-block">
            <h3>${t.list_name}</h3>
            <ul class="category-books">
            ${e}
            </ul>
            <button>more</button>
          </div>`}function y(t){return f.bookCollectionWrapper.insertAdjacentHTML("beforeend",h(t))}const $={insertCategoryBlocks:y};async function l(){const t=await c.fetchBookList(c.API_OPTIONS.top);console.log(t),t.forEach($.insertCategoryBlocks)}l();const L=document.querySelector(".js-ctg-heading"),v=document.querySelector(".ctg-list"),n=document.querySelector(".selected-ctg-name"),r=document.querySelector(".book-collection-wrapper");console.log(n);v.addEventListener("click",B);L.addEventListener("click",T);function T(){r.innerHTML="",l()}function B(t){const e=t.target.childNodes[0].data;c.fetchBookList(c.API_OPTIONS.category,e).then(o=>{n.innerHTML="",r.innerHTML="";const s=o.map(({book_image:g,author:d,title:a})=>`<div class="ctg-top-books">

  <div class="ctg-book-card">
    <img class = 'ctg-book-image' src="${g}" alt="${a}" />
    <div class = 'ctg-book-text'>
    <h3 class="ctg-book-name">${a}</h3>
    <h4 class="ctg-book-author">${d}</h4>
    </div>
  </div>
</div>
`).join("");n.insertAdjacentHTML("afterbegin",e),r.insertAdjacentHTML("beforeend",s)})}
//# sourceMappingURL=commonHelpers.js.map
