const navbar = document.querySelector('.header-navbar');
const navbarLists = document.querySelectorAll('.header-navbar-list');
const humanLink = document.querySelector('.human-resources-link');
const navbarUl = document.querySelector('.header-navbar-lists');
const navbarBottom = document.querySelector('.header-navbar-lists-bottom')

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 5) {
        navbar.classList.add('nav-fixed');
        navbar.classList.add('bg-white');
        humanLink.classList.add('font-black');
        // navbarLists.forEach((navbarList) => {
        //     navbarList.classList.add('font-black');
        //     navbarList.classList.add('bottom-blue');
        // })
    } else if (document.documentElement.scrollTop < 5) {
        navbar.classList.remove('nav-fixed');
        navbar.classList.remove('bg-white');
        humanLink.classList.remove('font-black');
        // navbarLists.forEach((navbarList) => {
        //     navbarList.classList.remove('font-black');
        //     navbarList.classList.remove('bottom-blue');
        // })
        navbarBottom.style.display = "none"
    }

    console.log(window.scrollY);
})


navbar.addEventListener("mouseover", function (e) {
    if (e.target.getAttribute("class") !== "header-navbar-list font-black") {
        e.target.classList.add('bottom-blue');
    }
})

navbar.addEventListener("mouseout", function (e) {
    if (e.target.getAttribute("class") !== "header-navbar-list font-black") {
        e.target.classList.remove('bottom-blue');
    }
})

navbar.addEventListener("mouseover", function () {
    navbarBottom.style.display = "flex"
    if (window.scrollY < 5) {
        navbar.classList.add('bg-white');
        navbarLists.forEach((navbarList) => {
            navbarList.classList.add('font-black');
        })
    }
})

navbar.addEventListener("mouseout", function () {
    navbarBottom.style.display = "none"
    if (window.scrollY < 5) {
        navbar.classList.remove('bg-white');
        navbarLists.forEach((navbarList) => {
            navbarList.classList.remove('font-black');
        })
    }
})

navbarBottom.addEventListener("mouseover", function () {
    navbarBottom.style.display = "flex"
    if (window.scrollY < 5) {
        navbar.classList.add('bg-white');
        navbarLists.forEach((navbarList) => {
            navbarList.classList.add('font-black');
        })
    }
})

navbarBottom.addEventListener("mouseout", function () {
    navbarBottom.style.display = "none"
    if (window.scrollY < 5) {
        navbar.classList.remove('bg-white');
        navbarLists.forEach((navbarList) => {
            navbarList.classList.remove('font-black');
        })
    }
})