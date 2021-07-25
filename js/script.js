var burger = document.querySelector('#burger');
var menuList = document.querySelector('.menu');
var menuPlus = document.querySelector('.plus');
var menuMail = document.querySelector('.envelope');
var menuCall = document.querySelector('.call');

function openBurger(){
    menuList.classList.add('show');
    menuPlus.classList.add('show');
    menuMail.classList.add('show');
    menuCall.classList.add('show');
    burger.style.display = 'none';
}
burger.onclick = openBurger;