document.addEventListener('DOMContentLoaded', () => {

    /* --- Mobile Menu (Hamburger) --- */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    // Show menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Hide menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Hide menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });


    /* --- Change Header on Scroll --- */
    const header = document.getElementById('header');
    function scrollHeader() {
        if (this.scrollY >= 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
    window.addEventListener('scroll', scrollHeader);

    
    /* --- Active Link on Scroll --- */
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive(){
        const scrollY = window.pageYOffset;

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58; // 58 is a bit more than header height
            const sectionId = current.getAttribute('id');
            const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

            if(link) {
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    link.classList.add('active-link');
                }else{
                    link.classList.remove('active-link');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollActive);


    /* --- Scroll Fade-in Animations --- */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const elementsToAnimate = document.querySelectorAll('.animate-fade-in');
    elementsToAnimate.forEach((el) => observer.observe(el));
});