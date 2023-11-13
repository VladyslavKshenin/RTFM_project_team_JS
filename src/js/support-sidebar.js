import { supportItems } from './support-item.js';
import { createMarkup } from './markup.js';
import firstImage from './../images/support/img-1@1x.png';
import secondImage from './../images/support/img-2@1x.png';
import thirdImage from './../images/support/img-3@1x.png';
import fourthImage from './../images/support/img-4@1x.png';
import fifthImage from './../images/support/img-5@1x.png';
import sixthImage from './../images/support/img-6@1x.png';
import seventhImage from './../images/support/img-7@1x.png';
import eightImage from './../images/support/img-8@1x.png';
import ninthImage from './../images/support/img-9@1x.png';
import firstImageForRetina from './../images/support/img-1@2x.png';
import secondImageForRetina from './../images/support/img-2@2x.png';
import thirdImageForRetina from './../images/support/img-3@2x.png';
import fourthImageForRetina from './../images/support/img-4@2x.png';
import fifthImageForRetina from './../images/support/img-5@2x.png';
import sixthImageForRetina from './../images/support/img-6@2x.png';
import seventhImageForRetina from './../images/support/img-7@2x.png';
import eightImageForRetina from './../images/support/img-8@2x.png';
import ninthImageForRetina from './../images/support/img-9@2x.png';
// import supportCoatOfArms from './../images/icons.svg'; 
// import supportArrowUp from './../images/icons.svg';
// import supportArrowDown from './../images/icons.svg';
import icon from './../images/icons.svg'; 


const divContainer = document.querySelector('.support-container');

const svgPath = {
  coatOfArms: '#coat-of-arroms',
  arrowUp: '#small-arrow-up',
  arrowDown: '#small-arrow-down',
};

const position = {
  beforebegin: 'beforebegin',
  afterbegin: 'afterbegin',
  beforeend: 'beforeend',
  afterend: 'afterend'
}

const heading = document.createElement('h2');
heading.classList.add('support-title');
heading.textContent = 'Support Ukraine';


// const svgCoatOfArms = greateSvg("support-coat-of-arms", 20, 32, supportCoatOfArms, svgPath.coatOfArms);
// const svgArrowUp = greateSvg("support-button", 12, 20, supportArrowUp, svgPath.arrowUp);
// const svgArrowDown = greateSvg("support-button", 12, 20, supportArrowDown, svgPath.arrowDown);

const spanArrowUp = document.createElement('span');
spanArrowUp.classList.add('support-arrow');
spanArrowUp.classList.add('support-arrow-up');
spanArrowUp.classList.add('visually-hidden');
// addElement(spanArrowUp, position.afterbegin, svgArrowUp);
 

const spanArrowDown = document.createElement('span');
spanArrowDown.classList.add('support-arrow');
spanArrowDown.classList.add('support-arrow-down');
// addElement(spanArrowDown, position.afterbegin, svgArrowDown);


const divArrow = document.createElement('div');
divArrow.classList.add('support-arrow-wrap');
addElement(divArrow, position.afterbegin, spanArrowUp);
addElement(divArrow, position.afterbegin, spanArrowDown);


const divTitle = document.createElement('div');
divTitle.classList.add('support-wraper');
addElement(divTitle, position.afterbegin, heading);
// addElement(divTitle, position.afterbegin, svgCoatOfArms);


const list = document.createElement('ul')
list.classList.add('support-list');
list.classList.add('js-support-list');


const divWrap = document.createElement('div');
divWrap.classList.add('support-container-wrap');
addElement(divWrap, position.afterbegin, divTitle);
addElement(divWrap, position.beforeend, list);
addElement(divWrap, position.beforeend, divArrow);

// console.log(divWrap)
// divContainer.append(divWrap)

const supportList = document.querySelector('.js-support-list');
const arrowDown = document.querySelector('.support-arrow-down');
const arrowUp = document.querySelector('.support-arrow-up');

const imagesArr = [];
const imagesArr2x = [];

imagesArr.push(firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage, seventhImage, eightImage, ninthImage);
imagesArr2x.push(firstImageForRetina, secondImageForRetina, thirdImageForRetina, fourthImageForRetina, fifthImageForRetina, sixthImageForRetina, seventhImageForRetina, eightImageForRetina, ninthImageForRetina);

getImages(imagesArr, imagesArr2x, supportItems)
supportList.insertAdjacentHTML('afterbegin', createMarkup(supportItems));

arrowDown.addEventListener('click', handlerDown);
arrowUp.addEventListener('click', handlerUp);

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

function getImages(arr, arr2, arr3) {

  for (let i = 0; i < arr.length; i += 1) {
    arr3[i].id = i + 1;
    arr3[i].img = arr[i];
    arr3[i].img2x = arr2[i];
  }

  return arr3.id, arr3.img, arr3.img2x;
}

function addElement(targetElement, position, element) {
  targetElement.insertAdjacentElement(position, element);
}

// function greateSvg(classElement, width, height, href, path) {
  
//   const svg = document.createElement('svg');
//   svg.classList.add(`${classElement}`);
//   svg.setAttribute('width', `${width}`);
//   svg.setAttribute('height', `${height}`);

//   const use = document.createElement('use');
//   use.setAttribute('href', `${href}${path}`);

//   addElement(svg, position.afterbegin, use);

//   return svg;
// }

// console.log(createMarkupSvg(icon, svgPath.arrowDown))

function createMarkupSvg(icon, path) {
  return `<svg class="support-button" width="12" height="20">
          <use href="${icon}${path}"></use>
        </svg>`
}