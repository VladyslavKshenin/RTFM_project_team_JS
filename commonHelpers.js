import{g as y,m as r,l as v}from"./assets/support-sidebar-05d787fe.js";const h="https://books-backend.p.goit.global/books",B={list:"category-list",top:"top-books",category:"category?category="};async function S(o,t=""){try{const e=await fetch(`${h}/${o}${t}`),n=await e.json();return console.log(`data retrieving was succesfull: ${e.status} - ${e.statusText}`),n}catch(e){console.log(`An error occurred: ${e.message}`)}}async function E(o){try{const t=await fetch(`${h}/${o}`),e=await t.json();return console.log(`data retrieving was succesfull: ${t.status} - ${t.statusText}`),e}catch(t){console.log(`An error occurred: ${t.message}`)}}const s={API_OPTIONS:B,fetchBookList:S,fetchBookById:E},Q=document.querySelector(".ctg-list");s.fetchBookList(s.API_OPTIONS.list).then(o=>{const t=o.map(({list_name:e})=>`<li class="ctg-item js-ctg-item " data-ctg-name = ${e}>${e}
          </li>`).join("");Q.insertAdjacentHTML("beforeend",t)});const i=y();s.fetchBookList(s.API_OPTIONS.top).then(r.renderTopBooks);function p(o){[...i.ctgList.children].forEach(t=>t.classList.remove("ctg-item-active")),i.ctgList.contains(o.target)?o.target.classList.add("ctg-item-active"):[...i.ctgList.children].find(e=>e.textContent.trim()===o.target.dataset.category).classList.add("ctg-item-active")}function C(o){const t=o.target.childNodes[0].data;p(o),t!=="All categories"?s.fetchBookList(s.API_OPTIONS.category,t).then(r.renderCategoryBooks):s.fetchBookList(s.API_OPTIONS.top).then(r.renderTopBooks)}function I(o){if(!o.target.classList.contains("top-books-button"))return;const t=o.target.dataset.category;p(o),s.fetchBookList(s.API_OPTIONS.category,t).then(r.renderCategoryBooks)}i.ctgList.addEventListener("click",C);i.bookCollectionWrapper.addEventListener("click",I);const m="data:image/png;base64,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",R="/RTFM_project_team_JS/assets/amazon@2x-f5bfa25f.png",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==",U="data:image/png;base64,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",k="shoppingList",O=document.querySelector(".book-collection-wrapper");let a,l,c;O.addEventListener("click",async o=>{const t=o.target.closest(".book-link");if(t){o.preventDefault();const e=t.dataset.id;try{const n=await s.fetchBookById(e);M(n)}catch(n){console.error("Error fetching book details:",n)}}});function M(o){a=document.createElement("div"),l=document.createElement("div"),a.classList.add("backdrop","visually-hidden"),l.classList.add("modal-wrapper","visually-hidden"),l.innerHTML=`<div class="book-modal">
            <img src="${o.book_image}" alt="${o.title}" class="book-modal-img"/>
            <div class="book-modal-details">
                <h2 class="book-modal-title">${o.title}</h2>
                <h3 class="book-modal-author">${o.author}</h3>
                <p class="book-modal-desc">${o.description}</p>
                <ul class="icon-book-modal-list">
                    <li>
                        <a href="${o.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-amazon" srcset="${m} 1x, ${R} 2x" src="${m}" alt="Amazon" loading="lazy"/>
                        </a>
                    </li>
                    <li>
                        <a href="${o.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-ibooks" srcset="${u} 1x, ${U} 2x" src="${u}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
            <button class='book-modal-btn js-add' id='js-book-modal-btn'>Add to shopping list</button>
            <p class='book-modal-buy'>Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
            <button class='book-modal-close' id='js-book-modal-btn-close'>
                <svg class='icon-book-modal-close'><use href='${v}#x-close'></use></svg>
            </button>
        </div>`,document.body.appendChild(a),document.body.appendChild(l),a.classList.remove("visually-hidden"),l.classList.remove("visually-hidden");const t=document.querySelector("#js-book-modal-btn-close");console.log("вбийте мене",t),t&&t.addEventListener("click",()=>{A()}),c=document.querySelector("#js-book-modal-btn"),console.log("це капець",c),c&&c.addEventListener("click",()=>{}),L(!0),document.addEventListener("keydown",f),a.addEventListener("click",b)}function L(o){o?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open")}function f(o){o.key==="Escape"&&A()}function b(o){o.target===a&&A()}function A(){a.classList.add("visually-hidden"),l.classList.add("visually-hidden"),L(!1),document.removeEventListener("keydown",f),a.removeEventListener("click",b),c&&c.removeEventListener("click",w)}function w(){x(book),c&&c.removeEventListener("click",w)}function x(o){const t=j(),e=t.findIndex(n=>n.id===o._id);e!==-1?t.splice(e,1):t.push({id:o._id,image:o.book_image,title:o.title,author:o.author,description:o.description,buy_links:o.buy_links}),H(t),T(o)}function j(){const o=localStorage.getItem(k);return o?JSON.parse(o):[]}function H(o){localStorage.setItem(k,JSON.stringify(o))}function T(o){const t=document.querySelector("#js-book-modal-btn");console.log("updateTextBtn addBtn",t);const e=document.querySelector(".book-modal-buy");if(t&&e){const n=n(o);n?(t.textContent="Remove from the shopping list",e.style.display="block"):(t.textContent="Add to shopping list",e.style.display="none")}}const d=document.querySelector(".back-to-top");console.log(g);window.addEventListener("scroll",Y);d.addEventListener("click",g);function Y(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?d.classList.add("back-to-top--show"):d.classList.remove("back-to-top--show")}function g(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(g,0))}
//# sourceMappingURL=commonHelpers.js.map
