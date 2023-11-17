import{g as v,m as u,a as B,b as A,c as b,d as _}from"./assets/applebooks@2x-b02de412.js";const w="https://books-backend.p.goit.global/books",P={list:"category-list",top:"top-books",category:"category?category="};async function N(e,t=""){try{const o=await fetch(`${w}/${e}${t}`),r=await o.json();return console.log(`data retrieving was succesfull: ${o.status} - ${o.statusText}`),r}catch(o){console.log(`An error occurred: ${o.message}`),alert("An error occurred")}}async function z(e){try{const t=await fetch(`${w}/${e}`),o=await t.json();return console.log(`data retrieving was succesfull: ${t.status} - ${t.statusText}`),o}catch(t){console.log(`An error occurred: ${t.message}`),alert("An error occurred")}}const s={API_OPTIONS:P,fetchBookList:N,fetchBookById:z},R=document.querySelector(".ctg-list");s.fetchBookList(s.API_OPTIONS.list).then(e=>{const t=e.map(({list_name:o})=>`<li class="ctg-item js-ctg-item " data-ctg-name = ${o}>${o}
          </li>`).join("");R.insertAdjacentHTML("beforeend",t)});const l=v();s.fetchBookList(s.API_OPTIONS.top).then(u.renderTopBooks);function T(e){[...l.ctgList.children].forEach(t=>t.classList.remove("ctg-item-active")),l.ctgList.contains(e.target)?e.target.classList.add("ctg-item-active"):[...l.ctgList.children].find(o=>o.textContent.trim()===e.target.dataset.category).classList.add("ctg-item-active")}function j(e){const t=e.target.childNodes[0].data;T(e),t!=="All categories"?s.fetchBookList(s.API_OPTIONS.category,t).then(u.renderCategoryBooks):s.fetchBookList(s.API_OPTIONS.top).then(u.renderTopBooks)}function D(e){if(!e.target.classList.contains("top-books-button"))return;const t=e.target.dataset.category;T(e),s.fetchBookList(s.API_OPTIONS.category,t).then(u.renderCategoryBooks)}l.ctgList.addEventListener("click",j);l.bookCollectionWrapper.addEventListener("click",D);const F=v(),h=document.getElementById("bookModal"),f=document.getElementById("bookModalTitle"),H=document.getElementById("bookModalBody"),c=document.getElementById("addToShoppingList"),J=document.querySelector(".modal-close"),y=document.getElementById("modalFooterText");let i=[],m=[],S={};const q="The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.";function U(e){s.fetchBookById(e).then(t=>{f.innerText=t.title,t.description||(t.description=q),S={book_image:t.book_image,title:t.title,author:t.author,description:t.description,amazonLinks:t.buy_links[0].url,appleLinks:t.buy_links[1].url},f.dataset.bookId=e,H.innerHTML=`<img src="${t.book_image}" alt="${t.title}" class="book-modal-img"/>
            <div class="book-modal-details">
                <h2 class="book-modal-title">${t.title}</h2>
                <h3 class="book-modal-author">${t.author}</h3>
                <p class="book-modal-desc">${t.description}</p>
                <ul class="icon-book-modal-list">
                    <li>
                        <a href="${t.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-amazon" srcset="${B} 1x, ${A} 2x" src="${B}" alt="Amazon" loading="lazy"/>
                        </a>
                    </li>
                    <li>
                        <a href="${t.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-ibooks" srcset="${b} 1x, ${_} 2x" src="${b}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
    `,i.includes(e)?(c.innerText="Remove from the shopping list",y.style.display="block"):(c.innerText="Add to shopping list",y.style.display="none"),h.classList.add("show"),document.body.style.overflow="hidden"})}function L(){h.classList.remove("show"),document.body.style.overflow=""}function W(e){if(console.log("Toggling shopping list for bookId:",e),!e){console.error("Invalid bookId:",e);return}const t=i.indexOf(e);t===-1?(i.push(e),m.push(S)):(i.splice(t,1),m.splice(t,1)),console.log("Updated shoppingList:",i),localStorage.setItem("shoppingList",JSON.stringify(i)),localStorage.setItem("shoppingCard",JSON.stringify(m)),t===-1?(c.innerText="Remove from the shopping list",y.style.display="block"):(c.innerText="Add to shopping list",y.style.display="none")}c.addEventListener("click",()=>{const e=f.dataset.bookId;W(e)});h.addEventListener("click",e=>{e.target===h&&L()});document.addEventListener("keydown",e=>{e.key==="Escape"&&L()});F.bookCollectionWrapper.addEventListener("click",e=>{const t=e.target.closest(".book-link");if(t){e.preventDefault();const o=t.dataset.id;U(o)}});const E=localStorage.getItem("shoppingList"),I=localStorage.getItem("shoppingCard");E&&(i=JSON.parse(E));I&&(m=JSON.parse(I));J.addEventListener("click",L);document.addEventListener("DOMContentLoaded",function(){document.getElementById("signupBtn").addEventListener("click",o);const t=document.createElement("div");t.style.position="fixed",t.style.top="20px",t.style.right="20px",t.style.background="red",t.style.color="white",t.style.padding="15px",t.style.display="none",t.style.zIndex="1",document.body.appendChild(t);function o(){fetch("partials/registration.html").then(n=>n.text()).then(n=>{const x=document.getElementById("registrationModalContainer");x.innerHTML=n;const C=document.getElementById("registrationForm"),M=document.querySelector(".close-icon");C.addEventListener("submit",function(O){O.preventDefault();const d=document.getElementById("name").value,g=document.getElementById("email").value,p=document.getElementById("password").value;if(d&&g&&p){console.log("User data:",{name:d,email:g,password:p});const a={name:d,email:g,password:p};localStorage.setItem("userData",JSON.stringify(a)),r()}else{const a=[];d||a.push("Name"),g||a.push("Email"),p||a.push("Password"),t.textContent=`Please fill in the following fields: ${a.join(", ")}`,t.style.display="block",setTimeout(function(){t.style.display="none"},1e4)}}),M.addEventListener("click",function(){t.style.display="none",r()})}).catch(n=>console.error("Error loading registration content:",n))}function r(){const n=document.getElementById("registrationModalContainer");n.innerHTML=""}});const k=document.querySelector(".back-to-top");window.addEventListener("scroll",Y);k.addEventListener("click",$);function Y(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?k.classList.add("back-to-top--show"):k.classList.remove("back-to-top--show")}function $(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout($,0))}
//# sourceMappingURL=commonHelpers.js.map
