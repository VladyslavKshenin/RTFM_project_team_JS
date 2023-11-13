import{g as i,m as c}from"./assets/support-sidebar-4c288fd5.js";const r="https://books-backend.p.goit.global/books",g={list:"category-list",top:"top-books",category:"category?category="};async function l(o,t=""){try{const e=await fetch(`${r}/${o}${t}`),n=await e.json();return console.log(`data retrieving was succesfull: ${e.status} - ${e.statusText}`),n}catch(e){console.log(`An error occurred: ${e.message}`)}}async function d(o){try{const t=await fetch(`${r}/${o}`),e=await t.json();return console.log(`data retrieving was succesfull: ${t.status} - ${t.statusText}`),e}catch(t){console.log(`An error occurred: ${t.message}`)}}const s={API_OPTIONS:g,fetchBookList:l,fetchBookById:d},k=document.querySelector(".ctg-list");s.fetchBookList(s.API_OPTIONS.list).then(o=>{const t=o.map(({list_name:e})=>`<li class="ctg-item js-ctg-item " data-ctg-name = ${e}>${e}
          </li>`).join("");k.insertAdjacentHTML("beforeend",t)});const a=i();s.fetchBookList(s.API_OPTIONS.top).then(c.renderTopBooks);function u(o){const t=o.target.childNodes[0].data;console.dir(o.target),console.log(t),t!=="All categories"?s.fetchBookList(s.API_OPTIONS.category,t).then(c.renderCategoryBooks):s.fetchBookList(s.API_OPTIONS.top).then(c.renderTopBooks)}function f(o){if(!o.target.classList.contains("top-books-button"))return;const t=o.target.dataset.category;s.fetchBookList(s.API_OPTIONS.category,t).then(c.renderCategoryBooks)}a.ctgList.addEventListener("click",u);a.bookCollectionWrapper.addEventListener("click",f);
//# sourceMappingURL=commonHelpers.js.map
