const ffffffInDecimal = 15 + 15 * 16 + 15 * 16 ** 2 + 15 * 16 ** 3 + 15 * 16 ** 4 + 15 * 16 ** 5;
const inputColor = document.getElementById('input-color');
const primaryCell = document.getElementById('primary-cell');

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * ffffffInDecimal).toString(16);
}

primaryCell.addEventListener('mouseover', () => primaryCell.style.backgroundColor = getRandomHexColor());
primaryCell.addEventListener('click', () => primaryCell.style.backgroundColor = inputColor.value)
primaryCell.addEventListener(
  'dblclick',
  () => document.querySelectorAll('td').forEach(td => td.style.backgroundColor = inputColor.value)
);
