var typed = new Typed('#element', {
    strings: ['Web Developer', 'Front-End Developer', 'Back-End Developer', 'Full Stack Developer'],
    typeSpeed: 60,
    loop: true
});


const navbar = document.querySelector(".navbar")
const container = document.querySelector(".container")
const about = document.querySelector(".about")
const services = document.querySelector(".services")
const contact = document.querySelector(".contact")
const resume = document.querySelector(".resume")
const menu = document.querySelector(".menu")


// menu.addEventListener('click', function () {

//     // navbar.classList.toggle('sidebar')

//     if (navbar.classList.toggle('sidebar')) {
//         container.style.marginLeft = `5.3vw`
//         about.style.marginLeft = `5.3vw`
//         services.style.marginLeft = `5.3vw`
//         contact.style.marginLeft = `5.3vw`
//         resume.style.marginLeft = `5.3vw`
//     } else {
//         container.style.marginLeft = `10vw`
//         about.style.marginLeft = `10vw`
//         services.style.marginLeft = `10vw`
//         contact.style.marginLeft = `10vw`
//         resume.style.marginLeft = `10vw`
//     }

// })



if (window.innerWidth <= 570) {
    navbar.classList.add('sidebar');
    container.style.marginLeft = '11.5vw';
    about.style.marginLeft = '11.5vw';
    services.style.marginLeft = '11.5vw';
    contact.style.marginLeft = '11.5vw';
    resume.style.marginLeft = '11.5vw';
} else {
    menu.addEventListener('click', function () {
        if (navbar.classList.toggle('sidebar')) {
            container.style.marginLeft = '5.3vw';
            about.style.marginLeft = '5.3vw';
            services.style.marginLeft = '5.3vw';
            contact.style.marginLeft = '5.3vw';
            resume.style.marginLeft = '5.3vw';
        } else {
            container.style.marginLeft = '10vw';
            about.style.marginLeft = '10vw';
            services.style.marginLeft = '10vw';
            contact.style.marginLeft = '10vw';
            resume.style.marginLeft = '10vw';
        }
    });
}
