import { supportItems } from './support-item.js';
import { createMarkup } from './markup.js';


const supportList = document.querySelector('.js-suport-list');

let i = 0;
supportItems.forEach(element => {
    element.id = i + 1;
    element.img = `./images/support/img-${i + 1}@1x.png`;
    element.img2x = `./images/support/img-${i + 1}@2x.png`;
    i += 1;
})

supportList.insertAdjacentHTML('afterbegin', createMarkup(supportItems));
