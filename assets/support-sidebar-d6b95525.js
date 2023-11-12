(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const c=document.querySelector(".js-open-menu"),x=document.querySelector(".js-close-menu"),d=document.querySelector(".js-modal"),p=new BroadcastChannel("modal-channel");c.addEventListener("click",function(){d.style.display="block",c.classList.add("hidden"),p.postMessage({action:"openModal"})});x.addEventListener("click",function(){d.style.display="none",c.classList.remove("hidden")});p.addEventListener("message",function(e){e.data.action==="openModal"&&(d.style.display="block",c.classList.add("hidden"))});window.addEventListener("beforeunload",function(){p.close()});const L=document.querySelector(".div-theme"),h=document.querySelector(".span-theme"),f=document.querySelector("body");let i=!1;L.addEventListener("change",()=>{i?(i=!1,localStorage.setItem("userTheme","light")):(i=!0,localStorage.setItem("userTheme","dark")),b()});function b(){try{i=localStorage.getItem("userTheme")==="dark"}catch{i=!1}const e=document.querySelector(".header-logo-icon"),o=document.querySelector(".header-logo-icon1");i?(f.classList.add("dark-theme"),h.style.left="20px",e.style.width="0px",o.style.width="109px"):(f.classList.remove("dark-theme"),h.style.left="2px",o.style.width="0px",e.style.width="109px")}b();const y=document.querySelector(".header-nav-item").querySelectorAll("a"),S=document.querySelector(".header-nav-item-modal").querySelectorAll("a");if(document.querySelector(".home-page")===null)for(let e=0;e<y.length;e++)y[e].classList.toggle("heder-active"),S[e].classList.toggle("heder-active");const w=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../images/support/img-1@1x.png",img2x:"../images/support/img-1@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../images/support/img-2@1x.png",img2x:"../images/support/img-2@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../images/support/img-3@1x.png",img2x:"../images/support/img-3@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../images/support/img-4@1x.png",img2x:"../images/support/img-4@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../images/support/img-5@1x.png",img2x:"../images/support/img-5@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../images/support/img-6@1x.png",img2x:"../images/support/img-6@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../images/support/img-7@1x.png",img2x:"../images/support/img-7@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../images/support/img-8@1x.png",img2x:"../images/support/img-8@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../images/support/img-9@1x.png",img2x:"../images/support/img-9@2x.png"}];function C(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper"),ctgList:document.querySelector(".ctg-list"),ctgName:document.querySelector(".selected-ctg-name")}}const a=C();function q(e){const o=e.books.map(s=>`<li class="top-book-card">
            <a class="book-link" href="">
              <img class="book-img"
                src="${s.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="book-info">
                <h3 class="book-title">
                  ${s.title}
                </h3>
                <p class="book-author">
                  ${s.author}
                </p>
              </div>
            </a>
          </li>`).join("");return`<div class="top-books-block">
            <h2 class="top-books-category-header">${e.list_name}</h2>
            <ul class="top-books-category">
            ${o}
            </ul>
            <button class="top-books-button" type="button">see more</button>
          </div>`}function $(e){return`<ul class="category-books">
            ${e.map(s=>`<li class="category-book-card">
            <a class="book-link" href="">
              <img class="book-img"
                src="${s.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="book-info">
                <h3 class="book-title">
                  ${s.title}
                </h3>
                <p class="book-author">
                  ${s.author}
                </p>
              </div>
            </a>
          </li>`).join("")}
            </ul>`}function T(e){return a.bookCollectionWrapper.insertAdjacentHTML("beforeend",q(e))}function j(e){return a.bookCollectionWrapper.insertAdjacentHTML("beforeend",$(e))}function M(){a.bookCollectionWrapper.insertAdjacentHTML("afterbegin",'<h1 class="books-header">Best Sellers <span class="books-accent">Books</span></h1>')}function B(e){const o=e[0].list_name.split(" "),s=o.pop(),n=o.join(" ")+` <span class="books-accent">${s}</span>`;a.bookCollectionWrapper.insertAdjacentHTML("afterbegin",`<h1 class="books-header">${n}</h1>`)}function v(){a.bookCollectionWrapper.innerHTML=""}function E(e){console.log(e),v(),e.forEach(T),M()}function A(e){console.log(e),v(),j(e),B(e)}function H(e){return e.map(({id:o,title:s,url:n,img:t,img2x:r})=>`
        <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${o}</span>
                <img class="support-img" src="${t}" alt="${s}" srcset="${t} 1x, ${r} 2x" height="32">
            </a>
        </li>
        `).join("")}const N={renderTopBooks:E,renderCategoryBooks:A},l=document.querySelector(".js-suport-list"),g=document.querySelector(".support-arrow-down"),m=document.querySelector(".support-arrow-up");g.addEventListener("click",W);m.addEventListener("click",I);let k=0;w.forEach(e=>{e.id=k+1,k+=1});l.insertAdjacentHTML("afterbegin",H(w));function W(){g.classList.toggle("visually-hidden"),m.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)l.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)l.children[e].classList.remove("visually-hidden")}function I(){g.classList.toggle("visually-hidden"),m.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)l.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)l.children[e].classList.toggle("visually-hidden")}export{C as g,N as m};
//# sourceMappingURL=support-sidebar-d6b95525.js.map
