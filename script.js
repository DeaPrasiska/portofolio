const menu = document.querySelector('.nav-extra');
const navbar = document.querySelector('nav ul');

menu.addEventListener('click', function() {
    navbar.classList.toggle('active');
});


// klik diluar elemen
const menua = document.querySelector ('nav-extra');

document.addEventListener('click',function(e) {
    if(!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }


})