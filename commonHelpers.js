import{m as u}from"./assets/support-sidebar-fce787cb.js";const i="https://books-backend.p.goit.global/books",k={list:"category-list",top:"top-books",category:"category?category="};async function m(e,t=""){try{const o=await fetch(`${i}/${e}${t}`),s=await o.json();return console.log(`data retrieving was succesfull: ${o.status} - ${o.statusText}`),s}catch(o){console.log(`An error occurred: ${o.message}`)}}async function p(e){try{const t=await fetch(`${i}/${e}`),o=await t.json();return console.log(`data retrieving was succesfull: ${t.status} - ${t.statusText}`),o}catch(t){console.log(`An error occurred: ${t.message}`)}}const c={API_OPTIONS:k,fetchBookList:m,fetchBookById:p},h=document.querySelector(".ctg-list");c.fetchBookList(c.API_OPTIONS.list).then(e=>{const t=e.map(({list_name:o})=>`<li class="ctg-item js-ctg-item" data-ctg-name = ${o}>${o}
          </li>`).join("");h.insertAdjacentHTML("beforeend",t)});async function l(){const e=await c.fetchBookList(c.API_OPTIONS.top);console.log(e),e.forEach(u.insertCategoryBlocks)}l();const f=document.querySelector(".js-ctg-heading"),y=document.querySelector(".ctg-list"),n=document.querySelector(".selected-ctg-name"),a=document.querySelector(".book-collection-wrapper");console.log(n);y.addEventListener("click",b);f.addEventListener("click",$);function $(){a.innerHTML="",l()}function b(e){const t=e.target.childNodes[0].data;c.fetchBookList(c.API_OPTIONS.category,t).then(o=>{n.innerHTML="",a.innerHTML="";const s=o.map(({book_image:g,author:d,title:r})=>`<div class="ctg-top-books">

  <div class="ctg-book-card">
    <img class = 'ctg-book-image' src="${g}" alt="${r}" />
    <div class = 'ctg-book-text'>
    <h3 class="ctg-book-name">${r}</h3>
    <h4 class="ctg-book-author">${d}</h4>
    </div>
  </div>
</div>
`).join("");n.insertAdjacentHTML("afterbegin",t),a.insertAdjacentHTML("beforeend",s)})}
//# sourceMappingURL=commonHelpers.js.map
