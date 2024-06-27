let timer;


let width = 319; // ширина картинки
let count = 1; // видимое количество изображений
 

let elem_first = document.querySelector(".slider-container-first");
let elem_second = document.querySelector(".slider-container-second");
let elem_third = document.querySelector(".slider-container-third");
let elem_forth = document.querySelector(".slider-container-forth");
let class_first = "." + String(elem_first.classList);
console.log(class_first)
let className = class_first  + " .slider__galery";
console.log(className)

function autoSlider_first() {
    timer = setInterval(nextSlide_first, 1500)
}

function stopSlider_first() {
    
    let list = document.querySelector(".slider-container-first .slider__galery");
    list.style.left = 0 +'px';
    clearInterval(timer);
}


function nextSlide_first() {

        let list = document.querySelector(".slider-container-first .slider__galery");
        let left = list.style.left;
        left = left.slice(0,-2)
        let ul = Array.from(document.querySelectorAll(".slider-container-first .slider__galery .slider__galery--item"));
        let maxLeft = -319*(ul.length - 1); 
        console.log(left); 
        left -= 319;
    
        if (left < maxLeft) {
            left = 0;
        }
        list.style.left = left +'px';  
}

elem_first.onmouseenter = autoSlider_first;
elem_first.onmouseleave = stopSlider_first;



function autoSlider_second() {
    timer = setInterval(nextSlide_second, 1500)
}

function stopSlider_second() {
    
    let list = document.querySelector(".slider-container-second .slider__galery");
    list.style.left = 0 +'px';
    clearInterval(timer);
}
function nextSlide_second() {

        let list = document.querySelector(".slider-container-second .slider__galery"); 
        let left = list.style.left;
        left = left.slice(0,-2)
        let ul = Array.from(document.querySelectorAll(".slider-container-second .slider__galery .slider__galery--item"));
        let maxLeft = -319*(ul.length - 1); 
        console.log(maxLeft); 
        left -= 319;
    
        if (left < maxLeft) {
            left = 0;
        }
        list.style.left = left +'px'; 
}

elem_second.onmouseenter = autoSlider_second;
elem_second.onmouseleave = stopSlider_second;

function autoSlider_third() {
    timer = setInterval(nextSlide_third, 1500)
}

function stopSlider_third() {
    
    let list = document.querySelector(".slider-container-third .slider__galery");
    list.style.left = 0 +'px';
    clearInterval(timer);
}
function nextSlide_third() {

        let list = document.querySelector(".slider-container-third .slider__galery");    
        let left = list.style.left;
        left = left.slice(0,-2)
        let ul = Array.from(document.querySelectorAll(".slider-container-third .slider__galery .slider__galery--item"));
        let maxLeft = -319*(ul.length - 1); 
        console.log(maxLeft); 
        left -= 319;
    
        if (left < maxLeft) {
            left = 0;
        }
        list.style.left = left +'px'; 
}

elem_third.onmouseenter = autoSlider_third;
elem_third.onmouseleave = stopSlider_third;

function autoSlider_forth() {
    timer = setInterval(nextSlide_forth, 1500)
}

function stopSlider_forth() {
    
    let list = document.querySelector(".slider-container-forth .slider__galery");
    list.style.left = 0 +'px';
    clearInterval(timer);
}
function nextSlide_forth() {

        let list = document.querySelector(".slider-container-forth .slider__galery");    
        let left = list.style.left;
        left = left.slice(0,-2)
        let ul = Array.from(document.querySelectorAll(".slider-container-forth .slider__galery .slider__galery--item"));
        let maxLeft = -319*(ul.length - 1); 
        console.log(maxLeft); 
        left -= 319;
    
        if (left < maxLeft) {
            left = 0;
        }
        list.style.left = left +'px';
}

elem_forth.onmouseenter = autoSlider_forth;
elem_forth.onmouseleave = stopSlider_forth;

