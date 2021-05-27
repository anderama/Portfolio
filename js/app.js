// Scroll Header
function scrollHeader() {
    const nav = document.getElementById('header');

    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header');
}

window.addEventListener('scroll', scrollHeader);

// Menu Mobile

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}

showMenu('bx', 'menu-mobile');

// Remove o menu mobile
const navLink = document.querySelectorAll('.nav-link-mobile');

function linkAction(){
    const navMenu = document.getElementById('menu-mobile');
    const burguer = document.getElementById('bx');
    
    navMenu.classList.remove('active-menu-mobile');
    burguer.classList.remove('active-bx');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
