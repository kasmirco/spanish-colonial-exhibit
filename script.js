const lightBtn = document.getElementById('lightBtn');
const darkBtn = document.getElementById('darkBtn');

lightBtn.classList.add('active'); // optional default state

lightBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');

    lightBtn.classList.add('active');
    darkBtn.classList.remove('active');
});

darkBtn.addEventListener('click', () => {
    document.body.classList.add('dark-mode');

    darkBtn.classList.add('active');
    lightBtn.classList.remove('active');
});

const nav = document.querySelector('.custom-nav');
const aboutSection = document.querySelector('#about');

window.addEventListener('scroll', () => {
    const aboutTop = aboutSection.offsetTop;
    const scrollPos = window.scrollY + 100; // small offset for smoother trigger

    if (scrollPos >= aboutTop) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

