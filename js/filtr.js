
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

function changeColor() {
    var change = document.querySelector('#power');
    val = change.val();
    change.css({'background':'-webkit-linear-gradient(left, $color_orange 0%, $color_orange +val+, #EAEAEA +val+, #EAEAEA 100%)'});
}