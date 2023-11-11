(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const l=document.querySelector(".js-open-menu"),h=document.querySelector(".js-close-menu"),c=document.querySelector(".js-modal"),u=new BroadcastChannel("modal-channel");l.addEventListener("click",function(){c.style.display="block",l.classList.add("hidden"),u.postMessage({action:"openModal"})});h.addEventListener("click",function(){c.style.display="none",l.classList.remove("hidden")});u.addEventListener("message",function(e){e.data.action==="openModal"&&(c.style.display="block",l.classList.add("hidden"))});window.addEventListener("beforeunload",function(){u.close()});const m=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../images/support/img-1@1x.png",img2x:"../images/support/img-1@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../images/support/img-2@1x.png",img2x:"../images/support/img-2@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../images/support/img-3@1x.png",img2x:"../images/support/img-3@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../images/support/img-4@1x.png",img2x:"../images/support/img-4@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../images/support/img-5@1x.png",img2x:"../images/support/img-5@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../images/support/img-6@1x.png",img2x:"../images/support/img-6@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../images/support/img-7@1x.png",img2x:"../images/support/img-7@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../images/support/img-8@1x.png",img2x:"../images/support/img-8@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../images/support/img-9@1x.png",img2x:"../images/support/img-9@2x.png"}];function f(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}const y=f();function w(e){const o=e.books.map(r=>`<li class="book-card">
            <a class="book-link" href="">
              <img
                src="${r.book_image}"
                alt="book image"
                width="100%"
                loading="lazy"
              />
              <div class="info">
                <p class="book-title">
                  ${r.title}
                </p>
                <p class="book-author">
                  ${r.author}
                </p>
              </div>
            </a>
          </li>`).join("");return`<div class="category-block">
            <h3>${e.list_name}</h3>
            <ul class="category-books">
            ${o}
            </ul>
            <button>more</button>
          </div>`}function k(e){return y.bookCollectionWrapper.insertAdjacentHTML("beforeend",w(e))}function x(e){return e.map(({id:o,title:r,url:n,img:t,img2x:i})=>`
        <li class="support-items">
            <a class="support-link" href="${n}" target="_blank" rel="noopener noreferrer">
                <span>0${o}</span>
                <img class="support-img" src="${t}" alt="${r}" srcset="${t} 1x, ${i} 2x" height="32">
            </a>
        </li>
        `).join("")}const b={insertCategoryBlocks:k},s=document.querySelector(".js-suport-list"),p=document.querySelector(".support-arrow-down"),g=document.querySelector(".support-arrow-up");p.addEventListener("click",v);g.addEventListener("click",L);let d=0;m.forEach(e=>{e.id=d+1,d+=1});s.insertAdjacentHTML("afterbegin",x(m));function v(){p.classList.toggle("visually-hidden"),g.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)s.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)s.children[e].classList.remove("visually-hidden")}function L(){p.classList.toggle("visually-hidden"),g.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)s.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)s.children[e].classList.toggle("visually-hidden")}export{b as m};
//# sourceMappingURL=support-sidebar-d8b0f7f2.js.map
