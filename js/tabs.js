
var card1 = document.querySelector('#card1');
var card2 = document.querySelector('#card2');
var card3 = document.querySelector('#card3');
var card4 = document.querySelector('#card4');

card1.onclick = function(){
    tabCard('card1');
}
card2.onclick = function(){
    tabCard('card2');
}
card3.onclick = function(){
    tabCard('card3');
}
card4.onclick = function(){
    tabCard('card4');
}
function tabCard(triggerSelector){
    var tabContent = document.querySelectorAll('.content');
    for(var i = 0; i < tabContent.length; i++){
        if(tabContent[i].classList.contains(triggerSelector)){
            tabContent[i].style.display = 'block'
        } else{
            tabContent[i].style.display = 'none'
        }
    }
}