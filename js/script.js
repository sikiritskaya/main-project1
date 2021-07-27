var burger = document.querySelector('#burger');
var menuList = document.querySelector('.menu');

var menuMail = document.querySelector('.envelope');
var menuCall = document.querySelector('.call');
var btnClose = document.querySelector('#close'); 

function openBurger(){
    menuList.classList.add('show');

    menuMail.classList.add('envelope_show');
    menuCall.classList.add('call_show'); 
    burger.style.display = 'none';
    btnClose.style.display = 'block';
}
function closeBurger(){
    menuList.classList.remove('show');
    menuMail.classList.remove('envelope_show');
    menuCall.classList.remove('call_show'); 
    burger.style.display = 'block';
    btnClose.style.display = 'none';
}

burger.onclick = openBurger;
btnClose.onclick = closeBurger;


