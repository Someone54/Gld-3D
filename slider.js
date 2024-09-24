
const slider  = document.querySelector(".sections")
const sections = document.querySelectorAll(".section")
const LastSection = sections[sections .length -1]

const left = document.querySelector(".button-left")
const right = document.querySelector(".button-right")

slider.insertAdjacentElement('afterbegin', LastSection)

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".section") [0];
    slider.style.marginLeft = "-186%" ;
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft ="-86%";
    }, 500);
}

function Prev() {
    let sections = document.querySelectorAll(".sections");
    let LastSection = sections[sections .length -1];
    slider.style.marginLeft = "0" ;
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', LastSection)
        slider.style.marginLeft ="-120%";
    }, 500);    
}

right.addEventListener('click', function(){
    Next();
});


left.addEventListener('click', function(){
    Prev();
});