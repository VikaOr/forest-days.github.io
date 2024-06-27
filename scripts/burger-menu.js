let selector = document.querySelector(".menu-burger__header");

function burgerMenu() {
  let nav = document.querySelector(".page-header__menu");
  
  if (selector.className.includes("open-menu")) {
    selector.classList.remove("open-menu");
    nav.classList.remove("active");
  } else{
    selector.classList.add("open-menu");
    nav.classList.add("active");
  }
}

selector.onclick = burgerMenu;

