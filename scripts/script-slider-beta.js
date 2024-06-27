let sliders = document.querySelector(".info-section");
//list - список
let list = sliders[0].querySelectorAll(".slider-container .slider .slider__galery");
console.log(list)
//items - элементы списка
let items = sliders[0].querySelectorAll(".slider-container .slider .slider__galery .slider__galery--item");
let timer;
let i = 1;


let width = 319; // ширина картинки
let count = 1; // видимое количество изображений
let left = 0; // положение ленты прокрутки    


function autoSlider() {
    timer = setTimeout(function() {
        let list = document.querySelector(".slider-container .slider .slider__galery");
        let ul = Array.from(items);
        let length = ul.length - 1; 
        let minLeft = -width*length;
        // сдвиг вправо
        
        
        left -= 319;
        
        if (left < minLeft) {
            left = 0;
            clearTimeout(timer);
        }
        console.log (left);
        list.style.left = left +'px';
        autoSlider();
    }, 3000);
};
