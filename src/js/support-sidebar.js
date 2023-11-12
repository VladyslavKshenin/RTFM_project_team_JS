import { supportItems } from './support-item.js';
import { createMarkup } from './markup.js';
import save from './../images/support/img-1@1x.png';
  console.log(save);
  supportItems[0].img = save;
console.log(supportItems);
  
const supportList = document.querySelector('.js-suport-list');
const arrowDown = document.querySelector('.support-arrow-down');
const arrowUp = document.querySelector('.support-arrow-up');

arrowDown.addEventListener('click', handlerDown);
arrowUp.addEventListener('click', handlerUp);

// let i = 0;
// supportItems.forEach(element => {
//   element.id = i + 1;
//   // element.img = `../images/support/img-${i + 1}@1x.png`;
//   // element.img2x = `../images/support/img-${i + 1}@2x.png`;
//   i += 1;
// });


  let id = 1;
  for (let i = 0; i < 9; i += 1) {
    supportItems[i].id = id + i; 
  //   imageArr[i].img = `img-${i + 1}@1x.png`;
  //   imageArr[i].img2x = `img-${i + 1}@2x.png`;
  }

  for (let i = 1; i < 9; i += 1) {
    supportItems[i].img = `img-${i + 1}@1x.png`;
  //   imageArr[i].img2x = `img-${i + 1}@2x.png`;
  }
 

supportList.insertAdjacentHTML('afterbegin', createMarkup(supportItems));

// const imgSrc = supportItems.map(src => src.img);

// const img = document.querySelectorAll('.support-img');

// for (let i = 0; i < 9; i += 1) {
//   img[i].src = imgSrc[i];
// }



function handlerDown() {
  arrowDown.classList.toggle('visually-hidden');
  arrowUp.classList.toggle('visually-hidden');

  for (let i = 0; i < 3; i += 1) {
    supportList.children[i].classList.add('visually-hidden');
  }

  for (let i = 7; i < 9; i += 1) {
    supportList.children[i].classList.remove('visually-hidden');
  }
}

function handlerUp() {
  arrowDown.classList.toggle('visually-hidden');
  arrowUp.classList.toggle('visually-hidden');

  for (let i = 0; i < 3; i += 1) {
    supportList.children[i].classList.remove('visually-hidden');
  }

  for (let i = 7; i < 9; i += 1) {
    supportList.children[i].classList.toggle('visually-hidden');
  }
}