let menuIcon = document.querySelecter('#menu-icon');
let navbar = document.querySelecter('.navbar');
let sections = document.querySelecter('section');
let navLinks = document.querySelector('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.get.attribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id+']').classList.add('active');
            })
        }
    })
}
menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}