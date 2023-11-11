(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const d=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null}];function p(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}const g=p();function h(e){const o=e.books.map(i=>`<li class="book-card">
            <a class="book-link" href="">
              <img
                src="${i.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="info">
                <p class="book-title">
                  ${i.title}
                </p>
                <p class="book-author">
                  ${i.author}
                </p>
              </div>
            </a>
          </li>`).join("");return`<div class="category-block">
            <h3>${e.list_name}</h3>
            <ul class="category-books">
            ${o}
            </ul>
            <button>more</button>
          </div>`}function m(e){return g.bookCollectionWrapper.insertAdjacentHTML("beforeend",h(e))}function f(e){return e.map(({id:o,title:i,url:n,img:t,img2x:r})=>`
        <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${o}</span>
                <img class="support-img" src="${t}" alt="${i}" srcset="${t} 1x, ${r} 2x" height="32">
            </a>
        </li>
        `).join("")}const k={insertCategoryBlocks:m},l=document.querySelector(".js-suport-list"),u=document.querySelector(".support-arrow-down"),c=document.querySelector(".support-arrow-up");u.addEventListener("click",y);c.addEventListener("click",w);let s=0;d.forEach(e=>{e.id=s+1,e.img=`../images/support/img-${s+1}@1x.png`,e.img2x=`../images/support/img-${s+1}@2x.png`,s+=1});l.insertAdjacentHTML("afterbegin",f(d));function y(){u.classList.toggle("visually-hidden"),c.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)l.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)l.children[e].classList.remove("visually-hidden")}function w(){u.classList.toggle("visually-hidden"),c.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)l.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)l.children[e].classList.toggle("visually-hidden")}export{k as m};
//# sourceMappingURL=support-sidebar-3a107964.js.map
