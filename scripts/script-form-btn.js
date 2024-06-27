let btn = document.querySelector(".form--btn-submit");
let form = document.querySelector(".form-container");
let message = document.querySelector(".container-message");
let timer;
const loginInput = form.querySelector('.username');
const phoneInput = form.querySelector('.phone');

function changeClass() {
    form.classList.add("hidden");
    message.classList.remove("hidden");
};
let referrer = document.referrer;

document.addEventListener('click', (event) => {

  if (event.target.className.includes("form--btn-submit")) {
    
  
    const login = loginInput.value;
    const phone = phoneInput.value;
    
    // Проверяем, что поля заполнены
    if (!login || !phone) {
      return;
    }
    
    // Проверяем, что имя пользователя содержит только буквы и цифры
    if (/^[a-zA-Z1-9]+$/.test(login) === true) {
      alert('Логин не может содержать буквы на латинице и цифры');
      return;
    } else {
      form.submit()
    }
    
    
  }
  
  if (event.target.className.includes("form--btn-button")) {
    if (referrer) {
      // Переходим на предыдущую страницу
      window.location.href = referrer;
    } else {
      // Если URL адрес предыдущей страницы не доступен, переходим на главную страницу
      window.location.href = "index.html#";
    }
    }
});

document.addEventListener('submit', (event) => {
  event.preventDefault();
  changeClass();
    timer = setTimeout(() => {
        if (referrer) {
            // Переходим на предыдущую страницу
            window.location.href = referrer;
          } else {
            // Если URL адрес предыдущей страницы не доступен, переходим на главную страницу
            window.location.href = "index.html#";
          }
    }, 7000);
    form.submit();
});

function isValidLogin(login) {
  // Проверка имени регулярным выражением
  const pattern = /^[a-zA-Z0-9]+$/;
  return pattern.test(login);
}


