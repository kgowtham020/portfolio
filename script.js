let menuIcon = document.querySelector('#menu-icon'); // Corrected querySelector
let navbar = document.querySelector('.navbar'); // Corrected querySelector
let sections = document.querySelectorAll('section'); // Corrected querySelectorAll
let navLinks = document.querySelectorAll('header nav a'); // Corrected querySelectorAll

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Corrected getAttribute

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active'); // Corrected querySelector
            });
        }
    });
};
