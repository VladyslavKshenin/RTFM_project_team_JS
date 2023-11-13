const refs = {
    openBurgerBtn: document.querySelector('.burger-menu'),
    closeBurgerBtn: document.querySelector('.mobile-menu__button'),
    burger: document.querySelector('.mobile-menu-container'),
};

refs.openBurgerBtn.addEventListener('click', toggleModal);
refs.closeBurgerBtn.addEventListener('click', toggleModal);

function toggleModal() {
    refs.burger.classList.toggle('is-hidden');
}

const toggleSwitch = document.querySelector(
    '.toggle-theme input[type="checkbox"]'
);
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}