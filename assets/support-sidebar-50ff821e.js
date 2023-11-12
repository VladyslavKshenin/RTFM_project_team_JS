(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const d=document.querySelector(".js-open-menu"),S=document.querySelector(".js-close-menu"),p=document.querySelector(".js-modal"),m=new BroadcastChannel("modal-channel");d.addEventListener("click",function(){p.style.display="block",d.classList.add("hidden"),m.postMessage({action:"openModal"})});S.addEventListener("click",function(){p.style.display="none",d.classList.remove("hidden")});m.addEventListener("message",function(e){e.data.action==="openModal"&&(p.style.display="block",d.classList.add("hidden"))});window.addEventListener("beforeunload",function(){m.close()});const C=document.querySelector(".div-theme"),f=document.querySelector(".span-theme"),y=document.querySelector("body");let s=!1;C.addEventListener("change",()=>{s?(s=!1,localStorage.setItem("userTheme","light")):(s=!0,localStorage.setItem("userTheme","dark")),b()});function b(){try{s=localStorage.getItem("userTheme")==="dark"}catch{s=!1}const e=document.querySelector(".header-logo-icon"),o=document.querySelector(".header-logo-icon1");s?(y.classList.add("dark-theme"),f.style.left="20px",e.style.width="0px",o.style.width="109px"):(y.classList.remove("dark-theme"),f.style.left="2px",o.style.width="0px",e.style.width="109px")}b();const k=document.querySelector(".header-nav-item").querySelectorAll("a"),q=document.querySelector(".header-nav-item-modal").querySelectorAll("a");if(document.querySelector(".home-page")===null)for(let e=0;e<k.length;e++)k[e].classList.toggle("heder-active"),q[e].classList.toggle("heder-active");const a=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null}];function T(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper"),ctgList:document.querySelector(".ctg-list"),ctgName:document.querySelector(".selected-ctg-name")}}const c=T();function $(e){const o=e.books.map(n=>`<li class="top-book-card">
            <a class="book-link" href="">
              <img class="book-img"
                src="${n.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="book-info">
                <h3 class="book-title">
                  ${n.title}
                </h3>
                <p class="book-author">
                  ${n.author}
                </p>
              </div>
            </a>
          </li>`).join("");return`<div class="top-books-block">
            <h2 class="top-books-category-header">${e.list_name}</h2>
            <ul class="top-books-category">
            ${o}
            </ul>
            <button class="top-books-button" type="button" data-category="${e.list_name}">see more</button>
          </div>`}function j(e){return`<ul class="category-books">
            ${e.map(n=>`<li class="category-book-card">
            <a class="book-link" href="">
              <img class="book-img"
                src="${n.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="book-info">
                <h3 class="book-title">
                  ${n.title}
                </h3>
                <p class="book-author">
                  ${n.author}
                </p>
              </div>
            </a>
          </li>`).join("")}
            </ul>`}function v(e){return c.bookCollectionWrapper.insertAdjacentHTML("beforeend",$(e))}function M(e){return c.bookCollectionWrapper.insertAdjacentHTML("beforeend",j(e))}function x(){c.bookCollectionWrapper.insertAdjacentHTML("afterbegin",'<h1 class="books-header">Best Sellers <span class="books-accent">Books</span></h1>')}function B(e){const o=e[0].list_name.split(" "),n=o.pop(),l=o.join(" ")+` <span class="books-accent">${n}</span>`;c.bookCollectionWrapper.insertAdjacentHTML("afterbegin",`<h1 class="books-header">${l}</h1>`)}function w(){c.bookCollectionWrapper.innerHTML=""}function E(e){console.log(e),w(),e.forEach(v),x()}function A(e){console.log(e),w(),M(e),B(e)}function H(e){return e.map(({id:o,title:n,url:l,img:t,img2x:r})=>`
        <li class="support-items">
          <a class="support-link" href="${l}" target="_blank" rel="noopener noreferrer">
            <span>0${o}</span>
            <img class="support-img" src="${t}" alt="${n}" >
          </a>
        </li>
        `).join("")}const N={renderTopBooks:E,renderCategoryBooks:A,insertCategoryBlocks:v},L="/RTFM_project_team_JS/assets/img-1@1x-16840edc.png";console.log(L);a[0].img=L;console.log(a);const i=document.querySelector(".js-suport-list"),g=document.querySelector(".support-arrow-down"),h=document.querySelector(".support-arrow-up");g.addEventListener("click",W);h.addEventListener("click",I);let _=1;for(let e=0;e<9;e+=1)a[e].id=_+e;for(let e=1;e<9;e+=1)a[e].img=`img-${e+1}@1x.png`;i.insertAdjacentHTML("afterbegin",H(a));function W(){g.classList.toggle("visually-hidden"),h.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)i.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)i.children[e].classList.remove("visually-hidden")}function I(){g.classList.toggle("visually-hidden"),h.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)i.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)i.children[e].classList.toggle("visually-hidden")}export{T as g,N as m};
//# sourceMappingURL=support-sidebar-50ff821e.js.map
