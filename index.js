// const body = document.querySelector(body)


const menuBtn = document.getElementById('menu-btn');

const navLinks = document.getElementById('nav-links');

const menuBtnIcon = menuBtn.querySelector("#menu");


menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open')

    const isOpen = navLinks.classList.contains('open');

    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
})


navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
})








const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000
};

const scrollRevealOption1 = {
    distance: "300px",
    origin: "left",
    duration: 2000
};

ScrollReveal().reveal(".content h1", { ...scrollRevealOption })

ScrollReveal().reveal(".content h4", {
    ...scrollRevealOption,
    delay: 500
})

ScrollReveal().reveal(".content h2", {
    ...scrollRevealOption1,
    delay: 1000
})
ScrollReveal().reveal(".content h6", {
    ...scrollRevealOption,
    delay: 1500
})


ScrollReveal().reveal(".content p", {
    ...scrollRevealOption,
    delay: 2100
})

ScrollReveal().reveal(".content form", {
    ...scrollRevealOption1,
    delay: 1800
})

ScrollReveal().reveal(".content .socials span a", {
    ...scrollRevealOption1,
    delay: 2500,
    interval:500
})



