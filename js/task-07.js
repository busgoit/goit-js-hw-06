// Задание 7

// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

// const refs = {
//   input: document.getElementById('font-size-control'),
//   spanTextFontSize: document.getElementById('text'),
// };

// refs.input.addEventListener(
//   'input',
//   () => (refs.spanTextFontSize.style.fontSize = `${refs.input.value}px`)
// );

const refs = {
  input: document.getElementById('font-size-control'),
  spanTextFontSize: document.getElementById('text'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange() {
  refs.spanTextFontSize.style.fontSize = `${refs.input.value}px`;
  console.log(`"${refs.input.value}px"`);
}
