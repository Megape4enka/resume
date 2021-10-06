let toggle = document.querySelector('.toggle')
let topbar = document.querySelector('.topbar')
let navigation = document.querySelector('.navigation')
let main = document.querySelector('.main')
let checkbox = document.querySelector('.checkbox')
let body = document.querySelector('body')

toggle.onclick = function (){
    toggle.classList.toggle('active')
    topbar.classList.toggle('active')
    navigation.classList.toggle('active')
    main.classList.toggle('active')
}

// Theme switch toggle

checkbox.onclick = function () {
    body.classList.toggle('dark')
}

// Now, we fix menu active class issue for mobile devices
function toggleMenu() {
    let navigation = document.querySelector('.navigation')
    let main = document.querySelector('.main')
    navigation.classList.remove('active')
    main.classList.remove('active')
    toggle.classList.remove('active')
}

function scrollToTop() {
    window.scrollTo({
        top: 1000,
        behavior: 'smooth'
    });
}