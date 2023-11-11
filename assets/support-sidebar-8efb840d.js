(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const u=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"/images/support/img-1@1x.png",img2x:"/images/support/img-1@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../images/support/img-2@1x.png",img2x:"../images/support/img-2@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../images/support/img-3@1x.png",img2x:"../images/support/img-3@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../images/support/img-4@1x.png",img2x:"../images/support/img-4@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../images/support/img-5@1x.png",img2x:"../images/support/img-5@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../images/support/img-6@1x.png",img2x:"../images/support/img-6@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../images/support/img-7@1x.png",img2x:"../images/support/img-7@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../images/support/img-8@1x.png",img2x:"../images/support/img-8@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../images/support/img-9@1x.png",img2x:"../images/support/img-9@2x.png"}];function c(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}const m=c();function d(e){const r=e.books.map(o=>`<li class="book-card">
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
            <h3>${e.list_name}</h3>
            <ul class="category-books">
            ${r}
            </ul>
            <button>more</button>
          </div>`}function h(e){return m.bookCollectionWrapper.insertAdjacentHTML("beforeend",d(e))}function f(e){return e.map(({id:r,title:o,url:n,img:t,img2x:i})=>`
        <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${r}</span>
                <img class="support-img" src="${t}" alt="${o}" srcset="${t} 1x, ${i} 2x" height="32">
            </a>
        </li>
        `).join("")}const x={insertCategoryBlocks:h},s=document.querySelector(".js-suport-list"),a=document.querySelector(".support-arrow-down"),p=document.querySelector(".support-arrow-up");a.addEventListener("click",y);p.addEventListener("click",w);let g=0;u.forEach(e=>{e.id=g+1,g+=1});s.insertAdjacentHTML("afterbegin",f(u));function y(){a.classList.toggle("visually-hidden"),p.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)s.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)s.children[e].classList.remove("visually-hidden")}function w(){a.classList.toggle("visually-hidden"),p.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)s.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)s.children[e].classList.toggle("visually-hidden")}export{x as m};
//# sourceMappingURL=support-sidebar-8efb840d.js.map
