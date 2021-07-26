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


var filtr = document.querySelector('.filtr_form');
var filtrForm = document.querySelector('.filtr');
var btnFiltr = document.querySelector('#close_form');

function openFiltr(){
    filtrForm.style.display = 'block';
    filtr.style.display = "none";
    btnFiltr.style.display ="block";
}

function closeFiltr(){
    filtrForm.style.display = 'none';
    filtr.style.display = "block";
    btnFiltr.style.display ="none";
}
 
filtr.onclick = openFiltr;
btnFiltr.onclick = closeFiltr;


function outputUpdate(pow) {
 
    document.querySelector('#meaning').value = pow;
   
}

/* function changeColor() {
    var change = document.querySelector('#power');
    val = change.val();
    change.css({'background':'-webkit-linear-gradient(left, $color_orange 0%, $color_orange +val+, #EAEAEA +val+, #EAEAEA 100%)'});
} */