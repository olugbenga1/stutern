const menuBtn = document.querySelector('.menu-btn');
const toggleMenu = document.querySelector('.toggle-menu');
let menuOpen = false;

menuBtn.addEventListener('click', function() {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        toggleMenu.style.display = "block";
        menuOpen = true;
        
    } else {
        menuBtn.classList.remove('open');
        toggleMenu.style.display = "none";
        menuOpen = false;
    }
})

/* toggleMenu.style.display = "block";
toggleMenu = true;

toggleMenu.style.display = "none";
toggleMenu = false;


const toggleMenu = document.querySelector('.toggle-menu');
let toggleMenu = false;
*/