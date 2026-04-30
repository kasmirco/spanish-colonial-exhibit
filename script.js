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

document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.getElementById("welcomeOverlay");
    const confettiContainer = document.getElementById("confetti");

    // SAFETY CHECK (prevents errors on other pages)
    if (!overlay) return;

    // =========================
    // SHOW ONLY ON FIRST LOAD OF SITE
    // =========================
    const alreadyShown = sessionStorage.getItem("welcomeShown");

    if (alreadyShown) {
        overlay.style.display = "none";
        return;
    }

    sessionStorage.setItem("welcomeShown", "true");

    // =========================
    // AUTO CLOSE (KEEP YOUR 2500ms)
    // =========================
    setTimeout(() => {
        hideOverlay();
    }, 1700);

    overlay.addEventListener("click", hideOverlay);

    function hideOverlay(){
        overlay.style.opacity = "0";
        overlay.style.transition = "0.5s ease";

        setTimeout(() => {
            overlay.style.display = "none";
        }, 500);
    }
});
