import iconLogo from '../images/icons.svg';

const toggle = document.querySelector('.box-toggle');
const logo = document.querySelector('.logo');
const amazonBlack = document.querySelectorAll('[data-bleak]');
const amazonWhite = document.querySelectorAll('[data-white]');
const themeKey = 'theme';
const darkTheme = 'dark-theme';
const lightTheme = 'light-theme';
if (localStorage.getItem(themeKey)) {
    document.documentElement.className = localStorage.getItem(themeKey);
}

replacingLogo();

function initialState(themeName) {
    localStorage.setItem(themeKey, themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem(themeKey) === darkTheme) {
        initialState(lightTheme);
    } else {
        initialState(darkTheme);
    }
}

toggle.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    toggleTheme();
    replacingLogo();
}

function replacingLogo() {
    if (document.documentElement.className === darkTheme) {
        logo.lastElementChild.lastElementChild.removeAttribute('href');
        logo.lastElementChild.lastElementChild.setAttribute(
            'href',
            `${iconLogo}#icon-logo-dark`
        );
        if (amazonWhite && amazonBlack) {
            amazonWhite.forEach(logo => {
                logo.style.display = 'block';
            });
            amazonBlack.forEach(logo => {
                logo.style.display = 'none';
            });
        }
    } else {
        logo.lastElementChild.lastElementChild.removeAttribute('href');
        logo.lastElementChild.lastElementChild.setAttribute(
            'href',
            `${iconLogo}#icon-logo`
        );
        if (amazonWhite && amazonBlack) {
            amazonWhite.forEach(logo => {
                logo.style.display = 'none';
            });
            amazonBlack.forEach(logo => {
                logo.style.display = 'block';
            });
        }
    }
}