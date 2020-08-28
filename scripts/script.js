let elem;
let elem2;
let skillsProgressBars;
let percents;

let animTimer;
const animate = () => {
    animTimer = setInterval( () => {
        skillsProgressBars.forEach(el => el.classList.add('animate'));
        percents.forEach(el => el.classList.add('animate'));
        window.removeEventListener('scroll', animateOnScroll);
    }, 500);
};

const initAnimate = () => {
    elem = document.querySelector('.scroll');
    elem2 = document.querySelector('.scroll2');
    skillsProgressBars = document.querySelectorAll('.progress-bar__line');
    percents = document.querySelectorAll('.progress-bar__percent');

    animateOnScroll();
};

const animateOnScroll = () => {
    if(!skillsProgressBars) return;

    if (elem && document.documentElement.clientWidth > 1000 && scrollY >= elem.offsetTop) animate();
    if (elem2 && document.documentElement.clientWidth <= 1000 && scrollY >= elem2.offsetTop) animate();
};

window.addEventListener('scroll', animateOnScroll, false);
document.addEventListener("DOMContentLoaded", initAnimate);