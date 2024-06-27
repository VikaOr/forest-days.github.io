let next = document.querySelector(".slider-btn--right");
let prev = document.querySelector(".slider-btn--left");
const mQuery = window.matchMedia('(min-width: 690px)')

if (mQuery.matches) {
    console.log("true")
}


document.addEventListener('click', (event) => {
    if (event.target.className.includes("slider-btn--right")) {
      let parent = event.target.closest('.images-wrap');
      parent.classList.add('active-elem');
      nextSlide();
      parent.classList.remove('active-elem');
    }
    if (event.target.className.includes("slider-btn--left")) {
        let parent = event.target.closest('.images-wrap');
        parent.classList.add('active-elem');
        prevSlide();
        parent.classList.remove('active-elem');
      }
  });

/*next.onclick = function(event) {
    if (event.target.className.includes("slider-btn--right")) {
        let parent = event.target.closest('.images-wrap');
        parent.classList.add('active-elem');
      }
  };
*/

function nextSlide() {
    let slider = document.querySelector(".active-elem .images-galery .images__item")
    let list = document.querySelector(".active-elem .images-galery");
    let left = list.style.left;
    left = left.slice(0,-2);
    let maxLeft;
    let visibleElem = document.querySelector(".images-wrap").offsetWidth;
    let step = slider.offsetWidth;
    
    let ul = Array.from(document.querySelectorAll(".active-elem .images-galery .images__item"));
    maxLeft = -step*(ul.length);
    

    if (-maxLeft - visibleElem >= visibleElem - left) {
        console.log(maxLeft) 
        left -= visibleElem;
        console.log(left)
        list.style.left = left +'px';  
    } else if (-maxLeft - visibleElem + left > 0) {
        left -= -maxLeft - visibleElem;
        list.style.left = left +'px';
        console.log(left)
    } else {
        left -= 0;
        list.style.left = left +'px';
    }
}

function prevSlide() {
    let slider = document.querySelector(".active-elem .images-galery .images__item")
    let list = document.querySelector(".active-elem .images-galery");
    let left = list.style.left;
    left = Number(left.slice(0,-2));
    let maxLeft;
    let visibleElem = document.querySelector(".images-wrap").offsetWidth;
    let step = slider.offsetWidth;
    
    let ul = Array.from(document.querySelectorAll(".active-elem .images-galery .images__item"));
    maxLeft = -step*(ul.length);
    

    if (-left > visibleElem) {
        console.log(maxLeft) 
        left += visibleElem;
        console.log(left)
        list.style.left = left +'px';  
    } else if (-left > 0) {
        left += -left;
        list.style.left = left +'px';
    } else {
        left += 0;
        list.style.left = left +'px';
    }
}

