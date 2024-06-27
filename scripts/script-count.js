// Получаем родительский элемент счетчика
const counterContainer = document.querySelector('.form__couter');
// Получаем поле input
const inputField = document.querySelector('.num');

// Задаем начальное значение и шаг счетчика
let value = 0;
const step = 1;

// Функция для обновления значения счетчика
function updateCounter() {
  // Записываем значение в поле input
  inputField.value = value;
}

// Функция для обработки событий клика на кнопках
function handleButtonClick(event) {
  // Проверяем, что кликнули на кнопку
  if (event.target.matches('.plus') || event.target.matches('.minus')) {
    // Получаем направление изменения счетчика
    const direction = event.target.matches('.plus') ? 'plus' : 'minus';
    // Обновляем значение счетчика в зависимости от направления
    if (direction === 'plus' && value < 32) {
        value = value + step;
      } else if (direction === 'minus' && value > 0) {
        value = value - step;
      };
    // Обновляем значение в поле input
    updateCounter();
  }
}

// Назначаем обработчик событий на родительский элемент счетчика
counterContainer.addEventListener('click', handleButtonClick);

// Обновляем значение счетчика при загрузке страницы
updateCounter();