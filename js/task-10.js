// Задание 10 (выполнять не обязательно)

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input[type="number"]');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const elementsСollectionRef = document.getElementById('boxes');

const WARNING_MESSAGE = 'WARNING! The number of elements must be between 0 and 100';

inputRef.addEventListener('input', onInputChange);
btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

function onInputChange() {
  return inputRef.value;
}

function createBoxes(amount) {
  elementsСollectionRef.innerHTML = '';

  amount = inputRef.value;

  if (amount < 1 || amount > 100) return alert(WARNING_MESSAGE);

  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const elementWidth = 30 + i * 10;
    const elementHeight = elementWidth;
    const elementBackgroundColor = getRandomHexColor();
    const element = `<div style="width:${elementWidth}px;height:${elementHeight}px;background-color:${elementBackgroundColor}"></div>`;

    elements.push(element);
  }

  const boxes = elements.join('');

  elementsСollectionRef.insertAdjacentHTML('beforeend', boxes);

  inputRef.value = '';
}

function destroyBoxes() {
  elementsСollectionRef.innerHTML = '';
}
