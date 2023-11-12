(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const a=document.querySelector(".js-open-menu"),x=document.querySelector(".js-close-menu"),u=document.querySelector(".js-modal"),d=new BroadcastChannel("modal-channel");a.addEventListener("click",function(){u.style.display="block",a.classList.add("hidden"),d.postMessage({action:"openModal"})});x.addEventListener("click",function(){u.style.display="none",a.classList.remove("hidden")});d.addEventListener("message",function(e){e.data.action==="openModal"&&(u.style.display="block",a.classList.add("hidden"))});window.addEventListener("beforeunload",function(){d.close()});const v=document.querySelector(".div-theme"),m=document.querySelector(".span-theme"),h=document.querySelector("body");let s=!1;v.addEventListener("change",()=>{s?(s=!1,localStorage.setItem("userTheme","light")):(s=!0,localStorage.setItem("userTheme","dark")),k()});function k(){try{s=localStorage.getItem("userTheme")==="dark"}catch{s=!1}const e=document.querySelector(".header-logo-icon"),r=document.querySelector(".header-logo-icon1");s?(h.classList.add("dark-theme"),m.style.left="20px",e.style.width="0px",r.style.width="109px"):(h.classList.remove("dark-theme"),m.style.left="2px",r.style.width="0px",e.style.width="109px")}k();const f=document.querySelector(".header-nav-item").querySelectorAll("a"),L=document.querySelector(".header-nav-item-modal").querySelectorAll("a");if(document.querySelector(".home-page")===null)for(let e=0;e<f.length;e++)f[e].classList.toggle("heder-active"),L[e].classList.toggle("heder-active");const w=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../images/support/img-1@1x.png",img2x:"../images/support/img-1@2x.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../images/support/img-2@1x.png",img2x:"../images/support/img-2@2x.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../images/support/img-3@1x.png",img2x:"../images/support/img-3@2x.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../images/support/img-4@1x.png",img2x:"../images/support/img-4@2x.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../images/support/img-5@1x.png",img2x:"../images/support/img-5@2x.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../images/support/img-6@1x.png",img2x:"../images/support/img-6@2x.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../images/support/img-7@1x.png",img2x:"../images/support/img-7@2x.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../images/support/img-8@1x.png",img2x:"../images/support/img-8@2x.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../images/support/img-9@1x.png",img2x:"../images/support/img-9@2x.png"}];function b(){return{bookCollectionWrapper:document.querySelector(".book-collection-wrapper")}}const S=b();function q(e){const r=e.books.map(i=>`<li class="book-card">
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
            ${r}
            </ul>
            <button>more</button>
          </div>`}function E(e){return S.bookCollectionWrapper.insertAdjacentHTML("beforeend",q(e))}function M(e){return e.map(({id:r,title:i,url:l,img:t,img2x:o})=>`
        <li class="support-items">
            <a class="support-link" href="${l}" target="_blank" rel="noopener noreferrer">
                <span>0${r}</span>
                <img class="support-img" src="${t}" alt="${i}" srcset="${t} 1x, ${o} 2x" height="32">
            </a>
        </li>
        `).join("")}const C={insertCategoryBlocks:E},n=document.querySelector(".js-suport-list"),g=document.querySelector(".support-arrow-down"),p=document.querySelector(".support-arrow-up");g.addEventListener("click",$);p.addEventListener("click",j);let y=0;w.forEach(e=>{e.id=y+1,y+=1});n.insertAdjacentHTML("afterbegin",M(w));function $(){g.classList.toggle("visually-hidden"),p.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)n.children[e].classList.add("visually-hidden");for(let e=7;e<9;e+=1)n.children[e].classList.remove("visually-hidden")}function j(){g.classList.toggle("visually-hidden"),p.classList.toggle("visually-hidden");for(let e=0;e<3;e+=1)n.children[e].classList.remove("visually-hidden");for(let e=7;e<9;e+=1)n.children[e].classList.toggle("visually-hidden")}export{C as m};
//# sourceMappingURL=support-sidebar-fce787cb.js.map
