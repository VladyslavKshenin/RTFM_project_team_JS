import{g as k,m as u}from"./assets/support-sidebar-d9760ec9.js";const B="https://books-backend.p.goit.global/books",b={list:"category-list",top:"top-books",category:"category?category="};async function M(e,t=""){try{const o=await fetch(`${B}/${e}${t}`),l=await o.json();return console.log(`data retrieving was succesfull: ${o.status} - ${o.statusText}`),l}catch(o){console.log(`An error occurred: ${o.message}`),alert("An error occurred")}}async function O(e){try{const t=await fetch(`${B}/${e}`),o=await t.json();return console.log(`data retrieving was succesfull: ${t.status} - ${t.statusText}`),o}catch(t){console.log(`An error occurred: ${t.message}`),alert("An error occurred")}}const n={API_OPTIONS:b,fetchBookList:M,fetchBookById:O},C=document.querySelector(".ctg-list");n.fetchBookList(n.API_OPTIONS.list).then(e=>{const t=e.map(({list_name:o})=>`<li class="ctg-item js-ctg-item " data-ctg-name = ${o}>${o}
          </li>`).join("");C.insertAdjacentHTML("beforeend",t)});const r=k();n.fetchBookList(n.API_OPTIONS.top).then(u.renderTopBooks);function E(e){[...r.ctgList.children].forEach(t=>t.classList.remove("ctg-item-active")),r.ctgList.contains(e.target)?e.target.classList.add("ctg-item-active"):[...r.ctgList.children].find(o=>o.textContent.trim()===e.target.dataset.category).classList.add("ctg-item-active")}function x(e){const t=e.target.childNodes[0].data;E(e),t!=="All categories"?n.fetchBookList(n.API_OPTIONS.category,t).then(u.renderCategoryBooks):n.fetchBookList(n.API_OPTIONS.top).then(u.renderTopBooks)}function A(e){if(!e.target.classList.contains("top-books-button"))return;const t=e.target.dataset.category;E(e),n.fetchBookList(n.API_OPTIONS.category,t).then(u.renderCategoryBooks)}r.ctgList.addEventListener("click",x);r.bookCollectionWrapper.addEventListener("click",A);const $=k(),m=document.getElementById("bookModal"),h=document.getElementById("bookModalTitle"),P=document.getElementById("bookModalBody"),a=document.getElementById("addToShoppingList"),N=document.querySelector(".close"),j=document.querySelector(".btn-secondary");let i=[];function D(e){n.fetchBookById(e).then(t=>{h.innerText=t.title,h.dataset.bookId=e,P.innerHTML=`
      <p><strong>Author:</strong> ${t.author}</p>
      <p><strong>Description:</strong> ${t.description}</p>
    `,i.includes(e)?a.innerText="Remove from the shopping list":a.innerText="Add to shopping list",m.classList.add("show"),document.body.style.overflow="hidden"})}function f(){m.classList.remove("show"),document.body.style.overflow=""}function R(e){if(console.log("Toggling shopping list for bookId:",e),!e){console.error("Invalid bookId:",e);return}const t=i.indexOf(e);t===-1?i.push(e):i.splice(t,1),console.log("Updated shoppingList:",i),localStorage.setItem("shoppingList",JSON.stringify(i)),t===-1?a.innerText="Remove from the shopping list":a.innerText="Add to shopping list"}a.addEventListener("click",()=>{const e=h.dataset.bookId;R(e)});m.addEventListener("click",e=>{e.target===m&&f()});document.addEventListener("keydown",e=>{e.key==="Escape"&&f()});$.bookCollectionWrapper.addEventListener("click",e=>{const t=e.target.closest(".book-link");if(t){e.preventDefault();const o=t.dataset.id;D(o)}});const L=localStorage.getItem("shoppingList");L&&(i=JSON.parse(L));N.addEventListener("click",f);j.addEventListener("click",f);document.addEventListener("DOMContentLoaded",function(){document.getElementById("signupBtn").addEventListener("click",o);const t=document.createElement("div");t.style.position="fixed",t.style.top="20px",t.style.right="20px",t.style.background="red",t.style.color="white",t.style.padding="15px",t.style.display="none",t.style.zIndex="1",document.body.appendChild(t);function o(){fetch("partials/registration.html").then(s=>s.text()).then(s=>{const v=document.getElementById("registrationModalContainer");v.innerHTML=s;const w=document.getElementById("registrationForm"),T=document.querySelector(".close-icon");w.addEventListener("submit",function(S){S.preventDefault();const d=document.getElementById("name").value,g=document.getElementById("email").value,p=document.getElementById("password").value;if(d&&g&&p){console.log("User data:",{name:d,email:g,password:p});const c={name:d,email:g,password:p};localStorage.setItem("userData",JSON.stringify(c)),l()}else{const c=[];d||c.push("Name"),g||c.push("Email"),p||c.push("Password"),t.textContent=`Please fill in the following fields: ${c.join(", ")}`,t.style.display="block",setTimeout(function(){t.style.display="none"},1e4)}}),T.addEventListener("click",function(){t.style.display="none",l()})}).catch(s=>console.error("Error loading registration content:",s))}function l(){const s=document.getElementById("registrationModalContainer");s.innerHTML=""}});const y=document.querySelector(".back-to-top");window.addEventListener("scroll",_);y.addEventListener("click",I);function _(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?y.classList.add("back-to-top--show"):y.classList.remove("back-to-top--show")}function I(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(I,0))}
//# sourceMappingURL=commonHelpers.js.map
