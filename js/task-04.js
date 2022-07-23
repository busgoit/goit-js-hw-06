// Задание 4

// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать егозначение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.getElementById('value');

decrementButtonRef.addEventListener('click', onDecrementButtonClick);
incrementButtonRef.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
  counterValue -= 1;
  updateCounterValue();
}

function onIncrementButtonClick() {
  counterValue += 1;
  updateCounterValue();
}

function updateCounterValue() {
  counterValueRef.textContent = counterValue;
}
