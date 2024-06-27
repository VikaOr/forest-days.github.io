let btn_first = document.getElementById('btn-more--btn-first');
let more_first = document.querySelector('.hidden-first');
let height = document.querySelector('.section__text-lead__opt')


function btnMore_first() {
    let btn_first = document.getElementById('btn-more--btn-first');
    let more_first = document.querySelector('.hidden-first');
    let container = document.querySelector('.info-section-first');
    if(more_first.style.display === "none") {
        more_first.style.display = "block";
        btn_first.innerHTML = "Свернуть";
        container.style.height = 859 + height.scrollHeight +'px';
        console.log(height.scrollHeight);

    } else {
        more_first.style.display = "none";
        btn_first.innerHTML = "Подробнее";
        container.style.height = "438px"
    }

};
btnMore_first();

function btnMore_second() {
    let btn_second = document.getElementById('btn-more--btn-second');
    let more_second = document.querySelector('.hidden-second');
    let container = document.querySelector('.info-section-second');
    if(more_second.style.display === "none") {
        more_second.style.display = "block";
        btn_second.innerHTML = "Свернуть";
        container.style.height = 859 + height.scrollHeight +'px';
    } else {
        more_second.style.display = "none";
        btn_second.innerHTML = "Подробнее";
        container.style.height = "438px"
    }

};
btnMore_second()

function btnMore_third() {
    let btn_third = document.getElementById('btn-more--btn-third');
    let more_third = document.querySelector('.hidden-third');
    let container = document.querySelector('.info-section-third');
    if(more_third.style.display === "none") {
        more_third.style.display = "block";
        btn_third.innerHTML = "Свернуть";
        container.style.height = 859 + height.scrollHeight +'px';
    } else {
        more_third.style.display = "none";
        btn_third.innerHTML = "Подробнее";
        container.style.height = "438px"
    }

};
btnMore_third()

function btnMore_forth() {
    let btn_forth = document.getElementById('btn-more--btn-forth');
    let more_forth = document.querySelector('.hidden-forth');
    let container = document.querySelector('.info-section-forth');
    if(more_forth.style.display === "none") {
        more_forth.style.display = "block";
        btn_forth.innerHTML = "Свернуть";
        container.style.height = 859 + height.scrollHeight +'px';
    } else {
        more_forth.style.display = "none";
        btn_forth.innerHTML = "Подробнее";
        container.style.height = "438px"
    }

};
btnMore_forth()