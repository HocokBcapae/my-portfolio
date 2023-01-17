
//animation line
gsap.fromTo(".line", {
    opacity: 0,
    y: 500,

    ease: "back.out(1.7)",
},
    {
        y: 0,
        opacity: 1,
        duration: 3,
    });


//animation nav-current
gsap.fromTo(".header__nav-current1", {
    opacity: 0,
    x: -50,

    ease: "back.out(1.7)",
},
    {
        x: 0,
        opacity: 1,
        duration: 1,
    });

gsap.fromTo(".header__nav-current", {
    opacity: 0,
    x: -50,

    ease: "back.out(1.7)",
},
    {
        x: 0,
        opacity: 1,
        duration: 1,
    });


//animation link
gsap.fromTo(".header__nav-link", {
    opacity: 0,
    x: -30,
    y: -30,
    ease: "back.out(1.7)",
},
    {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
    });


//animation main-text1
gsap.fromTo(".main-text1", {
    opacity: 0,
    ease: "power4.in",
},
    {
        opacity: 1,
        duration: 3,
        delay: 2,
    });

//animation main-text2
gsap.fromTo(".main-text2", {
    opacity: 0,
    ease: "power4.in",
},
    {

        opacity: 0.8,
        duration: 3,
        delay: 3,
    });


//popup menu
const navLines = document.querySelector("#nav__lines")
const popup = document.querySelector("#popup")
const touch = document.querySelector(".header__nav")

navLines.addEventListener("click", navLinesUp)

function navLinesUp(e) {
    e.preventDefault()
    popup.classList.toggle("open")
    navLines.classList.toggle("active")
    touch.classList.toggle("touch")
}


gsap.fromTo(".nav__lines", {
    opacity: 0,
    ease: "power4.in",
},
    {

        opacity: 1,
        duration: 3,

    });




//about text anim
gsap.fromTo(".text__contain", {
    opacity: 0,
    ease: "power4.in",
},
    {
        opacity: 1,
        duration: 3,
        delay: 1,
    });

//about photo anim
gsap.fromTo(".circle", {
    opacity: 0,
    x: -500,
    y: 0,
    ease: "back.out(1.7)",
},
    {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 2,
        delay: .5,
    });


//about social media anim
gsap.fromTo(".social__wrap", {
    opacity: 0,
    ease: "power4.in",
},
    {
        opacity: 1,
        duration: 3,
        delay: 3,
    });