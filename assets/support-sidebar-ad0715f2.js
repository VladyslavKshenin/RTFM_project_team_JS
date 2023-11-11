(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null}];function u(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}const c=u();function p(r){const o=r.books.map(i=>`<li class="book-card">
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
            <h3>${r.list_name}</h3>
            <ul class="category-books">
            ${o}
            </ul>
            <button>more</button>
          </div>`}function g(r){return c.bookCollectionWrapper.insertAdjacentHTML("beforeend",p(r))}function d(r){return r.map(({id:o,title:i,url:n,img:e,img2x:t})=>`
        <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${o}</span>
                <img class="support-img" src="${e}" alt="${i}" srcset="${e} 1x, ${t} 2x">
            </a>
        </li>
        `).join("")}const f={insertCategoryBlocks:g},m=document.querySelector(".js-suport-list");let l=0;a.forEach(r=>{r.id=l+1,r.img=`./images/support/img-${l+1}@1x.png`,r.img2x=`./images/support/img-${l+1}@2x.png`,l+=1});m.insertAdjacentHTML("afterbegin",d(a));export{f as m};
//# sourceMappingURL=support-sidebar-ad0715f2.js.map
