import"./assets/support-sidebar-4c288fd5.js";const l="/RTFM_project_team_JS/assets/icons-bb60c522.svg";const g="/RTFM_project_team_JS/assets/books-desk@1x-1f62c9bc.png",p="/RTFM_project_team_JS/assets/books-desk@2x-306b4264.png",f="/RTFM_project_team_JS/assets/books-mob@1x-93df6442.png",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAALCAYAAAAeEY8BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMQSURBVHgBrVNNSFRRFD733vdGhUxHLdLI95wxM9FF2KJFEckklDEmlEGFWIYhUZAJQj+LqDYFQoSmhZkhbdwEJdGqCTIhJEnCqHT+KMFFoObvzJt7+2YaQTRsFh248879zjnf+e65d1h+fn6StKwuUsqtiALhSORwshBZ8G9KxgaBH5JETYKoRTE2HLasWk3TCoRS7cjZgdWDmvNJmlaD3HqCAQt7A4FdDtO8qJRqAvTBlpx81lpYKESskTE2JpVygfcIl+GwC0llSKpGYIOuaZcQsCOxDIQ5jCgHzXsQH2JKVeu6XsKVugKCCcX5OcTrOOd5iA1D4BPgm5CbWWCahahv4YzdRSw3tLjYzIWIxsrBn446QzBWw6G0T4ZC+xjnDhTMIpBEcZuZm2sgxt6D+DmmcTl2OqVSUFOtCdGqpCyKYphG5mggMAB3CofIsZSqRJMD2C+O+f23ifM+iHDHablhmnXABtDLzh2GUSFsthEppR3NQrTM0tLSwvgwJM4vx52G8cCSsgONA0vYdsPIhrrrcNuCweAIhK6DvxAXPbusPOzxeCwIikS5Oej3I+ObLxC4EQdXmvoLUI6TdpOuD8b2QmSEGGuGmwuunXmGcQZXMYT9+oLs7CxOtA34OEVW02tQFwTZVhQNYGyKSVkKUb20tn1HXS2zrEqI+cmlLMR7KAbej9ppTOwWt9mK8b68lq6/BF6KvGP46iuJWPQH13AcVzBHQnh0XWYoZfulLOsg7q/bNM29QoiZSCQyhsfoxlt4g+YYHVVB8GuIn/f5fF/vHE0zm1xTRRiPuvc2/ceFnsmPqDUx1RN4Q4N+v/+V0+ncgto9Xq/36RIvWzXeLkqnEDWSpEesgfyUoKn7VIXjpGK5sR6zenqRSB1fCbBTNAm0FSS9qp26VQft/hcJmm9EfgnccnxHIf4LJWhsTeKHVAeya3BTsT4h+zP24/DD8O34OrBKsdIpQldpgjppM53G6dvofwiIiehE8xC5SFAF7jf60Jz0558xATH9pNE7SqFn7CRNx/JxhbEpJmi/Af1sXvpTKUGuAAAAAElFTkSuQmCC",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGcSURBVHgBrVI9S0MxFD03rxbxA4oOgoqfi7jo5CD4gS4O/hEnBQfdHEVBXARHQRAU/BW6aa04SEGkFnURp4K02r7kevPSvr5WqYJeEkhO7j055ybAH4MqCz5IJIC3FTCmZKsalKTx4W3T0nvW7mIhgZ9PgdVgDTV/yzCLmFlgxjCRVFiktN88xz4NshakMv3Iun5Krr/XPBMqoBL6oIRLaGliHdQxDi7mwMnNQIkaWwY6R8G3h+C7I8FIhuqvWtAeYAQfWhSCjdAB2gckUVa9Uw7rmXZ208dh9xyBUWJXDDclql210dYXtCGKsYkFNqzaKkFRFCgTENVEfXX5MvgKlQ6XFZQPTH02vr6EzbEEJmLBSA/IZuofii2kEVgg94BlBSXZkFAKyJkzmOtjUPeYNHVW7BVgbrbAuWdQ/2RVASIK3M1SfHUKfXnibkqdAh3DQGsn8HThsKScxVscQfQVtOasZ3+vNrVde824GcUKBbf31CMqJ2z/0mrXvf0J+FXwQ3znZShUYF+1oGneI1qT5UijSoY6j3N+F/8Vn138pPRcMEeFAAAAAElFTkSuQmCC";console.log(r);const m=[{sebel:"sdfsdfsdf",sdfss:"sdfsdfsdf",fdsdfsdfsdf:"sdfsdf"},{sebel:"sdfsdfsdf",sdfss:"sdfsdfsdf",fdsdfsdfsdf:"sdfsdf"},{sebel:"sdfsdfsdf",sdfss:"sdfsdfsdf",fdsdfsdfsdf:"sdfsdf"}];localStorage.setItem("localCard",JSON.stringify(m));const a="localCard",o=document.querySelector(".js-shopping-list"),i=document.querySelector(".shopping-list-container"),n=c(a);n[0]!==void 0?(i.innerHTML="",o.innerHTML="",o.insertAdjacentHTML("afterbegin",d(n)),o.addEventListener("click",C)):A();function C(s){if(s.target.nodeName==="BUTTON"||s.target.nodeName==="svg"||s.target.nodeName==="use")o.innerHTML="",n.splice(s.target.id,1),localStorage.removeItem(a),S(a,n),n[0]!==void 0?o.insertAdjacentHTML("afterbegin",d(c(a))):A();else return}function d(s){return s.map(({sebel:e},t)=>`<li class="shopping-list-item">
      <img class="shopping-list-card-img" src="https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg" alt="book">
      <div class="shopping-list-card-container">
        <h2 class="shopping-list-card-title">I will find you</h2>
        <p class="shopping-list-card-text">Hardcover fiction</p>
        <p class="shopping-list-card-desc">
          David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short
          drive away
          from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when
          David woke
          suddenly to discover Matthew had been murdered while David was asleep just down the hall.
          ${e}
        </p>
        <div class="shopping-list-card-bottom-container">
          <p class="shopping-list-card-author">Harlan Coben</p>
          <div class="shopping-list-card-container-img">
            <a href="">
              <img class="shopping-list-card-icon-amazon" src="${r}" alt="amazon-icon">
              <img class="shopping-list-card-icon-book" src="${h}" alt="book-icon">
            </a>
          </div>
        </div>
        <div>
          <button class="btn-shop shopping-list-card-container-trash" id="${t}">
            <svg class="shopping-list-card-icon-trash" width="18px" height="18px">
              <use href="${l}#icon-del"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `).join("")}function A(){i.innerHTML="",i.insertAdjacentHTML("afterbegin",`
    <p class="shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <img
      class="shopping-list-image"
      srcset="
        ${g} 1x,
        ${p} 2x
      "
      src="${f}"
      alt="books"
      width="265"
      height="198"
    />
    `)}function S(s,e){try{const t=JSON.stringify(e);localStorage.setItem(s,t)}catch(t){console.error("Get state error: ",t.message)}}function c(s){try{const e=localStorage.getItem(s);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}}
//# sourceMappingURL=commonHelpers2.js.map
