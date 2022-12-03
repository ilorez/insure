const menuIcon = document.querySelector('#mobile-menu-icon')
const myHeader = document.querySelector('[data-header]')
menuIcon.addEventListener('click',f =>{
    menuIcon.classList.toggle('open');
    myHeader.classList.toggle('show-me')
    
})