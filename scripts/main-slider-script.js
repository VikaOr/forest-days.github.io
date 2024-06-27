let activeSlider = document.querySelector(".slider-container-first");
let closeElem = document.querySelector(".close-btn");
let next = document.querySelector(".slider-btn--right")
let prev = document.querySelector(".slider-btn--left")

function mainSlider() {
    let clickElem = document.querySelector(".wrap__main-slider--hidden");
    clickElem.classList.remove("wrap__main-slider--hidden");
    clickElem.classList.add("wrap__main-slider--active");

};

function closeBtn() {
    let elem = document.querySelector(".wrap__main-slider--active");
    let list = document.querySelector(".wrap__main-slider--active .wrap__slider__galery");
    list.style.left = 0 +'px';
    elem.classList.remove("wrap__main-slider--active");
    elem.classList.add("wrap__main-slider--hidden");
};

function nextSlide() {
    let slider = document.querySelector(".wrap__main-slider--active .wrap__slider__galery--item")
    let list = document.querySelector(".wrap__main-slider--active .wrap__slider__galery");
    let left = list.style.left;
    left = left.slice(0,-2);
    
    let step = slider.offsetWidth;
    
    let ul = Array.from(document.querySelectorAll(".wrap__main-slider--active .wrap__slider__galery--item"));
    let maxLeft = -step*(ul.length - 1); 
    left -= step;

    if (left < maxLeft) {
        left = maxLeft;
    }
    list.style.left = left +'px';  
}

function prevSlide() {
    let slider = document.querySelector(".wrap__main-slider--active .wrap__slider__galery--item")
    let list = document.querySelector(".wrap__main-slider--active .wrap__slider__galery");
    let left = list.style.left;
    left = Number(left.slice(0,-2));
    
    let step = slider.offsetWidth;
    
    left = left + step;

    if (left >= 0) {
        left = 0;
    } 
    list.style.left = left +'px'; 
}

activeSlider.onclick = mainSlider;
closeElem.onclick = closeBtn;
next.onclick = nextSlide;
prev.onclick = prevSlide;