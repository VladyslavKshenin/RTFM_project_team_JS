(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const u=document.querySelector(".js-open-menu"),L=document.querySelector(".js-close-menu"),p=document.querySelector(".js-modal"),m=new BroadcastChannel("modal-channel");u.addEventListener("click",function(){p.style.display="block",u.classList.add("hidden"),m.postMessage({action:"openModal"})});L.addEventListener("click",function(){p.style.display="none",u.classList.remove("hidden")});m.addEventListener("message",function(e){e.data.action==="openModal"&&(p.style.display="block",u.classList.add("hidden"))});window.addEventListener("beforeunload",function(){m.close()});const S=document.querySelector(".div-theme"),f=document.querySelector(".span-theme"),y=document.querySelector("body");let s=!1;S.addEventListener("change",()=>{s?(s=!1,localStorage.setItem("userTheme","light")):(s=!0,localStorage.setItem("userTheme","dark")),b()});function b(){try{s=localStorage.getItem("userTheme")==="dark"}catch{s=!1}const e=document.querySelector(".header-logo-icon"),o=document.querySelector(".header-logo-icon1");s?(y.classList.add("dark-theme"),f.style.left="20px",e.style.width="0px",o.style.width="109px"):(y.classList.remove("dark-theme"),f.style.left="2px",o.style.width="0px",e.style.width="109px")}b();const k=document.querySelector(".header-nav-item").querySelectorAll("a"),C=document.querySelector(".header-nav-item-modal").querySelectorAll("a");if(document.querySelector(".home-page")===null)for(let e=0;e<k.length;e++)k[e].classList.toggle("heder-active"),C[e].classList.toggle("heder-active");const c=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null}];function q(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper"),ctgList:document.querySelector(".ctg-list"),ctgName:document.querySelector(".selected-ctg-name")}}const a=q();function $(e){const o=e.books.map(r=>`<li class="top-book-card">
            <a class="book-link" href="">
              <img class="book-img"
                src="${r.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="book-info">
                <h3 class="book-title">
                  ${r.title}
                </h3>
                <p class="book-author">
                  ${r.author}
                </p>
              </div>
            </a>
          </li>`).join("");return`<div class="top-books-block">
            <h2 class="top-books-category-header">${e.list_name}</h2>
            <ul class="top-books-category">
            ${o}
            </ul>
            <button class="top-books-button" type="button">see more</button>
          </div>`}function T(e){return`<ul class="category-books">
            ${e.map(r=>`<li class="category-book-card">
            <a class="book-link" href="">
              <img class="book-img"
                src="${r.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="book-info">
                <h3 class="book-title">
                  ${r.title}
                </h3>
                <p class="book-author">
                  ${r.author}
                </p>
              </div>
            </a>
          </li>`).join("")}
            </ul>`}function w(e){return a.bookCollectionWrapper.insertAdjacentHTML("beforeend",$(e))}function j(e){return a.bookCollectionWrapper.insertAdjacentHTML("beforeend",T(e))}function M(){a.bookCollectionWrapper.insertAdjacentHTML("afterbegin",'<h1 class="books-header">Best Sellers <span class="books-accent">Books</span></h1>')}function x(e){const o=e[0].list_name.split(" "),r=o.pop(),l=o.join(" ")+` <span class="books-accent">${r}</span>`;a.bookCollectionWrapper.insertAdjacentHTML("afterbegin",`<h1 class="books-header">${l}</h1>`)}function v(){a.bookCollectionWrapper.innerHTML=""}function B(e){console.log(e),v(),e.forEach(w),M()}function E(e){console.log(e),v(),j(e),x(e)}function A(e){return e.map(({id:o,title:r,url:l,img:t,img2x:n})=>`
        <li class="support-items">
          <a class="support-link" href="${l}" target="_blank" rel="noopener noreferrer">
            <span>0${o}</span>
            <img class="support-img" src="./images/support/${t}" srcset="./images/support/${t} 1x, ./images/support/${n} 2x" alt="${r}" >
          </a>
        </li>
        `).join("")}const N={renderTopBooks:B,renderCategoryBooks:E,insertCategoryBlocks:w},i=document.querySelector(".js-suport-list"),g=document.querySelector(".support-arrow-down"),h=document.querySelector(".support-arrow-up");g.addEventListener("click",W);h.addEventListener("click",I);let H=1;for(let e=0;e<9;e+=1)c[e].id=H+e,c[e].img=`img-${e+1}@1x.png`,c[e].img2x=`img-${e+1}@2x.png`;i.insertAdjacentHTML("afterbegin",A(c));function W(){g.classList.toggle("visually-hidden"),h.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)i.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)i.children[e].classList.remove("visually-hidden")}function I(){g.classList.toggle("visually-hidden"),h.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)i.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)i.children[e].classList.toggle("visually-hidden")}export{q as g,N as m};
//# sourceMappingURL=support-sidebar-88d74947.js.map
